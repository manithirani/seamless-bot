const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  
  // Navigate to stuff here
  await page.goto('https://github.com');
  
  browser.close();
}

run();