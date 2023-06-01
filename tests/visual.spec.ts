import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/main.page';

test('Visual Test - Google Homepage Layout', async ({ page }) => {
  const mainPage = new MainPage(page)
  
  await page.goto('/');
  await page.waitForLoadState('networkidle')
  // await mainPage.acceptTermsButton.click()
  
  await expect(page).toHaveScreenshot('google-main-page.png');
});
