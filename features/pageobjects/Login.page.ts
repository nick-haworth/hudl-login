import Page from './Page'

class LoginPage extends Page {
  private _username = ''
  private _password = ''

  get username(): string { return this._username }
  set username(value: string) { this._username = value }
  get password(): string { return this._password }
  set password(value: string) { this._password = value }

  get inputUsername() { return $('#email') }
  get inputPassword() { return $('#password') }
  get btnSubmit() { return $('#logIn') }
  get errorMessage() { return $('[data-qa-id="error-display"]') }
  get errorMessageLink() { return this.errorMessage.$('a') }
  get rememberMe() { return $('[data-qa-id="remember-me-checkbox-label"]') }
  get needHelp() { return $('[data-qa-id="need-help-link"]') }

  async login() {
    await this.inputUsername.setValue(this._username)
    await this.inputPassword.setValue(this._password)
    await this.btnSubmit.click()
  }

  async loadPage(device = 'desktop') { return super.loadPage('login', device) }
}

export default new LoginPage()
