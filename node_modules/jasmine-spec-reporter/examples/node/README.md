Use jasmine-spec-reporter with Node
===================================
The `jasmine-spec-reporter` can be used to enhance your
[jasmine node](https://github.com/jasmine/jasmine-npm) tests execution report.

## Configuration

Create a `spec/helpers/reporter.js` file with the following content:

```javascript
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

jasmine.getEnv().clearReporters();               // remove default reporter logs
jasmine.getEnv().addReporter(new SpecReporter({  // add jasmine-spec-reporter
  spec: {
    displayPending: true
  }
}));
```

Then run your tests!

## Example

This directory is setup as a working example, so you can inspect the `package.json`,
the `spec` directory, and you can see it all work by issuing the following commands:

    npm install
    npm test
