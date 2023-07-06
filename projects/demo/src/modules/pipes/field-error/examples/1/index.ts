import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {distinctUntilChanged} from 'rxjs/operators';

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
    selector: 'tui-field-error-pipe-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiFieldErrorPipeExample1 {
    readonly testValue1 = new FormControl('', [Validators.required, passwordValidator]);

    readonly testValue3 = new FormControl('', [Validators.required, passwordValidator]);

    readonly testForm = new FormGroup(
        {
            testValue1: this.testValue1,
            testValue2: new FormControl('', [
                Validators.required,
                superComputerValidator,
            ]),
        },
        control =>
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
