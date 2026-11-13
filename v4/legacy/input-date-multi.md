# InputDateMultiLegacy

- **Package**: `LEGACY`
- **Type**: components

This version of the component is deprecated and will be removed in the next major version. Use new version of InputDateMulti instead!

### How to Use (Import)

```ts
import {ReactiveFormsModule} from '@angular/forms';
import {TuiInputDateMultiModule} from '@taiga-ui/legacy';

@Component({
  standalone: true,
  imports: [
    // ...
    ReactiveFormsModule,
    TuiInputDateMultiModule,
  ],
  // ...
})
export class Example {
  testForm = new FormGroup({
    testValue: new FormControl([]),
  });
}
```

### How to Use (Template)

```html
<form [formGroup]="testForm">
  <tui-input-date
    multiple
    formControlName="testValue"
  >
    Choose a date
  </tui-input-date>
</form>
```

### Example

```html
<ng-template>
<tui-input-date multiple [disabledItemHandler]="disabledItemHandler" [focusable]="focusable" [formControl]="control" [markerHandler]="markerHandler" [max]="max" [min]="min" [pseudoFocus]="pseudoFocused" [pseudoHover]="pseudoHovered" [pseudoInvalid]="pseudoInvalid" [readOnly]="readOnly" [rows]="rows" [tuiDropdownOpen]="!!(dropdownOpen | async)" [tuiHintAppearance]="hintAppearance" [tuiHintContent]="hintContent" [tuiHintDirection]="hintDirection" [tuiTextfieldCleaner]="cleaner" [tuiTextfieldIconLeft]="iconStart" [tuiTextfieldLabelOutside]="labelOutside" [tuiTextfieldSize]="size" (tuiDropdownOpenChange)="dropdownOpen.next($event)" > Choose a date </tui-input-date>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| disabled | `boolean` | Disabled state (use formControl.disable() ) |
| disabledItemHandler | `TuiBooleanHandler<TuiDay>` | " [documentationPropertyValues]="disabledItemHandlerVariants" [(documentationPropertyValue)]="disabledItemHandler" > A handler that gets a date and returns true if it is disabled. Must be a pure function |
| markerHandler | `TuiMarkerHandler | null` | A handler that gets date and returns null or a tuple with circled marker colors |
| min | `TuiDay | null` | Minimum date |
| max | `TuiDay | null` | Maximum date |
| rows | `number` | A number of visible rows |

### Usage Examples

#### Basic

**Template:**
```html
<form [formGroup]="testForm">
<tui-input-date formControlName="testValue" multiple [tuiTextfieldLabelOutside]="true" > Choose a dates </tui-input-date>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiInputDateMultiModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputDateMultiModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl([
            new TuiDay(2017, 0, 7),
            new TuiDay(2017, 0, 10),
            new TuiDay(2017, 0, 15),
        ]),
    });
}
```
