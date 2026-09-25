# DateFormat

- **Package**: `CORE`
- **Type**: directives

Directive allows to customize `TuiInputDate` , `TuiInputDateRange` , `TuiInputDateMulti` and `TuiInputDateTime` date format.

### Usage Examples

#### Basic

Also available through tuiDateFormatProvider

**Template:**
```html
<!-- Works in several levels-->
<div class="wrapper tui-space_top-3" [tuiDateFormat]="{mode: 'yyyy/mm/dd'}" >
<!-- You can also put directive directly on input-date -->
<tui-textfield>
<label tuiLabel>Cool</label>
<input tuiInputDate [formControl]="control" [tuiDateFormat]="{separator: '-'}" />
<tui-calendar *tuiDropdown />
</tui-textfield>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDateFormat, TuiTextfield} from '@taiga-ui/core';
import {TuiInputDate} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiDateFormat, TuiInputDate, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl();
}
```
