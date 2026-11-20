# InputYearLegacy

- **Package**: `LEGACY`
- **Type**: components

This version of the component is deprecated and will be removed in the next major version. Use InputYear instead! Component to input a single year

### How to Use (Import)

```ts
import {TuiInputYearModule} from '@taiga-ui/legacy';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiInputYearModule,
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
  <tui-input-year formControlName="testValue">Choose a month</tui-input-year>
</form>
```

### Example

```html
<ng-template>
<tui-input-year [disabledItemHandler]="disabledItemHandler" [focusable]="focusable" [formControl]="control" [max]="max" [min]="min" [pseudoActive]="pseudoPressed" [pseudoFocus]="pseudoFocused" [pseudoHover]="pseudoHovered" [pseudoInvalid]="pseudoInvalid" [readOnly]="readOnly" [style.text-align]="textAlign" [tuiTextfieldCleaner]="cleaner" [tuiTextfieldFiller]="filler" [tuiTextfieldIconLeft]="iconStart" [tuiTextfieldLabelOutside]="labelOutside" [tuiTextfieldPostfix]="postfix" [tuiTextfieldPrefix]="prefix" [tuiTextfieldSize]="size" > Year </tui-input-year>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| disabled | `boolean` | Disabled state (use formControl.disable() ) |
| disabledItemHandler | `TuiBooleanHandler<number>` | " [documentationPropertyValues]="disabledItemHandlerVariants" [(documentationPropertyValue)]="disabledItemHandler" > A handler that gets a year and returns true if it is disabled. Must be a pure function |
| min | `number | null` | Minimum year |
| max | `number | null` | Maximum year |

### Usage Examples

#### Basic

**Template:**
```html
<tui-input-year [formControl]="control" [tuiTextfieldCleaner]="true" > Choose a year <input placeholder="Not 2022 please" tuiTextfieldLegacy />
</tui-input-year>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInputYearModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputYearModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl<number | null>(null);
}
```

#### sizes

**Template:**
```html
<form [formGroup]="testForm">
<tui-input-year formControlName="testValue" tuiTextfieldSize="s" class="tui-space_bottom-2" > Choose a year </tui-input-year>
<tui-input-year formControlName="testValue" tuiTextfieldSize="m" class="tui-space_bottom-2" > Choose a year </tui-input-year>
<tui-input-year formControlName="testValue">Choose a year</tui-input-year>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInputYearModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputYearModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl<number | null>(null),
    });
}
```

Custom align content by text-align
