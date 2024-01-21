import { defineConfig, devices } from '@playwright/test';
import { config } from 'dotenv';
config();

const supportedBrowsers = {
  chrome: {
    name: 'chromium',
    use: { ...devices['Desktop Chrome'] },
  },
  edge: {
    name: 'edge',
    use: { ...devices['Desktop Edge'] },
  },
  // firefox: {
  //   name: 'firefox',
  //   use: { ...devices['Desktop Firefox'] },
  // },
  safari: {
    name: 'webkit',
    use: { ...devices['Desktop Safari'] },
  },
};

module.exports = defineConfig({
  testDir: '.',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: Number.parseInt(process.env.RETRIES) || 0,
  workers: Number.parseInt(process.env.WORKERS) || 1,
  projects: [supportedBrowsers[process.env.BROWSER || 'chrome']],
  reporter: [['html', { outputFolder: 'results/playwright-report' }]],
  use: {
    baseURL: process.env.BASE_URL,
    headless: process.env.CI ? true : process.env.HEADLESS === 'true',
    trace: process.env.TRACE_ON_FAIL_ONLY === 'true' ? 'on-all-retries' : 'on',
    screenshot: {
      mode: 'only-on-failure',
      fullPage: true,
    },
    launchOptions: {
      slowMo: 0,
    },
    // testIdAttribute: 'data-test-id',
  },
});
