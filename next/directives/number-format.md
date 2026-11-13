# NumberFormat

- **Package**: `CORE`
- **Type**: directives

Directive allows to customize `TuiInputNumber` , `TuiInputSlider` , `TuiInputRange` number format.

### Usage Examples

#### Basic

**Template:**
```html
<!-- Works in several levels-->
<tui-textfield [tuiNumberFormat]="{precision: 1, thousandSeparator: '_'}">
<label tuiLabel>Label: {{ value | tuiFormatNumber }}</label>
<!-- You can also put directive directly on [tuiInputNumber] -->
<input tuiInputNumber [tuiNumberFormat]="{precision: 2}" [(ngModel)]="value" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiNumberFormat, TuiTextfield} from '@taiga-ui/core';
import {TuiFormatNumberPipe, TuiInputNumber} from '@taiga-ui/kit';

@Component({
    imports: [
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
