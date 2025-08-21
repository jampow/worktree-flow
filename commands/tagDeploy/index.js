const commandLineArgs = require('command-line-args');
const help = () => { } //require('./help');
const tag = require('./tagDeploy');

module.exports = function(argv, context) {
  const definitions = [
    { name: 'help', alias: 'h', type: Boolean, description: 'Show this help message' },
  ];

  let options;
  try {
    options = commandLineArgs(definitions, { argv });
  } catch (error) {
    console.error('Error parsing command line arguments:', error.message);
    return;
  }

  if (options.help) {
    help(definitions);
    return;
  }

  tag(options, context);
}
