const argv = require('yargs')
            .options({
              'b': {
                alias:       'base',
                type:        'number',
                demandOption: true,
                describe:    'Base of multiplication table'
              },
              'l': {
                alias:   'list',
                type:    'boolean',
                default:  false,
                describe: 'Show the table in console'
              },
              'u': {
                alias:    'until',
                type:     'number',
                default:   10,
                describe: 'Number of counts'
              }
            })
            .check( (argv, options) => {
              if (isNaN(argv.b)) {
                throw 'The base needs to be a number';
              }
              return true;
            })
            .argv;

module.exports = argv;