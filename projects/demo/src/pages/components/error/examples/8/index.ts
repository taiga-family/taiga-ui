import {Component, signal} from '@angular/core';
import {
    type AbstractControl,
    FormControl,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiValidationError} from '@taiga-ui/cdk';
import {TuiError, TuiInput} from '@taiga-ui/core';
import {TuiTabs} from '@taiga-ui/kit';

export function requiredError(control: AbstractControl): Validators | null {
    return Validators.required(control)
        ? {required: new TuiValidationError('Specify field')}
        : null;
}

@Component({
    imports: [FormsModule, ReactiveFormsModule, TuiError, TuiInput, TuiTabs],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected activeTabIndex = signal(0);

    protected readonly controls = [
        new FormControl('', requiredError),
        new FormControl('', requiredError),
    ] as const;

    constructor() {
        // Just for example
        this.controls[0].markAsTouched();
        this.controls[1].markAsTouched();
    }

    protected getError(control: AbstractControl): string | null {
        return (
            (control.invalid &&
                control.touched &&
                control.errors?.['required']?.message) ||
            null
        );
    }
}
