/**
 * Adapts Jasmine-Node tests to work better with WebDriverJS. Borrows
 * heavily from the mocha WebDriverJS adapter at
 * https://code.google.com/p/selenium/source/browse/javascript/node/selenium-webdriver/testing/index.js
 */

var WebElement; // Equal to webdriver.WebElement
var idleEventName = 'idle'; // Equal to webdriver.promise.ControlFlow.EventType.IDLE
var maybePromise = require('./maybePromise');

/**
 * Validates that the parameter is a function.
 * @param {Object} functionToValidate The function to validate.
 * @throws {Error}
 * @return {Object} The original parameter.
 */
function validateFunction(functionToValidate) {
  if (functionToValidate && typeof functionToValidate === 'function') {
    return functionToValidate;
  } else {
    throw Error(functionToValidate + ' is not a function');
  }
}

/**
 * Validates that the parameter is a number.
 * @param {Object} numberToValidate The number to validate.
 * @throws {Error}
 * @return {Object} The original number.
 */
function validateNumber(numberToValidate) {
  if (!isNaN(numberToValidate)) {
    return numberToValidate;
  } else {
    throw Error(numberToValidate + ' is not a number');
  }
}

/**
 * Validates that the parameter is a string.
 * @param {Object} stringToValidate The string to validate.
 * @throws {Error}
 * @return {Object} The original string.
 */
function validateString(stringtoValidate) {
  if (typeof stringtoValidate == 'string' || stringtoValidate instanceof String) {
    return stringtoValidate;
  } else {
    throw Error(stringtoValidate + ' is not a string');
  }
}

/**
 * Calls a function once the scheduler is idle.  If the scheduler does not support the idle API,
 * calls the function immediately.  See scheduler.md#idle-api for details.
 *
 * @param {Object} scheduler The scheduler to wait for.
 * @param {!Function} fn The function to call.
 */
function callWhenIdle(scheduler, fn) {
  if (!scheduler.once || !scheduler.isIdle || scheduler.isIdle()) {
    fn();
  } else {
    scheduler.once(idleEventName, function() { fn(); });
  }
}


/**
 * Wraps a function so it runs inside a scheduler's `execute()` block.
 *
 * In the most common case, this means wrapping in a `webdriver.promise.ControlFlow` instance
 * to wait for the control flow to complete one task before starting the next.  See scheduler.md
 * for details.
 *
 * @param {!Object} scheduler See scheduler.md for details.
 * @param {!Function} newPromise Makes a new promise using whatever implementation the scheduler
 *   prefers.
 * @param {!Function} globalFn The function to wrap.
 * @param {!string} fnName The name of the function being wrapped (e.g. `'it'`).
 * @return {!Function} The new function.
 */
function wrapInScheduler(scheduler, newPromise, globalFn, fnName) {
  return function() {
    var driverError = new Error();
    driverError.stack = driverError.stack.replace(/ +at.+jasminewd.+\n/, '');

    function asyncTestFn(fn, description) {
      description = description ? ('("' + description + '")') : '';
      return function(done) {
        var async = fn.length > 0;
        var testFn = fn.bind(this);

        scheduler.execute(function schedulerExecute() {
          return newPromise(function(fulfill, reject) {
            function wrappedReject(err) {
              if(err instanceof Error)
                reject(err);
              else 
                reject(new Error(err));
            }
            if (async) {
              // If testFn is async (it expects a done callback), resolve the promise of this
              // test whenever that callback says to.  Any promises returned from testFn are
              // ignored.
              var proxyDone = fulfill;
              proxyDone.fail = wrappedReject;
              testFn(proxyDone);
            } else {
              // Without a callback, testFn can return a promise, or it will
              // be assumed to have completed synchronously.
              var ret = testFn();
              if (maybePromise.isPromise(ret)) {
                ret.then(fulfill, wrappedReject);
              } else {
                fulfill(ret);
              }
            }
          });
        }, 'Run ' + fnName + description + ' in control flow').then(
          callWhenIdle.bind(null, scheduler, done), function(err) {
            if (!err) {
              err = new Error('Unknown Error');
              err.stack = '';
            }
            err.stack = err.stack + '\nFrom asynchronous test: \n' + driverError.stack;
            callWhenIdle(scheduler, done.fail.bind(done, err));
          }
        );
      };
    }

    var description, func, timeout;
    switch (fnName) {
      case 'it':
      case 'fit':
        description = validateString(arguments[0]);
        if (!arguments[1]) {
          return globalFn(description);
        }
        func = validateFunction(arguments[1]);
        if (!arguments[2]) {
          return globalFn(description, asyncTestFn(func, description));
        } else {
          timeout = validateNumber(arguments[2]);
          return globalFn(description, asyncTestFn(func, description), timeout);
        }
        break;
      case 'beforeEach':
      case 'afterEach':
      case 'beforeAll':
      case 'afterAll':
        func = validateFunction(arguments[0]);
        if (!arguments[1]) {
          globalFn(asyncTestFn(func));
        } else {
          timeout = validateNumber(arguments[1]);
          globalFn(asyncTestFn(func), timeout);
        }
        break;
      default:
        throw Error('invalid function: ' + fnName);
    }
  };
}

/**
 * Initialize the JasmineWd adapter with a particlar scheduler, generally a webdriver control flow.
 *
 * @param {Object=} scheduler The scheduler to wrap tests in. See scheduler.md for details.
 *   Defaults to a mock scheduler that calls functions immediately.
 * @param {Object=} webdriver The result of `require('selenium-webdriver')`.  Passed in here rather
 *   than required by jasminewd directly so that jasminewd can't end up up with a different version
 *   of `selenium-webdriver` than your tests use.  If not specified, jasminewd will still work, but
 *   it won't check for `WebElement` instances in expect() statements and could cause control flow
 *   problems if your tests are using an old version of `selenium-webdriver` (e.g. version 2.53.0).
 */
function initJasmineWd(scheduler, webdriver) {
  if (jasmine.JasmineWdInitialized) {
    throw Error('JasmineWd already initialized when init() was called');
  }
  jasmine.JasmineWdInitialized = true;


  // Pull information from webdriver instance
  if (webdriver) {
    WebElement = webdriver.WebElement || WebElement;
    idleEventName = (
            webdriver.promise &&
            webdriver.promise.ControlFlow &&
            webdriver.promise.ControlFlow.EventType &&
            webdriver.promise.ControlFlow.EventType.IDLE
        ) || idleEventname;
  }

  // Default to mock scheduler
  if (!scheduler) {
    scheduler = { execute: function(fn) {
      return Promise.resolve().then(fn);
    } };
  }

  // Figure out how we're getting new promises
  var newPromise;
  if (typeof scheduler.promise == 'function') {
    newPromise = scheduler.promise.bind(scheduler);
  } else if (webdriver && webdriver.promise && webdriver.promise.ControlFlow &&
      (scheduler instanceof webdriver.promise.ControlFlow) &&
      (webdriver.promise.USE_PROMISE_MANAGER !== false)) {
    newPromise = function(resolver) {
      return new webdriver.promise.Promise(resolver, scheduler);
    };
  } else {
    newPromise = function(resolver) {
      return new Promise(resolver);
    };
  }

  // Wrap functions
  global.it = wrapInScheduler(scheduler, newPromise, global.it, 'it');
  global.fit = wrapInScheduler(scheduler, newPromise, global.fit, 'fit');
  global.beforeEach = wrapInScheduler(scheduler, newPromise, global.beforeEach, 'beforeEach');
  global.afterEach = wrapInScheduler(scheduler, newPromise, global.afterEach, 'afterEach');
  global.beforeAll = wrapInScheduler(scheduler, newPromise, global.beforeAll, 'beforeAll');
  global.afterAll = wrapInScheduler(scheduler, newPromise, global.afterAll, 'afterAll');

  // Reset API
  if (scheduler.reset) {
    // On timeout, the flow should be reset. This will prevent webdriver tasks
    // from overflowing into the next test and causing it to fail or timeout
    // as well. This is done in the reporter instead of an afterEach block
    // to ensure that it runs after any afterEach() blocks with webdriver tasks
    // get to complete first.
    jasmine.getEnv().addReporter(new OnTimeoutReporter(function() {
      console.warn('A Jasmine spec timed out. Resetting the WebDriver Control Flow.');
      scheduler.reset();
    }));
  }
}

var originalExpect = global.expect;
global.expect = function(actual) {
  if (WebElement && (actual instanceof WebElement)) {
    throw Error('expect called with WebElement argument, expected a Promise. ' +
        'Did you mean to use .getText()?');
  }
  return originalExpect(actual);
};

/**
 * Creates a matcher wrapper that resolves any promises given for actual and
 * expected values, as well as the `pass` property of the result.
 *
 * Wrapped matchers will return either `undefined` or a promise which resolves
 * when the matcher is complete, depending on if the matcher had to resolve any
 * promises.
 */
jasmine.Expectation.prototype.wrapCompare = function(name, matcherFactory) {
  return function() {
    var expected = Array.prototype.slice.call(arguments, 0),
      expectation = this,
      matchError = new Error("Failed expectation");

    matchError.stack = matchError.stack.replace(/ +at.+jasminewd.+\n/, '');

    // Return either undefined or a promise of undefined
    return maybePromise(expectation.actual, function(actual) {
      return maybePromise.all(expected, function(expected) {
        return compare(actual, expected);
      });
    });

    function compare(actual, expected) {
      var args = expected.slice(0);
      args.unshift(actual);

      var matcher = matcherFactory(expectation.util, expectation.customEqualityTesters);
      var matcherCompare = matcher.compare;

      if (expectation.isNot) {
        matcherCompare = matcher.negativeCompare || defaultNegativeCompare;
      }

      var result = matcherCompare.apply(null, args);

      return maybePromise(result.pass, compareDone);

      // compareDone always returns undefined
      function compareDone(pass) {
       var message = '';

       if (!pass) {
        if (!result.message) {
         args.unshift(expectation.isNot);
         args.unshift(name);
         message = expectation.util.buildFailureMessage.apply(null, args);
        } else {
         if (Object.prototype.toString.apply(result.message) === '[object Function]') {
          message = result.message(expectation.isNot);
         } else {
          message = result.message;
         }
        }
       }

       if (expected.length == 1) {
        expected = expected[0];
       }
       var res = {
        matcherName: name,
        passed: pass,
        message: message,
        actual: actual,
        expected: expected,
        error: matchError
       };
       expectation.addExpectationResult(pass, res);
      }

      function defaultNegativeCompare() {
        var result = matcher.compare.apply(null, args);
        result.pass = maybePromise(result.pass, function(pass) {
          return !pass;
        });
        return result;
      }
    }
  };
};

// Re-add core matchers so they are wrapped.
jasmine.Expectation.addCoreMatchers(jasmine.matchers);

/**
 * A Jasmine reporter which does nothing but execute the input function
 * on a timeout failure.
 */
var OnTimeoutReporter = function(fn) {
  this.callback = fn;
};

OnTimeoutReporter.prototype.specDone = function(result) {
  if (result.status === 'failed') {
    for (var i = 0; i < result.failedExpectations.length; i++) {
      var failureMessage = result.failedExpectations[i].message;

      if (failureMessage.match(/Timeout/)) {
        this.callback();
      }
    }
  }
};

module.exports.init = initJasmineWd;
