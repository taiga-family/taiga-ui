# InputDate

- **Package**: `KIT`
- **Type**: components

`InputDate` = `Textfield` + `Calendar` + ❤️

### How to Use (Import)

```ts
import {FormsModule} from '@angular/forms';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputDate} from '@taiga-ui/kit';

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
  protected value: TuiDay | null = null;
}
```

### How to Use (Template)

```html
<tui-textfield>
  <input
    tuiInputDate
    [(ngModel)]="value"
  />
  <tui-calendar *tuiTextfieldDropdown />
</tui-textfield>
```

### Example

```html
<ng-template>
<tui-textfield [disabledItemHandler]="itemsHandlers.disabledItemHandler()" [iconStart]="icons.iconStart" [tuiDropdownAlign]="dropdown.align" [tuiTextfieldCleaner]="textfieldDoc.cleaner" [tuiTextfieldSize]="textfieldDoc.size" [(open)]="dropdown.open" >
<label *ngIf="textfieldDoc.size !== 's'" tuiLabel > Choose date </label>
<input tuiInputDate [formControl]="control" [invalid]="controlDoc.invalid" [max]="max" [min]="min" [placeholder]="textfieldDoc.size === 's' ? 'Choose date' : ''" [readOnly]="controlDoc.readonly" [tuiDisabled]="controlDoc.disabled" />
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
<tui-textfield>
<label tuiLabel>Choose a date</label>
<input tuiInputDate [(ngModel)]="value" />
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
import {TuiInputDate} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputDate, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = new TuiDay(2017, 0, 15);
}
```

#### Custom dropdown

**Template:**
```html
<tui-textfield [content]="control.value?.daySame(today) ? 'Today' : ''">
<label tuiLabel>Choose a date</label>
<input tuiInputDate [formControl]="control" />
<ng-template let-close tuiTextfieldDropdown >
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
import {TuiButton, TuiTextfield} from '@taiga-ui/core';
import {TuiInputDate} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiButton, TuiInputDate, TuiTextfield],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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
<tui-calendar *tuiTextfieldDropdown />
</tui-textfield>
<tui-error formControlName="required" [error]="[] | tuiFieldError | async" />
<tui-textfield>
<label tuiLabel>Optional date</label>
<input formControlName="optional" tuiInputDate tuiUnfinishedValidator />
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
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiError, TuiTextfield} from '@taiga-ui/core';
import {
    TuiFieldErrorPipe,
    TuiInputDate,
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
        TuiInputDate,
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

By default component works with our internal type called `TuiDay` . If you prefer to use anything else, like a string or native `Date` you can provide custom transformer in options to store value in different format in form control

**Template:**
```html
<tui-textfield>
<label tuiLabel>Choose a date</label>
<input tuiInputDate [(ngModel)]="value" />
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
import {TuiInputDate, tuiInputDateOptionsProviderNew} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, JsonPipe, TuiInputDate, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputDateOptionsProviderNew({
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
import {TuiInputDate} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, TuiInputDate, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiDateFormatProvider({mode: 'MDY', separator: '/'})],
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
<tui-calendar *tuiTextfieldDropdown />
</tui-textfield>
<tui-textfield tuiDropdownMobile="Pick a date">
<label tuiLabel>Mobile dropdown</label>
<input formControlName="mobile" tuiInputDate />
<tui-calendar *tuiTextfieldDropdown />
</tui-textfield>
<tui-textfield tuiMobileCalendar>
<label tuiLabel>Mobile calendar</label>
<input formControlName="fullscreen" tuiInputDate />
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
import {TuiDay} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputDate} from '@taiga-ui/kit';
import {TuiForm} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiDropdownMobile,
        TuiForm,
        TuiInputDate,
        TuiMobileCalendarDropdownNew,
        TuiTextfield,
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
import {TuiInputDate} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputDate, TuiTextfield],
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

**Template:**
```html
<tui-textfield>
<label tuiLabel>Select date</label>
<input list="dates" tuiInputDate type="date" [(ngModel)]="value" />
<datalist id="dates">
<option *ngFor="let date of dates | keyvalue: asIs" [value]="date.value.toJSON()" > {{ date.key }} </option>
</datalist>
<section *tuiTextfieldDropdown>
<tui-calendar />
<tui-data-list>
<button *ngFor="let date of dates | keyvalue: asIs" new tuiOption [value]="date.value" > {{ date.key }} </button>
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
import {TuiDay} from '@taiga-ui/cdk';
import {TuiDataList, TuiTextfield} from '@taiga-ui/core';
import {TuiInputDate} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        KeyValuePipe,
        NgForOf,
        TuiDataList,
        TuiInputDate,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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
