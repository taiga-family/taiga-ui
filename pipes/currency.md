# Currency

- **Package**: `ADDON-COMMERCE`
- **Type**: pipes

Pipe for transforming number into money. It is usually used with `InputNumber`

### Example

```html
<ng-template>
<tui-textfield>
<label tuiLabel>Type a sum</label>
<input tuiInputNumber [formControl]="control" [postfix]="` ${(currency || '' | tuiCurrency)}`" />
</tui-textfield>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| currency | `TuiCurrencyVariants` | currency symbol |

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
<form [formGroup]="form">
<tui-textfield>
<label tuiLabel>Type a sum</label>
<input formControlName="value" tuiInputNumber [postfix]="` ${(826 | tuiCurrency)}`" />
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
    imports: [ReactiveFormsModule, TuiCurrencyPipe, TuiInputNumber, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly form = new FormGroup({value: new FormControl(100)});
}
```
