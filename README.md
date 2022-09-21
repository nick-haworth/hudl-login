# Getting started

I created this framework using [WebdriverIo v7](https://webdriver.io/) and written in Typescript

## Node and package manager

Make sure to setup [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

Please check the `.nvmrc` file for the node version. Running `nvm use` from the root will set the correct node version.

Install necessary dependencies by running `npm install`

## Development setup

Create a `.env` file in the root of the project, including the variables below and add credentials for your a hudl account

```sh
HUDL_USERNAME=""
HUDL_PASSWORD=""
```

## Running tests

You can run the tests both Chrome and Firefox by running:

`npm run wdio`

You can also specify just a single browser by running: (only chrome and firefox are currently available)

`BROWSER=chrome npm run wdio`

## Creating Reports

After the test suite run finishes, you can run the command below to create and view the report for that run

`npm run openReport`

## Notes

Things I would have added if I had more time
* Complete the commented out scenarios
* Incorporate a crossbrowser integration with Saucelabs
* Add [axe-core](https://www.npmjs.com/package/@types/axe-core) for accessibility 
* Add [lighthouse](https://www.npmjs.com/package/lighthouse) to test frontend performance score
