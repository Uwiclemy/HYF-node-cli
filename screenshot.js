const fs = require("fs");

const write = (location, buffer) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(location, buffer, err => {
      if (err) {
        console.error("could not write file");
        Sentry.captureException(err);
        reject(err);
        return;
      }
      resolve();
    });
  });
};

module.exports = {
  write
};
