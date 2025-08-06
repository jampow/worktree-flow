#!/usr/bin/env node

const fs = require('fs')
const { reposDir } = require('./constants')

const listGitDirs = () => {
  return fs.readdirSync(reposDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && dirent.name.endsWith('.git'))
    .map(dirent => dirent.name.replace('.git', ''))
}

module.exports = listGitDirs
