import { test, expect } from '@playwright/test';

test('Auto Generated Code', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByRole('textbox', { name: 'Username' }).click();
  
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  
  await page.getByRole('textbox', { name: 'Password' }).click();
  
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  
  await page.getByRole('button', { name: 'Login' }).click();
  
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  
  await page.getByRole('banner').getByRole('img', { name: 'profile picture' }).click();
  
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});