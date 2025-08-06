#!/usr/bin/env node

const path = require('path')

const reposDir = path.join(__dirname, '../../repos')
const tasksDir = path.join(__dirname, '../../tasks')

module.exports = {
  reposDir,
  tasksDir,
}
