const { execSync } = require('child_process');
const { select, input } = require('@inquirer/prompts');

// Regular expressions for validating commit message format
const numberPattern = "(\\d{6})";
const scopePattern = "[a-z0-9-]+";
const titleSeparator = ": ";

const numberRegExp = new RegExp(`${numberPattern}`);
const scopeRegExp = new RegExp(`^${scopePattern}$`);

const askForType = async () => {
  const type = await select({
    message: 'Select the type of change you are committing:',
    choices: [
      { name: 'chore: Changes to the build process or auxiliary tools and libraries such as documentation generation', value: 'chore' },
      { name: 'docs: Documentation only changes', value: 'docs' },
      { name: 'feat: A new feature', value: 'feature' },
      { name: 'fix: A bug fix', value: 'fix' },
      { name: 'merge: A merge commit', value: 'merge' },
      { name: 'perf: A code change that improves performance', value: 'perf' },
      { name: 'refactor: A code change that neither fixes a bug nor adds a feature', value: 'refactor' },
      { name: 'style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)', value: 'style' },
      { name: 'test: Adding missing or correcting existing tests', value: 'test' },
    ]
  });
  return type;
}

const askForTaskNumber = async (message) => {
  const taskNumber = await input({
    message: message,
    validate: input => numberRegExp.test(input) ? true : 'Task number must have 6 digits.',
    default: '000000',
    transformer: input => '#' + input.trim().substring(0, 6)
  });
  return taskNumber;
}

const askForScope = async () => {
  const scope = await input({
    message: 'Enter the scope of the change (e.g., (core), (ui), (api)) or leave empty:',
    validate: input => input === '' || scopeRegExp.test(input) ? true : 'Scope must be lowercase alphanumeric characters or hyphens.',
    default: '',
    transformer: input => input ? `(${input.trim()})` : ''
  });
  return scope ? `(${scope})` : '';
}

const askForMessage = async () => {
  const message = await input({
    message: 'Enter the commit message title (max 50 characters):',
    validate: input => input.length > 0 && input.length <= 50 ? true : 'Title is required and must be 50 characters or less.',
    default: '',
    transformer: input => input.trim().substring(0, 50)
  });
  return message.trim();
}

const printTaskNumber = (taskNumber) => taskNumber ? `#${taskNumber} ` : '';

const commitMsgWizard = async (context) => {
  let { taskNumber, subTaskNumber } = context || {};

  if (taskNumber) {
    console.log(`Main Task: ${taskNumber}`);
  } else {
    taskNumber = await askForTaskNumber('Enter the task number (e.g., #123):');
  }

  if (subTaskNumber) {
    console.log(`Sub Task: ${subTaskNumber}`);
  } else {
    subTaskNumber = await askForTaskNumber('Enter the sub-task number (e.g., #123):');
  }

  const type = await askForType();
  const scope = await askForScope()
  const message = await askForMessage();

  return [
    printTaskNumber(taskNumber),
    printTaskNumber(subTaskNumber),
    type,
    scope,
    titleSeparator,
    message
  ].join('');
}

const convertParams = (options) => {
  let params = '';
  if (options.all) {
    params += ' --all';
  }
  if (options['no-verify']) {
    params += ' --no-verify';
  }
  return params;
}

const start = (options, context) => {
  commitMsgWizard(context)
    .then((newCommitMsg) => {
      console.log(`\nCommit message: "${newCommitMsg}"`);
      const allParam = convertParams(options);
      execSync(`git commit${allParam} -m "${newCommitMsg}"`, { stdio: 'inherit' });
    })
    .catch((error) => {
      console.error('Error during commit message wizard:', error);
    });
}

module.exports = start;
