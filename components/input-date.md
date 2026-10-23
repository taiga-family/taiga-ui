# InputDate

- **Package**: `KIT`
- **Type**: components

`InputDate` = `Textfield` + `Calendar` + ❤️

### Example

```html
<ng-template>
<tui-textfield [disabledItemHandler]="itemsHandlers.disabledItemHandler()" [iconStart]="icons.iconStart" [invalid]="controlDoc.invalid" [tuiAppearanceFocus]="appearance.focus" [tuiAppearanceState]="appearance.state" [tuiDropdownAlign]="dropdown.align" [tuiTextfieldCleaner]="textfieldDoc.cleaner" [tuiTextfieldSize]="textfieldDoc.size" [(open)]="dropdown.open" > @if (textfieldDoc.size !== 's') { <label tuiLabel>Choose date</label> } <input tuiInputDate [formControl]="control" [max]="max" [min]="min" [placeholder]="textfieldDoc.size === 's' ? 'Choose date' : ''" [readonly]="controlDoc.readonly" [tuiDisabled]="controlDoc.disabled" />
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

#### Basic

**Template:**
```html
<tui-textfield>
<label tuiLabel>Choose a date</label>
<input tuiInputDate [(ngModel)]="value" />
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
import {TuiInputDate} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputDate],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = new TuiDay(2017, 0, 15);
}
```

#### Calendar customization

Feel free to configure `Calendar` specific properties: disable adjacent months days, adds circled colored markers to some days, control initial opened month and etc. Explore Calendar documentation page for more customization options. Don't set `[min]` / `[max]` and `[disabledItemHandler]` properties for `<tui-calendar />` ! `Calendar` automatically inherits these properties from `<input tuiInputDate />` and `<tui-textfield />` .

**Template:**
```html
<tui-textfield>
<label tuiLabel>Choose a date</label>
<input tuiInputDate [(ngModel)]="value" />
<tui-calendar *tuiDropdown [markerHandler]="markerHandler" [month]="value ?? defaultActiveMonth()" [showAdjacent]="false" (monthChange)="defaultActiveMonth.set($event)" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiDay, TuiMonth} from '@taiga-ui/cdk';
import {type TuiMarkerHandler} from '@taiga-ui/core';
import {TuiInputDate} from '@taiga-ui/kit';

const CHEAPEST_TICKET: [string] = ['var(--tui-status-positive)'];

@Component({
    imports: [FormsModule, TuiInputDate],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: TuiDay | null = null;
    protected readonly defaultActiveMonth = signal(new TuiMonth(2000, 0));

    protected readonly markerHandler: TuiMarkerHandler = (day: TuiDay) =>
        day.day % 5 === 0 ? CHEAPEST_TICKET : [];
}
```

#### Custom dropdown

You can customize dropdown content and change how particular dates display

**Template:**
```html
<tui-textfield [content]="control.value?.daySame(today) ? 'Today' : ''">
<label tuiLabel>Choose a date</label>
<input tuiInputDate [formControl]="control" />
<ng-template let-close tuiDropdown >
<tui-calendar />
<button appearance="action" size="m" tuiButton type="button" class="button" (click)="control.setValue(today); close()" > Today </button>
</ng-template>
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiInputDate} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiButton, TuiInputDate],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl<TuiDay | null>(null);
    protected readonly today = TuiDay.currentLocal();
}
```

**LESS:**
```less
.button {
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
<label tuiLabel>Required date</label>
<input formControlName="required" tuiInputDate />
<tui-calendar *tuiDropdown />
</tui-textfield>
<tui-error formControlName="required" />
<tui-textfield>
<label tuiLabel>Optional date</label>
<input formControlName="optional" tuiInputDate tuiUnfinishedValidator />
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
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiError, tuiValidationErrorsProvider} from '@taiga-ui/core';
import {TuiInputDate, TuiUnfinishedValidator} from '@taiga-ui/kit';
import {TuiForm} from '@taiga-ui/layout';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiButton,
        TuiError,
        TuiForm,
        TuiInputDate,
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

By default component works with our internal type called `TuiDay` . If you prefer to use anything else, like a string or native `Date` you can provide custom transformer in options to store value in different format in form control

**Template:**
```html
<tui-textfield>
<label tuiLabel>Choose a date</label>
<input tuiInputDate [(ngModel)]="value" />
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
import {TuiInputDate, tuiInputDateOptionsProvider} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, JsonPipe, TuiInputDate],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputDateOptionsProvider({
            valueTransformer: {
                fromControlValue: (value: Date | null): TuiDay | null =>
                    value && TuiDay.fromUtcNativeDate(value),
                toControlValue: (value: TuiDay | null): Date | null =>
                    value?.toUtcNativeDate() || null,
            },
        }),
    ],
})
export default class Example {
    protected value: Date | null = null;
}
```

#### Format

Formatting relies on `TUI_DATE_FORMAT` which you can override using `tuiDateFormatProvider` helper

**Template:**
```html
<tui-textfield>
<label tuiLabel>Choose a date</label>
<input tuiInputDate [(ngModel)]="value" />
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
import {TuiInputDate} from '@taiga-ui/kit';

@Component({
    selector: 'example-5',
    imports: [FormsModule, ReactiveFormsModule, TuiInputDate],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiDateFormatProvider({mode: 'mm/dd/yyyy', separator: '/'})],
})
export default class Example {
    protected value = new TuiDay(2017, 0, 15);
}
```

#### Mobile

You can use several different approaches to optimize UX on mobile devices when tapping the icon. Open this on a mobile device or enable emulation in DevTools and refresh the page

**Template:**
```html
<form tuiForm="l" [formGroup]="form" >
<tui-textfield>
<label tuiLabel>Native picker</label>
<input formControlName="native" tuiInputDate type="date" />
<tui-calendar *tuiDropdown />
</tui-textfield>
<tui-textfield tuiDropdownSheet="Pick a date">
<label tuiLabel>Mobile dropdown</label>
<input formControlName="mobile" tuiInputDate />
<tui-calendar *tuiDropdown />
</tui-textfield>
<tui-textfield tuiMobileCalendar>
<label tuiLabel>Mobile calendar</label>
<input formControlName="fullscreen" tuiInputDate />
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
import {TuiDay} from '@taiga-ui/cdk';
import {TuiInputDate} from '@taiga-ui/kit';
import {TuiForm} from '@taiga-ui/layout';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiDropdownSheet,
        TuiForm,
        TuiInputDate,
        TuiMobileCalendarDropdown,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly form = new FormGroup({
        native: new FormControl(TuiDay.currentLocal()),
        mobile: new FormControl(TuiDay.currentLocal().append({day: 1})),
        fullscreen: new FormControl(TuiDay.currentLocal().append({day: 2})),
    });
}
```

#### Limits

Individual disabled dates still can be typed in manually or picked on mobile in native picker but control will be automatically marked as invalid

**Template:**
```html
<tui-textfield [disabledItemHandler]="handler">
<label tuiLabel>Choose a date</label>
<input tuiInputDate type="date" [max]="max" [min]="min" [(ngModel)]="value" />
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
import {TuiInputDate} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputDate],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: TuiDay | null = null;
    protected readonly today = TuiDay.currentLocal();
    protected readonly min = new TuiDay(this.today.year, this.today.month, 1);
    protected readonly max = this.min.append({month: 1, day: -1});
    protected readonly handler = (day: TuiDay): boolean => day.daySame(this.today);
}
```

#### Datalist

Native mobile pickers have limited browser support for native datalist

**Template:**
```html
<tui-textfield>
<label tuiLabel>Select date</label>
<input list="dates" tuiInputDate type="date" [(ngModel)]="value" />
<datalist id="dates"> @for (date of dates | keyvalue: asIs; track date) { <option [value]="date.value.toJSON()"> {{ date.key }} </option> } </datalist>
<section *tuiDropdown>
<tui-calendar />
<tui-data-list> @for (date of dates | keyvalue: asIs; track date) { <button tuiOption [value]="date.value" > {{ date.key }} </button> } </tui-data-list>
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
import {TuiDay} from '@taiga-ui/cdk';
import {TuiDataList} from '@taiga-ui/core';
import {TuiInputDate} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, KeyValuePipe, TuiDataList, TuiInputDate],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly today = TuiDay.currentLocal();
    protected value: TuiDay | null = this.today;

    protected dates = {
        Today: this.today,
        Tomorrow: this.today.append({day: 1}),
        'End of week': this.today.append({day: 6 - this.today.dayOfWeek()}),
        'End of month': new TuiDay(this.today.year, this.today.month, 1).append({
            month: 1,
            day: -1,
        }),
        'End of Year': new TuiDay(this.today.year + 1, 0, 1).append({day: -1}),
    };

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
    inline-size: 11rem;
    box-shadow: -1px 0 var(--tui-border-normal);
}
```
