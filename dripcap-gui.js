const program = require('commander');
const child_process = require('child_process')

program
  .version(require('./package.json').version)
  .parse(process.argv);

let execPath = '-';
switch (process.platform) {
  case 'darwin':
    execPath = '/Applications/Dripcap.app/Contents/MacOS/Dripcap';
    break;
  case 'linux':
    execPath = '/usr/share/dripcap/dripcap';
    break;
}

child_process.spawn(execPath, [], {
  detached: true,
  stdio: 'ignore'
}).on('error', (e) => {
  if (e.errno === 'ENOENT') {
    console.warn('Could not locate the gui executable');
  } else {
    console.warn(e.message);
  }
  process.exit(1);
}).unref();
