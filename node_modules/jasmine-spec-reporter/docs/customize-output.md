Output customization
====================

If you want to add extra information to the reporter output, you can build your own display processor and add it to options in the customProcessors array.

# Example

Let's say that you want to add the current time before each output of the reporter in order to have something like this:

    Spec started

      10:40:12 - first suite
        10:40:12 - ✓ should be ok
        10:40:21 - ✗ should failed
          - Expected true to be false.
        10:40:35 - ✓ should be ok


## Build your display processor

You need to require the display processor:

```node
var DisplayProcessor = require('jasmine-spec-reporter').DisplayProcessor;
```

You can then customize the following methods:
* displayJasmineStarted(runner, log)
* displaySuite(suite, log)
* displaySpecStarted(spec, log)
* displaySuccessfulSpec(spec, log)
* displayFailedSpec(spec, log)
* displaySpecErrorMessages(spec, log)
* displaySummaryErrorMessages(spec, log)
* displayPendingSpec(spec, log)

The first argument is the jasmine object corresponding to the suite or the spec. The second argument is the log to be displayed. Those methods should return the modified log.

For our example:

```node
var DisplayProcessor = require('jasmine-spec-reporter').DisplayProcessor;

function TimeProcessor(configuration) {
}

function getTime() {
    var now = new Date();
    return now.getHours() + ':' +
           now.getMinutes() + ':' +
           now.getSeconds()
}

TimeProcessor.prototype = new DisplayProcessor();

TimeProcessor.prototype.displaySuite = function (suite, log) {
  return getTime() + ' - ' + log;
};

TimeProcessor.prototype.displaySuccessfulSpec = function (spec, log) {
  return getTime() + ' - ' + log;
};

TimeProcessor.prototype.displayFailedSpec = function (spec, log) {
  return getTime() + ' - ' + log;
};

TimeProcessor.prototype.displayPendingSpec = function (spec, log) {
  return getTime() + ' - ' + log;
};
```

## Add it to the configuration

Then you need to configure jasmine spec reporter to use your processor:

```node
var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

var reporter = new SpecReporter({
    customProcessors: [TimeProcessor]
});

jasmine.getEnv().addReporter(reporter);
```

You must pass the processor constructor in the customProcessors array. Jasmine spec reporter will instantiate it with the options if you need them. You can add as many processors as you want, they will be applied in the order which they are in the customProcessors array.
