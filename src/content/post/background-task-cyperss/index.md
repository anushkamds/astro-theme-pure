---
title: How to run background task in Cypress test suite?
tags:
  - cypress
  - testig
  - web
  - javascript
publishDate: 2024-03-12
description: 'Something needs to be run background, hide them, no need to see them'
coverImage: { src: './images/crash-test.webp', color: '#649741' }
---

Previous developers and testers had to go through rigorous steps to write test cases. Running those tests was challenging too. It was a hard time. There was [Protractor](https://www.protractortest.org/#/), which was specifically for AngularJS. It was a good implementation but it had its own issues. It was a good framework to run test cases in the browser and terminal.

After the introduction of Cypress, it became very easy to run and configure test cases. Writing test cases became easier to handle, and it was written for all applications without the development framework. It was not all about E2E test. It was complete solution. It can be configure to test API test cases.

## Testing requirement

When running a unit test case, there are some conditions that need to be fulfilled to ensure it is a legitimate test case.

- Each test case should run independently.
- Data should be loaded based on the associated test case, if applicable.
- Test only one condition to achieve the highest code coverage.

Cypress is a tool that simplifies the execution of test cases. As a testing framework, it is on par with Mocha and Jest. Cypress visually illustrates the steps of code execution, providing a transparent representation of the process. This visualization is invaluable for identifying errors and other implementation issues. Problem is, there is no clear implementation to rest data where it can be used as background task.

## Defining background service

First, define the functionality that needs to run in the background. This could be a database reset function or another feature to ensure smooth test execution.

It needs to be both a promise function and a JavaScript function. Because it runs directly on [Node.js](https://nodejs.org/en) as a child process, it requires the option to execute directly rather than transpiling the code. It can be something like this, where this code deletes a contact using [Prisma](https://www.prisma.io/).

```js
async function main() {
//rest of operation
...
 return await prisma.contact.deleteMany({
    where: {
        id: { in: ids.map(({ id }) => id) },
        },
      });
}
```

## Define Cypress task

The execution of background processes should be defined within the Cypress task in the `cypress.config.js` file. This file contains all the [configuration](https://docs.cypress.io/guides/references/configuration) related to the Cypress runtime.

```js
// imports
const { spawn } = require('node:child_process');

...
on('task', {
    'db:seed': async scenarioNames => {
        return new Promise((resolve, reject) => {
            const seedProcess = spawn('pnpm', ['<seed>/<src/prisma/seed.js>', ...scenarioNames]);

            seedProcess.stdout.on('data', data => {
              console.log(`stdout: ${data}`);
            });

            seedProcess.stderr.on('data', data => {
              console.error(`db:seed: ${data}`);
            });

            seedProcess.on('close', code => {
              if (code === 0) {
                resolve(true);
              } else {
                reject(`db:seed child process exited with code ${code}`);
              }
            });
          });
        },
    }

```

The task above is designed to run a seed operation on the database. You can use the required process as the file name or script definition in the `package.json` file, depending on your preference. You can return any data as required. This task can be easily invoked using `cy.task('db:seed', [...rest of parameters])`. Cypress will pause the execution of the rest until the promise is resolved.

## Conclusion

According to my research, there is no superior method to invoke a background process with Cypress. This approach is optimal for such implementations. I have applied it to backend unit test cases. It can also be utilized for end-to-end test cases to reset the database or data resources.

Until next time!
