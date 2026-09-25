# InputDateMulti

- **Package**: `KIT`
- **Type**: components

`InputDateMulti` uses specifically modified InputChip to represent array of dates.

### Example

```html
<ng-template>
<tui-textfield multi [disabledItemHandler]="itemsHandlers.disabledItemHandler()" [iconStart]="icons.iconStart" [invalid]="controlDoc.invalid" [tuiAppearanceFocus]="appearance.focus" [tuiAppearanceState]="appearance.state" [tuiDropdownAlign]="dropdown.align" [tuiTextfieldCleaner]="textfieldDoc.cleaner" [tuiTextfieldSize]="textfieldDoc.size" [(open)]="dropdown.open" >
<input placeholder="Choose date" tuiInputDateMulti [formControl]="control" [max]="max" [min]="min" [readonly]="controlDoc.readonly" [tuiDisabled]="controlDoc.disabled" />
<tui-input-chip *tuiItem />
<tui-calendar *tuiDropdown />
</tui-textfield>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [min] | `TuiDay` | min date |
| [max] | `TuiDay` | max date |

### Usage Examples

#### Example 1

**Template:**
```html
<tui-textfield multi>
<label tuiLabel>Plain strings</label>
<input tuiInputDateMulti [(ngModel)]="value" />
<tui-calendar *tuiDropdown />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiInputDateMulti} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputDateMulti],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = [new TuiDay(2025, 6, 6)];
}
```

#### Example 2

Use `*tuiItem` directive to provide custom representation. You can use `tui-input-chip` out of the box or implement your own. The context is `TuiContext<{ item: T, index: number }>`

**Template:**
```html
<tui-textfield multi>
<input tuiInputDateMulti [(ngModel)]="value" />
<tui-calendar *tuiDropdown />
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
import {TuiInputDateMulti} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputDateMulti],
    templateUrl: './index.html',
    styleUrl: './index.less',
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

#### Example 3

**Template:**
```html
<tui-textfield multi [disabledItemHandler]="handler" >
<input tuiInputDateMulti [(ngModel)]="value" />
<tui-calendar *tuiDropdown />
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
import {TuiInputDateMulti} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputDateMulti],
    templateUrl: './index.html',
    styleUrl: './index.less',
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

#### Example 4

Formatting relies on `TUI_DATE_FORMAT` which you can override using `tuiDateFormatProvider` helper

**Template:**
```html
<tui-textfield multi>
<input tuiInputDateMulti [(ngModel)]="value" />
<tui-calendar *tuiDropdown />
<tui-input-chip *tuiItem />
</tui-textfield>
<tui-textfield multi>
<input tuiInputDateMulti [(ngModel)]="value" />
<tui-calendar *tuiDropdown />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {tuiDateFormatProvider} from '@taiga-ui/core';
import {TuiInputDateMulti} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputDateMulti],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [tuiDateFormatProvider({mode: 'mm/dd/yyyy', separator: '/'})],
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

#### Example 5

**Template:**
```html
<tui-textfield multi>
<input tuiInputDateMulti [(ngModel)]="value" />
<tui-calendar *tuiDropdown [markerHandler]="markerHandler" />
<tui-input-chip *tuiItem="let context" [appearance]="context.item.dayOfWeek() > 4 ? 'negative' : 'positive'" [iconStart]="context.item.dayOfWeek() > 4 ? '@tui.heart' : ''" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {type TuiMarkerHandler} from '@taiga-ui/core';
import {TuiInputDateMulti} from '@taiga-ui/kit';

const DOT: [string] = ['var(--tui-status-positive)'];

@Component({
    imports: [FormsModule, TuiInputDateMulti],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = [new TuiDay(2025, 6, 4), new TuiDay(2025, 6, 6)];

    protected readonly markerHandler: TuiMarkerHandler = (day: TuiDay) =>
        day.isWeekend ? [] : DOT;
}
```

**LESS:**
```less
:host {
    display: block;
    inline-size: 22rem;
}
```

#### Example 6

By default component works with our internal type called `TuiDay` . If you prefer to use anything else, like a string or native `Date` you can provide custom transformer in options to store value in different format in form control

**Template:**
```html
<tui-textfield multi>
<label tuiLabel>Choose a date</label>
<input tuiInputDateMulti [(ngModel)]="value" />
<tui-calendar *tuiDropdown />
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
    imports: [FormsModule, JsonPipe, TuiInputDateMulti, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputDateMultiOptionsProvider({
            valueTransformer: {
                fromControlValue: (value: Date[]): TuiDay[] =>
                    value.map((d) => TuiDay.fromUtcNativeDate(d)),
                toControlValue: (value: TuiDay[]): Date[] =>
                    value.map((day) => day.toUtcNativeDate()),
            },
        }),
    ],
})
export default class Example {
    protected value: Date[] | null = [
        TuiDay.currentLocal().append({day: -1}).toLocalNativeDate(),
        TuiDay.currentLocal().toLocalNativeDate(),
        TuiDay.currentLocal().append({day: 1}).toLocalNativeDate(),
    ];
}
```

Use
`*tuiItem`
directive to provide custom representation. You can use
`tui-input-chip`
out of the box or implement your own. The context is
`TuiContext<&#123; item: T, index: number &#125;>`
