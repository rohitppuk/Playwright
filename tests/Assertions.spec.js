import { test, expect } from '@playwright/test'
test('Assertions', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register');
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register'); // to check page url
    await expect(page).toHaveTitle('nopCommerce demo store. Register'); // to check page title
    //await expect (page.locator("//img[@alt='nopCommerce demo store']")).toBeVisible(); // to check logo visible or  not
    //another way for line 6
    const logoElement = await page.locator("//img[@alt='nopCommerce demo store']");
    await expect(logoElement).toBeVisible();

    //control on element is enable or not
    const serachBox = await page.locator('#small-searchterms');
    await expect(serachBox).toBeEnabled();
    
    //Radio button or checkbox is selected or not
    const radioButton = page.locator('#gender-male');
    await radioButton.click();
    await expect(radioButton).toBeChecked();
    const checkBox = page.locator('#Newsletter');
    await expect(checkBox).toBeChecked();

    //Attribut is available or not
    const submitButton = page.locator('#register-button');
    await expect(submitButton).toHaveAttribute('type','submit');

    //toHaveText-element match the inner text we provided exactly
    const textFullValue = page.locator("div[class='page-title'] h1");
    await expect(textFullValue).toHaveText('Register');
    
    //toContainText--element match the inner text partial value of text we provided
    const textPartialValue = page.locator("div[class='page-title'] h1");
    await expect(textPartialValue).toContainText('Register');

    //ToHaveValue  -- input box having some value or not
    const valueBox = page.locator('#Email');
    await valueBox.fill('abcxyz@goog.com');
    await page.pause();
    await expect(valueBox).toHaveValue('abcxyz@goog.com');

    //ToHaveCounrt  -- mainly used to count options on dropdown or combobox present
    const options = page.locator("select[name='DateOfBirthMonth'] option");
    await expect(options).toHaveCount(13);







})