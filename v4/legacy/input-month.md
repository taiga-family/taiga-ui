# InputMonthLegacy

- **Package**: `LEGACY`
- **Type**: components

This version of the component is deprecated and will be removed in the next major version. Use new version of InputMonth instead! Component to input a single month

### How to Use (Import)

```ts
import {TuiInputMonthModule} from '@taiga-ui/legacy';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiInputMonthModule,
  ],
  // ...
})
export class Example {
  readonly testForm = new FormGroup({
    testValue: new FormControl(null),
  });
}
```

### How to Use (Template)

```html
<form [formGroup]="testForm">
  <tui-input-month formControlName="testValue">Choose a month</tui-input-month>
</form>
```

### Example

```html
<ng-template>
<tui-input-month [disabledItemHandler]="disabledItemHandler" [focusable]="focusable" [formControl]="control" [max]="max" [min]="min" [pseudoActive]="pseudoPressed" [pseudoFocus]="pseudoFocused" [pseudoHover]="pseudoHovered" [pseudoInvalid]="pseudoInvalid" [readOnly]="readOnly" [style.text-align]="textAlign" [tuiTextfieldCleaner]="cleaner" [tuiTextfieldIconLeft]="iconStart" [tuiTextfieldLabelOutside]="labelOutside" [tuiTextfieldSize]="size" > Month </tui-input-month>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| disabled | `boolean` | Disabled state (use formControl.disable() ) |
| disabledItemHandler | `TuiBooleanHandler<TuiMonth>` | " [documentationPropertyValues]="disabledItemHandlerVariants" [(documentationPropertyValue)]="disabledItemHandler" > A handler that gets a date and returns true if it is disabled. Must be a pure function |
| min | `TuiMonth | null` | Minimum date |
| max | `TuiMonth | null` | Maximum date |

### Usage Examples

#### Basic

**Template:**
```html
<tui-input-month [formControl]="control" [tuiTextfieldCleaner]="true" > Choose a month <input placeholder="Not September please" tuiTextfieldLegacy />
</tui-input-month>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiMonth} from '@taiga-ui/cdk';
import {TuiInputMonthModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputMonthModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl<TuiMonth | null>(null);
}
```

#### sizes

**Template:**
```html
<form [formGroup]="testForm">
<tui-input-month formControlName="testValue" tuiTextfieldSize="s" class="tui-space_bottom-2" > Choose a month </tui-input-month>
<tui-input-month formControlName="testValue" tuiTextfieldSize="m" class="tui-space_bottom-2" > Choose a month </tui-input-month>
<tui-input-month formControlName="testValue">Choose a month</tui-input-month>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiMonth} from '@taiga-ui/cdk';
import {TuiInputMonthModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputMonthModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl<TuiMonth | null>(null),
    });
}
```

#### Native picker

**Template:**
```html
<tui-input-month [formControl]="control" [max]="max" [min]="min" [tuiTextfieldCleaner]="true" > Choose a month <input placeholder="Not September please" tuiTextfieldLegacy />
</tui-input-month>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiMonth} from '@taiga-ui/cdk';
import {tuiInputDateOptionsProvider} from '@taiga-ui/kit';
import {TuiInputMonthModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputMonthModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiInputDateOptionsProvider({nativePicker: true})],
})
export default class Example {
    protected readonly control = new FormControl<TuiMonth | null>(null);
    protected readonly min = TuiMonth.currentLocal().append({month: -12});
    protected readonly max = TuiMonth.currentLocal().append({month: 12});
}
```

Custom align content by text-align
