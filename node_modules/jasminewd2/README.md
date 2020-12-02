jasminewd2 [![Build Status](https://travis-ci.org/angular/jasminewd.svg?branch=jasminewd2)](https://travis-ci.org/angular/jasminewd)
=========

Adapter for Jasmine-to-WebDriverJS. Used by [Protractor](http://www.github.com/angular/protractor).

**Important:** There are two active branches of jasminewd.

 - [jasminewd1](https://github.com/angular/jasminewd/tree/jasminewd1) is an adapter for Jasmine 1.3, and uses the package minijasminenode. It is published to npm as `jasminewd`.
 - [jasminewd2](https://github.com/angular/jasminewd/tree/jasminewd2) is an adapter for Jasmine 2.x, and uses the package jasmine. It is published to npm as `jasminewd2`.

Features
--------

 - Automatically makes tests asynchronously wait until the WebDriverJS control flow is empty.

 - If a `done` function is passed to the test, waits for both the control flow and until done is called.

 - If a test returns a promise, waits for both the control flow and the promise to resolve.

 - Enhances `expect` so that it automatically unwraps promises before performing the assertion.

Installation
------------
```
npm install jasminewd2
```

Usage
-----

In your setup:

```js
var JasmineRunner = require('jasmine');
var jrunner = new JasmineRunner();
var webdriver = require('selenium-webdriver');

global.driver = new webdriver.Builder().
    usingServer('http://localhost:4444/wd/hub').
    withCapabilities({browserName: 'chrome'}).
    build();

require('jasminewd2').init(driver.controlFlow(), webdriver);

jrunner.projectBaseDir = '';
jrunner.execute(['**/*_spec.js']);
```

In your tests:

```js
describe('tests with webdriver', function() {
  it('will wait until webdriver is done', function() {
    // This will be an asynchronous test. It will finish once webdriver has
    // loaded the page, found the element, and gotten its text.
    driver.get('http://www.example.com');

    var myElement = driver.findElement(webdriver.By.id('hello'));

    // Here, expect understands that myElement.getText() is a promise,
    // and resolves it before asserting.
    expect(myElement.getText()).toEqual('hello world');
  });
})
```

TypeScript
----------

For the typings related to the changes in the global jasmine variables (e.g.
allowing `it()` blocks to return a promise), we publish the package
`@types/jasminewd2`.  If you are writing tests using jasminewd (including
Protractor tests), be sure to include `@types/jasminewd2` in your
`devDependencies`, as these global type modifications are ***not*** bundled with
the `jasminewd2` npm module.

jasminewd also exports one function directly: `init`.  Unfortunately, we do not
publish typings for this function.  If you call this function directly (e.g. you
are a Protractor dev), you should simply do:

```ts
require('jasminewd2').init(controlFlow, webdriver);
```

`async` functions / `await`
---------------------------

`async` functions and the `await` keyword are likely coming in ES2017 (ES8), and
available via several compilers.  At the moment, they often break the WebDriver
control flow.
([GitHub issue](https://github.com/SeleniumHQ/selenium/issues/3037)).  You can
still use them, but if you do then you will have to use `await`/Promises for
almost all your synchronization.  See `spec/asyncAwaitAdapterSpec.ts` and
`spec/asyncAwaitErrorSpec.ts` for examples.
