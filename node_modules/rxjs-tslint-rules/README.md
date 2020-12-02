# rxjs-tslint-rules

[![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/cartant/rxjs-tslint-rules/blob/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/rxjs-tslint-rules.svg)](https://www.npmjs.com/package/rxjs-tslint-rules)
[![Downloads](http://img.shields.io/npm/dm/rxjs-tslint-rules.svg)](https://npmjs.org/package/rxjs-tslint-rules)
[![Build status](https://img.shields.io/circleci/build/github/cartant/rxjs-tslint-rules?token=13476bdceec0da05f324e39e3a902da7983f122a)](https://app.circleci.com/pipelines/github/cartant)
[![dependency status](https://img.shields.io/david/cartant/rxjs-tslint-rules.svg)](https://david-dm.org/cartant/rxjs-tslint-rules)
[![devDependency Status](https://img.shields.io/david/dev/cartant/rxjs-tslint-rules.svg)](https://david-dm.org/cartant/rxjs-tslint-rules#info=devDependencies)
[![peerDependency Status](https://img.shields.io/david/peer/cartant/rxjs-tslint-rules.svg)](https://david-dm.org/cartant/rxjs-tslint-rules#info=peerDependencies)

TSLint [is deprecated](https://github.com/palantir/tslint#tslint). All of the rules in this package - with the exception of the RxJS-version-5-only rules - have equivalent ESLint rules in the [`eslint-plugin-rxjs`](https://github.com/cartant/eslint-plugin-rxjs) and [`eslint-plugin-rxjs-angular`](https://github.com/cartant/eslint-plugin-rxjs-angular) packages.

If you've arrived here looking for the TSLint rules that automatically convert RxJS version 5 code to version 6, you can find those rules here: [`rxjs-tslint`](https://github.com/ReactiveX/rxjs-tslint).

That said, if you've not already done so, you might want to checkout the rules in this package, too. Using them, you can avoid potential problems and questionable practices.

### What is it?

`rxjs-tslint-rules` is set of TSLint rules to:

* help manage projects that use `rxjs/add/...` imports;
* enforce or disallow [Finnish notation](https://medium.com/@benlesh/observables-and-finnish-notation-df8356ed1c9b); and
* highlight other potential problems (see the [rules](#rules) for details).

### Why might you need it?

When using imports that patch `Observable`:

```ts
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";
```

TypeScript will see the merged declarations in all modules, making it difficult to find `rxjs/add/...` imports that are missing from modules in which patched observables and operators are used.

This can cause problems, as whether or not `Observable` is patched then depends upon the order in which the modules are executed.

The rules in this package can be used to highlight missing - or unused - imports and other potential problems with RxJS.

There are some examples of policies that can be implemented using particular rule combinations in:

* [Managing RxJS Imports with TSLint](https://ncjamieson.com/managing-rxjs-imports-with-tslint/); and
* [Understanding Lettable Operators](https://ncjamieson.com/understanding-lettable-operators/).
* [TSLint Rules for Version 6](https://ncjamieson.com/tslint-rules-for-version-6/)

And [Christian Liebel](https://github.com/chliebel) has written about his approach to importing RxJS in his blog post:

* [Angular & TypeScript: How to Import RxJS Correctly?](https://christianliebel.com/2017/07/import-rxjs-correctly/)

## Install

Install the package using NPM:

    npm install rxjs-tslint-rules --save-dev

Update your `tslint.json` file to extend this package:

```json
{
  "extends": [
    "rxjs-tslint-rules"
  ],
  "rules": {
    "rxjs-add": { "severity": "error" },
    "rxjs-no-unused-add": { "severity": "error" }
  }
}
```

<a name="rules"></a>

## Rules

**WARNING**: Before configuring any of the following rules, you should ensure that TSLint's `no-unused-variable` rule is **not** enabled in your configuration (or in any configuration that you extend). That rule [has caused problems in the past](https://github.com/cartant/rxjs-tslint-rules/issues/4) - as it leaves the TypeScript program in an unstable state - and has a [significant number of still-open issues](https://github.com/palantir/tslint/search?q=no-unused-variable&state=open&type=Issues&utf8=%E2%9C%93). Consider using the `no-unused-declaration` rule from [`tslint-etc`](https://github.com/cartant/tslint-etc) instead.

The package includes the following rules (none of which are enabled by default):

| Rule | Description | Options |
| --- | --- | --- |
| `rxjs-add` | Enforces the importation of patched observables and operators used in the module. | [See below](#rxjs-add) |
| `rxjs-ban-observables` | Disallows the use of banned observables. | [See below](#rxjs-ban) |
| `rxjs-ban-operators` | Disallows the use of banned operators. | [See below](#rxjs-ban) |
| `rxjs-deep-operators` | Enforces deep importation from within `rxjs/operators` - e.g. `rxjs/operators/map`. Until Webpack does not require configuration for tree shaking to work, there will be situations where deep imports are preferred. | None |
| `rxjs-finnish` | Enforces the use of [Finnish notation](https://medium.com/@benlesh/observables-and-finnish-notation-df8356ed1c9b). | [See below](#rxjs-finnish) |
| `rxjs-just` | Enforces the use of a `just` alias for `of`. Some other Rx implementations use `just` and if that's your preference, this is the rule for you. (There was [some discussion](https://github.com/ReactiveX/rxjs/issues/3747) about deprecating `of` in favour of `just`, but it was decided to stick with `of`.) This rule includes a fixer. | None |
| `rxjs-no-add` | Disallows the importation of patched observables and operators. | [See below](#rxjs-no-add) |
| `rxjs-no-async-subscribe` | Disallows passing async functions to subscribe. | None |
| `rxjs-no-compat` | Disallows importation from locations that depend upon `rxjs-compat`. | None |
| `rxjs-no-connectable` | Disallows operators that return connectable observables. | None |
| `rxjs-no-create` | Disallows the calling of `Observable.create`. Use `new Observable` instead. | None |
| `rxjs-no-deep-operators` | Disallows deep importation from `rxjs/operators`. Deep imports won't be in available in RxJS v6. | None |
| `rxjs-no-do` | I do without `do` operators. [Do you not?](https://youtu.be/spG-Yj0zEyc) Well, `do` isn't always a code smell, but this rule can be useful as a warning. | None |
| `rxjs-no-explicit-generics` | Disallows the explicit specification of generic type arguments when calling operators. Rely upon TypeScript's inference instead. | None |
| `rxjs-no-exposed-subjects` | Disallows exposed subjects. In classes, `Subject` properties and methods that return a `Subject` must be `private`. | [See below](#rxjs-no-exposed-subjects) |
| `rxjs-no-finnish` | Disallows the use of [Finnish notation](https://medium.com/@benlesh/observables-and-finnish-notation-df8356ed1c9b). | None |
| `rxjs-no-ignored-error` | Disallows the calling of `subscribe` without specifying an error handler. | None |
| `rxjs-no-ignored-notifier` | Disallows observables not composed from the `repeatWhen` or `retryWhen` notifier. | None |
| `rxjs-no-ignored-observable` | Disallows the ignoring of observables returned by functions. | None. |
| `rxjs-no-ignored-replay-buffer` | Disallows using `ReplaySubject`, `publishReplay` or `shareReplay` without specifying the buffer size. | None |
| `rxjs-no-ignored-subscribe` | Disallows the calling of subscribe without specifying arguments. | None |
| `rxjs-no-ignored-subscription` | Disallows ignoring the subscription returned by subscribe. | None |
| `rxjs-no-ignored-takewhile-value` | Disallows the ignoring of the `takeWhile` value. | None |
| `rxjs-no-implicit-any-catch` | Like the [`no-implicit-any-catch` rule](https://github.com/typescript-eslint/typescript-eslint/pull/2202) in `@typescript-eslint/eslint-plugin`, but for the `catchError` operator instead of `catch` clauses. | |
| `rxjs-no-index` | Disallows importation from `rxjs/index`, etc. - for the reason, see [this issue](https://github.com/ReactiveX/rxjs/issues/4230). | None |
| `rxjs-no-internal` | Disallows importation from `rxjs/internal`. | None |
| `rxjs-no-nested-subscribe` | Disallows the calling of `subscribe` within a `subscribe` callback. | None |
| `rxjs-no-operator` | Disallows importation from `rxjs/operator`. Useful if you prefer ['pipeable' operators](https://github.com/ReactiveX/rxjs/blob/master/doc/pipeable-operators.md) - which are located in the `operators` directory. | None |
| `rxjs-no-patched` | Disallows the calling of patched methods. Methods must be imported and called explicitly - not via `Observable` or `Observable.prototype`. | [See below](#rxjs-no-add) |
| `rxjs-no-redundant-notify` | Disallows redundant notifications from completed or errored observables. | None |
| `rxjs-no-sharereplay` | Disallows using the `shareReplay` operator. Prior to version 6.4.0, that operator had [some surprising behaviour](https://github.com/ReactiveX/rxjs/pull/4059). | [See below](#rxjs-no-sharereplay) |
| `rxjs-no-subclass` | Disallows subclassing RxJS classes. | None |
| `rxjs-no-subject-unsubscribe` | Disallows calling the `unsubscribe` method of a `Subject` instance. For an explanation of why this can be a problem, see [this](https://stackoverflow.com/a/45112125/6680611) Stack Overflow answer. | None |
| `rxjs-no-subject-value` | Disallows accessing the `value` property of a `BehaviorSubject` instance. | None |
| `rxjs-no-tap` | An alias for `rxjs-no-do`. | None |
| `rxjs-no-unbound-methods` | Disallows the passing of [unbound methods](https://ncjamieson.com/avoiding-switchmap-related-bugs/) as callbacks. | None |
| `rxjs-no-unsafe-catch` | Disallows unsafe `catch` and `catchError` usage in [NgRx](https://github.com/ngrx/platform) effects and [`redux-observable`](https://github.com/redux-observable/redux-observable) epics. | [See below](#rxjs-no-unsafe-catch) |
| `rxjs-no-unsafe-first` | Disallows unsafe `first` and `take` usage in [NgRx](https://github.com/ngrx/platform) effects and [`redux-observable`](https://github.com/redux-observable/redux-observable) epics. | None |
| `rxjs-no-unsafe-scope` | Disallows the use of variables/properties from unsafe/outer scopes in operator callbacks. | [See below](#rxjs-no-unsafe-scope) |
| `rxjs-no-unsafe-subject-next` | Disallows unsafe optional `next` calls. The argument passed to `next` is optional, but not passing it is often unsafe. | None |
| `rxjs-no-unsafe-switchmap` | Disallows unsafe `switchMap` usage in [NgRx](https://github.com/ngrx/platform) effects and [`redux-observable`](https://github.com/redux-observable/redux-observable) epics. | [See below](#rxjs-no-unsafe-switchmap) |
| `rxjs-no-unsafe-takeuntil` | Disallows the application of operators after `takeUntil`. Operators placed after `takeUntil` can effect [subscription leaks](https://ncjamieson.com/avoiding-takeuntil-leaks/). | [See below](#rxjs-no-unsafe-takeuntil) |
| `rxjs-no-unused-add` | Disallows the importation of patched observables or operators that are not used in the module. | None |
| `rxjs-no-wholesale` | Disallows the wholesale importation of `rxjs` or `rxjs/Rx`. | None |
| `rxjs-prefer-angular-async-pipe` | Disallows the calling of `subscribe` within an Angular component. | None |
| `rxjs-prefer-angular-composition` | Enforces the composition of subscriptions within an Angular component. The rule ensures that subscriptions are composed into a class-property `Subscription` and that the `Subscription` is unsubscribed in `ngOnDestroy`. (For an example, see [the tests](https://github.com/cartant/rxjs-tslint-rules/blob/0f53f9258bfe573c9e8948b1381bd446664cf5f9/test/v6/fixtures/prefer-angular-composition/default/fixture.ts.lint#L4-L17).) | None |
| `rxjs-prefer-angular-takeuntil` | Enforces the application of the takeUntil operator when calling `subscribe` within Angular components (and, optionally, within services, directives, and pipes). The rule (optionally) ensures that `takeUntil` is passed a class-property `Subject` and that the `Subject` is notified in `ngOnDestroy`. (For an example, see [the tests](https://github.com/cartant/rxjs-tslint-rules/blob/0f53f9258bfe573c9e8948b1381bd446664cf5f9/test/v6/fixtures/prefer-angular-takeuntil/default/fixture.ts.lint#L10-L25).) | [See below](#rxjs-prefer-angular-takeuntil) |
| `rxjs-prefer-observer` | Enforces the passing of observers to `subscribe` and `tap`. See [this RxJS issue](https://github.com/ReactiveX/rxjs/issues/4159). | [See below](#rxjs-prefer-observer) |
| `rxjs-suffix-subjects` | Disalllows subjects that don't end with the specified `suffix` option. | [See below](#rxjs-suffix-subjects) |
| `rxjs-throw-error` | Enforces the passing of `Error` values to `error` notifications. | None |

### Options

<a name="rxjs-add"></a>

#### rxjs-add

The `rxjs-add` rule takes an optional object with the property `file`. This is the path of the module - relative to the `tsconfig.json` - that imports the patched observables and operators.

For example:

```json
"rules": {
  "rxjs-add": {
    "options": [{
      "allowElsewhere": false,
      "allowUnused": false,
      "file": "./source/rxjs-imports.ts"
    }],
    "severity": "error"
  }
}
```

Specifying the `file` option allows all of the patched observables and operators to be kept in a central location. Said module should be imported before other modules that use patched observables and operators. The importation of said module is not enforced; the rule only ensures that it imports observables and operators that are used in other modules.

If `file` is specified, the `allowElsewhere` and `allowUnused` options can be used to configure whether or not patched imports are allowed in other files and whether or not unused patched imports are allowed. Both `allowElsewhere` and `allowUnused` default to `false`.

Note that there is no `file` option for the `rxjs-no-unused-add` rule, so that rule should not be used in conjunction with the `rxjs-add` rule - if the `file` option is specified for the latter. Use the `rxjs-add` rule's `allowUnused` option instead.

If the `file` option is not specified, patched observables and operators must be imported in the modules in which they are used.

<a name="rxjs-ban"></a>

#### rxjs-ban-observables/operators

The `rxjs-ban-observables` and `rxjs-ban-operators` rules take an object containing keys that are the names of observables/operators and values that are either booleans or strings containing the explanation for the ban.

For example:

```json
"rules": {
  "rxjs-ban-operators": {
    "options": [{
      "concat": "Use the concat factory function",
      "merge": "Use the merge factory function"
    }],
    "severity": "error"
  }
}
```

<a name="rxjs-finnish"></a>

#### rxjs-finnish

The `rxjs-finnish` rule takes an optional object with optional `functions`, `methods`, `parameters`, `properties` and `variables` properties.

The properties are booleans and determine whether or not Finnish notation is enforced. All properties default to `true`.

For example, to enforce Finnish notation for variables only:

```json
"rules": {
  "rxjs-finnish": {
    "options": [{
      "functions": false,
      "methods": false,
      "parameters": false,
      "properties": false,
      "variables": true
    }],
    "severity": "error"
  }
}
```

The options also support `names` and `types` properties that can be used to prevent the enforcement of Finnish notation for certain names or types. The properties themselves are objects with keys that are regular expressions and values that are booleans.

For example, the following configuration will not enforce Finnish notation for names ending with `Stream` or for the `EventEmitter` type:

```json
"rules": {
  "rxjs-finnish": {
    "options": [{
      "names": {
          "Stream$": false
      },
      "types": {
          "^EventEmitter$": false
      }
    }],
    "severity": "error"
  }
}
```

If the `types` property is not specified, it will default to not enforcing Finnish notation for Angular's `EventEmitter` type.

<a name="rxjs-no-add"></a>

#### rxjs-no-add and rxjs-no-patched

The `rxjs-no-add` and `rxjs-no-patched` rules take an optional object with the optional properties `allowObservables` and `allowOperators`. The properties can be specified as booleans - to allow or disallow all observables or operators - or as arrays of strings - to allow or disallow a subset of observables or operators.

For example:

```json
"rules": {
  "rxjs-no-patched": {
    "options": [{
      "allowObservables": ["never", "throw"],
      "allowOperators": false
    }],
    "severity": "error"
  }
}
```

<a name="rxjs-no-exposed-subjects"></a>

#### rxjs-no-exposed-subjects

The rule has an optional `allowProtected` property that can be specified - it defaults to `false`:

```json
"rules": {
  "rxjs-no-exposed-subjects": {
    "options": [{
      "allowProtected": true
    }],
    "severity": "error"
  }
}
```

<a name="rxjs-no-sharereplay"></a>

#### rxjs-no-sharereplay

This rule disallows the use of `shareReplay` as, prior to RxJS 6.4.0, it exhibited some surprising behaviour - see [this PR](https://github.com/ReactiveX/rxjs/pull/4059) for an explanation. In 6.4.0 and later, it's now possible to pass a configuration argument that includes a `refCount` property - so whether or not the implementation reference counts subscriptions can be determined by the caller.

The rule now has an optional `allowConfig` property that can be specified - it defaults to `false` - to allow `shareReplay` to be used as long as a config argument is passed:

```json
"rules": {
  "rxjs-no-sharereplay": {
    "options": [{
      "allowConfig": true
    }],
    "severity": "error"
  }
}
```

<a name="rxjs-no-unsafe-catch"></a>

#### rxjs-no-unsafe-catch

This rule disallows the usage of `catch` and `catchError` operators - in effects and epics - that are not within a flattening operator (`switchMap`, etc.). Such usage will see the effect or epic complete and stop dispatching actions after an error occurs. See Paul Lessing's article: [Handling Errors in NgRx Effects](https://medium.com/@P_Lessing/handling-errors-in-ngrx-effects-a95d918490d9).

The rule takes an optional object with an optional `observable` property. The property can be specifed as a regular expression string or as an array of words and is used to identify the action observables from which effects and epics are composed.

The following options are equivalent to the rule's default configuration:

```json
"rules": {
  "rxjs-no-unsafe-catch": {
    "options": [{
      "observable": "action(s|\\$)?"
    }],
    "severity": "error"
  }
}
```

<a name="rxjs-no-unsafe-scope"></a>

#### rxjs-no-unsafe-scope

The rule takes an optional object with optional `allowDo`, `allowMethods`, `allowParameters`, `allowProperties`, `allowSubscribe` and `allowTap` properties.

If the `allowDo` and `allowTap` options are `true`, the rule is not applied within `do` and `tap` operators respectively.

If the `allowParameters` option is `true`, referencing function parameters from outer scopes is allowed.

If the `allowMethods` option is `true`, calling methods via `this` is allowed.

If the `allowProperties` option is `true`, accessing properties via `this` is allowed.

If the `allowSubscribe` option is `true`, the rule is not applied within `subscribe` callbacks.

The following options are equivalent to the rule's default configuration:

```json
"rules": {
  "rxjs-no-unsafe-scope": {
    "options": [{
      "allowDo": true,
      "allowMethods": true,
      "allowParameters": true,
      "allowProperties": false,
      "allowSubscribe": true,
      "allowTap": true
    }],
    "severity": "error"
  }
}
```

<a name="rxjs-no-unsafe-switchmap"></a>

#### rxjs-no-unsafe-switchmap

The `rxjs-no-unsafe-switchmap` rule does its best to determine whether or not NgRx effects or `redux-observable` epics use the `switchMap` operator with actions for which it could be unsafe.

For example, it would be unsafe to use `switchMap` in an effect or epic that deletes a resource. If the user were to instigate another delete action whilst one was pending, the pending action would be cancelled and the pending delete might or might not occur. Victor Savkin has mentioned such scenarios in [a tweet](https://mobile.twitter.com/victorsavkin/status/963486303118557185) and I've written an article that's based on his tweet: [Avoiding switchMap-Related Bugs](https://ncjamieson.com/avoiding-switchmap-related-bugs/).

The rule takes an optional object with optional `allow`, `disallow` and `observable` properties. The properties can be specifed as regular expression strings or as arrays of words.

If the `allow` option is specified, actions that do not match the regular expression or do not contain any of the specified words will effect an error if `switchMap` is used.

If the `disallow` option is specified, actions that match the regular expression or contain one of the specified words will effect an error if `switchMap` is used.

If neither option is specifed, the rule will default to a set of words are are likely to be present in any actions for which `switchMap` is unsafe.

The `observable` property is used to identify the action observables from which effects and epics are composed.

The following options are equivalent to the rule's default configuration:

```json
"rules": {
  "rxjs-no-unsafe-switchmap": {
    "options": [{
      "disallow": ["add", "create", "delete", "post", "put", "remove", "set", "update"],
      "observable": "action(s|\\$)?"
    }],
    "severity": "error"
  }
}
```

To disallow or warn about all uses of `switchMap` within effects or epics, use a regular expression that will match all action types:

```json
"rules": {
  "rxjs-no-unsafe-switchmap": {
    "options": [{
      "disallow": "."
    }],
    "severity": "error"
  }
}
```

<a name="rxjs-no-unsafe-takeuntil"></a>

#### rxjs-no-unsafe-takeuntil

The rule takes an optional object with optional `alias` and `allow` properties. 

The `alias` property is an array containing the names of operators that aliases for `takeUntil`.
      
The `allow` property is an array containing the names of the operators that are allowed to follow `takeUntil`.

The following options are equivalent to the rule's default configuration:

```json
"rules": {
  "rxjs-no-unsafe-takeuntil": {
    "options": [{
      "allow": ["count", "defaultIfEmpty", "endWith", "every", "finalize", "finally", "isEmpty", "last", "max", "min", "publish", "publishBehavior", "publishLast", "publishReplay", "reduce", "share", "shareReplay", "skipLast", "takeLast", "throwIfEmpty", "toArray"]
    }],
    "severity": "error"
  }
}
```

<a name="rxjs-prefer-angular-takeuntil"></a>

#### rxjs-prefer-angular-takeuntil

The rule takes an optional object with optional `alias`, `checkDecorators` and `checkDestroy` properties. The `alias` property is an array containing the names of operators that aliases for `takeUntil`. The `checkDecorators` property is an array containing the names of the decorators that determine whether or not a class is checked. And the `checkDestroy` property is a boolean that determines whether or not a `Subject`-based `ngOnDestroy` must be implemented.

<a name="rxjs-prefer-observer"></a>

#### rxjs-prefer-observer

The rule takes an optional object with an optional `allowNext` property. The property defaults to `true`, allowing a `next` callback to be passed instead of an observer. For more information, see [this RxJS issue](https://github.com/ReactiveX/rxjs/issues/4159).

The following options are equivalent to the rule's default configuration:

```json
"rules": {
  "rxjs-prefer-observer": {
    "options": [{
      "allowNext": true
    }],
    "severity": "error"
  }
}
```

<a name="rxjs-suffix-subjects"></a>

#### rxjs-suffix-subjects

The rule takes an optional object with optional `parameters`, `properties` and `variables` properties. The properties are booleans and determine whether or not subjects used in those situations need a suffix.

`parameters`, `properties` and `variables` default to `true`, and the default suffix is 'Subject'.

The object also has optional `types` properties which are themselves objects containing keys that are regular expressions and values that are booleans - indicating whether suffixing is required for particular types.

The following options are equivalent to the rule's default configuration:

```json
"rules": {
  "rxjs-suffix-subjects": {
    "options": [{
      "parameters": true,
      "properties": true,
      "suffix": "Subject",
      "variables": true
    }],
    "severity": "error"
  }
}
```

## Gotchas

### @angular/cli

Angular's CLI runs TSLint three times:

* first, with application files from `src/` (using `src/tsconfig.app.json`);
* then with the test files from `src/` (using `src/tsconfig.spec.json`);
* and, finally, with files from `e2e/` (using `e2e/tsconfig.e2e.json`).

If you are using the `file` option of the `rxjs-add` rule to ensure patched observables and operators are kept in a central location, there are some configuration changes that you should make:

* I'd recommend switching off `rxjs-add` for the `e2e` linting, as the central file isn't necessary or appropriate. The simplest way to do this is to create an `e2e/tslint.json` file with the following content:

        {
          "extends": ["../tslint.json"],
          "rules": {
            "rxjs-add": { "severity": "off" }
          }
        }

* And, for the test linting, I'd recommend adding the central file to the TypeScript configuration. If the central file is, say, `src/rxjs.imports.ts`, add that file to the `"files"` in `src/tsconfig.spec.json`:

        "files": [
          "rxjs.imports.ts",
          "test.ts"
        ]

    Alternatively, you can import `rxjs.imports.ts` directly into `tests.ts`, like this:

        import "./rxjs.imports";

With these changes, the rule should play nice with the CLI's running of TSLint. If you are using `"allowUnused": false` and receive errors about unused operators, you should make sure that files in which those operators are used are imported into at least one test. (The rule will walk **all files** included in the TypeScript program - not just the specs - so if an unused error is effected, the file using the unused operator is not present in the program and needs to be imported into a test.)

If you experience difficulties in configuring the rules with an `@angular/cli`-generated application, there is an example in this repo of a working configuration. To see the configuration changes that were made to a vanilla CLI application, have a look at [this commit](https://github.com/cartant/rxjs-tslint-rules/commit/73872cc381765d2fcc9fc22cb686128b76dfd6fb).

### Observable.create

`Observable.create` is [declared as a `Function`](https://github.com/ReactiveX/rxjs/blob/5.3.1/src/Observable.ts#L46-L58), which means that its return type is `any`. This results in an observable that's not seen by the rules, as they use TypeScript's [TypeChecker](https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API#using-the-type-checker) to determine whether or not a call involves an observable.

The rule implementations include no special handling for this case, so if spurious errors are effected due to `Observable.create`, explicit typing can resolve them. For example:

```ts
const ob: Observable<number> = Observable.create((observer: Observer<number>) => { ...
```
