import { test, expect } from '@playwright/test';

test('record_demo_test', async ({ page }) => {
  await page.locator('body').click();
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').click();
  await page.locator('body').click();
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').click();
  await page.locator('body').click();
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#login_credentials').click();
  await page.locator('#login_credentials').click();
  await page.locator('#login_credentials').click({
    button: 'right'
  });
  await page.locator('#login_credentials').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauch');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="password"]').press('Enter');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('#inventory_container').nth(1).click();
});