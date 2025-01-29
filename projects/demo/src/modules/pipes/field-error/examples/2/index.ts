import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiIsFalsy} from '@taiga-ui/cdk';
import {TuiError, TuiTextfield} from '@taiga-ui/core';
import {
    TuiFieldErrorPipe,
    TuiInputNumber,
    tuiValidationErrorsProvider,
} from '@taiga-ui/kit';
import {interval, map, of, scan, startWith} from 'rxjs';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        ReactiveFormsModule,
        TuiError,
        TuiFieldErrorPipe,
        TuiInputNumber,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiValidationErrorsProvider({
            required: 'Enter this!',
            email: 'Enter a valid email',
            maxlength: ({requiredLength}: {requiredLength: string}) =>
                `Maximum length — ${requiredLength}`,
            minlength: ({requiredLength}: {requiredLength: string}) =>
                of(`Minimum length — ${requiredLength}`),
            min: interval(2000).pipe(
                scan(tuiIsFalsy, false),
                map((val) => (val ? 'Fix please' : 'Min number 3')),
                startWith('Min number 3'),
            ),
        }),
    ],
})
export default class Example {
    protected readonly testValue1 = new FormControl('', [
        Validators.minLength(4),
        Validators.maxLength(4),
    ]);

    protected readonly testValue2 = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);

    protected readonly testValue3 = new FormControl(2, [Validators.min(3)]);

    protected readonly testForm = new FormGroup({
        testValue1: this.testValue1,
        testValue2: this.testValue2,
        testValue3: this.testValue3,
    });

    constructor() {
        this.testValue1.valueChanges.subscribe(() => {
            this.testValue1.markAsTouched();
        });
    }
}
