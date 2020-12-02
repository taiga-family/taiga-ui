<a name="4.34.7"></a>
## [4.34.7](https://github.com/cartant/rxjs-tslint-rules/compare/v4.34.6...v4.34.7) (2020-11-28)

## Fixes

* Add `index.js` to `files` in `package.json`. ([b1e1c2e](https://github.com/cartant/rxjs-tslint-rules/commit/b1e1c2e)

<a name="4.34.6"></a>
## [4.34.6](https://github.com/cartant/rxjs-tslint-rules/compare/v4.34.5...v4.34.6) (2020-11-28)

## Changes

* Use `files` in `package.json` instead of `.npmignore`. ([3b0c971](https://github.com/cartant/rxjs-tslint-rules/commit/3b0c971)

<a name="4.34.5"></a>
## [4.34.5](https://github.com/cartant/rxjs-tslint-rules/compare/v4.34.4...v4.34.5) (2020-11-05)

## Fixes

* `rxjs-no-ignored-subscription` should not effect failures for `Subscriber` instances passed to `subscribe`. ([a821e82](https://github.com/cartant/rxjs-tslint-rules/commit/a821e82)

<a name="4.34.4"></a>
## [4.34.4](https://github.com/cartant/rxjs-tslint-rules/compare/v4.34.3...v4.34.4) (2020-11-05)

## Fixes

* `rxjs-prefer-angular-takeuntil` no longer effects failures if `takeUntil` is not the last operator. ([0fba606](https://github.com/cartant/rxjs-tslint-rules/commit/0fba606)

<a name="4.34.3"></a>
## [4.34.3](https://github.com/cartant/rxjs-tslint-rules/compare/v4.34.2...v4.34.3) (2020-09-08)

## Changes

* Remove RxJS peer dependency. ([6fa538b](https://github.com/cartant/rxjs-tslint-rules/commit/6fa538b))

<a name="4.34.2"></a>
## [4.34.2](https://github.com/cartant/rxjs-tslint-rules/compare/v4.34.1...v4.34.2) (2020-09-08)

## Changes

* Widen TypeScript and RxJS peer ranges. ([c115605](https://github.com/cartant/rxjs-tslint-rules/commit/c115605))

<a name="4.34.1"></a>
## [4.34.1](https://github.com/cartant/rxjs-tslint-rules/compare/v4.34.0...v4.34.1) (2020-08-25)

## Changes

* Relax `rxjs-throw-error` rule to allow `DOMException`. ([d653cf0](https://github.com/cartant/rxjs-tslint-rules/commit/d653cf0))

<a name="4.34.0"></a>
## [4.34.0](https://github.com/cartant/rxjs-tslint-rules/compare/v4.33.3...v4.34.0) (2020-07-12)

## Features

* Add `rxjs-no-implicit-any-catch` rule. ([dfe3371](https://github.com/cartant/rxjs-tslint-rules/commit/dfe3371))

<a name="4.33.3"></a>
## [4.33.3](https://github.com/cartant/rxjs-tslint-rules/compare/v4.33.2...v4.33.3) (2020-06-24)

## Changes

* Don't distribute `yarn.lock` file.

<a name="4.33.2"></a>
## [4.33.2](https://github.com/cartant/rxjs-tslint-rules/compare/v4.33.1...v4.33.2) (2020-06-22)

## Changes

* Added `rxjs-report-usage`.

<a name="4.33.1"></a>
## [4.33.1](https://github.com/cartant/rxjs-tslint-rules/compare/v4.33.0...v4.33.1) (2020-06-02)

## Fixes

* Fix `rxjs-no-unsafe-takewhile` deprecation message. ([ca4ed82](https://github.com/cartant/rxjs-tslint-rules/commit/ca4ed82))

<a name="4.33.0"></a>
## [4.33.0](https://github.com/cartant/rxjs-tslint-rules/compare/v4.32.0...v4.33.0) (2020-05-26)

## Features

* Add `rxjs-no-ignored-takewhile-value` to replace the `rxjs-no-unsafe-takewhile` rule - which is now deprecated. ([9d23be9](https://github.com/cartant/rxjs-tslint-rules/commit/9d23be9))

<a name="4.32.0"></a>
## [4.32.0](https://github.com/cartant/rxjs-tslint-rules/compare/v4.31.0...v4.32.0) (2020-05-12)

## Features

* Add a `checkDecorators` option to the `rxjs-prefer-angular-takeuntil` rule. ([533eb63](https://github.com/cartant/rxjs-tslint-rules/commit/533eb63))

<a name="4.31.0"></a>
## [4.31.0](https://github.com/cartant/rxjs-tslint-rules/compare/v4.30.1...v4.31.0) (2020-04-25)

## Features

* Add the `rxjs-no-unsafe-subject-next` rule. ([4af5d45](https://github.com/cartant/rxjs-tslint-rules/commit/4af5d45))

<a name="4.30.1"></a>
## [4.30.1](https://github.com/cartant/rxjs-tslint-rules/compare/v4.30.0...v4.30.1) (2020-04-01)

## Fixes

* Don't check the `takeUntil` argument if `checkDestroy` is `false` in the `rxjs-prefer-angular-takeuntil` rule (and default `checkDestroy` to `false` if an alias is specified). ([8c4cc72](https://github.com/cartant/rxjs-tslint-rules/commit/8c4cc72))

<a name="4.30.0"></a>
## [4.30.0](https://github.com/cartant/rxjs-tslint-rules/compare/v4.29.2...v4.30.0) (2020-03-28)

## Features

* Add `alias` and `checkDestroy` options to the `rxjs-prefer-angular-takeuntil` rule. ([6a8180a](https://github.com/cartant/rxjs-tslint-rules/commit/6a8180a))

<a name="4.29.2"></a>
## [4.29.2](https://github.com/cartant/rxjs-tslint-rules/compare/v4.29.1...v4.29.2) (2020-03-20)

## Changes

* Bump the `tsutils-etc` peer dependency. ([0d67aa8](https://github.com/cartant/rxjs-tslint-rules/commit/0d67aa8)

<a name="4.29.1"></a>
## [4.29.1](https://github.com/cartant/rxjs-tslint-rules/compare/v4.29.0...v4.29.1) (2020-02-29)

## Fixes

* Widen the `tslint` peer dependency. ([6c5afda](https://github.com/cartant/rxjs-tslint-rules/commit/6c5afda)

<a name="4.29.0"></a>
## [4.29.0](https://github.com/cartant/rxjs-tslint-rules/compare/v4.28.3...v4.29.0) (2020-02-18)

## Features

* Add an `rxjs-no-topromise` rule. ([0a8eac7](https://github.com/cartant/rxjs-tslint-rules/commit/0a8eac7))

<a name="4.28.3"></a>
## [4.28.3](https://github.com/cartant/rxjs-tslint-rules/compare/v4.28.2...v4.28.3) (2020-02-09)

## Fixes

* Revert to `decamelize` version 3. ([782b4b1](https://github.com/cartant/rxjs-tslint-rules/commit/782b4b1))

<a name="4.28.2"></a>
## [4.28.2](https://github.com/cartant/rxjs-tslint-rules/compare/v4.28.1...v4.28.2) (2020-02-09)

## Fixes

* `rxjs/fetch` is a valid import location. ([cb12a7f](https://github.com/cartant/rxjs-tslint-rules/commit/cb12a7f))

<a name="4.28.1"></a>
## [4.28.1](https://github.com/cartant/rxjs-tslint-rules/compare/v4.28.0...v4.28.1) (2020-01-18)

## Changes

* Allow explicit type arguments (generics) to be used with literal values. ([9a98c19](https://github.com/cartant/rxjs-tslint-rules/commit/9a98c19))

<a name="4.28.0"></a>
## [4.28.0](https://github.com/cartant/rxjs-tslint-rules/compare/v4.27.1...v4.28.0) (2019-12-23)

## Features

* Add an `alias` option to the `rxjs-no-unsafe-takeuntil` rule - see [#112](https://github.com/cartant/rxjs-tslint-rules/issues/112). ([85063b7](https://github.com/cartant/rxjs-tslint-rules/commit/85063b7))

<a name="4.27.1"></a>
## [4.27.1](https://github.com/cartant/rxjs-tslint-rules/compare/v4.27.0...v4.27.1) (2019-11-29)

## Changes

* Fix up rule deprecations and deprecation messages. ([392106c](https://github.com/cartant/rxjs-tslint-rules/commit/392106c))

<a name="4.27.0"></a>
## [4.27.0](https://github.com/cartant/rxjs-tslint-rules/compare/v4.26.3...v4.27.0) (2019-11-29)

## Features

* Add `rxjs-prefer-angular-takeuntil` rule. ([7489079](https://github.com/cartant/rxjs-tslint-rules/commit/7489079))
* Add `rxjs-prefer-angular-composition` rule. ([c145b6b](https://github.com/cartant/rxjs-tslint-rules/commit/c145b6b))

## Changes

* Rename `rxjs-prefer-async-pipe` rule to `rxjs-prefer-angular-async-pipe` and deprecate the old name. ([33fdd80](https://github.com/cartant/rxjs-tslint-rules/commit/33fdd80))

<a name="4.26.3"></a>
## [4.26.3](https://github.com/cartant/rxjs-tslint-rules/compare/v4.26.2...v4.26.3) (2019-11-19)

## Fixes

* Fix a false positive with `rxjs-no-redundant-notify` rule. ([f356b7b](https://github.com/cartant/rxjs-tslint-rules/commit/f356b7b))

<a name="4.26.2"></a>
## [4.26.2](https://github.com/cartant/rxjs-tslint-rules/compare/v4.26.1...v4.26.2) (2019-11-15)

## Fixes

* Fix false positives with `rxjs-no-redundant-notify` rule. ([c08c919](https://github.com/cartant/rxjs-tslint-rules/commit/c08c919))

<a name="4.26.1"></a>
## [4.26.1](https://github.com/cartant/rxjs-tslint-rules/compare/v4.26.0...v4.26.1) (2019-10-31)

## Fixes

* Use tighter regular expressions in `rxjs-no-redundant-notify` rule. ([c3cbb93](https://github.com/cartant/rxjs-tslint-rules/commit/c3cbb93))

<a name="4.26.0"></a>
## [4.26.0](https://github.com/cartant/rxjs-tslint-rules/compare/v4.25.0...v4.26.0) (2019-10-31)

## Features

* Added the `rxjs-no-redundant-notify` rule. ([2305cf3](https://github.com/cartant/rxjs-tslint-rules/commit/2305cf3))

<a name="4.25.0"></a>
## [4.25.0](https://github.com/cartant/rxjs-tslint-rules/compare/v4.24.3...v4.25.0) (2019-09-07)

## Features

* Added the `rxjs-no-index` rule. ([9db9385](https://github.com/cartant/rxjs-tslint-rules/commit/9db9385))

<a name="4.24.3"></a>
## [4.24.3](https://github.com/cartant/rxjs-tslint-rules/compare/v4.24.2...v4.24.3) (2019-06-28)

## Fixes

* Ignore qualified names in `rxjs-no-unsafe-scope`. ([76f020e](https://github.com/cartant/rxjs-tslint-rules/commit/76f020e))

<a name="4.24.2"></a>
## [4.24.2](https://github.com/cartant/rxjs-tslint-rules/compare/v4.24.1...v4.24.2) (2019-06-19)

## Fixes

* Add `console` to whitelist for `rxjs-no-unsafe-scope`. ([8dec947](https://github.com/cartant/rxjs-tslint-rules/commit/8dec947))

<a name="4.24.1"></a>
## [4.24.1](https://github.com/cartant/rxjs-tslint-rules/compare/v4.24.0...v4.24.1) (2019-06-19)

## Fixes

* Fixed problems with `rxjs-no-unsafe-scope` and property-access expressions. ([4a365f9](https://github.com/cartant/rxjs-tslint-rules/commit/4a365f9))

<a name="4.24.0"></a>
## [4.24.0](https://github.com/cartant/rxjs-tslint-rules/compare/v4.23.3...v4.24.0) (2019-06-11)

## Features

* Add an `allowSubscribe` option to the `rxjs-no-unsafe-scope` rule. ([8caa4db](https://github.com/cartant/rxjs-tslint-rules/commit/8caa4db))

<a name="4.23.3"></a>
## [4.23.3](https://github.com/cartant/rxjs-tslint-rules/compare/v4.23.2...v4.23.3) (2019-06-08)

## Fixes

* Check `Notification` usage in `rxjs-no-explicit-generics`. ([115a0ba](https://github.com/cartant/rxjs-tslint-rules/commit/115a0ba))

<a name="4.23.2"></a>
## [4.23.2](https://github.com/cartant/rxjs-tslint-rules/compare/v4.23.1...v4.23.2) (2019-05-22)

## Fixes

* Fixes a problem with `rxjs-no-unsafe-catch` and operators that are class methods. ([f5a737c](https://github.com/cartant/rxjs-tslint-rules/commit/f5a737c))

<a name="4.23.1"></a>
## [4.23.1](https://github.com/cartant/rxjs-tslint-rules/compare/v4.23.0...v4.23.1) (2019-04-27)

## Fixes

* Consider use of the `caught` argument within `catchError` to be safe. ([86211bb](https://github.com/cartant/rxjs-tslint-rules/commit/86211bb))

<a name="4.23.0"></a>
## [4.23.0](https://github.com/cartant/rxjs-tslint-rules/compare/v4.22.1...v4.23.0) (2019-04-24)

## Features

* Add checking of `BehaviorSubject`, `from` and `of` with the `rxjs-no-explicit-generics` rule. ([0a8e162](https://github.com/cartant/rxjs-tslint-rules/commit/0a8e162))

<a name="4.22.1"></a>
## [4.22.1](https://github.com/cartant/rxjs-tslint-rules/compare/v4.22.0...v4.22.1) (2019-04-20)

## Fixes

* Fix a false positive from the `rxjs-no-nested-subscribe` rule. ([a57f938](https://github.com/cartant/rxjs-tslint-rules/commit/a57f938))

<a name="4.22.0"></a>
## [4.22.0](https://github.com/cartant/rxjs-tslint-rules/compare/v4.21.0...v4.22.0) (2019-04-19)

## Features

* Added an `rxjs-no-async-subscribe` rule. ([212a847](https://github.com/cartant/rxjs-tslint-rules/commit/212a847))
* Added an `rxjs-no-ignored-subscription` rule. ([79eda84](https://github.com/cartant/rxjs-tslint-rules/commit/79eda84))

<a name="4.21.0"></a>
## [4.21.0](https://github.com/cartant/rxjs-tslint-rules/compare/v4.20.0...v4.21.0) (2019-04-17)

## Features

* Added an `allowProtected` option for the `rxjs-no-exposed-subjects` rule. ([977ecf3](https://github.com/cartant/rxjs-tslint-rules/commit/977ecf3))

<a name="4.20.0"></a>
## [4.20.0](https://github.com/cartant/rxjs-tslint-rules/compare/v4.19.1...v4.20.0) (2019-04-13)

## Features

* Added the `rxjs-no-explicit-generics` rule. ([8c51cf5](https://github.com/cartant/rxjs-tslint-rules/commit/8c51cf5))

<a name="4.19.1"></a>
## [4.19.1](https://github.com/cartant/rxjs-tslint-rules/compare/v4.19.0...v4.19.1) (2019-03-26)

## Fixes

* Fix [#88](https://github.com/cartant/rxjs-tslint-rules/issues/88). ([e5ff225](https://github.com/cartant/rxjs-tslint-rules/commit/e5ff225))

<a name="4.19.0"></a>
## [4.19.0](https://github.com/cartant/rxjs-tslint-rules/compare/v4.18.2...v4.19.0) (2019-03-20)

## Features

* Added the `rxjs-no-ignored-observable` rule. ([d27ff0d](https://github.com/cartant/rxjs-tslint-rules/commit/d27ff0d))

<a name="4.18.2"></a>
## [4.18.2](https://github.com/cartant/rxjs-tslint-rules/compare/v4.18.1...v4.18.2) (2019-03-09)

## Fixes

* The `rxjs-no-subclass` now allows the subclassing of non-RxJS classes named `Observable`. ([31d00c0](https://github.com/cartant/rxjs-tslint-rules/commit/31d00c0))

<a name="4.18.1"></a>
## [4.18.1](https://github.com/cartant/rxjs-tslint-rules/compare/v4.18.0...v4.18.1) (2019-03-01)

## Fixes

* Enforce the `rxjs-no-connectable` rule for all operators that can return `ConnectableObservable`. ([1a2fa98](https://github.com/cartant/rxjs-tslint-rules/commit/1a2fa98))

<a name="4.18.0"></a>
## [4.18.0](https://github.com/cartant/rxjs-tslint-rules/compare/v4.17.2...v4.18.0) (2019-02-28)

## Features

* Add the `rxjs-no-connectable` rule. ([6b87900](https://github.com/cartant/rxjs-tslint-rules/commit/6b87900))

<a name="4.17.2"></a>
## [4.17.2](https://github.com/cartant/rxjs-tslint-rules/compare/v4.17.1...v4.17.2) (2019-02-23)

## Fixes

* Allow throwing and rethrowing `any`. ([709f5f1](https://github.com/cartant/rxjs-tslint-rules/commit/709f5f1))
* Support using namespace-style imports with the `rxjs-no-ignored-replay-buffer` rule - thanks, [maggie-x](https://github.com/maggie-x)! ([a3aae92](https://github.com/cartant/rxjs-tslint-rules/commit/a3aae92))

<a name="4.17.1"></a>
## [4.17.1](https://github.com/cartant/rxjs-tslint-rules/compare/v4.17.0...v4.17.1) (2019-02-23)

## Changes

* Replaced `util.ts` with `tsutils-etc`.

## Fixes

* Throwing a type that is an intersection with `Error` no longer effects a failure. See [issue 86](https://github.com/cartant/rxjs-tslint-rules/issues/86).

<a name="4.17.0"></a>
## [4.17.0](https://github.com/cartant/rxjs-tslint-rules/compare/v4.16.2...v4.17.0) (2019-02-08)

## Features

* Add an `allowConfig` option to the `rxjs-no-sharereplay` rule. ([a5a7c75](https://github.com/cartant/rxjs-tslint-rules/commit/a5a7c75))
* Add an `rxjs-suffix-subjects` rule - thanks, [maggie-x](https://github.com/maggie-x)! ([ea34c24](https://github.com/cartant/rxjs-tslint-rules/commit/ea34c24))

<a name="4.16.2"></a>
## [4.16.2](https://github.com/cartant/rxjs-tslint-rules/compare/v4.16.1...v4.16.2) (2019-01-30)

## Fixes

* Relax the enforcement of the `rxjs-no-exposed-subjects` rule for Angular `EventEmitter`. ([ce73aea](https://github.com/cartant/rxjs-tslint-rules/commit/ce73aea))

<a name="4.16.1"></a>
## [4.16.1](https://github.com/cartant/rxjs-tslint-rules/compare/v4.16.0...v4.16.1) (2019-01-29)

## Fixes

* Use original, clearer message for `rxjs-no-exposed-subjects` rule. ([e25ff9b](https://github.com/cartant/rxjs-tslint-rules/commit/e25ff9b))

<a name="4.16.0"></a>
## [4.16.0](https://github.com/cartant/rxjs-tslint-rules/compare/v4.15.1...v4.16.0) (2019-01-29)

## Features

* Add `rxjs-no-exposed-subjects` rule. ([c8a0d4d](https://github.com/cartant/rxjs-tslint-rules/commit/c8a0d4d))

<a name="4.15.1"></a>
## [4.15.1](https://github.com/cartant/rxjs-tslint-rules/compare/v4.15.0...v4.15.1) (2019-01-28)

## Fixes

* The `rxjs-no-compat` rule no longer effects false positives for packages that begin with `rxjs`. ([1c5b13f](https://github.com/cartant/rxjs-tslint-rules/commit/1c5b13f))

<a name="4.15.0"></a>
## [4.15.0](https://github.com/cartant/rxjs-tslint-rules/compare/v4.14.4...v4.15.0) (2019-01-18)

## Features

* Add `rxjs-no-compat` rule. ([ae4403f](https://github.com/cartant/rxjs-tslint-rules/commit/ae4403f))

<a name="4.14.4"></a>
## [4.14.4](https://github.com/cartant/rxjs-tslint-rules/compare/v4.14.3...v4.14.4) (2019-01-13)

## Fixes

* `rxjs-no-unsafe-takeuntil` rule now allows `defaultIfEmpty`. ([8c68457](https://github.com/cartant/rxjs-tslint-rules/commit/8c68457))

<a name="4.14.3"></a>
## [4.14.3](https://github.com/cartant/rxjs-tslint-rules/compare/v4.14.2...v4.14.3) (2018-12-25)

## Fixes

* `rxjs-no-unsafe-scope` rule now supports tagged template expressions. ([01c5a01](https://github.com/cartant/rxjs-tslint-rules/commit/01c5a01))

<a name="4.14.2"></a>
## [4.14.2](https://github.com/cartant/rxjs-tslint-rules/compare/v4.14.1...v4.14.2) (2018-12-22)

## Fixes

* `rxjs-no-unsafe-scope` rule now supports static class properties. ([5806b92](https://github.com/cartant/rxjs-tslint-rules/commit/5806b92))
* `rxjs-no-unsafe-scope` rule now supports parameter destructuring. ([b0458a2](https://github.com/cartant/rxjs-tslint-rules/commit/b0458a2))

<a name="4.14.1"></a>
## [4.14.1](https://github.com/cartant/rxjs-tslint-rules/compare/v4.14.0...v4.14.1) (2018-12-21)

## Fixes

* `rxjs-no-unsafe-scope` rule now considers `instanceof` constructors safe. ([e6d8261](https://github.com/cartant/rxjs-tslint-rules/commit/e6d8261))

<a name="4.14.0"></a>
## [4.14.0](https://github.com/cartant/rxjs-tslint-rules/compare/v4.13.2...v4.14.0) (2018-12-16)

## Features

* Support explicit type parameters in `rxjs-no-unsafe-scope`. ([b37cb78](https://github.com/cartant/rxjs-tslint-rules/commit/b37cb78))

<a name="4.13.2"></a>
## [4.13.2](https://github.com/cartant/rxjs-tslint-rules/compare/v4.13.1...v4.13.2) (2018-12-14)

## Fixes

* Support explicit type parameters in `rxjs-no-unsafe-scope`. ([b37cb78](https://github.com/cartant/rxjs-tslint-rules/commit/b37cb78))

<a name="4.13.1"></a>
## [4.13.1](https://github.com/cartant/rxjs-tslint-rules/compare/v4.13.0...v4.13.1) (2018-12-09)

## Fixes

* Add more allowed operators for the `rxjs-no-unsafe-takeuntil` (`count`, `every`, `toArray`, etc.). ([5255fcf](https://github.com/cartant/rxjs-tslint-rules/commit/5255fcf))

<a name="4.13.0"></a>
## [4.13.0](https://github.com/cartant/rxjs-tslint-rules/compare/v4.12.0...v4.13.0) (2018-11-25)

## Features

* Add an `rxjs-no-ignored-replay-buffer` rule. ([5958750](https://github.com/cartant/rxjs-tslint-rules/commit/5958750))

<a name="4.12.0"></a>
## [4.12.0](https://github.com/cartant/rxjs-tslint-rules/compare/v4.11.1...v4.12.0) (2018-11-18)

## Features

* Add an `rxjs-no-ignored-notifier` rule. ([c728059](https://github.com/cartant/rxjs-tslint-rules/commit/c728059))

<a name="4.11.1"></a>
## [4.11.1](https://github.com/cartant/rxjs-tslint-rules/compare/v4.11.0...v4.11.1) (2018-11-16)

## Fixes

* Support literal properties in `rxjs-no-unsafe-scope`. ([4d39fed](https://github.com/cartant/rxjs-tslint-rules/commit/4d39fed))
* Support namespace imports in `rxjs-no-unsafe-scope`. ([8598cc8](https://github.com/cartant/rxjs-tslint-rules/commit/8598cc8))

<a name="4.11.0"></a>
## [4.11.0](https://github.com/cartant/rxjs-tslint-rules/compare/v4.10.1...v4.11.0) (2018-11-09)

## Features

* Add an `rxjs-no-subclass` rule. ([cc746a4](https://github.com/cartant/rxjs-tslint-rules/commit/cc746a4))

<a name="4.10.1"></a>
## [4.10.1](https://github.com/cartant/rxjs-tslint-rules/compare/v4.10.0...v4.10.1) (2018-11-08)

## Changes

* Upgrade to `tsquery` 3.0.0. ([ec8dcb1](https://github.com/cartant/rxjs-tslint-rules/commit/ec8dcb1))

<a name="4.10.0"></a>
## [4.10.0](https://github.com/cartant/rxjs-tslint-rules/compare/v4.9.0...v4.10.0) (2018-10-06)

## Features

* Add an `rxjs-no-nested-subscribe` rule. ([c7028ac](https://github.com/cartant/rxjs-tslint-rules/commit/c7028ac))
* Add an `rxjs-prefer-async-pipe` rule. ([b25af74](https://github.com/cartant/rxjs-tslint-rules/commit/b25af74))

<a name="4.9.0"></a>
## [4.9.0](https://github.com/cartant/rxjs-tslint-rules/compare/v4.8.0...v4.9.0) (2018-09-30)

## Features

* Add an `rxjs-prefer-observer` rule - see [this RxJS issue](https://github.com/ReactiveX/rxjs/issues/4159). ([388e28d](https://github.com/cartant/rxjs-tslint-rules/commit/388e28d))

<a name="4.8.0"></a>
## [4.8.0](https://github.com/cartant/rxjs-tslint-rules/compare/v4.7.2...v4.8.0) (2018-08-02)

## Features

* Add an `allow` option to the `rxjs-no-unsafe-takeuntil` rule and default to allowing the `publish` and `share` operators and their variants. ([9610b86](https://github.com/cartant/rxjs-tslint-rules/commit/9610b86))

<a name="4.7.2"></a>
## [4.7.2](https://github.com/cartant/rxjs-tslint-rules/compare/v4.7.1...v4.7.2) (2018-08-01)

## Fixes

* Recognise constants declared using destructuring as `const`. ([53af1d4](https://github.com/cartant/rxjs-tslint-rules/commit/53af1d4))

<a name="4.7.1"></a>
## [4.7.1](https://github.com/cartant/rxjs-tslint-rules/compare/v4.7.0...v4.7.1) (2018-07-31)

## Build

* Widen TypeScript peer semver to allow for version 3.0. ([77f9e56](https://github.com/cartant/rxjs-tslint-rules/commit/77f9e56))

<a name="4.7.0"></a>
## [4.7.0](https://github.com/cartant/rxjs-tslint-rules/compare/v4.6.0...v4.7.0) (2018-07-23)

## Features

* Add `allowMethods` and `allowProperties` options to the `rxjs-no-unsafe-scope` rule. ([410d440](https://github.com/cartant/rxjs-tslint-rules/commit/410d440))

<a name="4.6.0"></a>
## [4.6.0](https://github.com/cartant/rxjs-tslint-rules/compare/v4.5.1...v4.6.0) (2018-07-12)

## Features

* Add an `rxjs-no-unsafe-first` rule. ([38b32a0](https://github.com/cartant/rxjs-tslint-rules/commit/38b32a0))

<a name="4.5.1"></a>
## [4.5.1](https://github.com/cartant/rxjs-tslint-rules/compare/v4.5.0...v4.5.1) (2018-07-01)

## Fixes

* Consider only arguments that are functions in the `rxjs-no-unbound-methods` rule. ([251a075](https://github.com/cartant/rxjs-tslint-rules/commit/251a075))

<a name="4.5.0"></a>
## [4.5.0](https://github.com/cartant/rxjs-tslint-rules/compare/v4.4.4...v4.5.0) (2018-06-30)

## Features

* Add an `rxjs-no-unbound-methods` rule.

<a name="4.4.4"></a>
## [4.4.4](https://github.com/cartant/rxjs-tslint-rules/compare/v4.4.3...v4.4.4) (2018-06-26)

## Fixes

* Account for `this` in the `rxjs-no-unsafe-catch` rule. ([ae27369](https://github.com/cartant/rxjs-tslint-rules/commit/ae27369))

<a name="4.4.3"></a>
## [4.4.3](https://github.com/cartant/rxjs-tslint-rules/compare/v4.4.2...v4.4.3) (2018-06-26)

## Fixes

* Account for `this` in the `rxjs-no-unsafe-switchmap` rule. ([97546e4](https://github.com/cartant/rxjs-tslint-rules/commit/97546e4))

<a name="4.4.2"></a>
## [4.4.2](https://github.com/cartant/rxjs-tslint-rules/compare/v4.4.1...v4.4.2) (2018-06-19)

## Fixes

* Fixed a problem with the `rxjs-no-unsafe-takeuntil`. It was only enforced when the call was made on an identifier. ([e2f378c](https://github.com/cartant/rxjs-tslint-rules/commit/e2f378c))

<a name="4.4.1"></a>
## [4.4.1](https://github.com/cartant/rxjs-tslint-rules/compare/v4.4.0...v4.4.1) (2018-06-04)

## Fixes

* Fixed a non-dev dependency that was added to `devDependencies`.

<a name="4.4.0"></a>
## [4.4.0](https://github.com/cartant/rxjs-tslint-rules/compare/v4.3.1...v4.4.0) (2018-06-03)

## Features

* Add an `rxjs-just` rule. ([a34bd66](https://github.com/cartant/rxjs-tslint-rules/commit/a34bd66))

<a name="4.3.1"></a>
## [4.3.1](https://github.com/cartant/rxjs-tslint-rules/compare/v4.3.0...v4.3.1) (2018-05-31)

## Fixes

* Fixes a problem the `rxjs-finnish` rule had with optional types. ([989c615](https://github.com/cartant/rxjs-tslint-rules/commit/989c615))

<a name="4.3.0"></a>
## [4.3.0](https://github.com/cartant/rxjs-tslint-rules/compare/v4.2.1...v4.3.0) (2018-05-27)

## Features

* Add an `rxjs-no-unsafe-takeuntil` rule. ([80e11e0](https://github.com/cartant/rxjs-tslint-rules/commit/80e11e0))

<a name="4.2.1"></a>
## [4.2.1](https://github.com/cartant/rxjs-tslint-rules/compare/v4.2.0...v4.2.1) (2018-05-19)

## Fixes

* In the `rxjs-throw-error` rule, ignore calls for which a signature is not available. ([deb87de](https://github.com/cartant/rxjs-tslint-rules/commit/deb87de))

<a name="4.2.0"></a>
## [4.2.0](https://github.com/cartant/rxjs-tslint-rules/compare/v4.1.1...v4.2.0) (2018-05-16)

## Features

* Add an `rxjs-no-unsafe-catch` rule for effects and epics. ([b3a3e01](https://github.com/cartant/rxjs-tslint-rules/commit/b3a3e01))

<a name="4.1.1"></a>
## [4.1.1](https://github.com/cartant/rxjs-tslint-rules/compare/v4.1.0...v4.1.1) (2018-05-02)

## Fixes

* Correctly configure the Angular whitelist for `rxjs-finnish` and add Angular interface methods that return `Observable`. ([4f1401e](https://github.com/cartant/rxjs-tslint-rules/commit/4f1401e))

<a name="4.1.0"></a>
## [4.1.0](https://github.com/cartant/rxjs-tslint-rules/compare/v4.0.2...v4.1.0) (2018-05-02)

## Features

* Add whitelist support to `rxjs-finnish` and default to not enforcing Finnish notation for Angular's `EventEmitter`. ([5051876](https://github.com/cartant/rxjs-tslint-rules/commit/5051876))

<a name="4.0.2"></a>
## [4.0.2](https://github.com/cartant/rxjs-tslint-rules/compare/v4.0.1...v4.0.2) (2018-04-30)

## Fixes

* The `rxjs-throw-error` rule now fails for thrown non-errors, as well as non-errors passed to `throw` or `throwError`. ([11158f1](https://github.com/cartant/rxjs-tslint-rules/commit/11158f1))

<a name="4.0.1"></a>
## [4.0.1](https://github.com/cartant/rxjs-tslint-rules/compare/v4.0.0...v4.0.1) (2018-04-30)

## Fixes

* Include ban explanation in failure message. ([5e993fe](https://github.com/cartant/rxjs-tslint-rules/commit/5e993fe))

<a name="4.0.0"></a>
## [4.0.0](https://github.com/cartant/rxjs-tslint-rules/compare/v3.17.0...v4.0.0) (2018-04-25)

## Features

* Supports `rxjs` version 5 and 6 and supports the use of `rxjs-compat` with version 6.
* Adds an `rxjs-no-internal` rule.
* Adds an `rxjs-ban-observables` rule.
* Adds an `rxjs-ban-operators` rule.

<a name="3.17.0"></a>
## [3.17.0](https://github.com/cartant/rxjs-tslint-rules/compare/v3.16.1...v3.17.0) (2018-04-07)

## Features

* Add options for `rxjs-no-unsafe-scope`. ([43bd486](https://github.com/cartant/rxjs-tslint-rules/commit/43bd486))

<a name="3.16.1"></a>
## [3.16.1](https://github.com/cartant/rxjs-tslint-rules/compare/v3.16.0...v3.16.1) (2018-04-05)

### Fixes

* Fix `tsconfig.json`-based source file discovery when packages within `node_modules` themselves contain `tsconfig.json` files. ([79bc163](https://github.com/cartant/rxjs-tslint-rules/commit/79bc163))

<a name="3.16.0"></a>
## [3.16.0](https://github.com/cartant/rxjs-tslint-rules/compare/v3.15.0...v3.16.0) (2018-03-30)

### Features

* Added an `rxjs-no-unsafe-scope` rule to disallow the use of variables/properties in unsafe/outer scopes. ([da22b6d](https://github.com/cartant/rxjs-tslint-rules/commit/da22b6d))

<a name="3.15.0"></a>
## [3.15.0](https://github.com/cartant/rxjs-tslint-rules/compare/v3.14.0...v3.15.0) (2018-03-07)

### Features

* Added an `rxjs-throw-error` rule to enforce the passing of `Error` values to `error` notifications. ([26beb0e](https://github.com/cartant/rxjs-tslint-rules/commit/26beb0e))

<a name="3.14.0"></a>
## [3.14.0](https://github.com/cartant/rxjs-tslint-rules/compare/v3.13.1...v3.14.0) (2018-02-21)

### Features

* Added an `rxjs-deep-operators` rule to enforce deep operator imports (e.g. `rxjs/operators/map`) for situations in which tree shaking is not available. ([95cc17c](https://github.com/cartant/rxjs-tslint-rules/commit/95cc17c))

<a name="3.13.1"></a>
## [3.13.1](https://github.com/cartant/rxjs-tslint-rules/compare/v3.13.0...v3.13.1) (2018-02-19)

### Docs

* Added a warning regarding TSLint's `no-unused-variable` rule. ([44fa739](https://github.com/cartant/rxjs-tslint-rules/commit/44fa739))

<a name="3.13.0"></a>
## [3.13.0](https://github.com/cartant/rxjs-tslint-rules/compare/v3.12.0...v3.13.0) (2018-02-19)

### Features

* Added options for the `rxjs-finnish` rule. ([d249119](https://github.com/cartant/rxjs-tslint-rules/commit/d249119))

<a name="3.12.0"></a>
## [3.12.0](https://github.com/cartant/rxjs-tslint-rules/compare/v3.11.1...v3.12.0) (2018-02-18)

### Features

* Added an `observable` option for the `rxjs-no-unsafe-switchmap` rule. ([9bffe6e](https://github.com/cartant/rxjs-tslint-rules/commit/9bffe6e))

<a name="3.11.1"></a>
## [3.11.1](https://github.com/cartant/rxjs-tslint-rules/compare/v3.11.0...v3.11.1) (2018-02-18)

### Fixes

* Support camel-case actions in the `rxjs-no-unsafe-switchmap` rule. ([c1caa8c](https://github.com/cartant/rxjs-tslint-rules/commit/c1caa8c))

<a name="3.11.0"></a>
## [3.11.0](https://github.com/cartant/rxjs-tslint-rules/compare/v3.10.0...v3.11.0) (2018-02-17)

### Features

* Added the `rxjs-no-unsafe-switchmap` rule to disallow the use of `switchMap` in effects and epics with actions for which it is likely to be unsafe. See [this tweet](https://mobile.twitter.com/victorsavkin/status/963486303118557185) from Victor Savkin. ([c08d98b](https://github.com/cartant/rxjs-tslint-rules/commit/c08d98b))

<a name="3.10.0"></a>
## [3.10.0](https://github.com/cartant/rxjs-tslint-rules/compare/v3.9.0...v3.10.0) (2018-02-16)

### Features

* Added the `rxjs-no-deep-operators` rule to disallow deep imports from `rxjs/operators`. Deep imports will not be available in RxJS v6 and deep imports from `rxjs/operators` can be avoided - in v5.5 - if a tree-shaking bundler is used. ([ada59c0](https://github.com/cartant/rxjs-tslint-rules/commit/ada59c0))

<a name="3.9.0"></a>
## [3.9.0](https://github.com/cartant/rxjs-tslint-rules/compare/v3.8.0...v3.9.0) (2018-02-08)

### Features

* Added the `rxjs-no-subject-value` rule to disallow accessing a `BehaviorSubject`'s `value` property. ([9c8f966](https://github.com/cartant/rxjs-tslint-rules/commit/9c8f966))

<a name="3.8.0"></a>
## [3.8.0](https://github.com/cartant/rxjs-tslint-rules/compare/v3.7.2...v3.8.0) (2018-02-03)

### Features

* The `rxjs-no-subject-unsubscribe` rule now disallows the adding of a `Subject` to a `Subscription`. ([20b2927](https://github.com/cartant/rxjs-tslint-rules/commit/20b2927))

<a name="3.7.2"></a>
## [3.7.2](https://github.com/cartant/rxjs-tslint-rules/compare/v3.7.1...v3.7.2) (2018-01-30)

### Fixes

* Fixed a bug with the object spread syntax and the `rxjs-finnish` and `rxjs-no-finnish` rules. ([6c6695b](https://github.com/cartant/rxjs-tslint-rules/commit/6c6695b))

<a name="3.7.1"></a>
## [3.7.1](https://github.com/cartant/rxjs-tslint-rules/compare/v3.7.0...v3.7.1) (2018-01-29)

### Fixes

* Fixed the `rxjs-no-ignored-subscribe` tests to account for [this problem](https://github.com/cartant/rxjs-tslint-rules/issues/32). ([b78d76a](https://github.com/cartant/rxjs-tslint-rules/commit/b78d76a))

<a name="3.7.0"></a>
## [3.7.0](https://github.com/cartant/rxjs-tslint-rules/compare/v3.6.0...v3.7.0) (2018-01-29)

### Features

* Add `rxjs-no-ignored-subscribe` rule. ([37dd346](https://github.com/cartant/rxjs-tslint-rules/commit/37dd346))

<a name="3.6.0"></a>
## [3.6.0](https://github.com/cartant/rxjs-tslint-rules/compare/v3.5.0...v3.6.0) (2018-01-24)

### Features

* Add `rxjs-no-tap` alias for `rxjs-no-do`. ([96babda](https://github.com/cartant/rxjs-tslint-rules/commit/96babda))

<a name="3.5.0"></a>
## [3.5.0](https://github.com/cartant/rxjs-tslint-rules/compare/v3.4.2...v3.5.0) (2018-01-22)

### Features

* Add `rxjs-no-ignored-error` rule. ([2f6c771](https://github.com/cartant/rxjs-tslint-rules/commit/2f6c771))

<a name="3.4.2"></a>
## [3.4.2](https://github.com/cartant/rxjs-tslint-rules/compare/v3.4.1...v3.4.2) (2018-01-19)

### Fixes

* Add `tsutils` to the `package.json`. ([e2873a9](https://github.com/cartant/rxjs-tslint-rules/commit/e2873a9))

<a name="3.4.1"></a>
## [3.4.1](https://github.com/cartant/rxjs-tslint-rules/compare/v3.4.0...v3.4.1) (2018-01-19)

### Documentation

* Trivial documentation changes.

<a name="3.4.0"></a>
## [3.4.0](https://github.com/cartant/rxjs-tslint-rules/compare/v3.3.0...v3.4.0) (2018-01-19)

### Features

* Add `rxjs-finnish` notation rule. ([6adbd05](https://github.com/cartant/rxjs-tslint-rules/commit/6adbd05))
* Add `rxjs-no-finnish` notation rule. ([8426905](https://github.com/cartant/rxjs-tslint-rules/commit/8426905))

<a name="3.3.0"></a>
## [3.3.0](https://github.com/cartant/rxjs-tslint-rules/compare/v3.2.1...v3.3.0) (2017-11-27)

### Features

* Add options for the `rxjs-no-add` rule. ([775e81d](https://github.com/cartant/rxjs-tslint-rules/commit/775e81d))

<a name="3.2.1"></a>
## [3.2.1](https://github.com/cartant/rxjs-tslint-rules/compare/v3.2.1...v3.2.1) (2017-11-27)

### Documentation

* Fix copy/paste errors in README.

<a name="3.2.0"></a>
## [3.2.0](https://github.com/cartant/rxjs-tslint-rules/compare/v3.1.3...v3.2.0) (2017-11-27)

### Features

* Add options for the `rxjs-no-patched` rule. ([b9af023](https://github.com/cartant/rxjs-tslint-rules/commit/b9af023))

<a name="3.1.3"></a>
## [3.1.3](https://github.com/cartant/rxjs-tslint-rules/compare/v3.1.2...v3.1.3) (2017-11-27)

### Bug Fixes

* Support the `flatMap` alias for `mergeMap`. ([40169e8](https://github.com/cartant/rxjs-tslint-rules/commit/40169e8))

<a name="3.1.2"></a>
## [3.1.2](https://github.com/cartant/rxjs-tslint-rules/compare/v3.1.1...v3.1.2) (2017-11-23)

### Bug Fixes

* Don't throw an error if `rxjs` cannot be found in `node_modules` - it's possible a common rule set might be used with a project that does not depend upon RxJS. ([17a5e61](https://github.com/cartant/rxjs-tslint-rules/commit/17a5e61))

<a name="3.1.1"></a>
## [3.1.1](https://github.com/cartant/rxjs-tslint-rules/compare/v3.1.0...v3.1.1) (2017-11-17)

### Bug Fixes

* Add `tslib` as a dependency; it was used, but was missing from the `package.json`.

<a name="3.1.0"></a>
## [3.1.0](https://github.com/cartant/rxjs-tslint-rules/compare/v3.0.4...v3.1.0) (2017-11-11)

### Features

* **rxjs-no-create:** Add a rule to forbid the calling of `Observable.create`. ([f025106](https://github.com/cartant/rxjs-tslint-rules/commit/f025106))

<a name="3.0.4"></a>
## [3.0.4](https://github.com/cartant/rxjs-tslint-rules/compare/v3.0.3...v3.0.4) (2017-11-01)

### Documentation

* Trivial documentation changes.

<a name="3.0.3"></a>
## [3.0.3](https://github.com/cartant/rxjs-tslint-rules/compare/v3.0.2...v3.0.3) (2017-10-07)

### Bug Fixes

* **rxjs-no-unused-add:** Consider only known, added imports - as `toPromise` is moving to `Observable.prototype` and will have a no-op import. ([2489a13](https://github.com/cartant/rxjs-tslint-rules/commit/2489a13))

<a name="3.0.2"></a>
## [3.0.2](https://github.com/cartant/rxjs-tslint-rules/compare/v3.0.1...v3.0.2) (2017-10-06)

### Bug Fixes

* **knowns:** Support 5.5.0-beta.5's move of `toPromise` to `Observable.prototype`. ([8641a1b](https://github.com/cartant/rxjs-tslint-rules/commit/8641a1b))

<a name="3.0.1"></a>
## [3.0.1](https://github.com/cartant/rxjs-tslint-rules/compare/v3.0.0...v3.0.1) (2017-09-23)

### Bug Fixes

* **knowns:** Support 5.5.0-beta.0. ([cdcad3a](https://github.com/cartant/rxjs-tslint-rules/commit/cdcad3a))

<a name="3.0.0"></a>
## [3.0.0](https://github.com/cartant/rxjs-tslint-rules/compare/v2.1.7...v3.0.0) (2017-09-23)

### Breaking Changes

* The list of known observables and operators is now compiled by reading the file names from disk. That means that RxJS is now a required peer dependency. It's unlikely that this will be a breaking change for most projects, as I'd expect RxJS to already be present in projects that are using these rules.

### Features

* **rxjs-no-operator:** Add a rule to forbid the importation of [non-'lettable' operators](https://github.com/ReactiveX/rxjs/blob/master/doc/lettable-operators.md). ([392f995](https://github.com/cartant/rxjs-tslint-rules/commit/392f995))

<a name="2.1.7"></a>
## [2.1.7](https://github.com/cartant/rxjs-tslint-rules/compare/v2.1.6...v2.1.7) (2017-09-16)

### Documentation

* Add notes on gotchas with `@angular/cli`.

<a name="2.1.6"></a>
## [2.1.6](https://github.com/cartant/rxjs-tslint-rules/compare/v2.1.5...v2.1.6) (2017-09-06)

### Bug Fixes

* **knowns:** Use `hasOwnProperty` when checking known observables and operators ([88e4ef7](https://github.com/cartant/rxjs-tslint-rules/commit/88e4ef7))

<a name="2.1.5"></a>
## [2.1.5](https://github.com/cartant/rxjs-tslint-rules/compare/v2.1.4...v2.1.5) (2017-09-05)

### Bug Fixes

* **knowns:** Add missing observables and operators ([051b8a0](https://github.com/cartant/rxjs-tslint-rules/commit/051b8a0))

<a name="2.1.4"></a>
## [2.1.4](https://github.com/cartant/rxjs-tslint-rules/compare/v2.1.3...v2.1.4) (2017-08-23)

### Non-breaking Changes

* **rxjs-add:** Improve error message relating to central imports file not being found ([5b12ee6](https://github.com/cartant/rxjs-tslint-rules/commit/5b12ee6))

<a name="2.1.3"></a>
## [2.1.3](https://github.com/cartant/rxjs-tslint-rules/compare/v2.1.2...v2.1.3) (2017-07-21)

### Documentation

* Trivial documentation changes.

<a name="2.1.2"></a>
## [2.1.2](https://github.com/cartant/rxjs-tslint-rules/compare/v2.1.0...v2.1.2) (2017-07-19)

### Non-breaking Changes

* **rxjs-add:** Skip `.d.ts` files when looking for unused imports with the `file` option ([ba18815](https://github.com/cartant/rxjs-tslint-rules/commit/ba18815))

<a name="2.1.0"></a>
## [2.1.0](https://github.com/cartant/rxjs-tslint-rules/compare/v2.0.0...v2.1.0) (2017-07-18)

### Features

* **rxjs-no-do:** Add `rxjs-no-do` rule ([1d7b352](https://github.com/cartant/rxjs-tslint-rules/commit/1d7b352))

<a name="2.0.0"></a>
## [2.0.0](https://github.com/cartant/rxjs-tslint-rules/compare/v1.4.0...v2.0.0) (2017-07-18)

### Features

* **rxjs-add options:** Add `allowElsewhere` and `allowUnused` options for the `rxjs-add` rule ([98a65f4](https://github.com/cartant/rxjs-tslint-rules/commit/98a65f4))

### Breaking Changes

* The `allowElsewhere` and `allowUnused` options for the `rxjs-add` rule default to `false`, so configurations that specified the `file` option for `rxjs-add` might see errors effected if patched observables or operators are imported outside of the file, or if there are unused imports. For behaviour identical to the previous version, configure both options as `true`.

<a name="1.4.0"></a>
## [1.4.0](https://github.com/cartant/rxjs-tslint-rules/compare/v1.3.0...v1.4.0) (2017-07-17)

### Features

* **rxjs-no-wholesale:** Deprecate and replace `rxjs-prefer-add` with `rxjs-no-wholesale` (which makes more sense when used in conjunction with `rxjs-no-add`) ([e6648e5](https://github.com/cartant/rxjs-tslint-rules/commit/e6648e5))

<a name="1.3.0"></a>
## [1.3.0](https://github.com/cartant/rxjs-tslint-rules/compare/v1.2.0...v1.3.0) (2017-07-15)

### Features

* **rxjs-no-patched:** Add the rule ([c9b7405](https://github.com/cartant/rxjs-tslint-rules/commit/c9b7405))

<a name="1.2.0"></a>
## [1.2.0](https://github.com/cartant/rxjs-tslint-rules/compare/v1.1.0...v1.2.0) (2017-07-15)

### Features

* **rxjs-no-subject-unsubscribe:** Add the rule ([acc1885](https://github.com/cartant/rxjs-tslint-rules/commit/acc1885))

<a name="1.1.0"></a>
## [1.1.0](https://github.com/cartant/rxjs-tslint-rules/compare/v1.0.5...v1.1.0) (2017-05-30)

### Features

* **rxjs-add:** Add the file option ([3743ccd](https://github.com/cartant/rxjs-tslint-rules/commit/3743ccd))

<a name="1.0.5"></a>
## [1.0.5](https://github.com/cartant/rxjs-tslint-rules/compare/v1.0.4...v1.0.5) (2017-05-26)

### Bug Fixes

* **base types:** Account for reference types in base types ([f9eb8a2](https://github.com/cartant/rxjs-tslint-rules/commit/f9eb8a2))

<a name="1.0.4"></a>
## [1.0.4](https://github.com/cartant/rxjs-tslint-rules/compare/v1.0.3...v1.0.4) (2017-05-06)

### Doc

* **gotcha:** Document `Observable.create` gotcha ([4be98ab](https://github.com/cartant/rxjs-tslint-rules/commit/4be98ab))

### Test

* **rxjs-no-unused-add:** Add `Observable.create` fixture ([56a8af0](https://github.com/cartant/rxjs-tslint-rules/commit/56a8af0))

<a name="1.0.3"></a>
## [1.0.3](https://github.com/cartant/rxjs-tslint-rules/compare/v1.0.2...v1.0.3) (2017-05-05)

### Bug Fixes

* **messages:** Clarify failure messages ([03d8ae8](https://github.com/cartant/rxjs-tslint-rules/commit/03d8ae8))

<a name="1.0.2"></a>
## [1.0.2](https://github.com/cartant/rxjs-tslint-rules/compare/v1.0.0...v1.0.2) (2017-05-05)

### Build

* **build:** Add missing dependency ([08212e0](https://github.com/cartant/rxjs-tslint-rules/commit/08212e0))
* **NPM:** Ignore fixtures ([b818b39](https://github.com/cartant/rxjs-tslint-rules/commit/b818b39))
* **build:** Add missing dependency ([ffebed2](https://github.com/cartant/rxjs-tslint-rules/commit/ffebed2))