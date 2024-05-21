# Playwright Test Automation

## Setup Instructions

### Step 1: Install Homebrew
If you haven't already installed Homebrew, Node.js, and npm, follow these steps (otherwise go to Step 3)

1. Install Homebrew:

Open your Terminal and run the following command to install Homebrew:

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Step 2: Install Node.js and npm using Homebrew

1. Install Node.js and npm:

Once Homebrew is installed, you can install Node.js (which includes npm) by running:

```shell
brew install node
```

2. Verify the installation:

Check if Node.js and npm are installed correctly by running the following commands:

```shell
node -v
npm -v
```

These commands should print the versions of Node.js and npm installed.

### Step 3: Setup Playwright and Run Tests
Now that Node.js and npm are installed, you can proceed with setting up Playwright and run the tests.

1. Initialize a Node.js project:

```shell
npm init -y
```

2. Install Playwright:

```shell
npm install --save-dev @playwright/test
npx playwright install
```

3. Configure Playwright:
Create a ```playwright.config.ts``` file in the root of the project directory with the following content (if not already existing):

```typescript
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries: 1,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    ignoreHTTPSErrors: true,
  },
});
```

4. Install dependencies:

```shell
npm install
```
5. Run Tests:

```shell
npx playwright test
```
