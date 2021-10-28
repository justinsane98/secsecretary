const puppeteer = require('puppeteer');
const fs = require('fs');

(async function scrape() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36');
    
    // PAGE
    await page.goto('https://www.sec.gov/rules/other.htm');

    // STARTING SELECTOR
    await page.waitForSelector('#mainlist');
    let data = await page.evaluate(() => {
        let elem = document.body.querySelectorAll('#mainlist tbody tr:not(.tablesorter-ignoreRow)');
        let data = Object.values(elem).map(x => {
            return {
                name: x.querySelector('td:nth-child(3) b').textContent.trim() ?? "",
                link: x.querySelector('td:nth-child(1) a').href ?? "",
                date: x.querySelector('td:nth-child(2)').textContent.trim() ?? "",
            }
        });
        return data;
    });
    if (data.length > 0){
        console.log(data);
        console.log("*********************************");
        console.log("OTHER ORDERS NOTICES: " + data.length);
        console.log("*********************************");
        
        let dataJson = JSON.stringify(data)

        // FILENAME
        fs.writeFileSync('src/data/otherOrdersNotices.json', dataJson);
        await browser.close();
    } else {
        console.log("*********************************");
        console.log("NO ORDERS OR NOTICES");
        console.log("*********************************");
    }

})();
