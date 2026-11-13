# InputDateRange

- **Package**: `KIT`
- **Type**: components

`InputDateRange` = `Textfield` + `CalendarRange` + ❤️

### How to Use (Import)

```ts
import {FormsModule} from '@angular/forms';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateRange} from '@taiga-ui/kit';

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    TuiTextfield,
    TuiInputDateRange,
  ],
})
export class Example {
  protected value: TuiDayRange | null = null;
}
```

### How to Use (Template)

```html
<tui-textfield>
  <input
    tuiInputDateRange
    [(ngModel)]="value"
  />
  <tui-calendar-range *tuiTextfieldDropdown />
</tui-textfield>
```

### Example

```html
<ng-template>
<tui-textfield [disabledItemHandler]="itemsHandlers.disabledItemHandler()" [iconStart]="icons.iconStart" [tuiDropdownAlign]="dropdown.align" [tuiTextfieldCleaner]="textfieldDoc.cleaner" [tuiTextfieldSize]="textfieldDoc.size" [(open)]="dropdown.open" >
<label *ngIf="textfieldDoc.size !== 's'" tuiLabel > Choose range </label>
<input tuiInputDateRange [formControl]="control" [invalid]="controlDoc.invalid" [max]="max" [maxLength]="maxLength" [min]="min" [minLength]="minLength" [placeholder]="textfieldDoc.size === 's' ? 'Choose range' : ''" [readOnly]="controlDoc.readonly" [tuiDisabled]="controlDoc.disabled" />
<tui-calendar-range *tuiTextfieldDropdown [items]="selectedPeriodList ?? []" [listSize]="listSize" />
</tui-textfield>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [min] | `TuiDay` | Min date |
| [max] | `TuiDay` | Max date |
| [minLength] | `TuiDayLike | null` | Min length of the range |
| [maxLength] | `TuiDayLike | null` | Max length of the range |
| [items] | `TuiDayRangePeriod[]` | Period list items |
| [listSize] | `TuiSizeL` | Period list size |

### Usage Examples

#### Basic

**Template:**
```html
<tui-textfield [tuiTextfieldCleaner]="false">
<label tuiLabel>Choose range</label>
<input tuiInputDateRange [(ngModel)]="value" />
<tui-calendar-range *tuiTextfieldDropdown />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateRange} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputDateRange, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = new TuiDayRange(new TuiDay(2017, 0, 15), new TuiDay(2017, 0, 20));
}
```

#### DataList

**Template:**
```html
<tui-textfield [content]="content">
<label tuiLabel>Choose range</label>
<input tuiInputDateRange [formControl]="control" />
<tui-calendar-range *tuiTextfieldDropdown [items]="items" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiDayRange} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {tuiCreateDefaultDayRangePeriods, TuiInputDateRange} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputDateRange, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl<TuiDayRange | null>(null);
    protected readonly items = tuiCreateDefaultDayRangePeriods();

    public get content(): string {
        const {value} = this.control;

        return value
            ? String(this.items.find((period) => period.range.daySame(value)) || '')
            : '';
    }
}
```

#### Validation

If a field is optional, but unfinished field should be marked as invalid, use `tuiUnfinishedValidator` directive

**Template:**
```html
<form tuiForm="m" [formGroup]="form" >
<tui-textfield>
<label tuiLabel>Required range</label>
<input formControlName="required" tuiInputDateRange />
<tui-calendar-range *tuiTextfieldDropdown />
</tui-textfield>
<tui-error formControlName="required" [error]="[] | tuiFieldError | async" />
<tui-textfield>
<label tuiLabel>Optional range</label>
<input formControlName="optional" tuiInputDateRange tuiUnfinishedValidator />
<tui-calendar-range *tuiTextfieldDropdown />
</tui-textfield>
<tui-error formControlName="optional" [error]="[] | tuiFieldError | async" />
<footer>
<button tuiButton type="submit" [disabled]="form.invalid" > Submit </button>
</footer>
</form>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiError, TuiTextfield} from '@taiga-ui/core';
import {
    TuiFieldErrorPipe,
    TuiInputDateRange,
    TuiUnfinishedValidator,
    tuiValidationErrorsProvider,
} from '@taiga-ui/kit';
import {TuiForm} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        ReactiveFormsModule,
        TuiButton,
        TuiError,
        TuiFieldErrorPipe,
        TuiForm,
        TuiInputDateRange,
        TuiTextfield,
        TuiUnfinishedValidator,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiValidationErrorsProvider({
            tuiUnfinished: 'Either fill this or leave blank',
            required: 'This field is required',
        }),
    ],
})
export default class Example {
    protected readonly form = new FormGroup({
        required: new FormControl(null, Validators.required),
        optional: new FormControl(),
    });
}
```

#### Value transformer

By default component works with our internal type called `TuiDayRange` . If you prefer to use anything else, like a string you can provide custom transformer in options to store value in different format in form control

**Template:**
```html
<tui-textfield>
<label tuiLabel>Choose range</label>
<input tuiInputDateRange [(ngModel)]="value" />
<tui-calendar-range *tuiTextfieldDropdown />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDayRange} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateRange, tuiInputDateRangeOptionsProvider} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputDateRange, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputDateRangeOptionsProvider({
            valueTransformer: {
                fromControlValue: (value: string): TuiDayRange | null =>
                    value ? TuiDayRange.normalizeParse(value) : null,
                toControlValue: (value: TuiDayRange | null): string =>
                    value?.toString() || '',
            },
        }),
    ],
})
export default class Example {
    protected value = '';
}
```

#### Format

Formatting relies on `TUI_DATE_FORMAT` which you can override using `tuiDateFormatProvider` helper

**Template:**
```html
<label tuiLabel> Choose range <tui-textfield tuiTextfieldSize="s">
<input placeholder="Using US format" tuiInputDateRange [(ngModel)]="value" />
<tui-calendar-range *tuiTextfieldDropdown />
</tui-textfield>
</label>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiDayRange} from '@taiga-ui/cdk';
import {tuiDateFormatProvider, TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateRange} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, TuiInputDateRange, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiDateFormatProvider({mode: 'MDY', separator: '/'})],
})
export default class Example {
    protected value: TuiDayRange | null = null;
}
```

#### Mobile

You can enable a different picker to improve UX on mobile devices when tapping the icon. Open this on a mobile device or enable emulation in DevTools and refresh the page

**Template:**
```html
<form tuiForm="m" [formGroup]="form" >
<tui-textfield tuiDropdownMobile="Pick a range">
<label tuiLabel>Mobile dropdown</label>
<input formControlName="mobile" tuiInputDateRange />
<tui-calendar-range *tuiTextfieldDropdown />
</tui-textfield>
<tui-textfield tuiMobileCalendar>
<label tuiLabel>Mobile calendar</label>
<input formControlName="fullscreen" tuiInputDateRange />
<tui-calendar-range *tuiTextfieldDropdown />
</tui-textfield>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDropdownMobile, TuiMobileCalendarDropdownNew} from '@taiga-ui/addon-mobile';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateRange} from '@taiga-ui/kit';
import {TuiForm} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiDropdownMobile,
        TuiForm,
        TuiInputDateRange,
        TuiMobileCalendarDropdownNew,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly form = new FormGroup({
        mobile: new FormControl(),
        fullscreen: new FormControl(),
    });
}
```

#### Limits

**Template:**
```html
<tui-textfield [disabledItemHandler]="handler">
<label tuiLabel>Take days off</label>
<input placeholder="Min: 3, Max: 5" tuiInputDateRange [max]="max" [maxLength]="{day: 5}" [min]="min" [minLength]="{day: 3}" [(ngModel)]="value" />
<tui-calendar-range *tuiTextfieldDropdown />
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
import {TuiInputDateRange} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputDateRange, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: TuiDay | null = null;

    protected readonly today = TuiDay.currentLocal();
    protected readonly min = new TuiDay(this.today.year, this.today.month, 1);
    protected readonly max = this.min.append({month: 2, day: -1});

    protected readonly handler = (day: TuiDay): boolean => day.dayOfWeek() > 4;
}
```
