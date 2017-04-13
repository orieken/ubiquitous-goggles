class MyPage {
  constructor() {
    this.myElements = $$('.some_class');
  }

  goTo(siteURL = 'https://orieken.github.io/ubiquitous-goggles/' ) {
    return browser.url(siteURL);
  }

  getMyElementsAttribues(attributeName) {
    // for some reason this pushes 5 arrays of 5 items to els
    let els = this.myElements.map((el) => { return el.getAttribute(attributeName); });
    // so i squish it into one array
    let bigArray = [].concat(...els);
    // then return an array of unique items there are only really 5
    return [...new Set(bigArray)]
  }
}

module.exports = MyPage;