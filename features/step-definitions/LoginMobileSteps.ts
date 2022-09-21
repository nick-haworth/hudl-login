import { Given, Then } from '@wdio/cucumber-framework'
import loginPage from '../pageobjects/Login.page'
import homePage from '../pageobjects/Home.page'

Given(/^I am on the login page on (.*)$/, async (device: string) => {
  await loginPage.loadPage(device)
})

Then(/^I should see my account on mobile$/, async () => {
  await homePage.mobileMenuToggle.click()

  await expect(homePage.globalUserEmail).not.toBeDisplayed()
  await expect(homePage.globalDisplayName).toBeDisplayed()
  await expect(homePage.globalDisplayName).toHaveText('Nick H')
  await expect(homePage.mobileGlobalLogout).toBeDisplayed()
})