describe('angularjs homepage', () => {
  it('should greet the named user', () => {
    browser.get('http://www.angularjs.org');

    element(by.model('yourName')).sendKeys('Julie');

    const greeting = element(by.binding('yourName'));

    expect(greeting.getText()).toEqual('Hello Julie!');
  })
});
