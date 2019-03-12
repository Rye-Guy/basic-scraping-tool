const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.quora.com/What-are-packages-in-Node-js-to-scrape-a-website-which-has-dynamically-added-content-by-Javascript');
    await page.screenshot({path: 'example.png'});
    await browser.close();
})();