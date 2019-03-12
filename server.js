const puppeteer = require('puppeteer');

let scrape = async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage()
    await page.goto('http://somewebsite.com/')
    await page.waitFor(1000)
    
    
    //Insert scaping code here
    

    browser.close()
    return result; 
};

scrape().then((value)=>{
    console.log(value)
})