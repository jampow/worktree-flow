const { getCurrentBranch, getDefaultBranch } = require('./git');
const { getTaskNumber, getSubTaskNumber } = require('./task');
const getProjectName = require('./projectName');

const getContext = async (executionFolder) => {
  const currentBranch = await getCurrentBranch();
  const defaultBranch = await getDefaultBranch();

  const taskNumber = getTaskNumber.fromBranchName(currentBranch) || getTaskNumber.fromPath(executionFolder);
  const subTaskNumber = getSubTaskNumber.fromBranchName(currentBranch) || getSubTaskNumber.fromPath(executionFolder);

  const projectName = getProjectName(executionFolder);

  return {
    currentBranch,
    defaultBranch,
    taskNumber,
    subTaskNumber,
    executionFolder,
    projectName
  };
}

module.exports = getContext;
