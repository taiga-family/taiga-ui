# Error

- **Package**: `CORE`
- **Type**: components

Component for showing arbitrary messages styled as errors, with height and fade transition, as well as displaying form validation errors from controls

### Example

```html
<tui-error [error]="error" />
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [error] | `TuiValidationError \| string \| null` | error value |

### Usage Examples

#### Basic

Using as standalone or to display validation errors from form control.

**Template:**
```html
<label tuiLabel>
<input tuiSwitch type="checkbox" [(ngModel)]="enabled" /> Show standalone error </label>
<p>
<tui-error [error]="error" />
</p>
<form tuiForm="m" [formGroup]="form" >
<label tuiLabel> Type the ultimate answer to the Question of Life, the Universe <tui-textfield>
<input formControlName="answer" placeholder="and Everything" tuiInput />
</tui-textfield>
</label>
<tui-error formControlName="answer" />
<label tuiLabel> Set a password <tui-textfield>
<input formControlName="password" placeholder="Latin letters only" tuiInput />
</tui-textfield>
</label>
<tui-error formControlName="password" />
<div> If you want to show a validation message as soon as a user starts typing, subscribe on form value changes and call <code>markAsTouched</code> on control on first value change. </div>
<div>Below is an error for the entire form:</div>
<tui-error [formGroup]="form" />
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {
    type AbstractControl,
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiError, TuiInput} from '@taiga-ui/core';
import {TuiSwitch} from '@taiga-ui/kit';
import {TuiForm} from '@taiga-ui/layout';

export function passwordValidator(field: AbstractControl): Validators | null {
    return field.value && /^[a-z]+$/i.test(field.value)
        ? null
        : {other: 'Only latin letters are allowed'};
}

export function superComputerValidator(field: AbstractControl): Validators | null {
    return field.value === '42' ? null : {other: 'Wrong'};
}

@Component({
    imports: [FormsModule, ReactiveFormsModule, TuiError, TuiForm, TuiInput, TuiSwitch],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected enabled = false;

    protected readonly form = new FormGroup(
        {
            answer: new FormControl('', [Validators.required, superComputerValidator]),
            password: new FormControl('', [Validators.required, passwordValidator]),
        },
        (control) => (control.invalid ? {other: 'Form is invalid'} : null),
    );

    constructor() {
        this.form.controls.password.valueChanges?.subscribe(() => {
            this.form.controls.password.markAsTouched();
        });
    }

    protected get error(): string | null {
        return this.enabled ? 'An error' : null;
    }
}
```

#### DI

Providing validation error messages for various errors with DI token.

**Template:**
```html
<form tuiForm="m" [formGroup]="form" >
<label tuiLabel> Enter an email <tui-textfield>
<input formControlName="email" placeholder="Required" tuiInput />
</tui-textfield>
</label>
<tui-error formControlName="email" />
<label tuiLabel> Minimum and maximum length <tui-textfield>
<input formControlName="value" placeholder="4 letters word..." tuiInput />
</tui-textfield>
</label>
<tui-error formControlName="value" />
<div tuiNotification>
<span tuiTitle> This is just a tech demo! <span tuiSubtitle> Avoid dynamic error messages as it will overwhelm assistive technologies like screen readers </span>
</span>
</div>
<label tuiLabel> Minimum number <tui-textfield>
<input formControlName="number" placeholder="Value" tuiInputNumber [step]="1" />
</tui-textfield>
</label>
<tui-error formControlName="number" />
</form>
```

**TypeScript:**
```ts
import {isPlatformBrowser} from '@angular/common';
import {Component, inject, PLATFORM_ID, signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TUI_VALIDATION_ERRORS,
    TuiError,
    TuiInput,
    TuiNotification,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';
import {TuiForm} from '@taiga-ui/layout';
import {map, timer} from 'rxjs';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiError,
        TuiForm,
        TuiInput,
        TuiInputNumber,
        TuiNotification,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_VALIDATION_ERRORS,
            useFactory: () => ({
                required: 'Enter this!',
                email: 'Enter a valid email',
                maxlength: ({requiredLength}: {requiredLength: string}) =>
                    `Maximum length — <b>${requiredLength}</b>`,
                minlength: ({requiredLength}: {requiredLength: string}) =>
                    signal(`Minimum length — <b>${requiredLength}</b>`),
                min: isPlatformBrowser(inject(PLATFORM_ID))
                    ? toSignal(
                          timer(0, 2000).pipe(
                              map((index) => (index % 2 ? 'Fix please' : 'Min number 3')),
                          ),
                      )
                    : 'Min number 3',
            }),
        },
    ],
})
export default class Example {
    protected readonly form = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        value: new FormControl('', [Validators.minLength(4), Validators.maxLength(4)]),
        number: new FormControl(2, [Validators.min(3)]),
    });
}
```

#### Template

Using `ng-template` to show rich HTML error messages.

**Template:**
```html
<form tuiForm="m" [formGroup]="form" (ngSubmit)="onSubmit()" >
<label tuiLabel> Secret number <tui-textfield>
<input formControlName="secret" tuiInput />
</tui-textfield>
<ng-template #secretError> Must be <strong style="color: var(--tui-text-primary)">10 digits</strong> exactly </ng-template>
</label>
<tui-error formControlName="secret" [order]="['required', 'secret']" />
<label tuiLabel> Enter company name <tui-textfield>
<input formControlName="company" tuiInput />
</tui-textfield>
<ng-template #companyError> This company is already registered <button tuiButton type="button" > It is mine </button>
</ng-template>
</label>
<tui-error formControlName="company" [order]="['required', 'inn']" />
<label tuiLabel>
<input formControlName="checkbox" size="s" tuiCheckbox type="checkbox" /> I agree on the conditions </label>
<tui-error formControlName="checkbox" />
<footer>
<button size="m" tuiButton type="submit" > Submit </button>
</footer>
</form>
```

**TypeScript:**
```ts
import {Component, viewChild} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiMarkControlAsTouchedAndValidate} from '@taiga-ui/cdk';
import {TuiButton, TuiCheckbox, TuiError, TuiInput} from '@taiga-ui/core';
import {TuiForm} from '@taiga-ui/layout';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    imports: [ReactiveFormsModule, TuiButton, TuiCheckbox, TuiError, TuiForm, TuiInput],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly secret = viewChild<PolymorpheusContent>('secretError');
    protected readonly company = viewChild<PolymorpheusContent>('companyError');

    protected readonly form = new FormGroup({
        secret: new FormControl('', [
            ({value}) => (/^\d{10}$/.test(value || '') ? null : {secret: this.secret}),
            Validators.required,
        ]),
        company: new FormControl('', [({value}) => (value ? {inn: this.company} : null)]),
        checkbox: new FormControl(false, [Validators.requiredTrue]),
    });

    protected onSubmit(): void {
        tuiMarkControlAsTouchedAndValidate(this.form);
    }
}
```

#### Array

Using with dynamic `FormArray`

**Template:**
```html
<form tuiForm="m" [formGroup]="form" >
<header tuiHeader>
<hgroup tuiTitle>
<h3>Contact list</h3>
<tui-error formArrayName="phones" [style.margin-block-start.rem]="-0.25" />
</hgroup>
</header>
<ng-container formArrayName="phones" [tuiTextfieldCleaner]="false" > @for (phone of form.controls.phones.controls; track $index) { <label tuiLabel> Phone number {{ $index + 1 }} <tui-textfield>
<input tuiInputPhone [formControlName]="$index" />
<button appearance="icon" iconStart="@tui.trash" size="xs" tuiIconButton type="button" (click)="removePhone($index)" > Remove </button>
</tui-textfield>
</label>
<tui-error [formControlName]="$index" /> } </ng-container>
<footer>
<button size="s" tuiButton type="button" (click)="addPhone()" > Add a phone number </button>
</footer>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {
    type AbstractControl,
    FormArray,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    type ValidationErrors,
    Validators,
} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiError, TuiTitle} from '@taiga-ui/core';
import {TuiInputPhone} from '@taiga-ui/kit';
import {TuiForm, TuiHeader} from '@taiga-ui/layout';

function phoneValidator({value}: AbstractControl): ValidationErrors | null {
    return value.length === 12 ? null : {length: 'Invalid phone number length'};
}

@Component({
    imports: [
        ReactiveFormsModule,
        TuiButton,
        TuiError,
        TuiForm,
        TuiHeader,
        TuiInputPhone,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly form = new FormGroup({
        phones: new FormArray(
            [new FormControl('', [Validators.required, phoneValidator])],
            [
                (control) =>
                    (control as FormArray).controls.filter(({valid}) => valid).length < 2
                        ? {length: 'You should add at least 2 phone number'}
                        : null,
            ],
        ),
    });

    protected addPhone(): void {
        this.form.controls.phones.push(
            new FormControl('', [Validators.required, phoneValidator]),
        );
    }

    protected removePhone(index: number): void {
        this.form.controls.phones.removeAt(index);
    }
}
```

#### Asynchronous

Displaying error message via async validators.

**Template:**
```html
<form tuiForm [formGroup]="form" >
<tui-textfield>
<label tuiLabel>Enter some text</label>
<input formControlName="text" tuiInput />
</tui-textfield>
<tui-error formControlName="text" />
</form>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {
    type AsyncValidatorFn,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {TuiError, TuiInput} from '@taiga-ui/core';
import {TuiForm} from '@taiga-ui/layout';
import {delay, of} from 'rxjs';

function asyncValidatorFn(isE2E: boolean): AsyncValidatorFn {
    return ({value}) =>
        value && /^[a-z]+$/i.test(value)
            ? of(null)
            : of({error: 'Only latin letters allowed'}).pipe(delay(isE2E ? 0 : 3000));
}

@Component({
    imports: [ReactiveFormsModule, TuiError, TuiForm, TuiInput],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly form = new FormGroup({
        text: new FormControl(
            'русский текст',
            [Validators.required],
            [asyncValidatorFn(inject(WA_IS_E2E))],
        ),
    });
}
```

#### Pipe

Using pipe to feed error message to the hint directive.

**Template:**
```html
<table tuiTable [style.width.%]="100" >
<thead>
<tr>
<th tuiTh>Name</th>
<th tuiTh>Price</th>
</tr>
</thead>
<tbody tuiTbody> @for (control of controls; track $index) { <tr>
<td tuiTd>{{ data[$index]?.name }}</td>
<td tuiTd>
<tui-textfield>
<input placeholder="Price" tuiHintDirection="end" tuiInputNumber [formControl]="control" [prefix]="'USD' | tuiCurrency" [tuiHint]="[] | tuiError" />
</tui-textfield>
</td>
</tr> } </tbody>
</table>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCurrencyPipe} from '@taiga-ui/addon-commerce';
import {TuiTable} from '@taiga-ui/addon-table';
import {
    TuiError,
    TuiHint,
    TuiTextfield,
    tuiValidationErrorsProvider,
} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiCurrencyPipe,
        TuiError,
        TuiHint,
        TuiInputNumber,
        TuiTable,
        TuiTextfield,
    ],
    templateUrl: './index.html',
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

    protected readonly controls = [
        new FormControl(null, [Validators.required, Validators.max(6)]),
        new FormControl(null, [Validators.required, Validators.max(5)]),
    ] as const;
}
```

#### Component

Reusable error messages with a dedicated component.

**Template:**
```html
<label tuiLabel> Name <tui-textfield tuiTextfieldSize="m">
<input placeholder="John Cleese" tuiInput [formControl]="test" />
</tui-textfield>
<tui-error [formControl]="test" />
</label>
```

**TypeScript:**
```ts
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiContext} from '@taiga-ui/cdk';
import {TuiError, TuiInput, tuiValidationErrorsProvider} from '@taiga-ui/core';
import {injectContext, PolymorpheusComponent} from '@taiga-ui/polymorpheus';

@Component({
    template: 'Required: {{ context.$implicit }}',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Error {
    protected readonly context = injectContext<TuiContext<boolean>>();
}

@Component({
    imports: [ReactiveFormsModule, TuiError, TuiInput],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiValidationErrorsProvider({required: new PolymorpheusComponent(Error)}),
    ],
})
export default class Example {
    protected readonly test = new FormControl('', [Validators.required]);
}
```

#### Initially touched

**Template:**
```html
<tui-textfield>
<label tuiLabel>Initially touched control</label>
<input tuiInput [formControl]="control" />
</tui-textfield>
<tui-error [formControl]="control" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiError, TuiInput} from '@taiga-ui/core';

@Component({
    imports: [ReactiveFormsModule, TuiError, TuiInput],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl('', Validators.required);

    constructor() {
        this.control.markAsTouched();
    }
}
```
