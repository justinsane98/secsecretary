const puppeteer = require('puppeteer');
const fs = require('fs');

(async function scrape() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36');
    
    // PAGE
    await page.goto('https://www.sec.gov/news/upcoming-events');

    // STARTING SELECTOR
    await page.waitForSelector('.upcoming-views-sec-meetings');
    let data = await page.evaluate(() => {
        let elem = document.body.querySelectorAll('.upcoming-views-sec-meetings .views-row');
        let data = Object.values(elem).map(x => {
            return {
                name: x.querySelector('.views-field-views-ifempty a').textContent.trim() ?? null,
                link: x.querySelector('.views-field-views-ifempty a').href ?? null,
                date: x.querySelector('.views-field-field-sec-event-date .datetime').textContent.trim() ?? null,
                description: x.querySelector('.views-field-body a').textContent.trim() ?? null,
            }
        });
        return data;
    });
    console.log("*********************************");
    console.log("MEETINGS: " + data.length);
    console.log("*********************************");
    console.log(data);
    let dataJson = JSON.stringify(data)

    // FILENAME
    fs.writeFileSync('src/data/meetings.json',dataJson);
    await browser.close();

})();
