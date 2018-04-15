const exec = require('child_process').exec;
const child = exec('chromium-browser --new-window --incognito www.google.com',
  (error, stdout, stderr) => {
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });