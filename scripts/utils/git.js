const { exec } = require('child_process');

const getCurrentBranch = () => {
  return new Promise((resolve, reject) => {
    exec('git branch --show-current', (error, stdout, stderr) => {
      if (error) {
        reject(`Error getting current branch: ${stderr}`);
      } else {
        resolve(stdout.trim());
      }
    });
  });
}

const getDefaultBranch = () => {
  return new Promise((resolve, reject) => {
    exec('git branch --list main master', (error, stdout, stderr) => {
      if (error) {
        reject(`Error getting default branch: ${stderr}`);
      } else {
        const branch = stdout.trim().endsWith('main') ? 'main' : 'master';
        resolve(branch);
      }
    });
  });
}

module.exports = {
  getCurrentBranch,
  getDefaultBranch
};
