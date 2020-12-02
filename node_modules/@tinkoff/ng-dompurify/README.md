# NgDompurify

[![Build](https://img.shields.io/travis/TinkoffCreditSystems/ng-dompurify/master?style=flat-square)](https://travis-ci.org/TinkoffCreditSystems/ng-dompurify)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@tinkoff/ng-dompurify)](https://bundlephobia.com/result?p=@tinkoff/ng-dompurify)
[![Coverage Status](https://img.shields.io/coveralls/github/TinkoffCreditSystems/ng-dompurify?branch=master&style=flat-square)](https://coveralls.io/github/TinkoffCreditSystems/ng-dompurify?branch=master)
[![npm version](https://img.shields.io/npm/v/@tinkoff/ng-dompurify.svg?style=flat-square)](https://npmjs.com/package/@tinkoff/ng-dompurify)
[![code style: @tinkoff/linters](https://img.shields.io/badge/code%20style-%40tinkoff%2Flinters-blue?style=flat-square)](https://github.com/TinkoffCreditSystems/linters)

> This library implements `DOMPurify` as Angular `Sanitizer` or `Pipe`. It delegates sanitizing to `DOMPurify` and
> supports the same configuration. See [DOMPurify](https://github.com/cure53/DOMPurify).

## Install

```
npm install @tinkoff/ng-dompurify
```

If you do not have `dompurify` in your package, install also:

```
npm install dompurify
npm install --save-dev @types/dompurify
```

## How to use

Either use pipe to sanitize your content when binding to `[innerHTML]`
or use `NgDompurifySanitizer` service manually.

```typescript
import {NgDompurifyModule} from '@tinkoff/ng-dompurify';

@NgModule({
    imports: [NgDompurifyModule],
})
export class MyModule {}
```

As a pipe:

```html
<div [innerHtml]="value | dompurify"></div>
```

As a service:

```typescript
import {SecurityContext} from '@angular/core';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';

@Component({})
export class MyComponent {
    constructor(private readonly dompurifySanitizer: NgDompurifySanitizer) {}

    purify(value: string): string {
        return this.dompurifySanitizer.sanitize(SecurityContext.HTML, value);
    }
}
```

You can also substitute Angular `Sanitizer` with `DOMPurify` so it is
automatically used all the time:

```typescript
import {NgModule, Sanitizer} from '@angular/core';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';
// ...

@NgModule({
    // ...
    providers: [
        {
            provide: Sanitizer,
            useClass: NgDompurifySanitizer,
        },
    ],
    // ...
})
export class AppModule {}
```

## Configuring

Config for `NgDompurifySanitizer` or `NgDompurifyDomSanitizer` can be
provided using token `DOMPURIFY_CONFIG`. `NgDompurifyPipe` supports
passing DOMPurify config as an argument to override config from DI.

```typescript
import {NgModule, Sanitizer} from '@angular/core';
import {NgDompurifySanitizer, DOMPURIFY_CONFIG} from '@tinkoff/ng-dompurify';
// ...

@NgModule({
    // ...
    providers: [
        {
            provide: Sanitizer,
            useClass: NgDompurifySanitizer,
        },
        {
            provide: DOMPURIFY_CONFIG,
            useValue: {FORBID_ATTR: ['id']},
        },
    ],
    // ...
})
export class AppModule {}
```

## CSS sanitization

DOMPurify does not support sanitizing CSS. Angular starting version 10
dropped CSS sanitation as something that presents no threat in supported
browsers. You can still provide a handler to sanitize CSS rules values
upon binding if you want to:

```typescript
import {NgModule, Sanitizer} from '@angular/core';
import {NgDompurifySanitizer, SANITIZE_STYLE} from '@tinkoff/ng-dompurify';

@NgModule({
    // ...
    providers: [
        {
            provide: Sanitizer,
            useClass: NgDompurifySanitizer,
        },
        {
            provide: SANITIZE_STYLE,
            useValue: yourImplementation, // <---
        },
    ],
    // ...
})
export class AppModule {}
```

## Hooks

DOMPurify supports various hooks. You can provide them using `DOMPURIFY_HOOKS` token:

```typescript
import {NgModule, Sanitizer} from '@angular/core';
import {
    NgDompurifySanitizer,
    DOMPURIFY_HOOKS,
    SANITIZE_STYLE,
} from '@tinkoff/ng-dompurify';

@NgModule({
    // ...
    providers: [
        {
            provide: Sanitizer,
            useClass: NgDompurifySanitizer,
        },
        {
            provide: SANITIZE_STYLE,
            useValue: yourImplementation,
        },
        {
            provide: DOMPURIFY_HOOKS,
            useValue: [
                {
                    name: 'beforeSanitizeAttributes',
                    hook: (node: Element) => {
                        node.removeAttribute('id');
                    },
                },
            ],
        },
    ],
    // ...
})
export class AppModule {}
```

## Demo

You can see live demo here:
https://stackblitz.com/github/TinkoffCreditSystems/ng-dompurify/tree/master/projects/demo
