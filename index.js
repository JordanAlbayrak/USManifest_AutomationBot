const puppeteer = require('puppeteer');
const fs = require('fs/promises');
const { Console } = require('console');


async function start(){
    const browser = await puppeteer.launch();
    // const page = await browser.newPage();
    // await page.goto('https://login.cbp.gov/s/login/', {waitUntil: 'networkidle2'});
    // //await page.screenshot({path: 'login.png', fullPage: true});

    // await page.type("#sfdc_username_container > div > input", 'dispatchaliens@gmail.com');
    // await page.type("#sfdc_password_container > div > input", 'Strawberry@1961');

    // await Promise.all([page.click(".loginIn"), page.waitForNavigation({waitUntil: 'networkidle2'})]);
    // await Promise.all([page.waitForNavigation({waitUntil: 'domcontentloaded'})]);

    //go to gmail
    const gmailPage = await browser.newPage();
    await gmailPage.goto('https://accounts.google.com/', {waitUntil: 'networkidle2'});

    //input gmail username
    //await Promise.all([gmailPage.waitForSelector('.whsOnd', {visible: true})]);
    await gmailPage.type("input", 'dispatchaliens@gmail.com');
    await Promise.all([gmailPage.click("button"), gmailPage.waitForNavigation({waitUntil: 'networkidle2'})]);
    //await Promise.all([gmailPage.waitForNavigation({waitUntil: 'domcontentloaded'})]);

    // //input gmail password
    // await Promise.all([gmailPage.waitForSelector('#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input', {visible: true})]);
    // await gmailPage.type("#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input", 'Parali@09091961');
    // await Promise.all([gmailPage.click("#passwordNext > div > button"), gmailPage.waitForNavigation({waitUntil: 'networkidle2'})]);
    // await Promise.all([gmailPage.waitForNavigation({waitUntil: 'domcontentloaded'})]);
    
    
    
    //await page.screenshot({path: 'login.png', fullPage: true});
    await gmailPage.screenshot({path: 'gmailPage.png', fullPage: true});



    await browser.close();
}

start()