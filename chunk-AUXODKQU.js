import"./chunk-HU6DUUP4.js";var e=`import {Component} from '@angular/core';
import {
    type AbstractControl,
    FormArray,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    type ValidationErrors,
    Validators,
} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiError, TuiTitle} from '@taiga-ui/core';
import {TuiInputPhone} from '@taiga-ui/kit';
import {TuiForm, TuiHeader} from '@taiga-ui/layout';

function phoneValidator({value}: AbstractControl): ValidationErrors | null {
    return value.length !== 12 ? {length: 'Invalid phone number length'} : null;
}

@Component({
    imports: [
        ReactiveFormsModule,
        TuiButton,
        TuiError,
        TuiForm,
        TuiHeader,
        TuiInputPhone,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly form = new FormGroup({
        phones: new FormArray(
            [new FormControl('', [Validators.required, phoneValidator])],
            [
                (control) =>
                    (control as FormArray).controls.filter(({valid}) => valid).length < 2
                        ? {length: 'You should add at least 2 phone number'}
                        : null,
            ],
        ),
    });

    protected addPhone(): void {
        this.form.controls.phones.push(
            new FormControl('', [Validators.required, phoneValidator]),
        );
    }

    protected removePhone(index: number): void {
        this.form.controls.phones.removeAt(index);
    }
}
`;export{e as default};
