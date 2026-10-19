# Accordion

- **Package**: `KIT`
- **Type**: components

This version of the component is deprecated and will be removed in the next major version. Use new version of Accordion instead!

### How to Use (Import)

```ts
import {TuiAccordion} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiAccordion,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-accordion class="container">
  <tui-accordion-item>
    Taiga UI cdk
    <ng-template tuiAccordionItemContent>
      Development kit consisting of the low level tools and abstractions used to develop Taiga UI Angular entities
    </ng-template>
  </tui-accordion-item>
  <tui-accordion-item>
    Taiga UI core
    <ng-template tuiAccordionItemContent>
      <div #content>Basic elements needed to develop components, directives and more using Taiga UI design system</div>
    </ng-template>
  </tui-accordion-item>
  <tui-accordion-item>
    Taiga UI kit
    <ng-template tuiAccordionItemContent>
      The main set of components used to build Taiga UI based Angular applications
    </ng-template>
  </tui-accordion-item>
</tui-accordion>
```

### Example

```html
<tui-accordion [closeOthers]="closeOthers" [rounded]="rounded" >
<tui-accordion-item [borders]="borders" [disabled]="disabled" [disableHover]="disableHover" [noPadding]="noPadding" [showArrow]="showArrow" [size]="size" > Taiga UI cdk <ng-template tuiAccordionItemContent> Development kit consisting of the low level tools and abstractions used to develop Taiga UI Angular entities </ng-template>
</tui-accordion-item>
<tui-accordion-item [async]="async" [borders]="borders" [disabled]="disabled" [disableHover]="disableHover" [noPadding]="noPadding" [open]="open" [showArrow]="showArrow" [size]="size" (openChange)="onOpenChange($event)" > Taiga UI core <ng-template tuiAccordionItemContent>
<div #content> Basic elements needed to develop components, directives and more using Taiga UI design system </div>
</ng-template>
</tui-accordion-item>
</tui-accordion>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [closeOthers] | `boolean` | Other sections are closed when user opens one |
| [rounded] | `boolean` | Rounded accordion style |

### Usage Examples

#### Basic

**Template:**
```html
<tui-accordion class="container">
<tui-accordion-item> Taiga UI cdk <ng-template tuiAccordionItemContent> Development kit consisting of the low level tools and abstractions used to develop Taiga UI Angular entities </ng-template>
</tui-accordion-item>
<tui-accordion-item> Taiga UI core <ng-template tuiAccordionItemContent>
<div #content> Basic elements needed to develop components, directives and more using Taiga UI design system </div>
</ng-template>
</tui-accordion-item>
<tui-accordion-item> Taiga UI kit <ng-template tuiAccordionItemContent> The main set of components used to build Taiga UI based Angular applications </ng-template>
</tui-accordion-item>
</tui-accordion>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAccordion} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiAccordion],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
.container {
    max-inline-size: 37.5rem;
}
```

#### with custom design

**Template:**
```html
<tui-accordion class="container" [rounded]="false" >
<tui-accordion-item borders="top-bottom" [showArrow]="false" >
<div class="operation-header">
<div class="operation-date"> 4 <div class="operation-month">May</div>
</div>
<div class="operation-pic">
<tui-icon icon="assets/icons/rubles.svg" class="operation-icon" />
</div>
<div class="operation-title">Get your money</div>
<div class="operation-info">
<span class="operation-amount">{{ 23000 | tuiAmount: 'RUB' | async }}</span>
<div class="operation-status">Waiting for approve</div>
</div>
</div>
<ng-template tuiAccordionItemContent>
<h3 class="form-title">Payment form</h3>
<form class="operation-form" [formGroup]="testForm" >
<tui-input formControlName="name" class="input" > Your name <input placeholder="Roman Sedov" tuiTextfieldLegacy />
</tui-input>
<tui-textfield tuiChevron class="input" >
<label tuiLabel>Choose an account</label>
<input formControlName="accounts" tuiSelect />
<tui-data-list-wrapper *tuiTextfieldDropdown new [items]="accounts" />
</tui-textfield>
<div class="buttons">
<button size="l" tuiButton type="submit" class="tui-space_right-2" > Send </button>
<button appearance="flat" size="l" tuiButton type="button" > Cancel </button>
</div>
</form>
</ng-template>
</tui-accordion-item>
<tui-accordion-item borders="top-bottom" [showArrow]="false" >
<div class="operation-header">
<div class="operation-date"> 5 <div class="operation-month">May</div>
</div>
<div class="operation-pic">
<tui-icon icon="assets/icons/rubles.svg" class="operation-icon" />
</div>
<div class="operation-title">Get your money back</div>
<div class="operation-info">
<span class="operation-amount">{{ 23000 | tuiAmount: 'RUB' | async }}</span>
<div class="operation-status operation-status_success">Approved</div>
</div>
</div>
<ng-template tuiAccordionItemContent>
<h3 class="form-title">Payment form</h3>
<form class="operation-form" [formGroup]="testForm" >
<tui-input formControlName="name" class="input" > Your name <input placeholder="Roman Sedov" tuiTextfieldLegacy />
</tui-input>
<tui-textfield tuiChevron class="input" >
<label tuiLabel>Choose an account</label>
<input formControlName="accounts" tuiSelect />
<tui-data-list-wrapper *tuiTextfieldDropdown new [items]="accounts" />
</tui-textfield>
<div class="buttons">
<button size="l" tuiButton type="submit" class="tui-space_right-2" > Send </button>
<button appearance="flat" size="l" tuiButton type="button" > Cancel </button>
</div>
</form>
</ng-template>
</tui-accordion-item>
<tui-accordion-item borders="top-bottom" [showArrow]="false" >
<div class="operation-header">
<div class="operation-date"> 6 <div class="operation-month">May</div>
</div>
<div class="operation-pic">
<tui-icon icon="assets/icons/rubles.svg" class="operation-icon" />
</div>
<div class="operation-title">Get your neighbor's money</div>
<div class="operation-info">
<span class="operation-amount">{{ 23000 | tuiAmount: 'RUB' | async }}</span>
<div class="operation-status operation-status_error">Declined</div>
</div>
</div>
<ng-template tuiAccordionItemContent>
<h3 class="form-title">Payment form</h3>
<form class="operation-form" [formGroup]="testForm" >
<tui-input formControlName="name" class="input" > Your name <input placeholder="Roman Sedov" tuiTextfieldLegacy />
</tui-input>
<tui-textfield tuiChevron class="input" >
<label tuiLabel>Choose an account</label>
<input formControlName="accounts" tuiSelect />
<tui-data-list-wrapper *tuiTextfieldDropdown new [items]="accounts" />
</tui-textfield>
<div class="buttons">
<button size="l" tuiButton type="submit" class="tui-space_right-2" > Send </button>
<button appearance="flat" size="l" tuiButton type="button" > Cancel </button>
</div>
</form>
</ng-template>
</tui-accordion-item>
</tui-accordion>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiButton, TuiIcon, TuiTextfield} from '@taiga-ui/core';
import {TuiAccordion, TuiChevron, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';
import {TuiInputModule} from '@taiga-ui/legacy';

class Account {
    constructor(
        protected readonly name: string,
        protected readonly balance: number,
    ) {}

    protected toString(): string {
        return `${this.name} (${this.balance})`;
    }
}

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        ReactiveFormsModule,
        TuiAccordion,
        TuiAmountPipe,
        TuiButton,
        TuiChevron,
        TuiDataListWrapper,
        TuiIcon,
        TuiInputModule,
        TuiSelect,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly accounts = [
        new Account('Rubles', 500),
        new Account('Dollar', 237),
        new Account('Euro', 100),
    ];

    protected testForm = new FormGroup({
        name: new FormControl(''),
        accounts: new FormControl(this.accounts[0]),
    });
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.container {
    max-inline-size: 46.875rem;
}

.operation-header {
    display: flex;
    font: var(--tui-font-text-l);
    align-items: center;
}

.operation-date {
    font: var(--tui-font-text-xl);
    text-align: center;
}

.operation-date,
.operation-info {
    color: var(--tui-text-secondary);
}

.operation-month,
.operation-status {
    font: var(--tui-font-text-s);
}

.operation-pic {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin: 0 1.5rem;
    background: var(--tui-background-neutral-1);
    border-radius: 100%;
    inline-size: 3rem;
    block-size: 3rem;
    color: var(--tui-text-tertiary);
}

.operation-title {
    .text-overflow();

    margin-inline-end: 1.5rem;
    flex-grow: 1;
}

.operation-info {
    text-align: end;
}

.operation-status {
    &_success {
        color: var(--tui-text-positive);
    }

    &_error {
        color: var(--tui-text-negative);
    }
}

.form-title {
    font: var(--tui-font-heading-6);
    margin: 0 0 1.25rem;
}

.input {
    max-inline-size: 28.75rem;
    margin-block-end: 1.25rem;
}

.buttons {
    display: flex;
}
```

#### alone

**Template:**
```html
<tui-accordion-item class="container"> Taiga UI cdk <ng-template tuiAccordionItemContent> Development kit consisting of the low level tools and abstractions used to develop Taiga UI Angular entities </ng-template>
</tui-accordion-item>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAccordion} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiAccordion],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
.container {
    max-inline-size: 37.5rem;
}
```

#### Eager and Lazy content

**Template:**
```html
<tui-accordion-item class="container"> Taiga UI lazy <ng-template tuiAccordionItemContent>I'm lazy content</ng-template>
</tui-accordion-item>
<tui-accordion-item class="container"> Taiga UI eager <div tuiAccordionItemContent>I'm eager content</div>
</tui-accordion-item>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAccordion} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiAccordion],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
.container {
    max-inline-size: 37.5rem;
}
```

#### Nested

**Template:**
```html
<tui-accordion>
<tui-accordion-item [open]="true"> Level 1 <ng-template tuiAccordionItemContent> Development kit consisting of the low level tools and abstractions used to develop Taiga UI Angular entities <tui-accordion class="tui-space_top-3">
<tui-accordion-item [open]="true"> Level 2 <ng-template tuiAccordionItemContent> The main set of components used to build Taiga UI based Angular applications <tui-accordion class="tui-space_top-3">
<tui-accordion-item [open]="true"> Level 3 <ng-template tuiAccordionItemContent> Basic elements needed to develop components, directives and more using Taiga UI design system </ng-template>
</tui-accordion-item>
</tui-accordion>
</ng-template>
</tui-accordion-item>
</tui-accordion>
</ng-template>
</tui-accordion-item>
</tui-accordion>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAccordion} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiAccordion],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```
