import { test, expect } from '@playwright/test';

//Automation script for register page for demo.nopcommerce.com

test('Register Page Automation Script', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F'); //Opening webpage
    
    //Validations for web page
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F');//to check url
    await expect(page).toHaveTitle('nopCommerce demo store. Register'); //validate page title
    await page.locator("//h1[normalize-space()='Register']").textContent('Register');//Validate page is Register page

    //Radio button validation (Male/Femal)
    await page.locator("(//input[@id='gender-male'])[1]").check();//This will select specific radio button
    await expect(await page.locator("(//input[@id='gender-male'])[1]")).toBeChecked(); // To Verify Element checked or not
    await expect(await page.locator("(//input[@id='gender-male'])[1]").isChecked()).toBeTruthy();
    //Now validating if one radio button checked means another radio button should not be checked
    await expect(await page.locator("//input[@id='gender-female']").isChecked()).toBeFalsy();

    //Inputbox validation FirstName
    await expect(await page.locator("//input[@id='FirstName']")).toBeVisible(); //Check element visible or not
    await expect(await page.locator("//input[@id='FirstName']")).toBeEmpty();//Check inputbox empty or not
    await expect(await page.locator("//input[@id='FirstName']")).toBeEditable(); //Check inputbox editable or not
    await expect(await page.locator("//input[@id='FirstName']")).toBeEnabled(); //Checl element is enable or disable
    await page.locator("//input[@id='FirstName']").fill('Rohitkumarrrrr');

    //Inputbox validation Lastname
    await expect(await page.locator("//input[@id='LastName']")).toBeVisible(); //Check element visible or not
    await expect(await page.locator("//input[@id='LastName']")).toBeEmpty();//Check inputbox empty or not
    await expect(await page.locator("//input[@id='LastName']")).toBeEditable(); //Check inputbox editable or not
    await expect(await page.locator("//input[@id='LastName']")).toBeEnabled(); //Checl element is enable or disable
    await page.locator("//input[@id='LastName']").fill('Patelllll');

    //Date drop down validation
    await page.locator("//select[@name='DateOfBirthDay']").selectOption({label:'11'});      //by using label(preferred way)
    //Month drop down validation
    await page.locator("//select[@name='DateOfBirthMonth']").selectOption({value:'1'});     //by using value(2nd prefferd)
    //Year drop down validation
    await page.locator("//select[@name='DateOfBirthYear']").selectOption({index:5});        //by using index of the list
    await page.waitForTimeout(5000);

    //Inputbox Email 
    await expect(await page.locator("//input[@id='Email']")).toBeVisible(); //Check email element visibile?
    await expect(await page.locator("//input[@id='Email']")).toBeEmpty(); //Check email field empty?
    await expect(await page.locator("//input[@id='Email']")).toBeEditable();//Check Email field editable?
    await expect(await page.locator("//input[@id='Email']")).toBeEnabled();//Check email field enable ?
    await page.locator("//input[@id='Email']").fill('xyasdfdez@abc.com');

    //Inputbox for Company name
    await expect(await page.locator("//input[@id='Company']")).toBeVisible(); //Check element visible or not
    await expect(await page.locator("//input[@id='Company']")).toBeEmpty();//Check inputbox empty or not
    await expect(await page.locator("//input[@id='Company']")).toBeEditable(); //Check inputbox editable or not
    await expect(await page.locator("//input[@id='Company']")).toBeEnabled(); //Checl element is enable or disable
    await page.locator("//input[@id='Company']").fill('JalItSolutionsLimited123');

    //Input validation on Newsletter checkbox(In this case by deafault its checked so we want to unchcked)
    await page.locator("//input[@id='Newsletter']").click();
    await expect(await page.locator("//input[@id='Newsletter']").isChecked()).toBeFalsy();

    //Inputbox for Password
    await expect(await page.locator("//input[@id='Password']")).toBeVisible(); //Check element visible or not
    await expect(await page.locator("//input[@id='Password']")).toBeEmpty();//Check inputbox empty or not
    await expect(await page.locator("//input[@id='Password']")).toBeEditable(); //Check inputbox editable or not
    await expect(await page.locator("//input[@id='Password']")).toBeEnabled(); //Checl element is enable or disable
    await page.locator("//input[@id='Password']").fill('rohit12345');
   
    //Inputbox for Confirm Password
    await expect(await page.locator("//input[@id='ConfirmPassword']")).toBeVisible(); //Check element visible or not
    await expect(await page.locator("//input[@id='ConfirmPassword']")).toBeEmpty();//Check inputbox empty or not
    await expect(await page.locator("//input[@id='ConfirmPassword']")).toBeEditable(); //Check inputbox editable or not
    await expect(await page.locator("//input[@id='ConfirmPassword']")).toBeEnabled(); //Checl element is enable or disable
    await page.locator("//input[@id='ConfirmPassword']").fill('rohit12345');


    await page.click("//button[@id='register-button']");
    await page.waitForTimeout(5000);




})