const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const os = require('os');


let scrape = async () => {
    let allLinks = []
    const browser = await puppeteer.launch();
    const page = await browser.newPage()
    await page.goto(`https://www.thebestwebsitetoscrapeevar!!!.com/awesome`)     
    let hrefs = await page.evaluate(() => {
        const links = Array.from(document.querySelectorAll('someselectorforwhatyouwanttoscrape'))
        return links.map(link => link.href);
    });
    allLinks += hrefs + ','
    browser.close()
    return allLinks; 
};

scrape().then((value)=>{
    myarr = value.split(',')
    const filename = path.join(__dirname, 'output.csv');
    const output = []
    myarr.forEach((link) => {
        const row = [];
        row.push(link)
        output.push(row.join());
      });
    fs.writeFileSync(filename, output.join(os.EOL));
})