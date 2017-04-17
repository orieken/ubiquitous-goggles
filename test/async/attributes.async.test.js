let chai = require('chai');
let chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
let expect = chai.expect;
let MyPageAsync = require('../page-objects/my-page-async');

describe('Compare attributes async', () => {
  describe('straight', () => {
    it('collects and compares data-tiles ', () => {
      let expectedTitles = ['blah1', 'blah2', 'blah3', 'blah4', 'blah5'];
      let attributeName = 'data-title';

      browser.url('https://orieken.github.io/ubiquitous-goggles/');
      let myElements = browser.elements('.some_class');
      return myElements.getAttribute(attributeName).then((elems) => {
        return expect(elems).to.eql(expectedTitles);
      });
    });
  });

  describe('with page objects', () => {
    let myPageAsync;

    before(() => {

    });

    it('collects data from page objecs', () => {
      let expectedTitles = ['blah1', 'blah2', 'blah3', 'blah4', 'blah5'];
      let attributeName = 'data-title';

      myPageAsync = new MyPageAsync();
      myPageAsync.goTo();
      return myPageAsync.myElements.getAttribute(attributeName).then((elems) => {
        return expect(elems).to.eql(expectedTitles);
      });
    });
  });
});
