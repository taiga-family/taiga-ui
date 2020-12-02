# 4.2.1

## Bugfix

* Restore compatibility with jasmine < 2.5.0 [#222](https://github.com/bcaudan/jasmine-spec-reporter/pull/222), [#223](https://github.com/bcaudan/jasmine-spec-reporter/pull/223)

# 4.2.0

## Feature

* Support reporting errors in afterAll [#210](https://github.com/bcaudan/jasmine-spec-reporter/issues/210), [#214](https://github.com/bcaudan/jasmine-spec-reporter/issues/214)

# 4.1.1

## Bugfix

* Correct report from jasmineStarted event [#185](https://github.com/bcaudan/jasmine-spec-reporter/issues/185)

# 4.1.0

## Feature

* If any defined spec is not executed, report INCOMPLETE rather than SUCCESS [#142](https://github.com/bcaudan/jasmine-spec-reporter/issues/142), [#145](https://github.com/bcaudan/jasmine-spec-reporter/issues/145)

## Other

* Rewrite unit tests by bumping jasmine-core to 2.6.x [#155](https://github.com/bcaudan/jasmine-spec-reporter/issues/155)
* Use yarn for development [#98](https://github.com/bcaudan/jasmine-spec-reporter/issues/98), [#138](https://github.com/bcaudan/jasmine-spec-reporter/issues/138)
* Add `greenkeeper-yarn.sh` to automatically updates yarn.lock on greenkeeper PR

# 4.0.0

* Use string primitive instead of String wrapper object [#134](https://github.com/bcaudan/jasmine-spec-reporter/issues/134), [#137](https://github.com/bcaudan/jasmine-spec-reporter/issues/137)

## Breaking change

It only impacts TypeScript integrations, `DisplayProcessor` methods signature now use `string` instead of `String`.

Before:

    displaySuite(suite: CustomReporterResult, log: String): String;

Now:

    displaySuite(suite: CustomReporterResult, log: string): string;

# 3.3.0

* Add low-level print configuration option [#129](https://github.com/bcaudan/jasmine-spec-reporter/issues/129), [#130](https://github.com/bcaudan/jasmine-spec-reporter/issues/130)

# 3.2.0

* Add an option to remove duration from execution summary.
* Add jasmine & protractor integration tests [#82](https://github.com/bcaudan/jasmine-spec-reporter/issues/82)

# 3.1.0

* Add `displaySpecErrorMessages` and `displaySummaryErrorMessages` to DisplayProcessor [#85](https://github.com/bcaudan/jasmine-spec-reporter/issues/85)
* Add an option to remove error messages [#62](https://github.com/bcaudan/jasmine-spec-reporter/issues/62)
* Add an option to customize stacktrace filtering [#72](https://github.com/bcaudan/jasmine-spec-reporter/issues/72)

# 3.0.0

## Breaking changes

* Remove support for node 0.10
* `jasmine-spec-reporter` module exports `SpecReporter` and `DisplayProcessor`, see [SpecReporter](./examples/node) and [DisplayProcessor](./docs/customize-output.md) usages.
* Extract groups in configuration and rationalize property names, [see new structure](./src/configuration.ts). [#57](https://github.com/bcaudan/jasmine-spec-reporter/issues/57)
* Colors deactivation is now achieved with this configuration:

      {
        colors: {
          enabled: false
        }
      }

* Custom options for custom processors must now be stored in this configuration field:

      {
        customOptions: {
          foo: 'bar'
        }
      }

## Other

* Migrate code base to TypeScript
* Add example for [TypeScript integration](./examples/typescript)
* Extract each example in a dedicated node module, [see examples](./examples)

# 2.7.0

* Add successes summary. [#49](https://github.com/bcaudan/jasmine-spec-reporter/issues/49)

# 2.6.0

* Display seed used if specs are randomized. [#55](https://github.com/bcaudan/jasmine-spec-reporter/issues/55)

# 2.5.0

* Added support for windows platform to show tick mark and cross symbols. [#52](https://github.com/bcaudan/jasmine-spec-reporter/issues/52)

# 2.4.0

* Add singular form of spec metrics. [#41](https://github.com/bcaudan/jasmine-spec-reporter/issues/41)

# 2.3.0

## Feature

* Add pending summary to display pending reasons. [#33](https://github.com/bcaudan/jasmine-spec-reporter/issues/33)
* Have same sign/color convention than jasmine default reporter for pending specs.

## Other

* Add tests on colors. [#34](https://github.com/bcaudan/jasmine-spec-reporter/issues/34)
* Bump dependencies versions

# 2.2.3

Ensure that colors are always enabled. [#36](https://github.com/bcaudan/jasmine-spec-reporter/issues/36)

# 2.2.2

## Bugfix

* Fixes All specs displayed when using `fdescribe` and `fit`. [#37](https://github.com/bcaudan/jasmine-spec-reporter/issues/37)

# 2.2.1

## Bugfix

* Disabled specs was incorrectly reported as failed. [#28](https://github.com/bcaudan/jasmine-spec-reporter/issues/28)

## Other

* Tests: Use jasmine env instead of fake env [#25](https://github.com/bcaudan/jasmine-spec-reporter/issues/25)

# 2.2.0

## Feature

* **stacktrace**: `displayStacktrace` option has now 4 modes available [#26](https://github.com/bcaudan/jasmine-spec-reporter/issues/26):
    * all: display stacktraces for failed specs and in failures summary.
    * specs: display stacktraces for failed specs only.
    * summary: display stacktraces in failures summary only.
    * none: do not display stacktraces.

* **processor**:
    * add `displayJasmineStarted` hook
    * add `displaySpecStarted` hook [#23](https://github.com/bcaudan/jasmine-spec-reporter/issues/23)

## Breaking change

`displayStacktrace: true` is not working anymore. You will have to choose the displayStacktrace mode that suits you best.

## Other

* Bump dependencies versions
* Rework documentation

# 2.1.0

When a suite or spec is focused, it displays the total of specs defined and the number of skipped specs [#11](https://github.com/bcaudan/jasmine-spec-reporter/issues/11)

# 2.0.0

## Feature

Add support for jasmine 2.x [#10](https://github.com/bcaudan/jasmine-spec-reporter/issues/10)

## Breaking change

- Jasmine 1.x is not supported by this version

- Skipped specs are not displayable in favour of pending specs.

# 1.2.0

## Feature

* **stacktrace**: `displayStacktrace` option has now 4 modes available:
    * all: display stacktraces for failed specs and in failures summary.
    * specs: display stacktraces for failed specs only.
    * summary: display stacktraces in failures summary only.
    * none: do not display stacktraces.

* **processor**: add `displayJasmineStarted` hook

## Breaking change

`displayStacktrace: true` is not working anymore. You will have to choose the displayStacktrace mode that suits you best.

## Other

* Bump colors versions
* Rework documentation

# 1.1.2

Add message when reporter 1.x is used with jasmine > 1.x

# 1.1.1

Fixes error when the stacktrace is undefined [#22](https://github.com/bcaudan/jasmine-spec-reporter/issues/22)

# 1.1.0

Add suite number option [#19](https://github.com/bcaudan/jasmine-spec-reporter/issues/19)

# 1.0.0

## Feature

Add customProcessors option [#18](https://github.com/bcaudan/jasmine-spec-reporter/issues/18)

## Breaking change

Jasmine spec reporter is no more added to the jasmine object. So, make sure to use it like it is described in the [usage section](https://github.com/bcaudan/jasmine-spec-reporter/blob/master/README.md#usage).

# 0.6.0

- Add option to configure spec prefixes [#14](https://github.com/bcaudan/jasmine-spec-reporter/issues/14)

- Filter jasmine stacktrace [#12](https://github.com/bcaudan/jasmine-spec-reporter/issues/12)

# 0.5.0

Display failures summary [#13](https://github.com/bcaudan/jasmine-spec-reporter/issues/13)

# 0.4.0

- Add option to disable colors [#4](https://github.com/bcaudan/jasmine-spec-reporter/issues/4)

- Add option to overwrite color theme [#5](https://github.com/bcaudan/jasmine-spec-reporter/issues/5)

- Add option to include skipped specs [#2](https://github.com/bcaudan/jasmine-spec-reporter/issues/2)

# 0.3.3

Add option to display spec duration [#6](https://github.com/bcaudan/jasmine-spec-reporter/issues/6)

# 0.3.2

Display human readable duration [#9](https://github.com/bcaudan/jasmine-spec-reporter/issues/9)

# 0.3.1

Added a hack procedure to remove dot reporter [#8](https://github.com/bcaudan/jasmine-spec-reporter/issues/8)

# 0.3.0

Add options to exclude successful / failed specs [#3](https://github.com/bcaudan/jasmine-spec-reporter/issues/3)

# 0.2.0

Add option to include stack trace on failure [#1](https://github.com/bcaudan/jasmine-spec-reporter/issues/1)

# 0.1.0

First version with unit tests
