# InputDateRange

- **Package**: `KIT`
- **Type**: components

`InputDateRange` = `Textfield` + `CalendarRange` + ❤️

### Example

```html
<ng-template>
<tui-textfield [disabledItemHandler]="itemsHandlers.disabledItemHandler()" [iconStart]="icons.iconStart" [invalid]="controlDoc.invalid" [tuiAppearanceFocus]="appearance.focus" [tuiAppearanceState]="appearance.state" [tuiDropdownAlign]="dropdown.align" [tuiTextfieldCleaner]="textfieldDoc.cleaner" [tuiTextfieldSize]="textfieldDoc.size" [(open)]="dropdown.open" > @if (textfieldDoc.size !== 's') { <label tuiLabel>Choose range</label> } <input tuiInputDateRange [formControl]="control" [max]="max" [maxLength]="maxLength" [min]="min" [minLength]="minLength" [placeholder]="textfieldDoc.size === 's' ? 'Choose range' : ''" [readonly]="controlDoc.readonly" [tuiDisabled]="controlDoc.disabled" />
<tui-calendar-range *tuiDropdown [items]="selectedPeriodList ?? []" [listSize]="listSize" />
</tui-textfield>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [min] | `TuiDay` | min date |
| [max] | `TuiDay` | max date |
| [minLength] | `TuiDayLike | null` | min length of the range |
| [maxLength] | `TuiDayLike | null` | max length of the range |
| [items] | `TuiDayRangePeriod[]` | period list items |
| [listSize] | `TuiSizeL` | period list size |

### Usage Examples

#### Example 1

**Template:**
```html
<tui-textfield [tuiTextfieldCleaner]="false">
<label tuiLabel>Choose range</label>
<input tuiInputDateRange [max]="max" [(ngModel)]="value" />
<tui-calendar-range *tuiDropdown />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TuiInputDateRange} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputDateRange],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly max = new TuiDay(2017, 0, 30);
    protected value = new TuiDayRange(new TuiDay(2017, 0, 15), new TuiDay(2017, 0, 20));
}
```

#### Example 2

Currently not implemented on mobile devices

**Template:**
```html
<tui-textfield [content]="content">
<label tuiLabel>Choose range</label>
<input tuiInputDateRange [formControl]="control" />
<tui-calendar-range *tuiDropdown [items]="items" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiDayRange} from '@taiga-ui/cdk';
import {tuiCreateDefaultDayRangePeriods, TuiInputDateRange} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiInputDateRange],
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

#### Example 3

If a field is optional, but unfinished field should be marked as invalid, use `tuiUnfinishedValidator` directive

**Template:**
```html
<form tuiForm="m" [formGroup]="form" >
<tui-textfield>
<label tuiLabel>Required range</label>
<input formControlName="required" tuiInputDateRange />
<tui-calendar-range *tuiDropdown />
</tui-textfield>
<tui-error formControlName="required" />
<tui-textfield>
<label tuiLabel>Optional range</label>
<input formControlName="optional" tuiInputDateRange tuiUnfinishedValidator />
<tui-calendar-range *tuiDropdown />
</tui-textfield>
<tui-error formControlName="optional" />
<footer>
<button tuiButton type="submit" [disabled]="form.invalid" > Submit </button>
</footer>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiError, tuiValidationErrorsProvider} from '@taiga-ui/core';
import {TuiInputDateRange, TuiUnfinishedValidator} from '@taiga-ui/kit';
import {TuiForm} from '@taiga-ui/layout';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiButton,
        TuiError,
        TuiForm,
        TuiInputDateRange,
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

#### Example 4

By default component works with our internal type called `TuiDayRange` . If you prefer to use anything else, like a string you can provide custom transformer in options to store value in different format in form control

**Template:**
```html
<tui-textfield>
<label tuiLabel>Choose range</label>
<input tuiInputDateRange [(ngModel)]="value" />
<tui-calendar-range *tuiDropdown />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDayRange} from '@taiga-ui/cdk';
import {TuiInputDateRange, tuiInputDateRangeOptionsProvider} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputDateRange],
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

#### Example 5

Formatting relies on `TUI_DATE_FORMAT` which you can override using `tuiDateFormatProvider` helper

**Template:**
```html
<label tuiLabel> Choose range <tui-textfield tuiTextfieldSize="s">
<input placeholder="Using US format" tuiInputDateRange [(ngModel)]="value" />
<tui-calendar-range *tuiDropdown />
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
import {tuiDateFormatProvider} from '@taiga-ui/core';
import {TuiInputDateRange} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, ReactiveFormsModule, TuiInputDateRange],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiDateFormatProvider({mode: 'mm/dd/yyyy', separator: '/'})],
})
export default class Example {
    protected value: TuiDayRange | null = null;
}
```

#### Example 6

You can enable a different picker to improve UX on mobile devices when tapping the icon. Open this on a mobile device or enable emulation in DevTools and refresh the page

**Template:**
```html
<form tuiForm="m" [formGroup]="form" >
<tui-textfield tuiDropdownSheet="Pick a range">
<label tuiLabel>Mobile dropdown</label>
<input formControlName="mobile" tuiInputDateRange />
<tui-calendar-range *tuiDropdown />
</tui-textfield>
<tui-textfield tuiMobileCalendar>
<label tuiLabel>Mobile calendar</label>
<input formControlName="fullscreen" tuiInputDateRange />
<tui-calendar-range *tuiDropdown />
</tui-textfield>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDropdownSheet, TuiMobileCalendarDropdown} from '@taiga-ui/addon-mobile';
import {TuiInputDateRange} from '@taiga-ui/kit';
import {TuiForm} from '@taiga-ui/layout';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiDropdownSheet,
        TuiForm,
        TuiInputDateRange,
        TuiMobileCalendarDropdown,
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

#### Example 7

**Template:**
```html
<tui-textfield [disabledItemHandler]="handler">
<label tuiLabel>Take days off</label>
<input placeholder="Min: 3, Max: 5" tuiInputDateRange [max]="max" [maxLength]="{day: 5}" [min]="min" [minLength]="{day: 3}" [(ngModel)]="value" />
<tui-calendar-range *tuiDropdown />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiInputDateRange} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputDateRange],
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
