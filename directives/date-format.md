# DateFormat

- **Package**: `CORE`
- **Type**: directives

Directive allows to customize `TuiInputDate` , `TuiInputDateRange` , `TuiInputDateMulti` and `TuiInputDateTime` date format.

### How to Use (Import)

```ts
import {TuiDateFormat} from '@taiga-ui/core';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiDateFormat,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-input-date [tuiDateFormat]="{mode, separator}"></tui-input-date>
```

### Usage Examples

#### Basic

**Template:**
```html
<!-- Works in several levels-->
<div class="wrapper tui-space_top-3" [tuiDateFormat]="{mode: 'YMD'}" >
<!-- You can also put directive directly on input-date -->
<tui-input-date [formControl]="control" [tuiDateFormat]="{separator: '-'}" > Cool <input tuiTextfieldLegacy />
</tui-input-date>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDateFormat} from '@taiga-ui/core';
import {TuiInputDateModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiDateFormat, TuiInputDateModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl();
}
```
