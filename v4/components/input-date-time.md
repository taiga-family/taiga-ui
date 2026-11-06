# InputDateTime

- **Package**: `KIT`
- **Type**: components

`InputDateTime` = `Textfield` + `Calendar` + ❤️

### How to Use (Import)

```ts
import {FormsModule} from '@angular/forms';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateTime} from '@taiga-ui/kit';

@Component({
  imports: [
    // ...
    FormsModule,
    TuiTextfield,
    TuiInputDateTime,
  ],
})
export class Example {
  protected value: [TuiDay, TuiTime | null] | null = null;
}
```

### How to Use (Template)

```html
<tui-textfield>
  <input
    tuiInputDateTime
    [(ngModel)]="value"
  />
  <tui-calendar *tuiTextfieldDropdown />
</tui-textfield>
```

### Example

```html
<ng-template>
<tui-textfield [iconStart]="icons.iconStart" [tuiDropdownAlign]="dropdown.align" [tuiDropdownDirection]="dropdown.direction" [tuiDropdownMinHeight]="dropdown.minHeight" [tuiTextfieldCleaner]="textfieldDoc.cleaner" [tuiTextfieldSize]="textfieldDoc.size" [(open)]="dropdown.open" >
<label *ngIf="textfieldDoc.size !== 's'" tuiLabel > Choose date </label>
<input tuiInputDateTime [formControl]="control" [invalid]="controlDoc.invalid" [max]="max" [min]="min" [placeholder]="textfieldDoc.size === 's' ? 'Choose date' : ''" [readOnly]="controlDoc.readonly" [timeMode]="timeMode" [tuiDisabled]="controlDoc.disabled" />
<tui-calendar *tuiTextfieldDropdown />
</tui-textfield>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [timeMode] | `MaskitoTimeMode` | Time format mode for SS and MS support |
| [min] | `TuiDay | [TuiDay, TuiTime] | null` | Min date |
| [max] | `TuiDay | [TuiDay, TuiTime] | null` | Max date |

### Usage Examples

#### Basic

**Template:**
```html
<tui-textfield>
<label tuiLabel>Choose a date</label>
<input tuiInputDateTime [(ngModel)]="value" />
<tui-calendar *tuiTextfieldDropdown />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateTime} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputDateTime, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = [new TuiDay(2020, 8, 20), new TuiTime(19, 19)];
}
```

#### Calendar customization

Feel free to configure `Calendar` specific properties: disable adjacent months days, adds circled colored markers to some days, control initial opened month and etc. Explore Calendar documentation page for more customization options. Don't set `[min]` / `[max]` and `[disabledItemHandler]` properties for `<tui-calendar />` ! `Calendar` automatically inherits these properties from `<input tuiInputDateTime />` and `<tui-textfield />` .

**Template:**
```html
<tui-textfield>
<label tuiLabel>Choose a date</label>
<input tuiInputDateTime [(ngModel)]="value" />
<tui-calendar *tuiTextfieldDropdown [markerHandler]="markerHandler" [month]="value?.[0] ?? defaultActiveMonth()" [showAdjacent]="false" (monthChange)="defaultActiveMonth.set($event)" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiDay, TuiMonth, type TuiTime} from '@taiga-ui/cdk';
import {type TuiMarkerHandler, TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateTime} from '@taiga-ui/kit';

const CHEAPEST_TICKET: [string] = ['var(--tui-status-positive)'];

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputDateTime, TuiTextfield],
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

#### Custom dropdown

**Template:**
```html
<tui-textfield [content]="isSame(control.value, tomorrow) ? 'Next morning' : ''" [open]="open()" (openChange)="open.set($event)" >
<input placeholder="Choose a date" tuiInputDateTime [formControl]="control" />
<ng-container *tuiTextfieldDropdown>
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
import {TuiButton, TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateTime} from '@taiga-ui/kit';

type ControlValue = [TuiDay, TuiTime | null] | null;

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiButton, TuiInputDateTime, TuiTextfield],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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

#### Validation

If a field is optional, but unfinished field should be marked as invalid, use `tuiUnfinishedValidator` directive

**Template:**
```html
<form tuiForm="m" [formGroup]="form" >
<tui-textfield>
<label tuiLabel>Required</label>
<input formControlName="timeRequired" tuiInputDateTime />
<tui-calendar *tuiTextfieldDropdown />
</tui-textfield>
<tui-error formControlName="timeRequired" [error]="[] | tuiFieldError | async" />
<tui-textfield>
<label tuiLabel>At least day</label>
<input formControlName="dayRequired" tuiInputDateTime />
<tui-calendar *tuiTextfieldDropdown />
</tui-textfield>
<tui-error formControlName="dayRequired" [error]="[] | tuiFieldError | async" />
<tui-textfield>
<label tuiLabel>Optional + UnfinishedValidator</label>
<input formControlName="optional" tuiInputDateTime tuiUnfinishedValidator />
<tui-calendar *tuiTextfieldDropdown />
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
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    type ValidationErrors,
    type ValidatorFn,
} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiError, TuiTextfield} from '@taiga-ui/core';
import {
    TuiFieldErrorPipe,
    TuiInputDateTime,
    TuiUnfinishedValidator,
    tuiValidationErrorsProvider,
} from '@taiga-ui/kit';
import {TuiForm} from '@taiga-ui/layout';

export function minLengthValidator(minLength: number): ValidatorFn {
    return ({value}): ValidationErrors | null =>
        value?.filter(Boolean).length >= minLength ? null : {required: {value}};
}

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        ReactiveFormsModule,
        TuiButton,
        TuiError,
        TuiFieldErrorPipe,
        TuiForm,
        TuiInputDateTime,
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
        timeRequired: new FormControl(null, minLengthValidator(2)),
        dayRequired: new FormControl(
            null,
            minLengthValidator(1), // The same as `Validators.required` (from @angular/forms)
        ),
        optional: new FormControl(),
    });
}
```

#### Value transformer

By default component works with our internal types called `TuiDay` and `TuiTime` . If you prefer to use anything else, like a string or native `Date` you can provide custom transformer in options to store value in different format in form control

**Template:**
```html
<tui-textfield>
<input placeholder="Choose a date" tuiInputDateTime [(ngModel)]="value" />
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
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateTime, tuiInputDateTimeOptionsProvider} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, JsonPipe, TuiInputDateTime, TuiTextfield],
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

#### Date format

Formatting relies on `TUI_DATE_FORMAT` which you can override using `tuiDateFormatProvider` helper

**Template:**
```html
<tui-textfield>
<label tuiLabel>ISO 8601 date format</label>
<input tuiInputDateTime [(ngModel)]="value" />
<tui-calendar *tuiTextfieldDropdown />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {tuiDateFormatProvider, TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateTime} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, TuiInputDateTime, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiDateFormatProvider({mode: 'YMD', separator: '-'})],
})
export default class Example {
    protected value = [new TuiDay(2017, 0, 15)];
}
```

#### Mobile

Open this on a mobile device or enable emulation in DevTools and refresh the page to explore this example! You can use several different approaches to optimize UX on mobile devices when tapping the icon. Browser support limitations! IOS devices supports only `HH:MM` mode for native picker. Native picker supports only 24-hour format.

**Template:**
```html
<form tuiForm="l" [formGroup]="form" >
<tui-textfield>
<label tuiLabel>Native picker</label>
<input formControlName="native" timeMode="HH:MM:SS.MSS" tuiInputDateTime type="datetime-local" />
<tui-calendar *tuiTextfieldDropdown />
</tui-textfield>
<tui-textfield tuiDropdownMobile="Pick a date">
<label tuiLabel>Mobile dropdown</label>
<input formControlName="mobile" tuiInputDateTime />
<tui-calendar *tuiTextfieldDropdown />
</tui-textfield>
<tui-textfield tuiMobileCalendar>
<label tuiLabel>Mobile calendar</label>
<input formControlName="fullscreen" tuiInputDateTime />
<tui-calendar *tuiTextfieldDropdown />
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
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateTime} from '@taiga-ui/kit';
import {TuiForm} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiDropdownMobile,
        TuiForm,
        TuiInputDateTime,
        TuiMobileCalendarDropdownNew,
        TuiTextfield,
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

#### Limits

Individual disabled dates still can be typed in manually or picked on mobile in native picker but control will be automatically marked as invalid

**Template:**
```html
<tui-textfield [disabledItemHandler]="handler">
<label tuiLabel>Choose a date</label>
<input tuiInputDateTime type="datetime-local" [max]="max" [min]="min" [(ngModel)]="value" />
<tui-calendar *tuiTextfieldDropdown [showAdjacent]="false" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateTime} from '@taiga-ui/kit';

const TODAY = TuiDay.currentLocal();

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputDateTime, TuiTextfield],
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

#### Datalist

**Template:**
```html
<tui-textfield>
<input list="dates" placeholder="Pick a date" tuiInputDateTime type="datetime-local" [(ngModel)]="value" />
<datalist id="dates">
<option *ngFor="let date of dates | keyvalue: asIs" [value]="toISOString(date.value)" > {{ date.key }} </option>
</datalist>
<section *tuiTextfieldDropdown>
<tui-calendar />
<tui-data-list>
<button *ngFor="let date of dates | keyvalue: asIs" new tuiOption [value]="date.value" > {{ date.key }} </button>
<button new tuiOption [disabled]="true" > v5 </button>
</tui-data-list>
</section>
</tui-textfield>
```

**TypeScript:**
```ts
import {KeyValuePipe, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import {TuiDataList, TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateTime} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        KeyValuePipe,
        NgForOf,
        TuiDataList,
        TuiInputDateTime,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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

    protected value: [TuiDay, TuiTime | null] | null = Object.values(this.dates).at(-1)!;

    protected toISOString([day, time]: readonly [TuiDay, TuiTime]): string {
        return `${day.toString('YMD', '-')}T${time.toString()}`;
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
