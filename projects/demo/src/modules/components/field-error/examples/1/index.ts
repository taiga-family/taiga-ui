import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {TuiValidationError} from '@taiga-ui/cdk';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

const latinChars = /^[a-zA-Z]+$/;

export function passwordValidator(field: AbstractControl): Validators | null {
    return field.value && latinChars.test(field.value)
        ? null
        : {
              other: new TuiValidationError('Допустимы только латинские буквы'),
          };
}

export function superComputerValidator(field: AbstractControl): Validators | null {
    return field.value === '42'
        ? null
        : {
              other: new TuiValidationError('Ответ неверный'),
          };
}

@Component({
    selector: 'tui-field-error-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiFieldErrorExample1 implements OnInit {
    testValue1 = new FormControl('', [Validators.required, passwordValidator]);

    testForm = new FormGroup({
        testValue1: this.testValue1,
        testValue2: new FormControl('', [Validators.required, superComputerValidator]),
    });

    ngOnInit() {
        this.testValue1.valueChanges.subscribe(() => {
            this.testValue1.markAsTouched();
        });
    }
}
