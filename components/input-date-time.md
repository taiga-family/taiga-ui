# InputDateTime

- **Package**: `KIT`
- **Type**: components

`InputDateTime` = `Textfield` + `Calendar` + ❤️

### Example

```html
<ng-template>
<tui-textfield [iconStart]="icons.iconStart" [invalid]="controlDoc.invalid" [tuiAppearanceFocus]="appearance.focus" [tuiAppearanceState]="appearance.state" [tuiDropdownAlign]="dropdown.align" [tuiDropdownDirection]="dropdown.direction" [tuiDropdownMinHeight]="dropdown.minHeight" [tuiTextfieldCleaner]="textfieldDoc.cleaner" [tuiTextfieldSize]="textfieldDoc.size" [(open)]="dropdown.open" > @if (textfieldDoc.size !== 's') { <label tuiLabel>Choose date</label> } <input tuiInputDateTime [formControl]="control" [max]="max" [min]="min" [placeholder]="textfieldDoc.size === 's' ? 'Choose date' : ''" [readonly]="controlDoc.readonly" [timeMode]="timeMode" [tuiDisabled]="controlDoc.disabled" [tuiTimeFormat]="{dayPeriod: timeFormatDoc.dayPeriod()}" />
<tui-calendar *tuiDropdown />
</tui-textfield>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [timeMode] | `MaskitoTimeMode` | time format mode for SS and MS support |
| [min] | `TuiDay | [TuiDay, TuiTime] | null` | min date |
| [max] | `TuiDay | [TuiDay, TuiTime] | null` | max date |

### Usage Examples

#### Example 1

**Template:**
```html
<tui-textfield>
<label tuiLabel>Choose a date</label>
<input tuiInputDateTime [(ngModel)]="value" />
<tui-calendar *tuiDropdown />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import {TuiInputDateTime} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputDateTime],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = [new TuiDay(2020, 8, 20), new TuiTime(19, 19)];
}
```

#### Example 2

Feel free to configure `Calendar` specific properties: disable adjacent months days, adds circled colored markers to some days, control initial opened month and etc. Explore Calendar documentation page for more customization options. Don't set `[min]` / `[max]` and `[disabledItemHandler]` properties for `<tui-calendar />` ! `Calendar` automatically inherits these properties from `<input tuiInputDateTime />` and `<tui-textfield />` .

**Template:**
```html
<tui-textfield>
<label tuiLabel>Choose a date</label>
<input tuiInputDateTime [(ngModel)]="value" />
<tui-calendar *tuiDropdown [markerHandler]="markerHandler" [month]="value?.[0] ?? defaultActiveMonth()" [showAdjacent]="false" (monthChange)="defaultActiveMonth.set($event)" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiDay, TuiMonth, type TuiTime} from '@taiga-ui/cdk';
import {type TuiMarkerHandler} from '@taiga-ui/core';
import {TuiInputDateTime} from '@taiga-ui/kit';

const CHEAPEST_TICKET: [string] = ['var(--tui-status-positive)'];

@Component({
    imports: [FormsModule, TuiInputDateTime],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: [TuiDay, TuiTime] | null = null;
    protected readonly defaultActiveMonth = signal(new TuiMonth(2000, 0));

    protected readonly markerHandler: TuiMarkerHandler = (day: TuiDay) =>
        day.day % 5 === 0 ? CHEAPEST_TICKET : [];
}
```

#### Example 3

You can customize dropdown content and even extend its template

**Template:**
```html
<tui-textfield [content]="isSame(control.value, tomorrow) ? 'Next morning' : ''" [open]="open()" (openChange)="open.set($event)" >
<input placeholder="Choose a date" tuiInputDateTime [formControl]="control" />
<ng-container *tuiDropdown>
<tui-calendar />
<button appearance="action" size="m" tuiButton type="button" (click)="control.setValue(tomorrow); open.set(false)" > Tomorrow morning </button>
</ng-container>
</tui-textfield>
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, tuiSum, TuiTime} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiInputDateTime} from '@taiga-ui/kit';

type ControlValue = [TuiDay, TuiTime | null] | null;

@Component({
    imports: [ReactiveFormsModule, TuiButton, TuiInputDateTime],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly open = signal(false);
    protected readonly control = new FormControl<ControlValue>(null);

    protected readonly tomorrow: ControlValue = [
        TuiDay.currentLocal().append({day: 1}),
        new TuiTime(9, 0),
    ];

    protected isSame(a: ControlValue, b: ControlValue): boolean {
        return Boolean(a && b && tuiSum(...a.map(Number)) === tuiSum(...b.map(Number)));
    }
}
```

**LESS:**
```less
button {
    inline-size: 100%;
    border-radius: 0;
    box-shadow: 0 -1px var(--tui-border-normal);
}
```

#### Example 4

If a field is optional, but unfinished field should be marked as invalid, use `tuiUnfinishedValidator` directive

**Template:**
```html
<form tuiForm="m" [formGroup]="form" >
<tui-textfield>
<label tuiLabel>Required</label>
<input formControlName="timeRequired" tuiInputDateTime />
<tui-calendar *tuiDropdown />
</tui-textfield>
<tui-error formControlName="timeRequired" />
<tui-textfield>
<label tuiLabel>At least day</label>
<input formControlName="dayRequired" tuiInputDateTime />
<tui-calendar *tuiDropdown />
</tui-textfield>
<tui-error formControlName="dayRequired" />
<tui-textfield>
<label tuiLabel>Optional + UnfinishedValidator</label>
<input formControlName="optional" tuiInputDateTime tuiUnfinishedValidator />
<tui-calendar *tuiDropdown />
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
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    type ValidationErrors,
    type ValidatorFn,
} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiError, tuiValidationErrorsProvider} from '@taiga-ui/core';
import {TuiInputDateTime, TuiUnfinishedValidator} from '@taiga-ui/kit';
import {TuiForm} from '@taiga-ui/layout';

export function minLengthValidator(minLength: number): ValidatorFn {
    return ({value}): ValidationErrors | null =>
        value?.filter(Boolean).length >= minLength ? null : {required: {value}};
}

@Component({
    imports: [
        ReactiveFormsModule,
        TuiButton,
        TuiError,
        TuiForm,
        TuiInputDateTime,
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
        timeRequired: new FormControl(null, minLengthValidator(2)),
        dayRequired: new FormControl(
            null,
            minLengthValidator(1), // The same as `Validators.required` (from @angular/forms)
        ),
        optional: new FormControl(),
    });
}
```

#### Example 5

By default component works with our internal types called `TuiDay` and `TuiTime` . If you prefer to use anything else, like a string or native `Date` you can provide custom transformer in options to store value in different format in form control

**Template:**
```html
<tui-textfield>
<input placeholder="Choose a date" tuiInputDateTime [(ngModel)]="value" />
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
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import {TuiInputDateTime, tuiInputDateTimeOptionsProvider} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, JsonPipe, TuiInputDateTime],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputDateTimeOptionsProvider({
            valueTransformer: {
                fromControlValue: (value: Date | null): [TuiDay, TuiTime | null] | null =>
                    value && [
                        TuiDay.fromUtcNativeDate(value),
                        new TuiTime(value.getUTCHours(), value.getUTCMinutes()),
                    ],
                toControlValue: (value: [TuiDay, TuiTime | null] | null): Date | null => {
                    const {hours = 0, minutes = 0} = value?.[1] ?? {};

                    return (
                        value &&
                        new Date(value[0].toUtcNativeDate().setUTCHours(hours, minutes))
                    );
                },
            },
        }),
    ],
})
export default class Example {
    protected value: Date | null = new Date(Date.UTC(2024, 7, 9, 12, 17));
}
```

#### Example 6

Formatting relies on `TUI_DATE_FORMAT` which you can override using `tuiDateFormatProvider` helper

**Template:**
```html
<tui-textfield>
<label tuiLabel>ISO 8601 date format</label>
<input tuiInputDateTime [(ngModel)]="value" />
<tui-calendar *tuiDropdown />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {tuiDateFormatProvider} from '@taiga-ui/core';
import {TuiInputDateTime} from '@taiga-ui/kit';

@Component({
    selector: 'example-6',
    imports: [FormsModule, ReactiveFormsModule, TuiInputDateTime],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiDateFormatProvider({mode: 'yyyy/mm/dd', separator: '-'})],
})
export default class Example {
    protected value = [new TuiDay(2017, 0, 15)];
}
```

#### Example 7

Open this on a mobile device or enable emulation in DevTools and refresh the page to explore this example! You can use several different approaches to optimize UX on mobile devices when tapping the icon.

**Template:**
```html
<form tuiForm="l" [formGroup]="form" >
<tui-textfield>
<label tuiLabel>Native picker</label>
<input formControlName="native" timeMode="HH:MM:SS.MSS" tuiInputDateTime type="datetime-local" />
<tui-calendar *tuiDropdown />
</tui-textfield>
<tui-textfield tuiDropdownSheet="Pick a date">
<label tuiLabel>Mobile dropdown</label>
<input formControlName="mobile" tuiInputDateTime />
<tui-calendar *tuiDropdown />
</tui-textfield>
<tui-textfield tuiMobileCalendar>
<label tuiLabel>Mobile calendar</label>
<input formControlName="fullscreen" tuiInputDateTime />
<tui-calendar *tuiDropdown />
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
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import {TuiInputDateTime} from '@taiga-ui/kit';
import {TuiForm} from '@taiga-ui/layout';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiDropdownSheet,
        TuiForm,
        TuiInputDateTime,
        TuiMobileCalendarDropdown,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly form = new FormGroup({
        native: new FormControl([TuiDay.currentLocal(), new TuiTime(12, 34, 56, 789)]),
        mobile: new FormControl([TuiDay.currentLocal().append({day: 1})]),
        fullscreen: new FormControl([
            TuiDay.currentLocal().append({day: 2}),
            new TuiTime(23, 59),
        ]),
    });
}
```

#### Example 8

Individual disabled dates still can be typed in manually or picked on mobile in native picker but control will be automatically marked as invalid

**Template:**
```html
<tui-textfield [disabledItemHandler]="handler">
<label tuiLabel>Choose a date</label>
<input tuiInputDateTime type="datetime-local" [max]="max" [min]="min" [(ngModel)]="value" />
<tui-calendar *tuiDropdown [showAdjacent]="false" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import {TuiInputDateTime} from '@taiga-ui/kit';

const TODAY = TuiDay.currentLocal();

@Component({
    imports: [FormsModule, TuiInputDateTime],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: [TuiDay, TuiTime | null] | null = null;

    protected readonly min = [
        new TuiDay(TODAY.year, TODAY.month, 1),
        new TuiTime(0, 0),
    ] as const;

    protected readonly max = [
        this.min[0].append({month: 1, day: -1}),
        new TuiTime(23, 59),
    ] as const;

    protected readonly handler = ([day]: [TuiDay, TuiTime | null]): boolean =>
        day.daySame(TODAY);
}
```

#### Example 9

Native mobile pickers have limited browser support for native datalist

**Template:**
```html
<tui-textfield>
<input list="dates" placeholder="Pick a date" tuiInputDateTime type="datetime-local" [(ngModel)]="value" />
<datalist id="dates"> @for (date of dates | keyvalue: asIs; track date) { <option [value]="toISOString(date.value)"> {{ date.key }} </option> } </datalist>
<section *tuiDropdown>
<tui-calendar />
<tui-data-list> @for (date of dates | keyvalue: asIs; track date) { <button tuiOption [value]="date.value" > {{ date.key }} </button> } <button tuiOption [disabled]="true" > v5 </button>
</tui-data-list>
</section>
</tui-textfield>
```

**TypeScript:**
```ts
import {KeyValuePipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import {TuiDataList} from '@taiga-ui/core';
import {TuiInputDateTime} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, KeyValuePipe, TuiDataList, TuiInputDateTime],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly dates: Record<string, [TuiDay, TuiTime]> = {
        'Taiga UI Birthday': [new TuiDay(2020, 8, 20), new TuiTime(19, 19)],
        '2.0.0 release': [new TuiDay(2020, 11, 29), new TuiTime(19, 5)],
        '3.0.0 release': [new TuiDay(2022, 7, 30), new TuiTime(17, 18)],
        '4.0.0 release': [new TuiDay(2024, 7, 9), new TuiTime(12, 17)],
    };

    protected readonly datesValues = Object.values(this.dates);

    protected value: [TuiDay, TuiTime | null] | null =
        this.datesValues[this.datesValues.length - 1] ?? null;

    protected toISOString([day, time]: readonly [TuiDay, TuiTime]): string {
        return `${day.toString('yyyy/mm/dd', '-')}T${time.toString()}`;
    }

    protected asIs(): number {
        return 0;
    }
}
```

**LESS:**
```less
section {
    display: flex;
}

tui-data-list {
    inline-size: 12rem;
    box-shadow: -1px 0 var(--tui-border-normal);
}
```
