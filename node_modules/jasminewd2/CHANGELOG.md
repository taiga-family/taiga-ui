# Changelog for jasminewd2

# 2.2.0

## Dependencies
Update selenium-webdriverjs to 3.5.0.

# 2.1.0

## Features

- ([41577a5](https://github.com/angular/jasminewd/commit/41577a5e10420d255fb2ec12aa0ea3a8e72f14ca)) 
  support native async functions (node 7.6+) (#87)

## Bug Fixes

- ([0137d3f](https://github.com/angular/jasminewd/commit/0137d3f2ae96ef6d51d00055d64b5a8103ae83d0)) 
  minor fix to keep stack from original error (#86)

- ([374f494](https://github.com/angular/jasminewd/commit/374f4946972673f86e06a011e20fc039bb73e234)) 
  Allow to specify a function as a custom matcher's message. (#29)



# 2.0.0

(Skipping 1.x because `0.0.1` was originally accidently published as `1.0.0`.)

## Breaking changes

- ([fae803c](https://github.com/angular/protractor/commit/fae803cd294e5413523d37bdaa282a9f96cd65a1)) 
  pass webdriver instance into `init()` instead of using `require()` (#83)

  So where as before you would write:
  
  ```js
  require('jasminewd').init(webdriver.promise.controlFlow());
  ```
  Now you will write:
  
  ```js
  require('jasminewd').init(webdriver.promise.controlFlow(), webdriver);
  ```

  This removes the dependency on `selenium-webdriver` and protects jasminewd from having a
  different webdriver instance than Protractor, which could be a huge problem if they had different
  control flow settings.

  This is a breaking change because it changes the API for the `init` function.

  I also removed the dependency on jasmine, which didn't do anything anyway.  Maybe it should have
  been a peerDependency but those are deprecated.


## Features

- ([171cbde](https://github.com/angular/protractor/commit/171cbde22f307bd3cc35c4c1785f171392dca8da)) 
  Added types (though you'll have to wait for `@types/jasminewd2` to use them) (#79)


- ([27b4850](https://github.com/angular/protractor/commit/27b485019589cd662ee69e7920893ffa50774b97)) 
  Support `SELENIUM_PROMISE_MANAGER=0` (#72)

  There are three major ways this was done in this change:
  * In `callWhenIdle`, if `flow.isIdle` is not defined, we assume we are working with a
    `SimpleScheduler` instance, and so the flow is effectively idle.
  * In `initJasmineWd`, if `flow.reset` is not defined, we assume we are working with a
    `SimpleScheduler` instance, and so don't bother resetting the flow.
  * In `wrapInControlFlow`, we use `flow.promise` to create a new promise if possible.  Since
    `new webdriver.promise.Promise()` would have always made a `ManagedPromise`, but `flow.promise`
    will do the right thing.
  * In `wrapCompare`, we avoid the webdriver library entirely, and never instance any extra
    promises. Using `webdriver.promise.when` and `webdriver.promise.all` could have been a problem
    if our instance of `webdriver` had the control flow turned on, but another instance somewhere
    did not (or even the same instance, but just at a different point in time). Instead we use the
    new `maybePromise` tool, which is a mess but is also exactly what we want.
  * In `specs/*`, we replace `webdriver.promise.fulfilled` with `webdriver.promise.when`.
  * In `specs/*`, a new version of `adapterSpec.js` and `errorSpec.js` are created:
    `asyncAwaitAdapterSpec.ts` and `asyncAwaitErrorSpec.ts`.

  I also also fixed a minor bug where we weren't correctly checking for promises inside an array of
  expected results. Before we had:
  
  ```js
  expected = Array.prototype.slice.call(arguments, 0);

  ...

  webdriver.promise.isPromise(expected);
  ```

  I thought about it for a little while, and there's no way that's correct.  `expected` is an
  `Array<any>`, there's no way it has a `.then` function.

  Closes https://github.com/angular/jasminewd/issues/69


## Bug Fixes

- ([369a249](https://github.com/angular/protractor/commit/369a2499189fbcdc541f354cfede49dba9335e6b)) 
  Don't rely on `webdriver.promise` functions (#82)

  While we support `SELENIUM_PROMISE_MANAGER=0` already, we rely on `SimpleScheduler` and some other
  utility functions which will be going away after the control flow has been fully deprecated.  This
  commit allows jasminewd to work without those utility functions, and even allows people to pass
  jasminewd their own custom scheduler implementation.

  This does not fix our tests, which will also break when those utility functions go away.  See
  https://github.com/angular/jasminewd/issues/81

  Closes https://github.com/angular/jasminewd/issues/80

# 0.1.1

- ([cf1cd34](https://github.com/angular/jasminewd/commit/cf1cd34a4089b6492160349a10d717c7bcaa2c31))
  chore(isPromise): revert expose deferred object's promise (#78)

# 0.1.0

Release for the selenium-webdriver 3.0.1 upgrade.

# 0.1.0-beta.1

- ([5fe36a6](https://github.com/angular/jasminewd/commit/5fe36a60102b9033180d68b238ab233a25a52393))
  deps(selenium-webdriver): upgrade to 3.0.0 (#63)

  fix test "should wait till the expect to run the flow"

  - `isPending` exists but it is no longer part of `ManagedPromise`
  - `isPending` also is no longer exported in `lib/promise.js`
  - wrote an `isPending` similar to selenium-webdriver in common.js
   require a minimum node version

  - selenium-webdriver 3.0.0 requires node >= 6.9.0
  - update travis test to use node 6

# 0.1.0-beta.0

This beta release is for the selenium-webdriver 3.0.0-beta-3 upgrade.

## Dependencies

- ([70c9f62](https://github.com/angular/jasminewd/commit/70c9f62af50018bea6ad326e12bacd9ca03e6ae5))
  upgrade(isPromise): expose the deferred object's promise (#58)

  - isPromise checks to see if the input parameter has a then method
  - Deferred class has a promise property and no longer has a then method
- ([8870365](https://github.com/angular/jasminewd/commit/88703656b4f8a012a084ba184a4fe473f423a200))
  deps(selenium-webdriver): upgrade to 3.0.0-beta-3 (#57)

# 0.0.10

- ([ff2e624](https://github.com/angular/jasminewd/commit/ff2e624159344cd83b04c6a6648334ba12e78ea6))
  fix(webdriver): Pass in the control flow.

  BREAKING CHANGE: The control flow now needs to be passed in when using jasminewd. This fixes
  an issue where having multiple versions of selenium-webdriver in a package's dependency tree would
  result in jasminewd and protractor using different control flows. You now have to initialize
  jasminewd before you can use it, like so: `require('jasminewd2').init(webdriver.promise.controlFlow());`

  See https://github.com/angular/protractor/issues/3505

- ([db26b1a](https://github.com/angular/jasminewd/commit/db26b1a1e66477a6f526dac56ecaaa50d2cf4700))
  fix(stacktrace): do not crash if beforeEach block is rejected without any stated reason (#45)

# 0.0.9

- ([790c81e](https://github.com/angular/protractor/commit/790c81eb0aba880fffbdcb4e834eb2161141620c))
  fix(expectations): allow custom matchers to return a promise when actual is not a promise

  See angular/protractor#2964


# 0.0.8

- ([5abc745](https://github.com/angular/protractor/commit/5abc7457cd73a4a4ba70b3c9ceeadac6d42bbd76))
  chore(jasmine): update MatchFactory to allow message as function

- ([750898c](https://github.com/angular/protractor/commit/750898c90a1cc1bef09384b60ef6e15adfe734f7))
  fix(expectation): expectations without promises no longer add to task queue

  Instead, expectations without promises in either expected or actual are unchanged from the
  original Jasmine implementation.

  See https://github.com/angular/protractor/issues/2894

# 0.0.7

- ([55fd11e](https://github.com/angular/protractor/commit/55fd11e69c2f1ba8fba9a19a8acccbe933896084))
  fix(index): forward it's return value

- ([f4c30a0](https://github.com/angular/protractor/commit/f4c30a0023c6ec33b15df762226c3fe8e741d26e))
  fix: allow empty it functions

# 0.0.6

- ([4776c16](https://github.com/angular/jasminewd/commit/4776c16b9a9f3a9a3de8a8dddc0e051cb32331b4))
  chore(selenium-webdriver): update selenium webdriver to 2.47.0

  Update selenium-webdriver to 2.47.0 from 2.45.1. This update introduces a convoluted situation
  where some tests in Proractor's suite would hang - see
  https://github.com/angular/protractor/issues/2245

  This change includes a fix for those issues which removes the explicit
  `flow.execute` wrapper around `expect` calls. This appears not to introduce any issues to existing
  tests.

# 0.0.5

- ([037c7de](https://github.com/angular/jasminewd/commit/037c7de7fea4de068734b6fa250d145800863633))
  chore(dependencies): update Jasmine to 2.3.1

# 0.0.4

- ([8f8b8b3](https://github.com/angular/jasminewd/commit/8f8b8b39e779559fd3b29b138d7577658b8a64b7))
  tests(context): test that the `this` variable points to the right thing

  Note: this means that using `this.addMatchers` no longer works inside before blocks or specs. It
  should have been changed to `jamsine.addMatchers` since the upgrade to Jasmine 2. It was still
  working by accident up until the previous commit.

- ([c0f13d2](https://github.com/angular/jasminewd/commit/c0f13d254966c859db22d020a5390138dbf48e64))
  refactor(asyncTestFn): refactor async test wrapping to show more info

  Test wrapping for Jasmine 2 now more closely follows the test wrapping for Mocha at
  https://github.com/SeleniumHQ/selenium/blob/master/javascript/node/selenium-webdriver/testing/index.js

  This also adds more information to the task names in the control flow, for easier debugging.

# 0.0.3

- ([161e1fa](https://github.com/angular/jasminewd/commit/161e1fa48deaa5ea0f485027ea8ae41562864936))
  fix(errors): update webdriverjs, fix asynchronous error output

  Add some console logging, remove useless info about the last running task in the control flow, and
  fix error where problems reported from done.fail were getting pushed into the following spec.

  Closes #18

- ([fdb03a3](https://github.com/angular/jasminewd/commit/fdb03a388d4846952c09fb0ad75a37b46674c750))
  docs(readme): add note about jasmine 1 vs jasmine 2

- ([acaec8b](https://github.com/angular/jasminewd/commit/acaec8bdd157e9933d608c66204a52335fb46ee4))
  feat(index): add jasmine2.0 support
