import * as dotenv from 'dotenv'
dotenv.config()
import type { Options } from '@wdio/types'
import browserCapabilities from './browser-capabilities.json'
import { generate } from 'multiple-cucumber-html-reporter'
import { removeSync } from 'fs-extra'
import cucumberJson from 'wdio-cucumberjs-json-reporter'

let setCapabilities = browserCapabilities
const browserName = process.env.BROWSER

if (browserName) {
  setCapabilities = browserCapabilities.filter((browsers) => browsers.browserName === browserName)
  if (setCapabilities.length === 0) {
    throw (new Error(`${browserName} does not exist, please check the available browsers`))
  }
}

export const config: Options.Testrunner = {
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: true,
      project: 'test/tsconfig.json'
    }
  },
  specs: [
    './features/**/*.feature'
  ],
  exclude: [],
  maxInstances: 10,
  capabilities: setCapabilities,
  logLevel: 'warn',
  bail: 0,
  baseUrl: 'https://www.hudl.com/',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['selenium-standalone', 'rerun'],
  framework: 'cucumber',
  reporters: 
    [
      'spec',
      [ 'cucumberjs-json', {
          jsonFolder: './results',
          language: 'en',
        },
      ]
    ],
  cucumberOpts: {
    require: ['./features/step-definitions/*Steps.ts'],
    backtrace: false,
    requireModule: [],
    dryRun: false,
    failFast: false,
    snippets: true,
    source: true,
    strict: false,
    tagExpression: '',
    timeout: 60000,
    ignoreUndefinedDefinitions: false
  },
  onPrepare: async function () {
    removeSync('./results/')
  },
  afterScenario: async function () {
    cucumberJson.attach(await browser.takeScreenshot(), 'image/png')
  },
  onComplete: async function () {
    await generate({
      jsonDir: './results',
      reportPath: './results/report/',
    })
  }
}
