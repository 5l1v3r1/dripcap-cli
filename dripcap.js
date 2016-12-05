const program = require('commander');

program
  .version(require('./package.json').version)
  .command('gui', 'start gui', {isDefault: true})
  .command('create-package', 'generate package files')
  .parse(process.argv);
