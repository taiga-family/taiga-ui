# Tinkoff ControlValueAccessor for contenteditable elements
[![Build](https://travis-ci.org/TinkoffCreditSystems/angular-contenteditable-accessor.svg?branch=master)](https://travis-ci.org/TinkoffCreditSystems/angular-contenteditable-accessor)
[![Coverage Status](https://coveralls.io/repos/github/TinkoffCreditSystems/angular-contenteditable-accessor/badge.svg?branch=master)](https://coveralls.io/github/TinkoffCreditSystems/angular-contenteditable-accessor?branch=master)
[![npm version](https://badge.fury.io/js/%40tinkoff%2Fangular-contenteditable-accessor.svg)](https://www.npmjs.com/package/@tinkoff/angular-contenteditable-accessor)

> This accessor allows you to use Angular forms with contenteditable elements with ease. It has zero dependencies, other than Angular itself as peer and works with Angular 4+ in all modern browsers, including _Internet Explorer 11_.

## Install

```
$ npm install @tinkoff/angular-contenteditable-accessor
```

## Import

Simply import `ContenteditableValueAccessorModule` along with either Angular's form modules into your component's module

## How to use

Use with template and reactive forms like that:

    <div [(ngModel)]="model" contenteditable></div>

    <div [formControl]="control" contenteditable></div>

    <form [formGroup]="group">
      <div formControlName="control" contenteditable></div>
    </form>

## Demo

https://stackblitz.com/edit/angular2-contenteditable-value-accessor

## Maintain

See [MAINTAIN.md](MAINTAIN.md)
