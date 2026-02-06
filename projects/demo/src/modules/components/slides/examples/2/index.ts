import {KeyValuePipe, NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoFocus, tuiMarkControlAsTouchedAndValidate} from '@taiga-ui/cdk';
import {TuiButton, TuiSurface, TuiTextfield, TuiTitle} from '@taiga-ui/core';
import {TuiSlides, TuiStepper} from '@taiga-ui/kit';
import {TuiCard, TuiForm, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [KeyValuePipe, NgForOf, NgIf, ReactiveFormsModule, TuiAutoFocus, TuiButton, TuiCard, TuiForm, TuiHeader, TuiSlides, TuiStepper, TuiSurface, TuiTextfield, TuiTitle],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected index = 0;
    protected direction = 0;

    protected readonly forms = [
        new FormGroup({
            Name: new FormControl('', Validators.required),
            Surname: new FormControl('', Validators.required),
        }),
        new FormGroup({
            Country: new FormControl('', Validators.required),
            City: new FormControl('', Validators.required),
            Address: new FormControl('', Validators.required),
        }),
        new FormGroup({
            Card: new FormControl('', Validators.required),
            Value: new FormControl('', Validators.required),
        }),
    ];

    protected onStep(step: number): void {
        this.direction = step - this.index;
        this.index = step;
    }

    protected onSubmit(): void {
        tuiMarkControlAsTouchedAndValidate(this.forms[this.index]!);

        if (this.forms[this.index]?.invalid) {
            return;
        }

        this.direction = 1;
        this.index = Math.min(this.index + 1, this.forms.length - 1);
    }
}
