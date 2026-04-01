import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
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
`;export{t as default};
