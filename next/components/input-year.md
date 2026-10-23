# InputYear

- **Package**: `KIT`
- **Type**: components

Component to input a single year

### Example

```html
<ng-template>
<tui-textfield [disabledItemHandler]="itemsHandlers.disabledItemHandler()" [invalid]="controlDoc.invalid" [tuiAppearanceFocus]="appearance.focus" [tuiAppearanceState]="appearance.state" [tuiDropdownAlign]="dropdown.align" [tuiDropdownAppearance]="dropdown.appearance" [tuiDropdownDirection]="dropdown.direction" [tuiDropdownMaxHeight]="dropdown.maxHeight" [tuiDropdownMinHeight]="dropdown.minHeight" [tuiDropdownOffset]="dropdown.offset" [tuiTextfieldCleaner]="textfieldDoc.cleaner" [tuiTextfieldSize]="textfieldDoc.size" >
<input placeholder="Put your birthday" tuiInputYear [formControl]="control" [max]="max" [min]="min" [readonly]="controlDoc.readonly" [tuiDisabled]="controlDoc.disabled" />
<tui-calendar-year *tuiDropdown />
</tui-textfield>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [min] | `number` | minimum year |
| [max] | `number` | maximum year |

### Usage Examples

#### Basic

**Template:**
```html
<tui-textfield>
<label tuiLabel>Choose a year</label>
<input placeholder="Not 2022 please" tuiInputYear [(ngModel)]="value" />
<tui-calendar-year *tuiDropdown />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInputYear} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputYear],
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
<tui-calendar-year *tuiDropdown />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiBooleanHandler} from '@taiga-ui/cdk';
import {TuiInputYear} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputYear],
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
<tui-calendar-year *tuiDropdown />
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
import {tuiInputInputYearOptionsProvider, TuiInputYear} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputYear],
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
