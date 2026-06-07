import { test, expect } from '@playwright/test';

test.describe('Login Page Tests', () => {
  test('Navigate to login page and sign in', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    // Verify the page loaded correctly
    await expect(page).toHaveTitle(/Practice Login/);

    // Fill in the username field
    await page.fill('input[name="username"]', 'rahulshettyacademy');

    // Fill in the password field
    await page.fill('input[name="password"]', 'learning');

    // Click the sign in button
    await page.click('input[value="Sign In"]');

    // Wait for navigation to complete and verify successful login
    await page.waitForNavigation();
    
    // Verify we're on a success page or check for a success message
    await expect(page).toHaveURL(/dashboard/);
  });
});
