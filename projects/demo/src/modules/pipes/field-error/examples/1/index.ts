import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import type {AbstractControl} from '@angular/forms';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiErrorComponent,
    TuiLabelDirective,
    TuiLinkDirective,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiFieldErrorPipeModule} from '@taiga-ui/kit';
import {TuiInputModule} from '@taiga-ui/legacy';
import {distinctUntilChanged} from 'rxjs';

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
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiLabelDirective,
        TuiInputModule,
        TuiTextfieldControllerModule,
        TuiErrorComponent,
        TuiFieldErrorPipeModule,
        AsyncPipe,
        RouterLink,
        TuiLinkDirective,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly testValue1 = new FormControl('', [
        Validators.required,
        passwordValidator,
    ]);

    protected readonly testValue3 = new FormControl('', [
        Validators.required,
        passwordValidator,
    ]);

    protected readonly testForm = new FormGroup(
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
