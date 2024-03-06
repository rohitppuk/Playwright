import {test, expect} from '@playwright/test';

//First Test using property
test('Locator',async({page})=>{

    //Go to web application,fill username and passowrd and click on login button
    await page.goto('https://www.saucedemo.com/');
    await page.pause();
    await page.locator('id=user-name').fill('standard_user');
    await page.pause();
    await page.locator('id=password').fill('secret_sauce');
    await page.pause();
    await page.locator('id=login-button').click();
    await page.pause();
    
});
//second test using CSS selector and page method

test('LocatorCSS',async({page})=>{
//using css
await page.goto('https://www.saucedemo.com/');
await page.pause();
await page.fill('#user-name','standard_user');
await page.pause();
await page.fill('#password','secret_sauce');
await page.pause();
await page.click('#login-button');
await page.pause();

});
//Third test using Xpath

test('LocatorXPATH',async({page})=>{
//Using Xpath
await page.goto('https://www.saucedemo.com/');
await page.pause();
await page.fill('xpath=//input[@name="user-name"]','standard_user');
await page.pause();
await page.fill('//input[@name="password"]','secret_sauce');
await page.pause();
await page.click('//input[@name="login-button"]');
await page.pause();


});