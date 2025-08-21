const fs = require('fs');
const path = require('path');

const getPackageJson = (executionFolder) => {
  const rootPath = path.join(executionFolder, 'package.json');
  const libPath = path.join(executionFolder, 'lib', 'package.json');

  const packageJsonPath = fs.existsSync(rootPath) ? rootPath : libPath;

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8')) || {};

  return packageJson
}

module.exports = getPackageJson;

