# InputYear

- **Package**: `KIT`
- **Type**: components

Component to input a single year

### How to Use (Import)

```ts
import {FormsModule} from '@angular/forms';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputYear} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    TuiTextfield,
    TuiInputYear,
  ],
})
export class Example {
  value: number | null = null;
}
```

### How to Use (Template)

```html
<tui-textfield>
  <input
    tuiInputYear
    [(ngModel)]="value"
  />
  <tui-calendar-year *tuiTextfieldDropdown />
</tui-textfield>
```

### Example

```html
<ng-template>
<tui-textfield [disabledItemHandler]="itemsHandlers.disabledItemHandler()" [tuiDropdownAlign]="dropdown.align" [tuiDropdownAppearance]="dropdown.appearance" [tuiDropdownDirection]="dropdown.direction" [tuiDropdownMaxHeight]="dropdown.maxHeight" [tuiDropdownMinHeight]="dropdown.minHeight" [tuiDropdownOffset]="dropdown.offset" [tuiTextfieldCleaner]="textfieldDoc.cleaner" [tuiTextfieldSize]="textfieldDoc.size" >
<input placeholder="Put your birthday" tuiInputYear [formControl]="control" [invalid]="controlDoc.invalid" [max]="max" [min]="min" [readOnly]="controlDoc.readonly" [tuiDisabled]="controlDoc.disabled" />
<tui-calendar-year *tuiTextfieldDropdown />
</tui-textfield>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [min] | `number` | Minimum year |
| [max] | `number` | Maximum year |

### Usage Examples

#### Basic

**Template:**
```html
<tui-textfield>
<label tuiLabel>Choose a year</label>
<input placeholder="Not 2022 please" tuiInputYear [(ngModel)]="value" />
<tui-calendar-year *tuiTextfieldDropdown />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputYear} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputYear, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: number | null = null;
}
```

#### Limits

**Template:**
```html
<tui-textfield [disabledItemHandler]="disabledHandler">
<label tuiLabel>Choose a year</label>
<input tuiInputYear [max]="2025" [min]="2018" [(ngModel)]="value" />
<tui-calendar-year *tuiTextfieldDropdown />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiBooleanHandler} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputYear} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputYear, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: number | null = null;

    protected readonly disabledHandler: TuiBooleanHandler<number> = (value) =>
        [2020, 2022].includes(value);
}
```

#### Transformer

**Template:**
```html
<tui-textfield>
<label tuiLabel>Choose a year</label>
<input tuiInputYear [(ngModel)]="value" />
<tui-calendar-year *tuiTextfieldDropdown />
</tui-textfield>
<p> Control value: <code>{{ value }}</code>
</p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiYear} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {tuiInputInputYearOptionsProvider, TuiInputYear} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputYear, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputInputYearOptionsProvider({
            valueTransformer: {
                fromControlValue: (date: TuiYear | null): number | null =>
                    date?.year ?? null,
                toControlValue: (year: number | null): TuiYear | null =>
                    typeof year === 'number' ? new TuiYear(year) : null,
            },
        }),
    ],
})
export default class Example {
    protected value: TuiYear | null = new TuiYear(new Date().getFullYear());
}
```
