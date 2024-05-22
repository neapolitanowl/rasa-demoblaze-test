# Playwright Test Automation

## Installation and Setup

### 1. Install Node.js and npm

#### Mac:
Install Homebrew if you haven't already. Open your Terminal and run:
```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Install Node.js and npm using Homebrew:
```shell
brew install node
```
Check if Node.js and npm are installed correctly by running the following commands:
```shell
node -v
npm -v
```

Initialise Node.js and install dependencies
```shell
npm init -y
```

#### Windows:

Download and install Node.js and npm from the official website: [Node.js Download](https://nodejs.org/en/download/package-manager)

### 2. Clone the Repository

Clone this repository to your local machine using Git:
```
git clone git@github.com:neapolitanowl/rasa-demoblaze-test.git
```

### 3. Navigate to the Project Directory
Navigate to the cloned repository's directory:

```
cd rasa-demoblaze-test
```

### 4. Install Playwright
Install Playwright:
```
npm install --save-dev @playwright/test\
npx playwright install
```

### 5. Configure Playwright
Create a playwright.config.ts file in the root directory of the project with the following content:

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

### 6. Install Dependencies
Install the project dependencies using npm
```shell
npm install
```

## Running Tests

### Command to Run Tests
To execute the tests, run the following command in the terminal:

```shell
npx playwright test
```
This command will run all the tests in the project and display the results in the terminal.

## Support
If you encounter any issues or need further assistance, feel free to [create an issue](https://github.com/neapolitanowl/rasa-demoblaze-test/issues) in this repository.