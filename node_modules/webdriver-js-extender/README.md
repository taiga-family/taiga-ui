WebDriver JS Extender
=====================

This tools extends [Selenium's javascript implementation](
https://www.npmjs.com/package/selenium-webdriver) of the WebDriver API
to include additional commands (e.g. commands required for [appium](
https://github.com/appium/appium)).

You can view the full list of commands in [`lib/index.ts`](lib/index.ts#L8).

Usage
-----

Use WebDriver JS Extender's `extend` function on your webdriver instance:


```js
  var extendedWebdriver = require('webdriver-js-extender').extend(webdriver);

  extendedWebdriver.setNetworkConnection(5);
```
