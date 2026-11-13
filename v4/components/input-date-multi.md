# InputDateMulti

- **Package**: `KIT`
- **Type**: components

`InputDateMulti` uses specifically modified Textfield to represent array of dates.

### How to Use (Import)

```ts
import {FormsModule} from '@angular/forms';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateMulti} from '@taiga-ui/kit';

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    TuiTextfield,
    TuiInputDate,
  ],
})
export class Example {
  protected value: TuiDay[] = [];
}
```

### How to Use (Template)

```html
<tui-textfield multi>
  <input
    tuiInputDateMulti
    [(ngModel)]="value"
  />
  <tui-calendar *tuiTextfieldDropdown />
</tui-textfield>
```

### Example

```html
<ng-template>
<tui-textfield multi [disabledItemHandler]="itemsHandlers.disabledItemHandler()" [iconStart]="icons.iconStart" [tuiDropdownAlign]="dropdown.align" [tuiTextfieldCleaner]="textfieldDoc.cleaner" [tuiTextfieldSize]="textfieldDoc.size" [(open)]="dropdown.open" >
<input placeholder="Choose date" tuiInputDateMulti [formControl]="control" [invalid]="controlDoc.invalid" [max]="max" [min]="min" [readOnly]="controlDoc.readonly" [tuiDisabled]="controlDoc.disabled" />
<tui-input-chip *tuiItem />
<tui-calendar *tuiTextfieldDropdown />
</tui-textfield>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [min] | `TuiDay` | Min date |
| [max] | `TuiDay` | Max date |

### Usage Examples

#### Basic

**Template:**
```html
<tui-textfield multi>
<label tuiLabel>Plain strings</label>
<input tuiInputDateMulti [(ngModel)]="value" />
<tui-calendar *tuiTextfieldDropdown />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateMulti} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputDateMulti, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = [new TuiDay(2025, 6, 6)];
}
```

#### Chip

**Template:**
```html
<tui-textfield multi>
<input tuiInputDateMulti [(ngModel)]="value" />
<tui-calendar *tuiTextfieldDropdown />
<tui-input-chip *tuiItem />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateMulti} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputDateMulti, TuiTextfield],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = [new TuiDay(2025, 6, 6)];
}
```

**LESS:**
```less
:host {
    display: block;
    inline-size: 20rem;
}
```

#### Disabled items

**Template:**
```html
<tui-textfield multi [disabledItemHandler]="handler" >
<input tuiInputDateMulti [(ngModel)]="value" />
<tui-calendar *tuiTextfieldDropdown />
<tui-input-chip *tuiItem />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateMulti} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputDateMulti, TuiTextfield],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = [new TuiDay(2025, 6, 6)];

    protected readonly handler = (item: TuiDay): boolean => item.dayOfWeek() > 4;
}
```

**LESS:**
```less
:host {
    display: block;
    inline-size: 20rem;
}
```

#### Format

**Template:**
```html
<tui-textfield multi>
<input tuiInputDateMulti [(ngModel)]="value" />
<tui-calendar *tuiTextfieldDropdown />
<tui-input-chip *tuiItem />
</tui-textfield>
<tui-textfield multi>
<input tuiInputDateMulti [(ngModel)]="value" />
<tui-calendar *tuiTextfieldDropdown />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {tuiDateFormatProvider, TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateMulti} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputDateMulti, TuiTextfield],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [tuiDateFormatProvider({mode: 'MDY', separator: '/'})],
})
export default class Example {
    protected value = [new TuiDay(2025, 6, 6)];
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    inline-size: 20rem;
}
```

#### customization

**Template:**
```html
<tui-textfield multi>
<input tuiInputDateMulti [(ngModel)]="value" />
<tui-calendar *tuiTextfieldDropdown [markerHandler]="markerHandler" />
<tui-input-chip *tuiItem="let context" [appearance]="context.item.dayOfWeek() > 4 ? 'negative' : 'positive'" [iconStart]="context.item.dayOfWeek() > 4 ? '@tui.heart' : ''" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {EMPTY_ARRAY, TuiDay} from '@taiga-ui/cdk';
import {type TuiMarkerHandler, TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateMulti} from '@taiga-ui/kit';

const DOT: [string] = ['var(--tui-status-positive)'];

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputDateMulti, TuiTextfield],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = [new TuiDay(2025, 6, 4), new TuiDay(2025, 6, 6)];

    protected readonly markerHandler: TuiMarkerHandler = (day: TuiDay) =>
        day.isWeekend ? EMPTY_ARRAY : DOT;
}
```

**LESS:**
```less
:host {
    display: block;
    inline-size: 22rem;
}
```

#### Value transformer

**Template:**
```html
<tui-textfield multi>
<label tuiLabel>Choose a date</label>
<input tuiInputDateMulti [(ngModel)]="value" />
<tui-calendar *tuiTextfieldDropdown />
</tui-textfield>
<p>{{ value | json }}</p>
```

**TypeScript:**
```ts
import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateMulti, tuiInputDateMultiOptionsProvider} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, JsonPipe, TuiInputDateMulti, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputDateMultiOptionsProvider({
            valueTransformer: {
                fromControlValue: (value: Date[] | null): TuiDay[] =>
                    value?.map((date) => TuiDay.fromUtcNativeDate(date)) ?? [],
                toControlValue: (value: TuiDay[]): Date[] =>
                    value?.map((day) => day.toUtcNativeDate()),
            },
        }),
    ],
})
export default class Example {
    protected value: Date[] | null = null;
}
```

#### Value transformer with chip

**Template:**
```html
<tui-textfield multi>
<label tuiLabel>Choose dates</label>
<input tuiInputDateMulti [(ngModel)]="value" />
<tui-calendar *tuiDropdown />
<tui-input-chip *tuiItem />
</tui-textfield>
<p>{{ value | json }}</p>
```

**TypeScript:**
```ts
import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateMulti, tuiInputDateMultiOptionsProvider} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, JsonPipe, TuiInputDateMulti, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputDateMultiOptionsProvider({
            valueTransformer: {
                fromControlValue: (value: Date[] | null): TuiDay[] =>
                    value?.map((date) => TuiDay.fromLocalNativeDate(date)) ?? [],
                toControlValue: (value: TuiDay[]): Date[] =>
                    value.map((day) => day.toLocalNativeDate()),
            },
        }),
    ],
})
export default class Example {
    protected value: Date[] | null = [
        new Date(2026, 2, 11),
        new Date(2026, 2, 12),
        new Date(2026, 2, 13),
    ];
}
```

Use
`*tuiItem`
directive to provide custom representation. You can use
`tui-input-chip`
out of the box or implement your own. The context is
`TuiContext<&#123; item: T, index: number &#125;>`

Formatting relies on
`TUI_DATE_FORMAT`
which you can override using
`tuiDateFormatProvider`
helper

By default component works with
`TuiDay`
values. You can override
`InputDate`
transformer once to reuse it here, or provide
`tuiInputDateMultiOptionsProvider`
to customize only
`InputDateMulti`
