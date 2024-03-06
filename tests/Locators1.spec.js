import {test,expect} from '@playwright/test'
test('NewLocator',async ({page})=>{


await page.goto('https://www.demoblaze.com/index.html');
await page.click('id=login2'); //property
await page.fill('#loginusername','pavanol'); //css 
await page.fill("//input[@id='loginpassword']", 'test@123'); //xpath
await page.click("button[onclick='logIn()']");
const logoutLink = await page.locator('#logout2');
await expect(logoutLink).toBeVisible();
//await page.click("#logout2");



await page.pause();


})