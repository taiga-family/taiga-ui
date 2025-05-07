import {Component} from '@angular/core';
import {
    type AbstractControl,
    FormControl,
    FormsModule,
    ReactiveFormsModule,
    type ValidationErrors,
} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield, TuiTextfieldItem} from '@taiga-ui/core';
import {TuiInputChip, TuiInputChipItem} from '@taiga-ui/kit';
import {TuiValidationError} from '@taiga-ui/cdk';

export function customValidator({value}: AbstractControl): ValidationErrors | null {
    return value.some((v: string) => v === 'invalid')
        ? {invalid: new TuiValidationError('invalid chip')}
        : null;
}

@Component({
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TuiInputChip,
        TuiInputChipItem,
        TuiTextfield,
        TuiTextfieldItem,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    public readonly control = new FormControl(['invalid', 'value'], customValidator);
}
