# InputMonth

- **Package**: `KIT`
- **Type**: components

`InputMonth` = `Textfield` + `CalendarMonth` + ❤️

### Example

```html
<ng-template>
<tui-textfield [invalid]="controlDoc.invalid" [tuiAppearanceFocus]="appearance.focus" [tuiAppearanceState]="appearance.state" [tuiTextfieldCleaner]="textfieldDoc.cleaner" [tuiTextfieldSize]="textfieldDoc.size" >
<input placeholder="Month" tuiInputMonth [formControl]="control" [readonly]="controlDoc.readonly" [tuiDisabled]="controlDoc.disabled" />
<tui-calendar-month *tuiDropdown [disabledItemHandler]="disabledItemHandler" [max]="max" [min]="min" [(year)]="year" />
</tui-textfield>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [min] | `TuiMonth \| null` | the lowest value in the range of permitted dates |
| [max] | `TuiMonth \| null` | the greatest value in the range of permitted dates |
| [disabledItemHandler] | `TuiBooleanHandler<TuiMonth>` |  |
| [(year)] | `TuiYear` | current year |

### Usage Examples

#### Example 1

**Template:**
```html
<tui-textfield>
<input placeholder="Select vacation month" tuiInputMonth [(ngModel)]="value" />
<tui-calendar-month *tuiDropdown [disabledItemHandler]="isSummerHandler" [max]="max" [min]="min" [(year)]="activeYear" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiBooleanHandler, TuiMonth, TuiYear} from '@taiga-ui/cdk';
import {TuiInputMonth} from '@taiga-ui/kit';

const NEXT_YEAR = TuiMonth.currentLocal().year + 1;

@Component({
    imports: [FormsModule, TuiInputMonth],
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

#### Example 2

Form control value is TuiMonth or `null` when empty

**Template:**
```html
<tui-textfield>
<input placeholder="Annoying required field" tuiInputMonth [formControl]="control" />
<tui-calendar-month *tuiDropdown />
</tui-textfield>
<tui-error [formControl]="control" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiMonth} from '@taiga-ui/cdk';
import {TuiError, tuiValidationErrorsProvider} from '@taiga-ui/core';
import {TuiInputMonth} from '@taiga-ui/kit';
import {interval, map, startWith} from 'rxjs';

@Component({
    imports: [ReactiveFormsModule, TuiError, TuiInputMonth],
    templateUrl: './index.html',
    styles: ':host { display: block; min-block-size: 4rem }',
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

#### Example 3

Use all powers of `Textfield` : put any number of Icons and Tooltips inside (and control their order and color), modify the size of the textbox and etc. Explore Input documentation page for more customization options.

**Template:**
```html
<tui-textfield iconStart="@tui.calendar" tuiTextfieldSize="m" >
<label tuiLabel>I am a label</label>
<input placeholder="I am placeholder" tuiInputMonth [(ngModel)]="value" />
<tui-calendar-month *tuiDropdown />
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
import {TuiIcon} from '@taiga-ui/core';
import {TuiInputMonth, tuiInputMonthOptionsProvider, TuiTooltip} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiIcon, TuiInputMonth, TuiTooltip],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiInputMonthOptionsProvider({icon: ''})],
})
export default class Example {
    protected value: TuiMonth | null = null;
}
```

#### Example 4

**Template:**
```html
<tui-textfield [open]="open()" (openChange)="open.set($event)" >
<input placeholder="Your happiest life moment" tuiInputMonth [(ngModel)]="value" />
<ng-container *tuiDropdown>
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
import {TuiLink} from '@taiga-ui/core';
import {TuiInputMonth} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputMonth, TuiLink],
    templateUrl: './index.html',
    styleUrl: './index.less',
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

#### Example 5

Use `[content]` of `Textfield` to customize view of selected value inside textfield . To switch language inside calendar – read documentation page "Internationalization" .

**Template:**
```html
<tui-textfield [content]="stringify">
<input placeholder="Best time to start" tuiInputMonth [(ngModel)]="value" />
<tui-calendar-month *tuiDropdown />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component, inject, LOCALE_ID} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiContext, TuiMonth, type TuiStringHandler} from '@taiga-ui/cdk';
import {TuiInputMonth} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputMonth],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly formatter = Intl.DateTimeFormat(inject(LOCALE_ID), {
        year: '2-digit',
        month: 'short',
    });

    protected value: TuiMonth | null = TuiMonth.currentLocal().append({month: -1});

    protected readonly stringify: TuiStringHandler<TuiContext<TuiMonth>> = ({
        $implicit,
    }) => this.formatter.format($implicit.toLocalNativeDate());
}
```

#### Example 6

Add `type="month"` for `<input />` to enable built-in browser picker for mobile devices. Browser support limitations! Native picker does not have `[disabledItemHandler]` feature. Also, we discourage to use `[min]` / `[max]` properties with enabled native picker – it has rather limited browser support.

**Template:**
```html
<tui-textfield>
<input placeholder="Use mobile device" tuiInputMonth type="month" [(ngModel)]="value" />
<tui-calendar-month *tuiDropdown />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiMonth} from '@taiga-ui/cdk';
import {TuiInputMonth} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputMonth],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: TuiMonth | null = null;
}
```

#### Example 7

Use `tuiInputMonthRange` to enable possibility to select range of months. All features described above are applicable for it too. Moreover, it provides two additional features: `minLength` / `maxLength` – minimal / maximal length of the selected range. Form control value is TuiMonthRange or `null` (for uncompleted range or empty textfield) types.

**Template:**
```html
<tui-textfield [style.width.rem]="24">
<input placeholder="Choose a range of months" tuiInputMonthRange [(ngModel)]="value" />
<tui-calendar-month *tuiDropdown [maxLength]="6" [minLength]="3" />
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
import {TuiIcon} from '@taiga-ui/core';
import {TuiInputMonthRange, TuiTooltip} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiIcon, TuiInputMonthRange, TuiTooltip],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: TuiMonthRange | null = null;
}
```
