# tslint-microsoft-contrib

[![npm version](https://badge.fury.io/js/tslint-microsoft-contrib.svg)](https://badge.fury.io/js/tslint-microsoft-contrib)
[![Downloads](https://img.shields.io/npm/dm/tslint-microsoft-contrib.svg)](https://npmjs.org/package/tslint-microsoft-contrib)
[![TravisCI Build Status](https://travis-ci.org/Microsoft/tslint-microsoft-contrib.svg?branch=master)](https://travis-ci.org/Microsoft/tslint-microsoft-contrib)
[![Azure Pipelines Build Status](https://dev.azure.com/ms/tslint-microsoft-contrib/_apis/build/status/tslint-microsoft-contrib?branchName=master)](https://dev.azure.com/ms/tslint-microsoft-contrib/_build/latest?definitionId=68&branchName=master)
[![Join the chat at https://gitter.im/Microsoft/tslint-microsoft-contrib](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Microsoft/tslint-microsoft-contrib?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

A set of [TSLint](https://github.com/palantir/tslint) rules used on some Microsoft projects.

## Installation

```shell
npm install tslint-microsoft-contrib --save-dev
```

## TSLint and corresponding tslint-microsoft-contrib version

| TSLint version | tslint-microsoft-contrib version                      |
| -------------- | ----------------------------------------------------- |
| **>= 5.x**     | 5.x and 6.x (supporting TypeScript 2.3.x, >=2.4, 3.x) |
| **>= 4.x**     | 4.x (supporting TypeScript 2.1.x)                     |
| **>= 3.2.x**   | 2.x                                                   |
| **3.1.x**      | unsupported                                           |
| **3.0.x**      | unsupported                                           |
| **2.x**        | 1.x                                                   |

## Configuration

Add `"node_modules/tslint-microsoft-contrib"` under your `"rulesDirectory"` configuration to inform TSLint it should look under this package for additional rules in your `tslint.json`:

```json
{
    "rulesDirectory": ["node_modules/tslint-microsoft-contrib"],
    "rules": {
        // ...
    }
}
```

### Which Rules Should I Turn On?

There certainly are a lot of options!

If you extend from one of the following configurations, `rulesDirectory` will have `node_modules/tslint-microsoft-contrib` included for you.

> Please note, some of the default ruleset rules require the `--project` TSLint option.

#### Recommended

To start, you can enable our stable "recommended" defaults that come with tslint-microsoft-contrib ([recommended.json](./configs/recommended.json)) by adding `"tslint-microsoft-contrib/recommended"` under `"extends"` in your `tslint.json`:

```json
{
    "extends": ["tslint-microsoft-contrib/recommended"]
    // ...
}
```

These rules will not be added to in minor or patch releases, but will be in major releases.

#### Latest

To run with the latest and greatest rules ([latest.json](./configs/latest.json)), extend from `tslint-microsoft-contrib/latest`:

```json
{
    "extends": ["tslint-microsoft-contrib/latest"]
    // ...
}
```

These rules will not be added to in patch releases, but will be in minor releases.

#### Legacy

The old "recommended" ruleset that ships by extending `tslint-microsoft-contrib` itself contains a list of rules that includes core TSLint rules.

To start, you can enable our recommended defaults ([recommended.json](./configs/recommended.json)) by adding just `"tslint-microsoft-contrib"` under `"extends"` in your `tslint.json`:

```json
{
    "extends": ["tslint-microsoft-contrib"]
    // ...
}
```

**This ruleset is considered legacy**; it is generally preferable to extend from the 'recommended' or 'latest' rulesets.
We recommend you instead explicitly include `tslint:recommended`, `tslint:latest`, or `tslint:all` in your `tslint.json` rather than enable core rules through this configuration.

In the next major version of TSLint, this will instead be an alias for `"tslint-microsoft-contrib/recommended"`.

### Overriding Configurations

You can [disable rules](https://palantir.github.io/tslint/usage/rule-flags) you don't find useful.

If you rely on version ranges in your dependencies then you may find that new rules being added to the product create violations and fail your build.
We recommend you specify exact versions of lint libraries, including `tslint-microsoft-contrib`, in your `package.json`.

### Supported Rules

<table>
  <thead>
    <th>Rule Name</th>
    <th>Description</th>
    <th>Since</th>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>chai-prefer-contains-to-index-of</code>
      </td>
      <td>
        Avoid Chai assertions that invoke indexOf and compare for a -1 result.
        It is better to use the chai .contain() assertion API instead because the failure message will be clearer if the test fails.
      </td>
      <td>2.0.10</td>
    </tr>
    <tr>
      <td>
        <code>chai-vague-errors</code>
      </td>
      <td>
        Avoid Chai assertions that result in vague errors.
        For example, asserting <code>expect(something).to.be.true</code> will result in the failure message "Expected true received false".
        This is a vague error message that does not reveal the underlying problem.
        It is especially vague in TypeScript because stack trace line numbers often do not match the source code.
        A better pattern to follow is the xUnit Patterns <a href="http://xunitpatterns.com/Assertion%20Message.htm">Assertion Message</a> pattern.
        The previous code sample could be better written as <code>expect(something).to.equal(true, 'expected something to have occurred');</code>
      </td>
      <td>1.0</td>
    </tr>
    <tr>
      <td>
        <code>detect-child-process</code>
      </td>
      <td>
        Detects usages of child_process and especially child_process.exec() with a non-literal first argument.
        It is dangerous to pass a string constructed at runtime as the first argument to the <code>child_process.exec()</code>.
        <code>child_process.exec(cmd)</code> runs <code>cmd</code> as a shell command which could allow an attacker to execute malicious code injected into <code>cmd</code>.
        Instead of <code>child_process.exec(cmd)</code> you should use <code>child_process.spawn(cmd)</code> or specify the command as a literal, e.g. <code>child_process.exec('ls')</code>.
      </td>
      <td>6.2.0-beta</td>
    </tr>
    <tr>
      <td>
        <code>export-name</code>
      </td>
      <td>
        The name of the exported module must match the filename of the source file.
        This is case-insensitive by default but ignores file extension.
        It can be configured to be case-insensitive or to allow names matching a regex.
        For example, to allow names that differ only in case and an exported name like myChartOptions, then configure the rule like this: <code>"export-name": [true, { "ignore-case": true, "allow": ["myChartOptions"] }]</code>.
        You can also just give a list of allowed names, like <code>"export-name": [true, "myChartOptions"]</code>.
      </td>
      <td>0.0.3</td>
    </tr>
    <tr>
      <td>
        <code>function-name</code>
      </td>
      <td>
        Applies a naming convention to function names and method names.
        You can configure the naming convention by passing parameters.
        Please note, the private-method-regex does take precedence over the static-method-regex, so a private static method must match the private-method-regex.
        The default values are:
        <code>
          [ true, {
            "method-regex": "^[a-z][\\w\\d]+$",
            "private-method-regex": "^[a-z][\\w\\d]+$",
            "protected-method-regex": "^[a-z][\\w\\d]+$",
            "static-method-regex": "^[A-Z_\\d]+$",
            "function-regex": "^[a-z][\\w\\d]+$"
          } ]
        </code>
        This rule has some overlap with the [tslint variable-name rule](https://palantir.github.io/tslint/rules/variable-name/); however, the rule here is more configurable.
      </td>
      <td>2.0.7, 2.0.14</td>
    </tr>
    <tr>
      <td>
        <code>import-name</code>
      </td>
      <td>
        The name of the imported module must match the name of the thing being imported. For special characters (<code>-</code>, <code>.</code>, <code>_</code>) remove them and make the following character uppercase.
        For example, it is valid to name imported modules the same as the module name: <code>import Service = require('x/y/z/Service')</code> and <code>import Service from 'x/y/z/Service'</code>.
        But it is invalid to change the name being imported, such as: <code>import MyCoolService = require('x/y/z/Service')</code> and <code>import MyCoolService from 'x/y/z/Service'</code>.
        When containing special characters such as <code>import $$ from 'my-awesome_library';</code> the corresponding configuration would look like <code>'import-name': [true, { 'myAwesomeLibrary': '$$' }]</code>.
        Since version 2.0.9 it is possible to configure this rule with a list of exceptions.
        For example, to allow <code>underscore</code> to be imported as <code>_</code>, add this configuration: <code>'import-name': [ true, { 'underscore': '_' }]</code>
      </td>
      <td>2.0.5</td>
    </tr>
    <tr>
      <td>
        <code>informative-docs</code>
      </td>
      <td>
        Enforces that comments do more than just reiterate names of objects.
        Either be informative with comments or don't include a comment.
        You can override the default list of "useless" words ignored by the comment checker like <code>"informative-docs": [true, { "useless-words": ["a", "an", "the", "text" ] } ]</code>.
        You can indicate words as synonyms (aliases) of each other like <code>"informative-docs": [true, { "aliases": { text: ["emoji", "smiley"] } ]</code>.
      </td>
      <td>6.0.0-beta</td>
    </tr>
    <tr>
      <td>
        <code>insecure-random</code>
      </td>
      <td>
        Do not use insecure sources for random bytes.
        Use a secure random number generator instead.
        Bans all uses of <code>Math.random</code> and <code>crypto.pseudoRandomBytes</code>.
        Better alternatives are <code>crypto.randomBytes</code> and <code>window.crypto.getRandomValues</code>.
        <br />
        References:
        <ul>
          <li><a href="https://cwe.mitre.org/data/definitions/330.html">CWE 330</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random">MDN Math.random</a></li>
          <li><a href="https://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback"><code>Node.js crypto.randomBytes()</code></a></li>
          <li><a href-"https://developer.mozilla.org/en-US/docs/Web/API/window.crypto.getRandomValues"><code>window.crypto.getRandomValues()</code></a></li>
        </ul>
      </td>
      <td>2.0.11</td>
    </tr>
    <tr>
      <td>
        <code>jquery-deferred-must-complete</code>
      </td>
      <td>
        When a JQuery Deferred instance is created, then either <code>reject()</code> or <code>resolve()</code> must be called on it within all code branches in the scope.
        For more examples see the <a href="https://github.com/Microsoft/tslint-microsoft-contrib/issues/26">feature request</a>.
      </td>
      <td>1.0</td>
    </tr>
    <tr>
      <td>
        <code>max-func-body-length</code>
      </td>
      <td>
        Avoid long functions.
        The line count of a function body must not exceed the value configured within this rule's options.
        <br />
        You can set up a general max function body length applied for every function/method/arrow function e.g. <code>[true, 30]</code> or set different maximum length for every type e.g. <code>[true, { "func-body-length": 10 , "func-expression-body-length": 10 , "arrow-body-length": 5, "method-body-length": 15, "ctor-body-length": 5 }]</code>.
        To specify a function name whose parameters you can ignore for this rule, pass a regular expression as a string(this can be useful for Mocha users to ignore the <code>describe()</code> function).
        Since version 2.0.9, you can also ignore single- and multi-line comments from the total function length, eg. <code>[true, <code>{ "ignore-comments": true }]</code>.
      </td>
      <td>2.0.3</td>
    </tr>
    <tr>
      <td>
      <code>missing-jsdoc</code>
      </td>
      <td>
        Deprecated - This rule can be replaced with TSLint's <code>file-header</code> rule.
        All files must have a top level [JSDoc](http://usejsdoc.org/) comment.
        A JSDoc comment starts with /** (not one more or one less asterisk) and a JSDoc at the 'top-level' appears without leading spaces.
        Trailing spaces are acceptable but not recommended
      </td>
      <td>1.0</td>
    </tr>
    <tr>
      <td>
        <code>missing-optional-annotation</code>
      </td>
      <td>
        Deprecated - This rule is now enforced by the TypeScript compiler.
        A parameter that follows one or more parameters marked as optional is not itself marked optional.
      </td>
      <td>0.0.1</td>
    </tr>
    <tr>
      <td>
        <code>mocha-avoid-only</code>
      </td>
      <td>
        Do not invoke Mocha's <code>describe.only</code>, <code>it.only</code>, or <code>context.only</code> functions.
        These functions are useful ways to run a single unit test or a single test case during your build, but please be careful to not push these methods calls to your version control repository because it will turn off any of the other tests.
      </td>
      <td>1.0</td>
    </tr>
    <tr>
      <td>
        <code>mocha-no-side-effect-code</code>
      </td>
      <td>
        All test logic in a Mocha test case should be within Mocha lifecycle method and not defined statically to execute when the module loads.
        Put all assignments and initialization statements in a <code>before()</code>, <code>beforeEach()</code>, <code>beforeAll()</code>, <code>after()</code>, <code>afterEach()</code>, <code>afterAll()</code>, or <code>it()</code> function.
        Code executed outside of these lifecycle methods can throw exceptions before the test runner is initialized and can result in errors or even test runner crashes.
        This rule can be configured with a regex to ignore certain initializations.
        For example, to ignore any calls to <code>RestDataFactory</code> configure the rule with: <code>[true, { ignore: '^RestDataFactory\\..*' }]</code>
      </td>
      <td>2.0.10</td>
    </tr>
    <tr>
      <td>
        <code>mocha-unneeded-done</code>
      </td>
      <td>
      A function declares a MochaDone parameter but only resolves it synchronously in the main function.
      The MochaDone parameter can be safely removed from the parameter list.
    </td>
      <td>2.0.10</td>
    </tr>
    <tr>
      <td>
        <code>no-backbone-get-set-outside-model</code>
      </td>
      <td>
        Avoid using <code>model.get('x')</code> and <code>model.set('x', value)</code> Backbone accessors outside of the owning model.
        This breaks type safety and you should define getters and setters for your attributes instead.
      </td>
      <td>1.0</td>
    </tr>
    <tr>
      <td>
        <code>no-banned-terms</code>
      </td>
      <td>
        Do not use banned terms:
        <ul>
          <li><a href="https://msdn.microsoft.com/library/7t96kt3h(v=vs.94).aspx">caller</a></li>
          <li><a href="https://msdn.microsoft.com/library/334e1zza(v=vs.94).aspx">callee</a></li>
          <li><a href="https://msdn.microsoft.com/library/12k71sw7(v=vs.94).aspx">eval</a></li>
          <li><a href="https://msdn.microsoft.com/library/he95z461(v=vs.94).aspx">arguments</a>
        </ul>
        These terms refer to functions or properties that should not be used, so it is best practice to simply avoid them.
      </td>
      <td>0.0.1</td>
    </tr>
    <tr>
      <td>
        <code>no-constant-condition</code>
      </td>
      <td>
        Do not use constant expressions in conditions.
        Similar to the [ESLint no-constant-condition](https://eslint.org/docs/rules/no-constant-condition) rule.
        Since version 2.0.14, this rule accepts a parameter called <code>checkLoops</code> which defaults to true.
        If set to false then loops are not checked for conditionals.
        For example, disable loop checking with <code>[ true, { 'checkLoops': false } ]</code>.
      </td>
      <td>1.0, 2.0.14</td>
    </tr>
    <tr>
      <td>
        <code>no-control-regex</code>
      </td>
      <td>Do not use control characters in regular expressions . Similar to the [ESLint no-control-regex](https://eslint.org/docs/rules/no-control-regex) rule</td>
      <td>1.0</td>
    </tr>
    <tr>
      <td>
        <code>no-cookies</code>
      </td>
      <td>Do not use cookies.</td>
      <td>0.0.1</td>
    </tr>
    <tr>
      <td>
        <code>no-delete-expression</code>
      </td>
      <td>
        Do not delete expressions.
        Only properties should be deleted.
      </td>
      <td>0.0.2</td>
    </tr>
    <tr>
      <td>
        <code>no-disable-auto-sanitization</code>
      </td>
      <td>
        Do not disable auto-sanitization of HTML because this opens up your page to an XSS attack.
        Specifically, do not use the <a href="https://msdn.microsoft.com/en-us/library/windows/apps/hh767331.aspx">execUnsafeLocalFunction</a> or <a href="https://msdn.microsoft.com/en-us/library/windows/apps/br211696.aspx">setInnerHTMLUnsafe</a> functions.
      </td>
      <td>0.0.1</td>
    </tr>
    <tr>
      <td>
        <code>no-document-domain</code>
      </td>
      <td>
        Do not write to <code>document.domain</code>.
        Scripts setting document.domain to any value should be validated to ensure that the value is on a list of allowed sites.
        Also, if your site deals with PII in any way then document.domain must not be set to a top-level domain (for example, live.com) but only to an appropriate subdomain (for example, billing.live.com).
        If you are absolutely sure that you want to set document.domain then add a tslint suppression comment for the line.
        For more information see the [Phase 4 Verification page of the Microsoft SDL](https://msdn.microsoft.com/en-us/library/cc307418.aspx).
      </td>
      <td>2.0.3</td>
    </tr>
    <tr>
      <td>
        <code>no-document-write</code>
      </td>
      <td>Do not use document.write</td>
      <td>0.0.1</td>
    </tr>
    <tr>
      <td>
        <code>no-duplicate-case</code>
      </td>
      <td>
        Deprecated - This rule can be replaced with TSLint's no-duplicate-switch-case.
        Do not use duplicate case labels in switch statements.
        Similar to the <a href="https://eslint.org/docs/rules/no-duplicate-case.html">ESLint no-duplicate-case</a> rule.
      </td>
      <td>1.0</td>
    </tr>
    <tr>
      <td>
        <code>no-duplicate-parameter-names</code>
      </td>
      <td>
        Deprecated - This rule is now enforced by the TypeScript compiler.
        Do not write functions or methods with duplicate parameter names.
      </td>
      <td>0.0.1</td>
    </tr>
    <tr>
      <td>
        <code>no-empty-interfaces</code>
      </td>
      <td>
        Deprecated - This rule can be replaced with TSLint's no-empty-interface.
        Do not use empty interfaces.
        They are compile-time only artifacts and they serve no useful purpose.
      </td>
      <td>1.0</td>
    </tr>
    <tr>
      <td>
        <code>no-empty-line-after-opening-brace</code>
      </td>
      <td>Avoid an empty line after an opening brace.</td>
      <td>2.0.6</td>
    </tr>
    <tr>
      <td>
        <code>no-exec-script</code>
      </td>
      <td>Do not use the execScript functions</td>
      <td>0.0.1</td>
    </tr>
    <tr>
      <td>
        <code>no-for-in</code>
      </td>
      <td>
        Avoid use of for-in statements.
        They can be replaced by Object.keys.
      </td>
      <td>1.0</td>
    </tr>
    <tr>
      <td>
        <code>no-function-constructor-with-string-args</code>
      </td>
      <td>
        Deprecated - This rule is in the TSLint product as <code>function-constructor</code>.
        Do not use the version of the Function constructor that accepts a string argument to define the body of the function.
      </td>
      <td>0.0.1</td>
    </tr>
    <tr>
      <td>
        <code>no-function-expression</code>
      </td>
      <td>
        Do not use function expressions; use arrow functions (lambdas) instead.
        In general, lambdas are simpler to use and avoid the confusion about what the 'this' references points to.
        Function expressions that contain a 'this' reference are allowed and will not create a failure.
      </td>
      <td>1.0</td>
    </tr>
    <tr>
      <td>
        <code>no-http-string</code>
      </td>
      <td>
        Do not use strings that start with 'http:'.
        URL strings should start with 'https:'.
        Http strings can be a security problem and indicator that your software may suffer from cookie-stealing attacks.
        Since version 1.0, this rule takes a list of regular expressions as a parameter.
        Any string matching that regular expression will be ignored.
        For example, to allow http connections to example.com and examples.com, configure your rule like this: <code>"no-http-string": [true, "http://www.example.com/?.*", "http://www.examples.com/?.*"]</code>.
      </td>
      <td>0.0.3</td>
    </tr>
    <tr>
      <td>
        <code>no-increment-decrement</code>
      </td>
      <td>
        Deprecated - This rule is in the TSLint product as <code>increment-decrement</code>.
        Avoid use of increment and decrement operators particularly as part of complicated expressions.
      </td>
      <td>0.0.1</td>
    </tr>
    <tr>
      <td>
        <code>no-inner-html</code>
      </td>
      <td>
        Do not write values to innerHTML, outerHTML, or set HTML using the JQuery html() function.
        Writing values to innerHTML can expose your website to XSS injection attacks.
        All strings must be escaped before being rendered to the page.
      </td>
      <td>2.0.4</td>
    </tr>
    <tr>
      <td>
        <code>no-invalid-regexp</code>
      </td>
      <td>
        Do not use invalid regular expression strings in the RegExp constructor.
        Similar to the <a href="https://eslint.org/docs/rules/no-invalid-regexp.html">ESLint no-invalid-regexp</a> rule.
      </td>
      <td>1.0</td>
    </tr>
    <tr>
      <td>
        <code>no-jquery-raw-elements</code>
      </td>
      <td>
        Do not create HTML elements using JQuery and string concatenation.
        It is error prone and can hide subtle defects.
        Instead use the JQuery element API.
      </td>
      <td>2.0.8</td>
    </tr>
    <tr>
      <td>
        <code>no-missing-visibility-modifiers</code>
      </td>
      <td>
        Deprecated - This rule is in the TSLint product as <code>member-access</code>.
        Class members (both fields and methods) should have visibility modifiers specified.
        The Principle of Least Visibility guides us to prefer private methods and fields when possible.
        If a developer forgets to add a modifier then TypeScript assumes the element should be public, which is the wrong default choice.
      </td>
      <td>1.0</td>
    </tr>
    <tr>
      <td>
        <code>no-multiline-string</code>
      </td>
      <td>Do not declare multiline strings</td>
      <td>0.0.1</td>
    </tr>
    <tr>
      <td>
      <code>no-multiple-var-decl</code>
      </td>
      <td>
        Deprecated - This rule is now part of the base TSLint product as the rule named 'one-variable-per-declaration'.
        Do not use comma separated variable declarations.
      </td>
      <td>1.0</td>
    </tr>
    <tr>
      <td>
        <code>no-octal-literal</code>
      </td>
      <td>Do not use octal literals or escaped octal sequences.</td>
      <td>0.0.1</td>
    </tr>
    <tr>
      <td>
        <code>no-regex-spaces</code>
      </td>
      <td>
        Do not use multiple spaces in a regular expression literal.
        Similar to the <a href="https://eslint.org/docs/rules/no-regex-spaces.html">ESLint no-regex-spaces</a> rule.
      </td>
      <td>1.0</td>
    </tr>
    <tr>
      <td>
        <code>no-relative-imports</code>
      </td>
      <td>
        Do not use relative paths when importing external modules or ES6 import declarations.
        The advantages of removing all relative paths from imports is that:
        <ul>
          <li>The import name will be consistent across all files and subdirectories so searching for usages is much easier.</li>
          <li>Moving source files to different folders will not require you to edit your import statements.</li>
          <li>3) It will be possible to copy and paste import lines between files regardless of the file location.</li>
          <li>4) version control diffs will be simplified by having overall fewer edits to the import lines.</li>
        </ul>
        Option <code>allow-siblings</code> can be passed to allow relative imports for files in the same or nested folders.
        <br />
        Note: we don't often recommend this rule.
        See <a href="https://github.com/Microsoft/tslint-microsoft-contrib/issues/435">#435</a> for discussion.
      </td>
      <td>2.0.5</td>
    </tr>
    <tr>
      <td>
        <code>no-reserved-keywords</code>
      </td>
      <td>
        Deprecated - This rule can be replaced with TSLint's variable-name.
        Do not use reserved keywords as names of local variables, fields, functions, or other identifiers.
        Since version 2.0.9 this rule accepts a parameter called <code>allow-quoted-properties</code>.
        If true, interface properties in quotes will be ignored.
        This can be a useful way to avoid verbose suppress-warning comments for generated d.ts files.
        <br/>
        This rule has some overlap with the <a href="https://palantir.github.io/tslint/rules/variable-name">tslint variable-name rule</a>; however, the rule here finds more keywords and more usages.
      </td>
      <td>0.0.1, 2.0.9</td>
    </tr>
    <tr>
      <td>
        <code>no-single-line-block-comment</code>
      </td>
      <td>
        Avoid single line block comments and use single line comments instead.
        Block comments do not nest properly and have no advantages over normal single-line comments.
      </td>
      <td>2.0.10</td>
    </tr>
    <tr>
      <td>
      <code>no-stateless-class</code>
      </td>
      <td>
        Deprecated - This rule can be replaced with TSLint's no-unnecessary-class.
        A stateless class represents a failure in the object oriented design of the system.
        A class without state is better modeled as a module or given some state.
        A stateless class is defined as a class with only static members and no parent class.
      </td>
      <td>2.0.4</td>
    </tr>
    <tr>
      <td>
        <code>no-string-based-set-immediate</code>
      </td>
      <td>
        Do not use the version of setImmediate that accepts code as a string argument.
        However, it is acceptable to use the version of setImmediate where a direct reference to a function is provided as the callback argument.
      </td>
      <td>0.0.1</td>
    </tr>
    <tr>
      <td>
        <code>no-string-based-set-interval</code>
      </td>
      <td>
        Do not use the version of setInterval that accepts code as a string argument.
        However, it is acceptable to use the version of setInterval where a direct reference to a function is provided as the callback argument.
      </td>
      <td>0.0.1</td>
    </tr>
    <tr>
      <td>
        <code>no-string-based-set-timeout</code>
      </td>
      <td>
        Do not use the version of setTimeout that accepts code as a string argument.
        However, it is acceptable to use the version of setTimeout where a direct reference to a function is provided as the callback argument.
      </td>
      <td>0.0.1</td>
    </tr>
    <tr>
      <td>
        <code>no-suspicious-comment</code>
      </td>
      <td>
        Do not use suspicious comments, such as BUG, HACK, FIXME, LATER, LATER2, TODO.
        We recommend that you run this rule before each release as a quality checkpoint.
        Reference: <a href="https://cwe.mitre.org/data/definitions/546.html">CWE-546 Suspicious Comment</a>.
      </td>
      <td>2.0.11</td>
    </tr>
    <tr>
      <td>
        <code>no-typeof-undefined</code>
      </td>
      <td>
        Do not use the idiom <code>typeof x === 'undefined'</code>.
        You can safely use the simpler <code>x === undefined</code> or perhaps <code>x == null</code> if you want to check for either null or undefined.
      </td>
      <td>2.0.8</td>
    </tr>
    <tr>
      <td>
        <code>no-unexternalized-strings</code>
      </td>
      <td>
        Ensures that double quoted strings are passed to a localize call to provide proper strings for different locales.
        The rule can be configured using an object literal as documented in the <a href="https://github.com/Microsoft/tslint-microsoft-contrib/issues/95#issuecomment-173149989">feature request</a>.
      </td>
      <td>2.0.1</td>
    </tr>
    <tr>
      <td>
        <code>no-unnecessary-bind</code>
      </td>
      <td>
        Deprecated - This rule is in the TSLint product as <code>unnecessary-bind</code>.
        Do not bind 'this' as the context for a function literal or lambda expression.
        If you bind 'this' as the context to a function literal, then you should just use a lambda without the bind.
        If you bind 'this' as the context to a lambda, then you can remove the bind call because 'this' is already the context for lambdas.
        Works for Underscore methods as well.
      </td>
      <td>1.0</td>
    </tr>
    <tr>
      <td>
        <code>no-unnecessary-field-initialization</code>
      </td>
      <td>
        Do not unnecessarily initialize the fields of a class to values they already have.
        For example, there is no need to explicitly set a field to <code>undefined</code> in the field's initialization or in the class' constructor.
        Also, if a field is initialized to a constant value (null, a string, a boolean, or some number) then there is no need to reassign the field to this value within the class constructor.
      </td>
      <td>2.0.9</td>
    </tr>
    <tr>
      <td>
        <code>no-unnecessary-local-variable</code>
      </td>
      <td>
        Do not declare a variable only to return it from the function on the next line.
        It is always less code to simply return the expression that initializes the variable.
      </td>
      <td>2.0.4</td>
    </tr>
    <tr>
      <td>
        <code>no-unnecessary-override</code>
      </td>
      <td>
        Do not write a method that only calls super() on the parent method with the same arguments.
        You can safely remove methods like this and Javascript will correctly dispatch the method to the parent object.
      </td>
      <td>2.0.4</td>
    </tr>
    <tr>
      <td>
        <code>no-unnecessary-semicolons</code>
      </td>
      <td>Remove unnecessary semicolons.</td>
      <td>0.0.1</td>
    </tr>
    <tr>
      <td>
        <code>no-unsupported-browser-code</code>
      </td>
      <td>
        Avoid writing browser-specific code for unsupported browser versions.
        Browser versions are specified in the rule configuration options, eg: <code>[true, [ "IE 11", "Firefox > 40", "Chrome >= 45" ] ]</code>.
        Browser-specific blocks of code can then be designated with a single-line comment, like so: <code>// Browser specific: IE 10</code>, or with a jsdoc like this: <code>@browserspecific chrome 40</code>.</td>
      <td>2.0.10</td>
    </tr>
    <tr>
      <td>
        <code>no-useless-files</code>
      </td>
      <td>
        Avoid keeping files around that only contain commented out code, are completely empty, or only contain whitespace characters.
      </td>
      <td>4.0.2</td>
    </tr>
    <tr>
      <td>
        <code>no-var-self</code>
      </td>
      <td>
        Deprecated - This rule can be replaced with TSLint's no-this-assignment.
        Do not use <code>var self = this</code>; instead, manage scope with arrow functions/lambdas.
        Self variables are a common practice in JavaScript but can be avoided in TypeScript.
        By default the rule bans any assignments of the <code>this</code> reference.
        If you want to enforce a naming convention or allow some usages then configure the rule with a regex.
        By default the rule is configured with <code>(?!)</code> which matches nothing.
        You can pass <code>^self$</code> to allow variables named self or pass <code>^(?!self$)</code> to allow anything other than self, for example.
      </td>
      <td>2.0.8</td>
    </tr>
    <tr>
      <td>
        <code>no-with-statement</code>
      </td>
      <td>
        Do not use <code>with</code> statements.
        Assign the item to a new variable instead.
      </td>
      <td>0.0.1</td>
    </tr>
    <tr>
      <td>
        <code>non-literal-fs-path</code>
      </td>
      <td>
        Detect <code>fs</code> function calls with a non literal filepath.
        For security reasons, it may be best to only pass string literals as filesystem paths.
        Otherwise, it may be possible for an attacker to read and write arbitrary files on your system through path traversal attacks.
      </td>
      <td>6.0.0-beta</td>
    </tr>
    <tr>
      <td>
        <code>non-literal-require</code>
      </td>
      <td>
        Detect <code>require()</code> function calls for something that is not a string literal.
        For security reasons, it may be best to only <code>require()</code> string literals.
        Otherwise, it may be possible for an attacker to somehow change the value and download arbitrary Javascript into your page.
      </td>
      <td>2.0.14</td>
    </tr>
    <tr>
      <td>
        <code>possible-timing-attack</code>
      </td>
      <td>
        Avoid timing attacks by not making direct string comparisons to sensitive data.
        Do not compare against variables named password, secret, api, apiKey, token, auth, pass, or hash.
        For more info see [Using Node.js Event Loop for Timing Attacks](https://snyk.io/blog/node-js-timing-attack-ccc-ctf).
      </td>
      <td>2.0.11</td>
    </tr>
    <tr>
      <td>
        <code>prefer-array-literal</code>
      </td>
      <td>
        Use array literal syntax when declaring or instantiating array types.
        For example, prefer the Javascript form of <code>string[]</code> to the TypeScript form <code>Array&lt;string&gt;</code>.
        Prefer <code>[]</code> over <code>new Array()</code>.
        Prefer <code>[4, 5]</code> over <code>new Array(4, 5)</code>.
        Prefer <code>[undefined, undefined]</code> over <code>new Array(2)</code>.
        <br />
        Since 2.0.10, this rule can be configured to allow <code>Array</code> type parameters.
        To ignore type parameters, configure the rule with the values: <code>[true, {"allow-type-parameters": true}]</code>.
        <br />
        Since 6.2.0-beta, you can lift restriction on <code>Array</code> constructor calls with a single argument (to create empty array of a given length). If type information is available - rule will allow only a single argument of <code>number</code> type.
        To allow empty array creation, configure the rule with the values: <code>[true, {"allow-size-argument": true}]</code>.
        <br />
        This rule has some overlap with the <a href="https://palantir.github.io/tslint/rules/array-type">TSLint array-type rule</a>; however, the version here catches more instances.
      </td>
      <td>1.0, 2.0.10, 6.2.0-beta</td>
    </tr>
    <tr>
      <td>
        <code>prefer-type-cast</code>
      </td>
      <td>
        Prefer the tradition type casts instead of the new 'as-cast' syntax.
        For example, prefer <code>&lt;string&gt;myVariable</code> instead of <code>myVariable as string<code>.
        Rule ignores any file ending in .tsx.
        If you prefer the opposite and want to see the <code>as</code> type casts, then enable the tslint rule named 'no-angle-bracket-type-assertion'.
      </td>
      <td>2.0.4</td>
    </tr>
    <tr>
      <td>
        <code>promise-must-complete</code>
      </td>
      <td>
        When a Promise instance is created, then either the reject() or resolve() parameter must be called on it within all code branches in the scope.
        For more examples see the <a href="https://github.com/Microsoft/tslint-microsoft-contrib/issues/34">feature request</a>.
        <br /><br />
        This rule has some overlap with the <a href="https://palantir.github.io/tslint/rules/no-floating-promises">tslint no-floating-promises rule</a>, but they are substantially different.
      </td>
      <td>1.0</td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-accessible-headings</code>
      </td>
      <td>
        For accessibility of your website, there should be no more than 2 H1 heading elements, HTML heading elements must be concise, used for structuring information on the page and non-empty.
      </td>
      <td>6.0.0</td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-anchors</code>
      </td>
      <td>
        For accessibility of your website, anchor element link text should be at least 4 characters long.
        Links with the same HREF should have the same link text.
        Links that point to different HREFs should have different link text.
        This can be relaxed to allow differences in cases using <code>ignore-case</code> option.
        You can also allow differences in leading/trailing whitespace by adding <code>{"ignore-whitespace": "trim"}</code> option or all whitespace by adding <code>{"ignore-whitespace": "all"}</code> option.
        Links with images and text content, the alt attribute should be unique to the text content or empty.
        An an anchor element's href prop value must not be undefined, null, or just #.
        <br />
        References:
        <ul>
          <li><a href="http://oaa-accessibility.org/wcag20/rule/38">WCAG Rule 38: Link text should be as least four 4 characters long</a></li>
          <li><a href="http://oaa-accessibility.org/wcag20/rule/39">WCAG Rule 39: Links with the same HREF should have the same link text</a></li>
          <li><a href="http://oaa-accessibility.org/wcag20/rule/41">WCAG Rule 41: Links that point to different HREFs should have different link text</a></li>
          <li><a href="http://oaa-accessibility.org/wcag20/rule/43">WCAG Rule 43: Links with images and text content, the alt attribute should be unique to the text content or empty</a></li>
        </ul>
      </td>
      <td>2.0.11</td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-aria-unsupported-elements</code>
      </td>
      <td>
        For accessibility of your website, enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
      </td>
      <td>2.0.11</td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-event-has-role</code>
      </td>
      <td>
        For accessibility of your website, elements with event handlers must have explicit role or implicit role.
        <br />
        References:
        <ul>
          <li><a href="http://oaa-accessibility.org/wcag20/rule/94">WCAG Rule 94</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role">Using the button role</a></li>
        </ul>
      </td>
      <td>2.0.11</td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-iframes</code>
      </td>
      <td>
        Enforce that iframe elements are not empty, have title, and are unique.
      </td>
      <td>6.1.0</td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-image-button-has-alt</code>
      </td>
      <td>
        For accessibility of your website, enforce that inputs element with <code>type="image"</code> must have non-empty alt attribute.
      </td>
      <td>2.0.11</td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-img-has-alt</code>
      </td>
      <td>
        Enforce that an <code>img</code> element contains the <code>alt</code> attribute or <code>role='presentation'</code> for a decorative image.
        All images must have <code>alt</code> text to convey their purpose and meaning to screen reader users.
        Besides, the <code>alt</code> attribute specifies an alternate text for an image, if the image cannot be displayed.
        <br />
        This rule accepts as a parameter a string array for tag names other than img to also check.
        For example, if you use a custom tag named 'Image' then configure the rule with: <code>[true, ['Image']]</code>.
        <br />
        References:
        <ul>
          <li><a href="https://www.w3.org/TR/WCAG10/wai-pageauth.html#tech-text-equivalent">Web Content Accessibility Guidelines 1.0</a></li>
          <li><a href="https://www.w3.org/TR/wai-aria/roles#presentation">ARIA Presentation Role</a></li>
          <li><a href="http://oaa-accessibility.org/wcag20/rule/31">WCAG Rule 31: If an image has an alt or title attribute, it should not have a presentation role</a></li>
        </ul>
      </td>
      <td>2.0.11</td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-input-elements</code>
      </td>
      <td>
        For accessibility of your website, HTML input boxes and text areas must include default, place-holding characters.
        <br />
        References:
        <ul>
          <li><a href="https://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-place-holders">WCAG 10.4</a></li>
          <li><a href="https://www.w3.org/TR/WCAG10-HTML-TECHS/#forms-specific">WCAG 11.5</a></li>
        </ul>
      </td>
      <td>6.0.0-beta</td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-lang</code>
      </td>
      <td>
        For accessibility of your website, HTML elements must have a lang attribute and the attribute must be a valid language code.
        <br />
        References:
        <ul>
          <li><a href="https://www.w3.org/TR/WCAG20-TECHS/H58.html">H58: Using language attributes to identify changes in the human language</a></li>
          <li><a href="https://dequeuniversity.com/rules/axe/1.1/valid-lang">lang attribute must have a valid value</a></li>
          <li><a href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes">List of ISO 639-1 codes</a></li>
        </ul>
      </td>
      <td>2.0.11</td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-meta</code>
      </td>
      <td>
        For accessibility of your website, HTML meta elements must not have <code>http-equiv="refresh"</code>.
      </td>
      <td>2.0.11</td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-mouse-event-has-key-event</code>
      </td>
      <td>
        For accessibility of your website, elements with mouseOver/mouseOut should be accompanied by onFocus/onBlur keyboard events.
      </td>
      <td>6.2.0-beta</td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-no-onchange</code>
      </td>
      <td>
        For accessibility of your website, enforce usage of onBlur over onChange on select menus.
        References:
        <ul>
          <li><a href="http://cita.disability.uiuc.edu/html-best-practices/auto/onchange.php">OnChange Event Accessibility Issues</a></li>
          <li><a href="https://www.w3.org/TR/WCAG10/wai-pageauth.html#gl-own-interface">Guideline 8. Ensure direct accessibility of embedded user interfaces.</a></li>
        </ul>
      </td>
      <td>6.0.0-beta</td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-props</code>
      </td>
      <td>
        For accessibility of your website, enforce all <code>aria-*</code> attributes are valid.
        Elements cannot use an invalid <code>aria-*</code> attribute.
        This rule will fail if it finds an <code>aria-*</code> attribute that is not listed in <a href="https://www.w3.org/WAI/PF/aria/states_and_properties#state_prop_values">WAI-ARIA states and properties</a>.
      </td>
      <td>2.0.11</td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-proptypes</code>
      </td>
      <td>
        For accessibility of your website, enforce the type of aria state and property values are correct.
      </td>
      <td>2.0.11</td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-required</code>
      </td>
      <td>
        For accessibility of your website, enforce that required input elements have aria-required set to true.
        <br/>
        References:
        <ul>
          <li><a href="http://www.clarissapeterson.com/2012/11/html5-accessibility/">Acessibility in HTML5</a></li>
        </ul>
      </td>
      <td>6.0.0-beta</td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-role</code>
      </td>
      <td>
        For accessibility of your website, elements with aria roles must use a **valid**, **non-abstract** aria role.
        A reference to role definitions can be found at [WAI-ARIA roles](https://www.w3.org/TR/wai-aria-1.1/#role_definitions).
        <br />
        References:
        <ul>
          <li><a href="http://oaa-accessibility.org/wcag20/rule/92">WCAG Rule 92: Role value must be valid</a></li>
        </ul>
      </td>
      <td>2.0.11</td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-role-has-required-aria-props</code>
      </td>
      <td>
        For accessibility of your website, elements with aria roles must have all required attributes according to the role.
        <br />
        References:
        <ul>
          <li><a href="https://www.w3.org/TR/wai-aria-1.1/#role_definitions">ARIA Definition of Roles</a></li>
          <li><a href="http://oaa-accessibility.org/wcag20/rule/90">WCAG Rule 90: Required properties and states should be defined</a></li>
          <li><a href="http://oaa-accessibility.org/wcag20/rule/91">WCAG Rule 91: Required properties and states must not be empty</a></li>
        </ul>
      </td>
      <td>2.0.11</td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-role-supports-aria-props</code>
      </td>
      <td>
        For accessibility of your website, enforce that elements with explicit or implicit roles defined contain only <code>aria-*</code> properties supported by that <code>role</code>.
        Many aria attributes (states and properties) can only be used on elements with particular roles.
        Some elements have implicit roles, such as <code>&lt;a href='hrefValue' /&gt;</code>, which will be resolved to <code>role='link'</code>.
        A reference for the implicit roles can be found at <a href="https://www.w3.org/TR/html-aria/#sec-strong-native-semantics">Default Implicit ARIA Semantics</a>.
        <br />
        References:
        <ul>
          <li><a href="http://oaa-accessibility.org/wcag20/rule/87">ARIA attributes can only be used with certain roles</a></li>
          <li><a href="http://oaa-accessibility.org/wcag20/rule/84">Check aria properties and states for valid roles and properties</a></li>
          <li><a href="http://oaa-accessibility.org/wcag20/rule/93">Check that 'ARIA-' attributes are valid properties and states</a></li>
        </ul>
      </td>
      <td>2.0.11</td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-tabindex-no-positive</code>
      </td>
      <td>
        For accessibility of your website, enforce tabindex value is **not greater than zero**.
        Avoid positive tabindex attribute values to synchronize the flow of the page with keyboard tab order.
        <br />
        References:
        <ul>
          <li><a href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/#navigation-mechanisms-focus-order">WCAG 2.4.3 - Focus Order</a></li>
          <li><a href="https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#tabindex-usage">Audit Rules - tabindex-usage</a></li>
          <li><a href="https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_focus_03">Avoid positive integer values for tabIndex</a></li>
        </ul>
      </td>
      <td>2.0.11</td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-titles</code>
      </td>
      <td>
        For accessibility of your website, HTML title elements must not be empty, must be more than one word, and must not be more than 60 characters long.
        <br />
        References:
        <ul>
          <li><a href="http://www.w3.org/TR/WCAG20/#navigation-mechanisms-title">WCAG 2.0 - Requirement 2.4.2 Page Titled (Level A)</a></li>
          <li><a href="http://oaa-accessibility.org/wcag20/rule/13">OAA-Accessibility Rule 13: Title element should not be empty</a></li>
          <li><a href="http://oaa-accessibility.org/wcag20/rule/24">OAA-Accessibility Rule 24: Title content should be concise</a></li>
          <li><a href="http://oaa-accessibility.org/wcag20/rule/25">OAA-Accessibility Rule 25: Title text must contain more than one word</a></li>
        </ul>
      </td>
      <td>2.0.11</td>
    </tr>
    <tr>
      <td>
        <code>react-anchor-blank-noopener</code>
      </td>
      <td>
        For security reasons, anchor tags with <code>target="_blank"</code> should also include <code>rel="noreferrer"</code>.
        In order to restrict the behavior <code>window.opener</code> access, the original page needs to add a <code>rel="noopener"</code> attribute to any link that has <code>target="_blank"</code>.
        However, Firefox does not support that tag, so you should actually use <code>rel="noopener noreferrer"</code> for full coverage.
        <br />
        By default, the rule considers the use of <code>rel="noreferrer"</code> as sufficient.
        The option <code>'force-rel-redundancy'</code> can be passed to require <code>rel="noopener noreferrer"</code>.
        <br />
        For more info see: <a href="https://dev.to/ben/the-targetblank-vulnerability-by-example">The target="_blank" vulnerability by example</a>.
      </td>
      <td>2.0.11</td>
    </tr>
    <tr>
      <td>
        <code>react-iframe-missing-sandbox</code>
      </td>
      <td>
        React iframes must specify a sandbox attribute.
        If specified as an empty string, this attribute enables extra restrictions on the content that can appear in the inline frame.
        The value of the attribute can either be an empty string (all the restrictions are applied), or a space-separated list of tokens that lift particular restrictions.
        You many not use both allow-scripts and allow-same-origin at the same time, as that allows the embedded document to programmatically remove the sandbox attribute in some scenarios.
      </td>
      <td>2.0.10</td>
    </tr>
    <tr>
      <td>
        <code>react-no-dangerous-html</code>
      </td>
      <td>
        Do not use React's dangerouslySetInnerHTML API.
        This rule finds usages of the dangerouslySetInnerHTML API (but not any JSX references).
        For more info see the <a href="https://github.com/Microsoft/tslint-microsoft-contrib/wiki/react-no-dangerous-html-Rule">react-no-dangerous-html Rule wiki page</a>.
      </td>
      <td>0.0.2</td>
    </tr>
    <tr>
      <td>
        <code>react-this-binding-issue</code>
      </td>
      <td>
        Several errors can occur when using React and React.Component subclasses.
        When using React components you must be careful to correctly bind the 'this' reference on any methods that you pass off to child components as callbacks.
        For example, it is common to define a private method called 'onClick' and then specify <code>onClick={this.onClick}</code> as a JSX attribute.
        If you do this then the 'this' reference will be undefined when your private method is invoked.
        The React documentation suggests that you bind the 'this' reference on all of your methods within the constructor: <code>this.onClick = this.onClick.bind(this);</code>.
        This rule will create a violation if:
        <ul>
          <li>a method reference is passed to a JSX attribute without being bound in the constructor</li>
          <li>a method is bound multiple times in the constructor</li>
        </ul>
        Another issue that can occur is binding the 'this' reference to a function within the render() method.
        For example, many people will create an anonymous lambda within the JSX attribute to avoid the 'this' binding issue: <code>onClick={() => { this.onClick(); }}</code>.
        The problem with this is that a new instance of an anonymous function is created every time render() is invoked.
        When React compares virutual DOM properties within shouldComponentUpdate() then the onClick property will look like a new property and force a re-render.
        You should avoid this pattern because creating function instances within render methods breaks any logic within shouldComponentUpdate() methods.
        This rule creates violations if:
        <ul>
          <li>an anonymous function is passed as a JSX attribute</li>
          <li>if a function instantiated in local scope is passed as a JSX attribute</li>
        </ul>
        This rule can be configured via the "allow-anonymous-listeners" parameter.
        If you want to suppress violations for the anonymous listener scenarios then configure that rule like this: <code>"react-this-binding-issue": [ true, { 'allow-anonymous-listeners': true } ]</code>, you can also pass in array of string which can act as bind method decorators: <code>"react-this-binding-issue": [true, {'bind-decorators': ['autobind']}]</code></td>
      <td>2.0.8, 2.0.9</td>
    </tr>
    <tr>
      <td>
        <code>react-tsx-curly-spacing</code>
      </td>
      <td>
        Consistently use spaces around the brace characters of JSX attributes.
        You can either allow or ban spaces between the braces and the values they enclose.
        <br />
        One of the two following options are required:
        <ul>
          <li><code>"always"</code> enforces a space inside of curly braces (default)</li>
          <li><code>"never"</code> disallows spaces inside of curly braces</li>
        </ul>
        By default, braces spanning multiple lines are not allowed with either setting.
        If you want to allow them you can specify an additional allowMultiline property with the value false.
        <br />
        Examples:
        <ul>
          <li><code>"react-tsx-curly-spacing": [true, "always"]</code></li>
          <li><code>"react-tsx-curly-spacing": [true, "never"]</code></li>
          <li><code>"react-tsx-curly-spacing": [true, "never", {"allowMultiline": false}]</code></li>
        </ul>
        References:
        <ul>
          <li><a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md">eslint-plugin-react jsx-curly-spacing rule</a></li>
          <li><a href="https://github.com/palantir/tslint-react">tslint-react jsx-curly-spacing rule</a></li>
        </ul>
      </td>
      <td>2.0.14</td>
    </tr>
    <tr>
      <td>
        <code>react-unused-props-and-state</code>
      </td>
      <td>
        Remove unneeded properties defined in React Props and State interfaces.
        Any interface named Props or State is defined as a React interface.
        All fields in these interfaces must be referenced.
        This rule can be configured with regexes to match custom Props and State interface names.
        <br />
        Example for including all interfaces ending with Props or State: <code>[ true, { 'props-interface-regex': 'Props$', 'state-interface-regex': 'State$' } ]</code>.
      </td>
      <td>2.0.10</td>
    </tr>
    <tr>
      <td>
      <code>underscore-consistent-invocation</code>
      </td>
      <td>
        Enforce a consistent usage of the _ functions.
        By default, invoking underscore functions should begin with wrapping a variable in an underscore instance: <code>_(list).map(...)</code>.
        An alternative is to prefer using the static methods on the _ variable: <code>_.map(list, ...)</code>.
        The rule accepts a single parameter called 'style' which can be the value 'static' or 'instance': <code>[true, { "style": "static" }]</code>.
      </td>
      <td>2.0.10</td>
    </tr>
    <tr>
      <td>
        <code>use-named-parameter</code>
      </td>
      <td>
        Do not reference the <a>arguments</a> object by numerical index; instead, use a named parameter.
        This rule is similar to JSLint's <a href="https://jslinterrors.com/use-a-named-parameter">Use a named parameter</a> rule.
      </td>
      <td>0.0.3</td>
    </tr>
    <tr>
      <td>
        <code>use-simple-attributes</code>
      </td>
      <td>
        Simpler attributes in JSX and TSX files helps keep code clean and readable.
        Separate complex expressions into their own line and use clear variable names to make your code more understandable.
      </td>
      <td>6.0.0</td>
    </tr>
    <tr>
      <td>
        <code>valid-typeof</code>
      </td>
      <td>
        Deprecated - This rule is now enforced by the TypeScript compiler.
        Ensures that the results of typeof are compared against a valid string.
        This rule aims to prevent errors from likely typos by ensuring that when the result of a typeof operation is compared against a string, that the string is a valid value.
        Similar to the <a href="https://eslint.org/docs/rules/valid-typeof">valid-typeof ESLint rule</a>.
      </td>
      <td>1.0</td>
    </tr>
    <tr>
      <td>
        <code>void-zero</code>
      </td>
      <td>
        <code>void 0</code>, which resolves to <code>undefined</code>, can be confusing to newcomers. Exclusively use <code>undefined</code> to reduce ambiguity.
      </td>
      <td>6.1.0</td>
    </tr>
  </tbody>
</table>

## Development

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## Release notes

Check GitHub [Releases](https://github.com/Microsoft/tslint-microsoft-contrib/releases) for individual release notes or [CHANGELOG.md](./CHANGELOG.md) for full project changelog.
