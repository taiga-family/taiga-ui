# Currency

- **Package**: `ADDON-COMMERCE`
- **Type**: pipes

Pipe for transforming number into money. It is usually used with `InputNumber`

### How to Use (Import)

```ts
import {TuiCurrencyPipe} from '@taiga-ui/addon-commerce';

//...

@Component({
  standalone: true,
  imports: [
    //...
    TuiCurrencyPipe,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-textfield>
  <label tuiLabel>Type a sum</label>

  <input
    formControlName="testValue"
    tuiInputNumber
    [prefix]="'USD' | tuiCurrency"
  />
</tui-textfield>
```

### Example

```html
<ng-template>
<tui-textfield>
<label tuiLabel>Type a sum</label>
<input tuiInputNumber [formControl]="control" [postfix]="' ' + (currency || '' | tuiCurrency)" />
</tui-textfield>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| currency | `TuiCurrencyVariants` | Currency symbol |

### Usage Examples

#### Basic

**Template:**
```html
<p>100 {{ 'RUB' | tuiCurrency }}</p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCurrencyPipe} from '@taiga-ui/addon-commerce';

@Component({
    standalone: true,
    imports: [TuiCurrencyPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### With Textfield

**Template:**
```html
<form [formGroup]="testForm">
<tui-textfield>
<label tuiLabel>Type a sum</label>
<input formControlName="testValue" tuiInputNumber [postfix]="' ' + (826 | tuiCurrency)" />
</tui-textfield>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCurrencyPipe} from '@taiga-ui/addon-commerce';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiCurrencyPipe, TuiInputNumber, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl(100),
    });
}
```
