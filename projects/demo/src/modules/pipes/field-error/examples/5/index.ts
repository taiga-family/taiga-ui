import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import type {AbstractControl, AsyncValidatorFn, FormGroup} from '@angular/forms';
import {ReactiveFormsModule, UntypedFormBuilder, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_E2E, TuiValidationError} from '@taiga-ui/cdk';
import {TuiErrorComponent} from '@taiga-ui/core';
import {TuiFieldErrorPipeModule} from '@taiga-ui/kit';
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
        ReactiveFormsModule,
        TuiInputModule,
        TuiErrorComponent,
        TuiFieldErrorPipeModule,
        AsyncPipe,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
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
