# InputMonthRange

- **Package**: `LEGACY`
- **Type**: components

This version of the component is deprecated and will be removed in the next major version. Use new version of InputMonth instead! Component to input a range of months

### How to Use (Import)

```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiInputMonthRangeModule} from '@taiga-ui/legacy';

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiInputMonthRangeModule,
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
  <tui-input-month-range formControlName="testValue">Choose a range of months</tui-input-month-range>
</form>
```

### Example

```html
<ng-template>
<tui-input-month-range [disabledItemHandler]="disabledItemHandler" [focusable]="focusable" [formControl]="control" [max]="max" [maxLength]="maxLength" [min]="min" [minLength]="minLength" [pseudoActive]="pseudoPressed" [pseudoFocus]="pseudoFocused" [pseudoHover]="pseudoHovered" [pseudoInvalid]="pseudoInvalid" [readOnly]="readOnly" [style.text-align]="textAlign" [tuiHintAppearance]="hintAppearance" [tuiHintContent]="hintContent" [tuiHintDirection]="hintDirection" [tuiTextfieldCleaner]="cleaner" [tuiTextfieldIconLeft]="iconStart" [tuiTextfieldLabelOutside]="labelOutside" [tuiTextfieldSize]="size" > Months </tui-input-month-range>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| disabled | `boolean` | Disabled state (use formControl.disable() ) |
| disabledItemHandler | `TuiBooleanHandler<TuiMonth>` | " [documentationPropertyValues]="disabledItemHandlerVariants" [(documentationPropertyValue)]="disabledItemHandler" > A handler that gets a date and returns true if it is disabled. Must be a pure function |
| min | `TuiMonth | null` | Minimum date |
| max | `TuiMonth | null` | Maximum date |
| maxLength | `number` | Maximum length |
| minLength | `number` | Minimum length |

### Usage Examples

#### Basic

**Template:**
```html
<tui-input-month-range [formControl]="control" [tuiTextfieldCleaner]="true" > Choose a range of months <input placeholder="3 months or more" tuiTextfieldLegacy />
</tui-input-month-range>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiMonthRange} from '@taiga-ui/cdk';
import {TuiInputMonthRangeModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiInputMonthRangeModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl<TuiMonthRange | null>(null);
}
```

#### sizes

**Template:**
```html
<form [formGroup]="testForm">
<tui-input-month-range formControlName="testValue" tuiTextfieldSize="s" class="tui-space_bottom-2" > Choose a range of months </tui-input-month-range>
<tui-input-month-range formControlName="testValue" tuiTextfieldSize="m" class="tui-space_vertical-4" > Choose a range of months </tui-input-month-range>
<tui-input-month-range formControlName="testValue">Choose a range of months</tui-input-month-range>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiMonthRange} from '@taiga-ui/cdk';
import {TuiInputMonthRangeModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiInputMonthRangeModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl<TuiMonthRange | null>(null),
    });
}
```

#### limit

**Template:**
```html
<form [formGroup]="testForm">
<tui-input-month-range formControlName="testValue" class="tui-space_bottom-2" [minLength]="3" > Choose a range of months </tui-input-month-range>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiMonthRange} from '@taiga-ui/cdk';
import {TuiInputMonthRangeModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputMonthRangeModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl<TuiMonthRange | null>(null),
    });
}
```

Custom align content by text-align
