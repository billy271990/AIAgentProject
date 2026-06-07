import { test, expect } from '@playwright/test';

test.describe('Example Tests', () => {
  test('example test 1', async ({ page }) => {
    // Navigate to a website
    await page.goto('https://example.com');
    
    // Verify page title
    await expect(page).toHaveTitle(/Example Domain/);
  });

  test('example test 2', async ({ page }) => {
    // Navigate to a website
    await page.goto('https://example.com');
    
    // Check for specific element
    const heading = page.locator('h1');
    await expect(heading).toContainText('Example Domain');
  });
});
