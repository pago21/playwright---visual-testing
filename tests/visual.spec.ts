import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/main.page';

test('Visual Test - Google Homepage Layout', async ({ page }) => {
  const mainPage = new MainPage(page)
  await page.goto('/');
  await mainPage.acceptTermsButton.click()
  await expect(page).toHaveScreenshot('google-main-page.png'); 
});

test('test', async ({ page }) => {
  await page.goto('https://portalpacjenta.luxmed.pl/PatientPortal/NewPortal/Page/Account/Login');
  await page.waitForLoadState('networkidle')
  await expect(page).toHaveTitle('Portal Pacjenta LUX MED')
  await page.locator('#Login').click();
});