import {Component} from '@angular/core';
import type {AbstractControl, ValidationErrors} from '@angular/forms';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiItem, TuiValidationError} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputChip} from '@taiga-ui/kit';

export function customValidator({value}: AbstractControl): ValidationErrors | null {
    return value.some((v: string) => v === 'invalid')
        ? {invalid: new TuiValidationError('invalid chip')}
        : null;
}

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputChip, TuiItem, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    public readonly control = new FormControl(['invalid', 'value'], customValidator);
}
