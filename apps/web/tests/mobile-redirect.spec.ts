import { test, expect } from '@playwright/test';

test.describe('Mobile Redirect Tests', () => {
  test('should redirect desktop users to landing page', async ({ page, browserName }) => {
    // Skip mobile browsers for this test
    test.skip(['Mobile Chrome', 'Mobile Safari'].includes(browserName), 'Desktop only test');
    
    // Clear any existing override
    await page.context().clearCookies();
    await page.evaluate(() => localStorage.removeItem('desktop-override'));
    
    // Navigate to home page
    await page.goto('/home');
    
    // Should redirect to landing page
    await expect(page).toHaveURL('/landing');
    
    // Should show landing page content
    await expect(page.locator('text=CampusMatch')).toBeVisible();
    await expect(page.locator('text=Mobile Experience Required')).toBeVisible();
  });

  test('should allow desktop override', async ({ page, browserName }) => {
    test.skip(['Mobile Chrome', 'Mobile Safari'].includes(browserName), 'Desktop only test');
    
    // Clear any existing override
    await page.context().clearCookies();
    await page.evaluate(() => localStorage.removeItem('desktop-override'));
    
    // Go to landing page first
    await page.goto('/landing');
    
    // Click the override button
    await page.click('text=Continue on Desktop');
    
    // Should redirect to home page
    await expect(page).toHaveURL('/home');
    
    // Should show home page content
    await expect(page.locator('text=Welcome to CampusMatch!')).toBeVisible();
  });

  test('should allow mobile users to access app routes', async ({ page, browserName }) => {
    test.skip(!['Mobile Chrome', 'Mobile Safari'].includes(browserName), 'Mobile only test');
    
    // Navigate to home page
    await page.goto('/home');
    
    // Should stay on home page (no redirect)
    await expect(page).toHaveURL('/home');
    
    // Should show mobile app interface
    await expect(page.locator('text=Welcome to CampusMatch!')).toBeVisible();
    
    // Should show tab bar navigation
    await expect(page.locator('[data-testid="tab-bar"]')).toBeVisible();
  });

  test('should show loading skeletons', async ({ page }) => {
    // Intercept API calls to simulate loading
    await page.route('**/*', (route) => {
      // Delay responses to show loading state
      setTimeout(() => route.continue(), 1000);
    });
    
    await page.goto('/home');
    
    // Should show loading elements
    await expect(page.locator('.animate-pulse')).toBeVisible();
  });

  test('should handle route navigation', async ({ page, browserName }) => {
    test.skip(!['Mobile Chrome', 'Mobile Safari'].includes(browserName), 'Mobile only test');
    
    await page.goto('/home');
    
    // Test navigation to feed
    await page.click('text=Feed');
    await expect(page).toHaveURL('/feed');
    
    // Test navigation to chats
    await page.click('text=Chats');
    await expect(page).toHaveURL('/chats');
    
    // Test navigation to profile
    await page.click('text=Profile');
    await expect(page).toHaveURL('/profile');
    
    // Test navigation to events
    await page.click('text=Events');
    await expect(page).toHaveURL('/events');
  });
});

test.describe('PWA Features', () => {
  test('should have valid manifest', async ({ page }) => {
    const response = await page.goto('/manifest.webmanifest');
    expect(response?.status()).toBe(200);
    
    const manifest = await response?.json();
    expect(manifest).toHaveProperty('name', 'CampusMatch - Connect with Students');
    expect(manifest).toHaveProperty('short_name', 'CampusMatch');
    expect(manifest).toHaveProperty('display', 'standalone');
    expect(manifest).toHaveProperty('theme_color', '#3b82f6');
  });

  test('should have service worker', async ({ page }) => {
    await page.goto('/');
    
    // Wait for service worker registration
    const swRegistration = await page.evaluate(async () => {
      return new Promise((resolve) => {
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.ready.then(resolve);
        } else {
          resolve(null);
        }
      });
    });
    
    // Service worker should be registered in production
    // In development, next-pwa is disabled, so we skip this check
    if (process.env.NODE_ENV === 'production') {
      expect(swRegistration).toBeTruthy();
    }
  });
});