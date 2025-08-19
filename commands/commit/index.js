const commandLineArgs = require('command-line-args');
const help = require('./help');
const commit = require('./commit');

module.exports = function(argv, context) {
  const definitions = [
    { name: 'all', alias: 'a', type: Boolean },
    { name: 'help', alias: 'h', type: Boolean },
  ];

  let options;
  try {
    options = commandLineArgs(definitions, { argv });
  } catch (error) {
    console.error('Error parsing command line arguments:', error.message);
    return;
  }

  if (options.help) {
    help();
    return;
  }

  commit(options, context);

}
