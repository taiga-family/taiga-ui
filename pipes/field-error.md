# FieldError

- **Package**: `KIT`
- **Type**: pipes

FieldErrorPipe takes order of errors as array and transform it to `TuiValidationError` . Can be used with TuiError component. You can also use `tuiFieldErrorContentPipe` with `TuiHint` (see tuiFieldErrorContentPipe example ). It returns a content of the TuiValidationError. The idea of `tuiFieldError` is to link `tui-error` with form controls. Also you can use `tuiValidationErrorsProvider` which provided `TUI_VALIDATION_ERRORS` . The idea of `TUI_VALIDATION_ERRORS` is to provide presentation for arbitrary error objects stored inside controls

### How to Use (Import)

```ts
import {TuiFieldErrorPipe} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiFieldErrorPipe,
  ],
})
export class Example {}
```

### How to Use (Template)

```html
// ...
<tui-input [formControl]="user">User</tui-input>
<tui-error
  [formControl]="user"
  [error]="[] | tuiFieldError | async"
></tui-error>
// ...
```

### Usage Examples

#### Basic

**Template:**
```html
<form [formGroup]="testForm">
<label tuiLabel class="tui-space_bottom-4" > Type the ultimate answer <tui-input formControlName="testValue2" tuiTextfieldSize="m" [tuiTextfieldLabelOutside]="true" > to the Question of Life, the Universe, and Everything </tui-input>
<tui-error formControlName="testValue2" [error]="[] | tuiFieldError | async" />
</label>
<label tuiLabel> Set a password <tui-input formControlName="testValue1" tuiTextfieldSize="m" [tuiTextfieldLabelOutside]="true" > Latin letters only </tui-input>
<tui-error formControlName="testValue1" [error]="[] | tuiFieldError | async" />
</label>
<p> If you want to show a validation message as soon as a user starts typing, subscribe on form value changes and call markAsTouched on control on first value change. You can also use <a fragment="mark-control-as-touched-and-validate" href="/utils/miscellaneous#mark-control-as-touched-and-validate" tuiLink [routerLink]="routes.Miscellaneous" >
<code>tuiMarkControlAsTouchedAndValidate</code>
</a>
</p>
<p>
<code>tuiFieldError</code> pipe can be used inside your controls to show error messages for parent <a href="https://angular.io/api/forms/NgControl" rel="noreferrer" target="_blank" tuiLink > NgControl </a> or <a href="https://angular.io/api/forms/ControlContainer" rel="noreferrer" target="_blank" tuiLink > ControlContainer </a> through DI without explicit directive on <code>tui-error</code> . </p>
<p>Below is an error for the entire form:</p>
<tui-error [error]="[] | tuiFieldError | async" />
</form>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {
    type AbstractControl,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TuiError, TuiLabel, TuiLink} from '@taiga-ui/core';
import {TuiFieldErrorPipe} from '@taiga-ui/kit';
import {TuiInputModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import {distinctUntilChanged} from 'rxjs';

const latinChars = /^[a-zA-Z]+$/;

export function passwordValidator(field: AbstractControl): Validators | null {
    return field.value && latinChars.test(field.value)
        ? null
        : {
              other: 'Only latin letters are allowed',
          };
}

export function superComputerValidator(field: AbstractControl): Validators | null {
    return field.value === '42'
        ? null
        : {
              other: 'Wrong',
          };
}

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        ReactiveFormsModule,
        RouterLink,
        TuiError,
        TuiFieldErrorPipe,
        TuiInputModule,
        TuiLabel,
        TuiLink,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly routes = DemoRoute;
    protected readonly testValue1 = new FormControl('', [
        Validators.required,
        passwordValidator,
    ]);

    protected readonly testValue3 = new FormControl('', [
        Validators.required,
        passwordValidator,
    ]);

    protected readonly testForm = new FormGroup(
        {
            testValue1: this.testValue1,
            testValue2: new FormControl('', [
                Validators.required,
                superComputerValidator,
            ]),
        },
        (control) =>
            Object.values((control as FormGroup).controls).every(({valid}) => valid)
                ? null
                : {other: 'Form is invalid'},
    );

    constructor() {
        this.testValue1.valueChanges.pipe(distinctUntilChanged()).subscribe(() => {
            this.testValue1.markAsTouched();
        });
    }
}
```

#### With custom messages for validators

**Template:**
```html
<form tuiTextfieldSize="m" [formGroup]="testForm" >
<label tuiLabel class="tui-space_bottom-4" > Enter an email <tui-textfield>
<input formControlName="testValue2" placeholder="Required" tuiTextfield />
</tui-textfield>
<tui-error formControlName="testValue2" [error]="[] | tuiFieldError | async" />
</label>
<label tuiLabel class="tui-space_bottom-4" > Minimum and maximum length <tui-textfield>
<label tuiLabel>4 letters word...</label>
<input formControlName="testValue1" tuiTextfield />
</tui-textfield>
<tui-error formControlName="testValue1" [error]="[] | tuiFieldError | async" />
</label>
<label tuiLabel> Minimum number <tui-textfield>
<label tuiLabel>number</label>
<input formControlName="testValue3" tuiInputNumber [step]="1" />
</tui-textfield>
<tui-error formControlName="testValue3" [error]="[] | tuiFieldError | async" />
</label>
</form>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiIsFalsy} from '@taiga-ui/cdk';
import {TuiError, TuiTextfield} from '@taiga-ui/core';
import {
    TuiFieldErrorPipe,
    TuiInputNumber,
    tuiValidationErrorsProvider,
} from '@taiga-ui/kit';
import {interval, map, of, scan, startWith} from 'rxjs';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        ReactiveFormsModule,
        TuiError,
        TuiFieldErrorPipe,
        TuiInputNumber,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiValidationErrorsProvider({
            required: 'Enter this!',
            email: 'Enter a valid email',
            maxlength: ({requiredLength}: {requiredLength: string}) =>
                `Maximum length — ${requiredLength}`,
            minlength: ({requiredLength}: {requiredLength: string}) =>
                of(`Minimum length — ${requiredLength}`),
            min: interval(2000).pipe(
                scan(tuiIsFalsy, false),
                map((val) => (val ? 'Fix please' : 'Min number 3')),
                startWith('Min number 3'),
            ),
        }),
    ],
})
export default class Example {
    protected readonly testValue1 = new FormControl('', [
        Validators.minLength(4),
        Validators.maxLength(4),
    ]);

    protected readonly testValue2 = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);

    protected readonly testValue3 = new FormControl(2, [Validators.min(3)]);

    protected readonly testForm = new FormGroup({
        testValue1: this.testValue1,
        testValue2: this.testValue2,
        testValue3: this.testValue3,
    });

    constructor() {
        this.testValue1.valueChanges.subscribe(() => {
            this.testValue1.markAsTouched();
        });
    }
}
```

#### with a template

**Template:**
```html
<form [formGroup]="testForm" (submit)="onSubmit()" >
<label tuiLabel> Secret number <tui-input formControlName="testValue1" tuiTextfieldSize="m" [tuiTextfieldLabelOutside]="true" />
<ng-template #errorContent> Secret number must contain <strong>10 or 12 digits</strong> . </ng-template>
<tui-error formControlName="testValue1" [error]="['required', 'inn'] | tuiFieldError | async" />
</label>
<label tuiLabel class="tui-space_top-4 tui-space_bottom-4" > Enter company name <tui-input formControlName="testValue2" tuiTextfieldSize="m" [tuiTextfieldLabelOutside]="true" />
<ng-template #bigErrorContent> This company is already registered <button tuiButton type="button" class="tui-space_top-2" > It is mine </button>
</ng-template>
<tui-error formControlName="testValue2" [error]="[] | tuiFieldError | async" />
</label>
<label>
<div class="checkbox">
<input formControlName="testValue3" size="s" tuiCheckbox type="checkbox" /> I agree on the conditions </div>
<tui-error formControlName="testValue3" [error]="[] | tuiFieldError | async" />
</label>
<button size="m" tuiButton type="submit" class="tui-space_top-4" > Submit </button>
</form>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component, type OnInit, ViewChild} from '@angular/core';
import {
    type AbstractControl,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    type ValidationErrors,
    Validators,
} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiMarkControlAsTouchedAndValidate, TuiValidationError} from '@taiga-ui/cdk';
import {TuiButton, TuiError, TuiLabel} from '@taiga-ui/core';
import {TuiCheckbox, TuiFieldErrorPipe} from '@taiga-ui/kit';
import {TuiInputModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

const secretRegexTen = /^\d{10}$/;
const secretRegexTwelve = /^\d{12}$/;

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        ReactiveFormsModule,
        TuiButton,
        TuiCheckbox,
        TuiError,
        TuiFieldErrorPipe,
        TuiInputModule,
        TuiLabel,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example implements OnInit {
    @ViewChild('errorContent')
    protected errorContent: PolymorpheusContent;

    @ViewChild('bigErrorContent')
    protected bigErrorContent: PolymorpheusContent;

    protected readonly testValue2 = new FormControl('');

    protected readonly testForm = new FormGroup({
        testValue1: new FormControl('', [Validators.required, this.getSecretValidator()]),
        testValue2: this.testValue2,
        testValue3: new FormControl(false, [Validators.requiredTrue]),
    });

    public ngOnInit(): void {
        this.testValue2.setValidators([Validators.required, this.companyValidator]);
    }

    protected onSubmit(): void {
        tuiMarkControlAsTouchedAndValidate(this.testForm);
    }

    private readonly companyValidator = (
        field: AbstractControl,
    ): ValidationErrors | null =>
        field.value
            ? {
                  inn: new TuiValidationError(this.bigErrorContent),
              }
            : null;

    private getSecretValidator(): (field: AbstractControl) => ValidationErrors | null {
        return (field: AbstractControl): ValidationErrors | null =>
            field.value &&
            (secretRegexTen.test(field.value) || secretRegexTwelve.test(field.value))
                ? null
                : {
                      secret: new TuiValidationError(this.errorContent),
                  };
    }
}
```

**LESS:**
```less
.checkbox {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}
```

#### With adding new controls (FormArray)

**Template:**
```html
<form [formGroup]="testForm">
<label *ngFor="let phone of formData.controls; let i = index" formArrayName="phones" tuiLabel class="tui-space_bottom-4" > Phone number {{ i + 1 }} <span class="row">
<tui-input-phone tuiTextfieldSize="m" class="input" [formControlName]="i" [tuiTextfieldLabelOutside]="true" >
<input autocomplete="new-password" tuiTextfieldLegacy />
</tui-input-phone>
<button appearance="icon" iconStart="@tui.trash" size="m" tuiIconButton type="button" class="tui-space_left-2 icon" (click)="removePhone(i)" > Delete phone number </button>
</span>
<ng-template #phoneErrorContent>Invalid phone number length</ng-template>
<tui-error [error]="[] | tuiFieldError | async" [formControlName]="i" />
</label>
<tui-error formArrayName="phones" class="form-array-error" [error]="[] | tuiFieldError | async" />
<button size="s" tuiButton type="button" class="tui-space_top-4" (click)="addPhone()" > Add a phone number </button>
</form>
```

**TypeScript:**
```ts
import {AsyncPipe, NgForOf} from '@angular/common';
import {Component, ViewChild} from '@angular/core';
import {
    type AbstractControl,
    FormArray,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    type ValidationErrors,
    type ValidatorFn,
    Validators,
} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiValidationError} from '@taiga-ui/cdk';
import {TuiButton, TuiError, TuiTextfield} from '@taiga-ui/core';
import {TuiFieldErrorPipe} from '@taiga-ui/kit';
import {TuiInputPhoneModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        NgForOf,
        ReactiveFormsModule,
        TuiButton,
        TuiError,
        TuiFieldErrorPipe,
        TuiInputPhoneModule,
        TuiTextfield,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    @ViewChild('phoneErrorContent')
    protected phoneErrorContent: PolymorpheusContent;

    protected testForm = new FormGroup({
        phones: new FormArray(
            [new FormControl('', [Validators.required, this.getPhoneLengthValidator()])],
            [this.getPhoneArrayValidator()],
        ),
    });

    protected get formData(): FormArray {
        return this.testForm.get('phones') as FormArray;
    }

    protected addPhone(): void {
        this.formData.push(new FormControl('', this.addValidators()));
    }

    protected removePhone(index: number): void {
        this.formData.removeAt(index);

        let n = 0;

        while (n <= 1 && this.formData.controls[n]) {
            this.formData.controls[n]?.setValidators([
                Validators.required,
                this.getPhoneLengthValidator(),
            ]);
            n++;
        }
    }

    protected addValidators(): ValidationErrors | null {
        return this.formData.controls.length < 2
            ? [Validators.required, this.getPhoneLengthValidator()]
            : null;
    }

    private getPhoneLengthValidator(): (
        field: AbstractControl,
    ) => ValidationErrors | null {
        return (field: AbstractControl): ValidationErrors | null =>
            field.value.length !== 12
                ? {
                      length: new TuiValidationError(this.phoneErrorContent),
                  }
                : null;
    }

    private getPhoneArrayValidator(): ValidatorFn {
        return ((array: FormArray): ValidationErrors | null =>
            array.controls.length < 2 ||
            (!!array.controls.filter((item) => item.errors).length &&
                array.controls.length)
                ? {
                      length: new TuiValidationError(
                          'You should add at least 2 phone number',
                      ),
                  }
                : null) as ValidatorFn;
    }
}
```

**LESS:**
```less
.input {
    inline-size: 20rem;
}

.row {
    display: flex;
    align-items: center;
}

.form-array-error {
    font-size: 0.875rem;
}
```

#### async validator

**Template:**
```html
<form tuiForm="l" [formGroup]="form" >
<tui-input formControlName="text" class="input" > Enter some text </tui-input>
<tui-error formControlName="text" [error]="[] | tuiFieldError | async" />
</form>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {
    type AbstractControl,
    type AsyncValidatorFn,
    type FormGroup,
    ReactiveFormsModule,
    UntypedFormBuilder,
    Validators,
} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_E2E, TuiValidationError} from '@taiga-ui/cdk';
import {TuiError} from '@taiga-ui/core';
import {TuiFieldErrorPipe} from '@taiga-ui/kit';
import {TuiForm} from '@taiga-ui/layout';
import {TuiInputModule} from '@taiga-ui/legacy';
import {delay, of} from 'rxjs';

const latinChars = /^[a-zA-Z]+$/;

function asyncValidatorFn(isE2E: boolean): AsyncValidatorFn {
    return (field: AbstractControl) =>
        field.value && latinChars.test(field.value)
            ? of(null)
            : of({
                  error: new TuiValidationError('Only latin letters allowed'),
              }).pipe(isE2E ? delay(0) : delay(5000));
}

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        ReactiveFormsModule,
        TuiError,
        TuiFieldErrorPipe,
        TuiForm,
        TuiInputModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly fb = inject(UntypedFormBuilder);

    protected readonly form: FormGroup;

    constructor() {
        this.form = this.fb.group({
            text: ['русский текст', Validators.required],
        });

        this.form.controls['text']?.setAsyncValidators(
            asyncValidatorFn(inject(TUI_IS_E2E)),
        );

        this.form.controls['text']?.markAsTouched();
    }
}
```

**LESS:**
```less
.input {
    inline-size: 20rem;
}

.row {
    display: flex;
    align-items: center;
}

.form-array-error {
    font-size: 0.875rem;
}
```

#### tuiFieldErrorContentPipe

**Template:**
```html
<table tuiTable class="table" [columns]="columns" >
<thead>
<tr tuiThGroup>
<th tuiTh [resizable]="true" > Name </th>
<th tuiTh>Price</th>
</tr>
</thead>
<tbody tuiTbody [data]="data" >
<tr *ngFor="let item of data; let i = index" tuiTr >
<td *tuiCell="'name'" tuiTd > {{ item.name }} </td>
<td *tuiCell="'price'" tuiTd >
<tui-textfield>
<input placeholder="Price" tuiHintDirection="right" tuiInputNumber [formControl]="controls[i]!" [postfix]="' ' + 'UGX' | tuiCurrency" [tuiHint]="[] | tuiFieldErrorContent" />
</tui-textfield>
</td>
</tr>
</tbody>
</table>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCurrencyPipe} from '@taiga-ui/addon-commerce';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiHint, TuiTextfield} from '@taiga-ui/core';
import {
    TuiFieldErrorContentPipe,
    TuiInputNumber,
    tuiValidationErrorsProvider,
} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        NgForOf,
        ReactiveFormsModule,
        TuiCurrencyPipe,
        TuiFieldErrorContentPipe,
        TuiHint,
        TuiInputNumber,
        TuiTable,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        tuiValidationErrorsProvider({
            required: 'Enter this!',
            max: (context: {max: number}): string => `Too expensive, max ${context.max}`,
        }),
    ],
})
export default class Example {
    protected readonly data = [{name: 'Latte'}, {name: 'Cappuccino'}] as const;

    protected latteControl = new FormControl<number | null>(null, [
        Validators.required,
        Validators.max(6),
    ]);

    protected cappuccinoControl = new FormControl<number | null>(null, [
        Validators.required,
        Validators.max(5),
    ]);

    protected controls = [this.latteControl, this.cappuccinoControl];

    protected readonly columns = ['name', 'price'];
}
```

**LESS:**
```less
.table {
    inline-size: 100%;
    table-layout: fixed;
}

.error {
    color: #fff;
}
```

#### Wrapper error component

**Template:**
```html
<label tuiLabel="Type the ultimate answer">
<tui-input tuiTextfieldSize="m" [formControl]="test" [tuiTextfieldLabelOutside]="true" > to the Question of Life, the Universe, and Everything </tui-input>
<tui-error [error]="[] | tuiFieldError | async" [formControl]="test" />
</label>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiError, TuiLabel} from '@taiga-ui/core';
import {TuiFieldErrorPipe, tuiValidationErrorsProvider} from '@taiga-ui/kit';
import {TuiInputModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import {injectContext, PolymorpheusComponent} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    template: 'My component with {{ context.$implicit }}',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Error {
    protected readonly context = injectContext<{$implicit: boolean}>();
}

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        ReactiveFormsModule,
        TuiError,
        TuiFieldErrorPipe,
        TuiInputModule,
        TuiLabel,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiValidationErrorsProvider({
            required: new PolymorpheusComponent(Error),
        }),
    ],
})
export default class Example {
    protected readonly test = new FormControl('', [Validators.required]);
}
```
