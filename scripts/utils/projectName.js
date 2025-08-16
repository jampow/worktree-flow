const listGitDirs = require('./listGitDirs');

const getProjectName = (path) => {
  const pathSegments = path.split('/').reverse()
  const gitDirs = listGitDirs();

  for (let i = 0; i < pathSegments.length; i++) {
    if (gitDirs.includes(pathSegments[i])) {
      return pathSegments[i];
    }
  }
}

module.exports = getProjectName;
