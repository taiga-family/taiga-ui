import"./chunk-HU6DUUP4.js";var i=`import {KeyValuePipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoFocus, tuiMarkControlAsTouchedAndValidate} from '@taiga-ui/cdk';
import {TuiButton, TuiInput, TuiTitle} from '@taiga-ui/core';
import {TuiStepper} from '@taiga-ui/kit';
import {
    TuiCard,
    TuiElasticContainer,
    TuiForm,
    TuiHeader,
    TuiSlides,
} from '@taiga-ui/layout';

@Component({
    imports: [
        KeyValuePipe,
        ReactiveFormsModule,
        TuiAutoFocus,
        TuiButton,
        TuiCard,
        TuiElasticContainer,
        TuiForm,
        TuiHeader,
        TuiInput,
        TuiSlides,
        TuiStepper,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
`;export{i as default};
