# InputMonth

- **Package**: `KIT`
- **Type**: components

`InputMonth` = `Textfield` + `CalendarMonth` + ❤️

### How to Use (Import)

```ts
import {FormsModule} from '@angular/forms';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputMonth} from '@taiga-ui/kit';

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    TuiTextfield,
    TuiInputMonth,
  ],
})
export class Example {
  value: TuiMonth | null = null;
}
```

### How to Use (Template)

```html
<tui-textfield>
  <input
    tuiInputMonth
    [(ngModel)]="value"
  />

  <tui-calendar-month
    *tuiTextfieldDropdown
    [min]="min"
    [max]="max"
    [disabledItemHandler]="disabledItemHandler"
    [(year)]="activeYear"
  />
</tui-textfield>
```

### Example

```html
<ng-template>
<tui-textfield [tuiTextfieldCleaner]="textfieldDoc.cleaner" [tuiTextfieldSize]="textfieldDoc.size" >
<input placeholder="Month" tuiInputMonth [formControl]="control" [invalid]="controlDoc.invalid" [readOnly]="controlDoc.readonly" [tuiDisabled]="controlDoc.disabled" />
<tui-calendar-month *tuiTextfieldDropdown [disabledItemHandler]="disabledItemHandler" [max]="max" [min]="min" [(year)]="year" />
</tui-textfield>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [min] | `TuiMonth | null` | The lowest value in the range of permitted dates |
| [max] | `TuiMonth | null` | The greatest value in the range of permitted dates |
| [disabledItemHandler] | `TuiBooleanHandler<TuiMonth>` |  |
| [(year)] | `TuiYear` | Current year |

### Usage Examples

#### Basic

**Template:**
```html
<tui-textfield>
<input placeholder="Select vacation month" tuiInputMonth [(ngModel)]="value" />
<tui-calendar-month *tuiTextfieldDropdown [disabledItemHandler]="isSummerHandler" [max]="max" [min]="min" [(year)]="activeYear" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiBooleanHandler, TuiMonth, TuiYear} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputMonth} from '@taiga-ui/kit';

const NEXT_YEAR = TuiMonth.currentLocal().year + 1;

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputMonth, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly min = TuiMonth.currentLocal().append({month: 1});
    protected readonly max = new TuiMonth(NEXT_YEAR, 11);
    protected value: TuiMonth | null = null;
    protected activeYear = new TuiYear(NEXT_YEAR);

    protected readonly isSummerHandler: TuiBooleanHandler<TuiMonth> = ({month}) =>
        [5, 6, 7].includes(month);
}
```

#### Form control value

Form control value is TuiMonth or `null` (for empty textfield only) types. Use Validators.required (built-in validator provided by Angular team) with our FieldError pipe to notify your users about required field.

**Template:**
```html
<tui-textfield>
<input placeholder="Annoying required field" tuiInputMonth [formControl]="control" />
<tui-calendar-month *tuiTextfieldDropdown />
</tui-textfield>
<tui-error [error]="[] | tuiFieldError | async" [formControl]="control" />
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiMonth} from '@taiga-ui/cdk';
import {TuiError, TuiTextfield} from '@taiga-ui/core';
import {
    TuiFieldErrorPipe,
    TuiInputMonth,
    tuiValidationErrorsProvider,
} from '@taiga-ui/kit';
import {interval, map, startWith} from 'rxjs';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        ReactiveFormsModule,
        TuiError,
        TuiFieldErrorPipe,
        TuiInputMonth,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styles: [':host {display: block; min-height: 4rem}'],
    encapsulation,
    changeDetection,
    providers: [
        tuiValidationErrorsProvider({
            required: interval(1000).pipe(
                map((i) => (i % 2 ? 'NOW!!!' : 'Enter this!')),
                startWith('Required field!'),
            ),
        }),
    ],
})
export default class Example {
    protected readonly control = new FormControl<TuiMonth | null>(
        null,
        Validators.required,
    );
}
```

#### Textfield customization

Use all powers of `Textfield` : put any number of Icons and Tooltips inside (and control their order and color), modify the size of the textbox and etc. Explore Textfield documentation page for more customization options.

**Template:**
```html
<tui-textfield iconStart="@tui.calendar" tuiTextfieldSize="m" >
<label tuiLabel>I am a label</label>
<input placeholder="I am placeholder" tuiInputMonth [(ngModel)]="value" />
<tui-calendar-month *tuiTextfieldDropdown />
<tui-icon icon="@tui.circle-alert" style="color: var(--tui-status-negative); pointer-events: none" />
<tui-icon tuiTooltip="I am a hint" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiMonth} from '@taiga-ui/cdk';
import {TuiIcon, TuiTextfield} from '@taiga-ui/core';
import {TuiInputMonth, tuiInputMonthOptionsProvider, TuiTooltip} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiIcon, TuiInputMonth, TuiTextfield, TuiTooltip],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputMonthOptionsProvider({
            // Callback has the first argument – size of the textfield box ('s' | 'm' | 'l')
            icon: () => '',
        }),
    ],
})
export default class Example {
    protected value: TuiMonth | null = null;
}
```

#### Dropdown customization

**Template:**
```html
<tui-textfield [open]="open()" (openChange)="open.set($event)" >
<input placeholder="Your happiest life moment" tuiInputMonth [(ngModel)]="value" />
<ng-container *tuiTextfieldDropdown>
<tui-calendar-month />
<button tuiLink type="button" class="option" (click)="chooseTheOnlyCorrectOption()" > My wife's birthday </button>
</ng-container>
</tui-textfield>
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiMonth} from '@taiga-ui/cdk';
import {TuiLink, TuiTextfield} from '@taiga-ui/core';
import {TuiInputMonth} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputMonth, TuiLink, TuiTextfield],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: TuiMonth | null = null;
    protected readonly open = signal(false);

    protected chooseTheOnlyCorrectOption(): void {
        this.value = new TuiMonth(1998, 2);
        this.open.set(false);
    }
}
```

**LESS:**
```less
.option {
    border-block-start: 1px solid var(--tui-border-normal);
    inline-size: 100%;
    block-size: 3rem;
}
```

#### Selected value customization

Use `TUI_MONTH_FORMATTER` to customize view of selected value inside textfield . To switch language inside calendar – read documentation page "Internationalization" .

**Template:**
```html
<tui-textfield>
<input placeholder="Best time to start" tuiInputMonth [(ngModel)]="value" />
<tui-calendar-month *tuiTextfieldDropdown />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component, inject, LOCALE_ID} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiMonth} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TUI_MONTH_FORMATTER, TuiInputMonth} from '@taiga-ui/kit';
import {of} from 'rxjs';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputMonth, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_MONTH_FORMATTER,
            useFactory: () => {
                const formatter = Intl.DateTimeFormat(inject(LOCALE_ID), {
                    year: '2-digit',
                    month: 'short',
                });

                return of(
                    (x: TuiMonth | null) =>
                        (x && formatter.format(x.toLocalNativeDate())) ?? '',
                );
            },
        },
    ],
})
export default class Example {
    protected value: TuiMonth | null = TuiMonth.currentLocal().append({month: -1});
}
```

#### Native picker

Add `type="month"` for `<input />` to enable built-in browser picker for mobile devices. Browser support limitations! Native picker does not have `[disabledItemHandler]` feature. Also, we discourage to use `[min]` / `[max]` properties with enabled native picker – it has rather limited browser support.

**Template:**
```html
<tui-textfield>
<input placeholder="Use mobile device" tuiInputMonth type="month" [(ngModel)]="value" />
<tui-calendar-month *tuiTextfieldDropdown />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiMonth} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputMonth} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputMonth, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: TuiMonth | null = null;
}
```

#### Range mode

Use `tuiInputMonthRange` to enable possibility to select range of months. All features described above are applicable for it too. Moreover, it provides two additional features: `minLength` / `maxLength` – minimal / maximal length of the selected range. Form control value is TuiMonthRange or `null` (for uncompleted range or empty textfield) types.

**Template:**
```html
<tui-textfield>
<input placeholder="Choose a range of months" tuiInputMonthRange [(ngModel)]="value" />
<tui-calendar-month *tuiTextfieldDropdown [maxLength]="6" [minLength]="3" />
<tui-icon tuiTooltip="Click the same month twice to set a single-day range" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiMonthRange} from '@taiga-ui/cdk';
import {TuiIcon, TuiTextfield} from '@taiga-ui/core';
import {TuiInputMonthRange, TuiTooltip} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiIcon, TuiInputMonthRange, TuiTextfield, TuiTooltip],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: TuiMonthRange | null = null;
}
```
