const commands = {
  "commit": require('./commit'),
}

module.exports = {
  commands,
  hasCommand: function(command) {
    return commands.hasOwnProperty(command);
  },
}
