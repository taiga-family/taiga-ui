karma-jasmine-ajax
==========

Karma adapter for Jasmine plugin for faking Ajax responses in your tests.

Installation
------------

```sh
$ npm install karma-jasmine-ajax --save-dev
```

Add `jasmine-ajax` to the `frameworks` key in your Karma configuration, before `jasmine`:

```js
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine-ajax', 'jasmine'],
    plugins: [karma-jasmine-ajax]
  });
}
```

Usage
-----

Please see https://github.com/pivotal/jasmine-ajax for details how to use `jasmine-ajax`
