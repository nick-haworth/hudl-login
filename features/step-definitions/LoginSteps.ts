import { Given, When, Then } from '@wdio/cucumber-framework'
import loginPage from '../pageobjects/Login.page'
import homePage from '../pageobjects/Home.page'
import resetPasswordPage from '../pageobjects/ResetPassword.page'

Given(/^I am on the login page$/, async () => {
  await loginPage.loadPage()
})

When(/^I login with correct credentials$/, async () => {
  loginPage.username = process.env.HUDL_USERNAME || ''
  loginPage.password = process.env.HUDL_PASSWORD || ''
  await loginPage.login()
  homePage.waitForDocumentReady()
})

When(/^I login with incorrect credentials$/, async () => {
  loginPage.username = 'test@gmail.com'
  loginPage.password = 'test'
  await loginPage.login()
})

When(/^I login without an email$/, async () => {
  loginPage.username = ''
  loginPage.password = process.env.HUDL_PASSWORD || ''
  await loginPage.login()
})

When(/^I login without a password$/, async () => {
  loginPage.username = process.env.HUDL_USERNAME || ''
  loginPage.password = ''
  await loginPage.login()
})

When(/^I select remember me$/, async () => {
  await loginPage.rememberMe.click()
})

When(/^I click on need link$/, async () => {
  await loginPage.needHelp.click()
})

Then(/^I should see my account$/, async () => {
  await homePage.globalUserMenu.click()
  await homePage.globalUserEmail.waitForDisplayed({ timeout: 2000 })

  await expect(homePage.globalUserEmail).toHaveText(loginPage.username)
  await expect(homePage.globalDisplayName).toBeDisplayed()
  await expect(homePage.globalDisplayName).toHaveText('Nick H')
  await expect(homePage.globalLogout).toBeDisplayed()
})

Then(/^I should still be on the log in page$/, async () => {
  const url: string = await browser.getUrl()

  expect(url).toEqual('https://www.hudl.com/login')
})

Then(/^I should see the error message "(.*)"$/, async (errorMessage) => {
  await expect(loginPage.errorMessage).toBeDisplayed()
  await expect(loginPage.errorMessage).toHaveTextContaining(errorMessage)
})

Then(/^I should see the need help\? link$/, async () => {
  await expect(loginPage.errorMessageLink).toBeDisplayed()
})

Then(/^I should be remembered$/, async () => {
  const cookie: Array<object> = await browser.getCookies('ident')
  const cookieExpiry: number = await cookie[0]['expiry']
  const today: Date = new Date()
  const tomorrowsTimestamp: number = Math.floor(today.setDate(today.getDate() + 1) / 1000)

  expect(cookieExpiry).toBeDefined()
  expect(cookieExpiry).toBeGreaterThan(tomorrowsTimestamp)
})

Then(/^I can see reset password form$/, async () => {
  await expect(resetPasswordPage.resetPasswordTitle).toHaveText('Let???s reset your password')
  await expect(resetPasswordPage.resetPasswordInput).toBeDisplayed()
  await expect(resetPasswordPage.sendPasswordReset).toBeDisplayed()
})

