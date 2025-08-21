const { getCurrentBranch, getDefaultBranch } = require('./git');
const { getTaskNumber, getSubTaskNumber } = require('./task');
const getProjectName = require('./projectName');
const getPackageJson = require('./getPackageJson');

const getContext = async () => {
  const executionFolder = process.cwd()

  const currentBranch = await getCurrentBranch();
  const defaultBranch = await getDefaultBranch();

  const taskNumber = getTaskNumber.fromBranchName(currentBranch) || getTaskNumber.fromPath(executionFolder);
  const subTaskNumber = getSubTaskNumber.fromBranchName(currentBranch) || getSubTaskNumber.fromPath(executionFolder);

  const projectName = getProjectName(executionFolder);

  const packageJson = getPackageJson(executionFolder);

  return {
    currentBranch,
    defaultBranch,
    taskNumber,
    subTaskNumber,
    executionFolder,
    projectName,
    packageJson
  };
}

module.exports = getContext;
