# Playwright Test Project

This is a Playwright test automation project set up with TypeScript.

## Installation

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npm run install:browsers
```

## Usage

### Run tests
```bash
npm test
```

### Run tests with UI mode
```bash
npm run test:ui
```

### Run tests in debug mode
```bash
npm run test:debug
```

### Run tests in headed mode (with browser visible)
```bash
npm run test:headed
```

### Generate test code
```bash
npm run codegen
```

## Configuration

- **playwright.config.ts**: Main configuration file for Playwright
- **tsconfig.json**: TypeScript configuration
- **tests/**: Directory containing all test files (*.spec.ts)

## Project Structure

```
AIAgentProject/
├── tests/
│   └── example.spec.ts
├── package.json
├── playwright.config.ts
├── tsconfig.json
└── README.md
```

## Writing Tests

Tests should be placed in the `tests/` directory with `.spec.ts` extension. Example:

```typescript
import { test, expect } from '@playwright/test';

test('my test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
```

## Learn More

- [Playwright Documentation](https://playwright.dev)
- [Getting Started with Playwright](https://playwright.dev/docs/intro)
