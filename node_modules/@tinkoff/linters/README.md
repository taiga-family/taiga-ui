# Tinkoff Linter Configuration [![Build](https://img.shields.io/travis/TinkoffCreditSystems/linters/master)](https://travis-ci.org/TinkoffCreditSystems/linters) [![code style: @tinkoff/linters](https://img.shields.io/badge/code%20style-%40tinkoff%2Flinters-blue)](https://github.com/TinkoffCreditSystems/linters) [![npm version](https://img.shields.io/npm/v/@tinkoff/linters)](https://www.npmjs.com/package/@tinkoff/linters)

This repository contains configuration files for the linters we use in Tinkoff. It includes:

-   configs for [TSLint](https://palantir.github.io/tslint/)
-   configs for [Stylelint](https://stylelint.io/)
-   configs for [Prettier](https://prettier.io)

## Install

```
$ npm install @tinkoff/linters --save-dev
```

You don't need to install `tslint` and `stylelint`, they are added as dependencies of `@tinkoff/linters` and will be installed automatically.

## How to use

### Prettier

Example of `prettier.config.js` file in your project:

```js
module.exports = {
	...require('@tinkoff/linters/prettier/prettier.config')
};
```

### TSLint and Stylelint

For TSLint and Stylelint configs we use `bases/mixins` concept. You should extend your TSLint and Stylelint configs with only one `bases` config, and any number of `mixins` configs.

Example of `tslint.json` file in your project:

```json
{
	"extends": [
		"@tinkoff/linters/tslint/bases/prettier.tslint.json",
		"@tinkoff/linters/tslint/mixins/rxjs5.5.tslint.json", // For RxJs 5.5
		"@tinkoff/linters/tslint/mixins/rxjs6.tslint.json" // For RxJS 6+
	]
}
```

Example of `.stylelintrc` file in your project:

```json
{
	"extends": ["@tinkoff/linters/stylelint/bases/prettier.stylelint.json"]
}
```

## Custom rules for TSLint

We follow some rules which are not implemented in TSLint. So we implemented them ourselves.

-   [`tinkoff-angular-member-ordering`](#tinkoff-angular-member-ordering)
-   [`tinkoff-condition-breaks`](#tinkoff-condition-breaks)
-   [`tinkoff-method-return-type`](#tinkoff-method-return-type)
-   [`tinkoff-new-line-after-variable-declaration`](#tinkoff-new-line-after-variable-declaration)
-   [`tinkoff-new-line-around-control-statement`](#tinkoff-new-line-around-control-statement)

### `tinkoff-angular-member-ordering`

We arrange members of Angular components in the following order:

-   public static members;
-   members decorated with `@Input()` (both fields and setters);
-   members decorated with `@Output()`;
-   other public members;
-   protected static members;
-   protected instance members;
-   private static members;
-   private members.

### `tinkoff-condition-breaks`

When a ternary operator contains complex expressions, it becomes difficult to read and understand. In that case we divide it into several lines.

```ts
// bad
const defaultQuestionnaire = this.isCompany || this.accountIsBlocked ? defaultQuestionnaireCompany && 'super text' : defaultQuestionnaireIp;

// good
const defaultQuestionnaire = this.isCompany || this.accountIsBlocked
   ? defaultQuestionnaireCompany && 'super text'
   : defaultQuestionnaireIp;

// good
const result = isShown ? [] : null;
```

### `tinkoff-method-return-type`

If a function or a method returns result, we must specify its type.
The only exception is the arrow functions. For them it is not necessary.

```ts
class User {
    constructor(name: string, age: number) {
    }

    // good
    getStatus(): string {
    }

    // bad
    getFullname() {
    }

    // ok
    setStatus(status: string) {
    }
}

// bad
function getAge() {
    return 50;
}

// good
function getName(): string {
    return 'Bob';
}

// good
const doSomething = () => {
    return 'done';
};
```

### `tinkoff-new-line-after-variable-declaration`

We separate variable declarations from the previous and subsequent code with an empty string.
But we do not add an empty line before the first variable inside the block.

```ts
// bad
const a = 1;
let b = 2;
b += a;

// good
const a = 1;
let b = 2;

b += a;

function getStatus() {
    const status = 'ok'; // no new line before const, it is ok

    ...
}
```

### `tinkoff-new-line-around-control-statement`

Also we separate control statements (for, if, return, etc) from the previous and subsequent code with an empty string.
But we do not add an empty line before the first variable inside the block.

```ts
function doSomething(count: number): number {
    if (age > 30) {
    }

    for (let i = 0; i < 10; i++) {
    }

    return {name, age};
}
```

## Badge

Show that you use `@tinkoff/linters` in your project [![code style: @tinkoff/linters](https://img.shields.io/badge/code%20style-%40tinkoff%2Flinters-blue)](https://github.com/TinkoffCreditSystems/linters)

```md
[![code style: @tinkoff/linters](https://img.shields.io/badge/code%20style-%40tinkoff%2Flinters-blue)](https://github.com/TinkoffCreditSystems/linters)
```

## Development

Run tests with `npm run test`.
