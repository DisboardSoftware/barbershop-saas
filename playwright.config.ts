import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    baseURL: 'http://localhost:8080'
  },
  webServer: {
    command: 'docker compose up --build -d',
    url: 'http://localhost:8080',
    reuseExistingServer: true,
    timeout: 120000
  }
});
