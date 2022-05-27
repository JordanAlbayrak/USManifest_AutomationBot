const puppeteer = require('puppeteer');
const fs = require('fs/promises');
const { Console } = require('console');


async function start(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://login.cbp.gov/s/login/', {waitUntil: 'networkidle2'});
    //await page.screenshot({path: 'login.png', fullPage: true});

    await page.type("#sfdc_username_container > div > input", 'dispatchaliens@gmail.com');
    await page.type("#sfdc_password_container > div > input", 'Strawberry@1961');

    await Promise.all([page.click(".loginIn"), page.waitForNavigation({waitUntil: 'networkidle2'})]);
    await Promise.all([page.waitForNavigation({waitUntil: 'domcontentloaded'})]);

    await page.screenshot({path: 'login.png', fullPage: true});

    await browser.close();
}

start()