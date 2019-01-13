// BUILT IN Node.js modules.
const path = require("path");
const args = process.argv;

// Third party node modules (gotten through npm).
const puppeteer = require("puppeteer");

// custom modules
const screenshot = require('./screenshot');


// Our main function (taking screenshot)
async function main() {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  const page = await browser.newPage();

  await page.goto(args[2]);
  const buffer = await page.screenshot();
  await browser.close();

  const imageLocation = path.join(__dirname, "screenshot.jpg");
  await screenshot.write(imageLocation, buffer);

  return Promise.resolve();
}


main();
