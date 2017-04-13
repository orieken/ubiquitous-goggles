let chai = require('chai');
let chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
let expect = chai.expect;
let MyPage = require('../page-objects/my-page');

describe('Compare attributes', () => {

  describe('straight', () => {
    it('collects and compares data-tiles ', () => {
      browser.url('https://orieken.github.io/ubiquitous-goggles/');
      let myElements = $$('.some_class');
      let attributeName = 'data-title';
      let expectedTitles = [ 'blah1', 'blah2', 'blah3', 'blah4', 'blah5' ];
      let elems = myElements.map((el) => { return el.getAttribute(attributeName); });

      return expect(elems).to.eql(expectedTitles);
    });
  });

  describe('page objects', () => {
    let page;

    before(() => {
      page = new MyPage();
    });

    it('collects and compares data-tiles ', () => {
      page.goTo();
      let attributeName = 'data-title';
      let actualElements = page.getMyElementsAttribues(attributeName);
      return expect(actualElements).to.eql([ 'blah1', 'blah2', 'blah3', 'blah4', 'blah5' ]);
    });
  });
});
