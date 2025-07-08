import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import type {ValidationErrors, ValidatorFn} from '@angular/forms';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
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
        value?.filter(Boolean).length >= minLength ? null : {tuiMinLength: {value}};
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
