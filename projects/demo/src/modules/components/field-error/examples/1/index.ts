import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {TuiValidationError} from '@taiga-ui/cdk';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

const latinChars = /^[a-zA-Z]+$/;

export function passwordValidator(field: AbstractControl): Validators | null {
    return field.value && latinChars.test(field.value)
        ? null
        : {
              other: new TuiValidationError('Only latin letters are allowed'),
          };
}

export function superComputerValidator(field: AbstractControl): Validators | null {
    return field.value === '42'
        ? null
        : {
              other: new TuiValidationError('Wrong'),
          };
}

@Component({
    selector: 'tui-field-error-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiFieldErrorExample1 {
    readonly testValue1 = new FormControl('', [Validators.required, passwordValidator]);

    readonly testForm = new FormGroup({
        testValue1: this.testValue1,
        testValue2: new FormControl('', [Validators.required, superComputerValidator]),
    });

    constructor() {
        this.testValue1.valueChanges.subscribe(() => {
            this.testValue1.markAsTouched();
        });
    }
}
