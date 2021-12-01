import {Component, Inject} from '@angular/core';
import {
    AbstractControl,
    AsyncValidatorFn,
    FormBuilder,
    FormGroup,
    Validators,
} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiValidationError} from '@taiga-ui/cdk';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';

const latinChars = /^[a-zA-Z]+$/;

function asyncValidatorFn(): AsyncValidatorFn {
    return (field: AbstractControl) => {
        return field.value && latinChars.test(field.value)
            ? of(null).pipe()
            : of({
                  error: new TuiValidationError('Only latin letters allowed'),
              }).pipe(delay(5000));
    };
}

@Component({
    selector: 'tui-field-error-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiFieldErrorExample4 {
    readonly form: FormGroup;

    constructor(@Inject(FormBuilder) private fb: FormBuilder) {
        this.form = this.fb.group({
            text: ['русский текст', Validators.required],
        });

        this.form.controls['text'].setAsyncValidators(asyncValidatorFn());
        this.form.controls['text'].markAsTouched();
    }
}
