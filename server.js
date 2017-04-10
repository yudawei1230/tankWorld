const exec = require('child_process').exec;
exec('update.bat', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('\033[2J');
  console.log(stdout);
});