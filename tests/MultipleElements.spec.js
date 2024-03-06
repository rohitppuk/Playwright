import { test, expect } from '@playwright/test'
test('Multiple Elements', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    const links = await page.$$("//a");
    /*for(let link of links){
    const linktext = await link.textContent();
    console.log(linktext);
    }*/
   await page.waitForSelector("//div[@id='tbodyid']//div//h4/a"); //This will wait for locators
    const products = await page.$$("//div[@id='tbodyid']//div//h4/a");
    
    for (let product of products) {
        const productText = await product.textContent();
        console.log(productText);
    }
})