
const getTaskNumber = {
  fromPath: (path) => {
    const taskRegex = /\.(\d+)\./;
    const [, taskNumber] = path.match(taskRegex) || []
    return taskNumber || null;
  },
  fromBranchName: (branchName) => {
    const taskRegex = /\/(\d+)\//;
    const [, taskNumber] = branchName.match(taskRegex) || []
    return taskNumber || null;
  }
}

const getSubTaskNumber = {
  fromPath: (path) => {
    const taskRegex = /\.(\d+)-/;
    const [, taskNumber] = path.match(taskRegex) || []
    if (/^0+$/.test(taskNumber)) return null;
    return taskNumber || null;
  },
  fromBranchName: (branchName) => {
    const taskRegex = /\/(\d+)-/;
    const [, taskNumber] = branchName.match(taskRegex) || []
    if (/^0+$/.test(taskNumber)) return null;
    return taskNumber || null;
  }
}

module.exports = {
  getTaskNumber,
  getSubTaskNumber
};
