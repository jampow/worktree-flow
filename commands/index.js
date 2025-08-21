const commands = {
  "commit": require('./commit'),
  "tag": require('./tagDeploy'),
}

module.exports = {
  commands,
  hasCommand: function(command) {
    return commands.hasOwnProperty(command);
  },
}
