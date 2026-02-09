import {Component, viewChild} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiMarkControlAsTouchedAndValidate} from '@taiga-ui/cdk';
import {TuiButton, TuiCheckbox, TuiError, TuiInput} from '@taiga-ui/core';
import {TuiForm} from '@taiga-ui/layout';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    imports: [ReactiveFormsModule, TuiButton, TuiCheckbox, TuiError, TuiForm, TuiInput],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly secret = viewChild<PolymorpheusContent>('secretError');
    protected readonly company = viewChild<PolymorpheusContent>('companyError');
    protected readonly form = new FormGroup({
        secret: new FormControl('', [
            ({value}) => (/^\d{10}$/.test(value || '') ? null : {secret: this.secret}),
            Validators.required,
        ]),
        company: new FormControl('', [({value}) => (value ? {inn: this.company} : null)]),
        checkbox: new FormControl(false, [Validators.requiredTrue]),
    });

    protected onSubmit(): void {
        tuiMarkControlAsTouchedAndValidate(this.form);
    }
}
