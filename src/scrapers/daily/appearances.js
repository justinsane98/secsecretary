const puppeteer = require('puppeteer');
const fs = require('fs');

(async function scrape() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36');
    
    // PAGE
    await page.goto('https://www.sec.gov/news/upcoming-events');

    // STARTING SELECTOR
    await page.waitForSelector('.upcoming-views-public-appearances');
     let data = await page.evaluate(() => {
         let elem = document.body.querySelectorAll('.upcoming-views-public-appearances');
             let data = Object.values(elem).map(x => {
             return {
                 name: x.querySelector('.views-field-views-ifempty a').textContent.trim() ?? "",
                 link: x.querySelector('.views-field-views-ifempty a').href ?? "",
                 date: x.querySelector('.views-field-field-sec-event-date .datetime').textContent.trim() ?? "",
                 description: x.querySelector('.views-field-body a').textContent.trim() ?? "",
             }
         });

         return data;
     });
    
     if (data.length > 0){
        console.log(data);
        console.log("*********************************");
        console.log("APPEARANCES: " + data.length);
        console.log("*********************************");
        
        let dataJson = JSON.stringify(data)

        // FILENAME
        fs.writeFileSync('src/data/appearances.json', dataJson);
        await browser.close();
    } else {
        console.log("*********************************");
        console.log("NO APPEARANCES");
        console.log("*********************************");
    }

})();
