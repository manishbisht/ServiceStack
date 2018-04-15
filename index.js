var express = require('express');
const exec = require('child_process').exec;
const child_process = require('child_process');
var app = express();
var fs = require('fs');
var config = {
  "chrome": {
    "pid": null
  }
};

app.get('/start', function (req, res) {

  if (req.query.browser == 'chrome') {
    //let config = JSON.parse(fs.readFileSync('config.json'));
    const child = exec('chromium-browser --user-data-dir=/tmp/BrowserStack/Chrome ' + req.query.url,
      (error, stdout, stderr) => {
        /*console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        if (error !== null) {
          console.log(`exec error: ${error}`);
        }*/
      });
    console.log(child);
    config.chrome = child;
    //fs.writeFileSync('config.json', JSON.stringify(config));
    res.send(req.query.url + ' opened in ' + req.query.browser + '\n ProcessID: ' + child.pid);
  } else {
    // /home/manish/.mozilla/firefox/5kwfs1ex.BrowserStack/prefs.js
    // firefox -CreateProfile "BrowserStack"
    const child = exec('firefox -P "BrowserStack" ' + req.query.url,
      (error, stdout, stderr) => {
        /*console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        if (error !== null) {
          console.log(`exec error: ${error}`);
        }*/
      });
    console.log(child);
    config.chrome = child;
    //fs.writeFileSync('config.json', JSON.stringify(config));
    res.send(req.query.url + ' opened in ' + req.query.browser + '\n ProcessID: ' + child.pid);
  }
});

app.get('/stop', function (req, res) {
  if (req.query.browser == 'chrome') {
    //let config = JSON.parse(fs.readFileSync('config.json'));
    const child = exec('sudo kill ' + config.chrome.pid,
      (error, stdout, stderr) => {
        /*console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        if (error !== null) {
          console.log(`exec error: ${error}`);
        }*/
      });
    //config.chrome.kill();
    //child_process.kill(config.chrome);
    //config.chrome.kill("SIGINT");
    res.send('ProcessID: ' + config.chrome.pid + ' killed.');
    config.chrome.pid = null;
    //fs.writeFileSync('config.json', JSON.stringify(config));
    res.send(req.query.url + ' opened in ' + req.query.browser + '\n ProcessID: ' + child.id);
  }
});
app.listen(3001);
console.log('Listening on port 3001...');