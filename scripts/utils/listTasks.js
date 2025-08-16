const fs = require('fs')

const { tasksDir } = require('./constants')

const listTasks = () => {
  if (!fs.existsSync(tasksDir)) {
    console.error(`Error: The tasks directory ${tasksDir} does not exist.`)
    process.exit(1)
  }

  return fs.readdirSync(tasksDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
}


module.exports = listTasks
