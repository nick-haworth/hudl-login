import Page from './Page'

class ResetPasswordPage extends Page {
  get resetPasswordTitle() { return $('[data-qa-id="lets-reset-password-headline"]') }
  get resetPasswordInput() { return $('[data-qa-id="password-reset-input"]') }
  get sendPasswordReset() { return $('[data-qa-id="password-reset-submit-btn"]') }

  async loadPage(device: string = 'desktop') { return super.loadPage('/login/help', device) }
}

export default new ResetPasswordPage()
