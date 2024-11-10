---
title: 'Set up Testing using react testing library in typescript'
tags:
  - testing
  - react
  - jest
  - web
description: 'fail, test, pass, repeat'
publishDate: 2024-05-15
coverImage: { src: './image/messy.webp', color: '#64974D' }
---

Most of the time, frontend testing relies on end-to-end (E2E) tests because they evaluate what users see. However, having unit tests for the frontend is also a good practice. On the other hand, backend code commonly includes unit test cases.

The React Testing Library is an excellent solution for frontend testing. The following outlines the configuration required to run integration test cases in a React environment. This implementation is independent of any build process and runs solely on top of Jest.

First, install the necessary packages for testing. These packages should be installed as dev dependencies since they are not required in a production environment.

## Install packages

```bash
npm install -D @testing-library/react @testing-library/jest-dom jest
```

You have installed the necessary packages for testing. Now, it’s time to define the Jest configurations.

## Jest Configurations

Jest offers many configuration options, which you can find on the [Jest configuration webpage](https://jestjs.io/docs/configuration). Below is the basic configuration required to run test cases.

```typescript
import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  globals: {
    fetch: globalThis.fetch,
  },
}

export default config
```

The above configuration defines the test environment and other related settings, such as API call configurations.

## Define `setupTests.ts` file

Next, you need to define the `setupTests.ts` file with the following line to handle the DOM. In this file, you can define any tasks that need to run before or after tests. I have defined a spy for console.error and a cleanup process for mocks.

```typescript
import '@testing-library/jest-dom'

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(jest.fn())
})

afterEach(() => {
  jest.clearAllMocks()
})
```

After completing all these configurations, add the following command to the `package.json` file.

```json
...rest of the commands
"test": "jest",
....

```

You know what to do next:

> refactor, test fail, refactor, test pass, and repeat.

Until next time folks.
