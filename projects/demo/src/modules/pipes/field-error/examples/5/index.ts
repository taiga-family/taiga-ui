import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import type {AbstractControl, AsyncValidatorFn, FormGroup} from '@angular/forms';
import {ReactiveFormsModule, UntypedFormBuilder, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_E2E, TuiValidationError} from '@taiga-ui/cdk';
import {TuiError} from '@taiga-ui/core';
import {TuiFieldErrorPipe} from '@taiga-ui/kit';
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
            // eslint-disable-next-line i18n/no-russian-character
            text: ['русский текст', Validators.required],
        });

        this.form.controls['text']?.setAsyncValidators(
            asyncValidatorFn(inject(TUI_IS_E2E)),
        );

        this.form.controls['text']?.markAsTouched();
    }
}
