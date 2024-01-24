const { exec } = require("node:child_process");

function openUrl(url) {
  return new Promise((resolve, reject) => {
    const command = `open ${url}`;
    exec(command, (error) => {
      if (error) reject(error);
      resolve(`Opening: ${url}`);
    });
  });
}

module.exports = { openUrl };
