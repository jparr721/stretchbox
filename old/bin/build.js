const { exec } = require('child_process');


const build = () => {
  exec('docker-compose down && docker-compose up -d', (err, stdout, stderr) => {
    if (err) return;
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
};

module.exports = build;
