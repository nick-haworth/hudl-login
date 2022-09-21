import Page from './Page'

class HomePage extends Page {
  get globalNavigation() { return $('#ssr-webnav')}
  get globalUserMenu() { return $('.hui-globalusermenu') }
  get globalUserEmail() { return this.globalUserMenu.$('.hui-globaluseritem__email') }
  get globalDisplayName() { return $('.hui-globaluseritem__display-name span') }
  get globalLogout() { return $('.hui-globaladditionalitems--not-phone [data-qa-id="webnav-usermenu-logout"]') }
  get mobileGlobalLogout() { return $('.hui-globaladditionalitems--phone [data-qa-id="webnav-usermenu-logout"]') }
  get mobileMenuToggle() { return $('.hui-webnav--menu-closed .hui-secondarynav__open-menu') }

  async loadPage(device: string = 'desktop') { return super.loadPage('home', device) }
}

export default new HomePage()
