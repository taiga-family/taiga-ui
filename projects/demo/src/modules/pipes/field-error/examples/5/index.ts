import {Component, inject} from '@angular/core';
import type {AbstractControl, AsyncValidatorFn, FormGroup} from '@angular/forms';
import {UntypedFormBuilder, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_E2E, TuiValidationError} from '@taiga-ui/cdk';
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
    selector: 'tui-field-error-pipe-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiFieldErrorPipeExample5 {
    private readonly fb = inject(UntypedFormBuilder);

    protected readonly form: FormGroup;

    constructor() {
        this.form = this.fb.group({
            text: ['русский текст', Validators.required],
        });

        this.form.controls['text'].setAsyncValidators(
            asyncValidatorFn(inject(TUI_IS_E2E)),
        );
        this.form.controls['text'].markAsTouched();
    }
}
