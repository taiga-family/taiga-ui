# NumberFormat

- **Package**: `CORE`
- **Type**: directives

Directive allows to customize `TuiInputNumber` , `TuiInputSlider` , `TuiInputRange` number format.

### How to Use (Import)

```ts
import {TuiNumberFormat} from '@taiga-ui/core';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiNumberFormat,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-textfield>
  <input
    tuiInputNumber
    [tuiNumberFormat]="{decimal, precision, zeroPadding, rounding, thousandSeparator, decimalSeparator}"
  />
</tui-textfield>
```

### Usage Examples

#### Basic

**Template:**
```html
<!-- Works in several levels-->
<tui-textfield [tuiNumberFormat]="{precision: 1, thousandSeparator: '_'}">
<label tuiLabel>Label: {{ value | tuiFormatNumber | async }}</label>
<!-- You can also put directive directly on [tuiInputNumber] -->
<input tuiInputNumber [tuiNumberFormat]="{precision: 2}" [(ngModel)]="value" />
</tui-textfield>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFormatNumberPipe, TuiNumberFormat, TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        FormsModule,
        TuiFormatNumberPipe,
        TuiInputNumber,
        TuiNumberFormat,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = 123456.789;
}
```
