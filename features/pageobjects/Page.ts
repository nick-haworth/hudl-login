export default class Page {
  async waitForDocumentReady(){
    browser.waitUntil(
      async () => await browser.execute(() => document.readyState === 'complete'),
      {
        timeout: 5000,
        timeoutMsg: 'Homepage is not ready'
      }
    )
  }

  async loadPage(path: string, device: string) {
    switch(device) {
      case 'desktop': browser.setWindowSize(1270, 1024)
        break
      case 'tablet': browser.setWindowSize(800, 1024)
        break
      case 'mobile': browser.setWindowSize(320, 960)
        break
    }
    return browser.url(`/${path}`)
  }
}
