import {Component, signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiIsFalsy} from '@taiga-ui/cdk';
import {TuiError, TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber, tuiValidationErrorsProvider} from '@taiga-ui/kit';
import {TuiForm} from '@taiga-ui/layout';
import {interval, map, scan, startWith} from 'rxjs';

@Component({
    imports: [ReactiveFormsModule, TuiError, TuiInputNumber, TuiTextfield, TuiForm],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiValidationErrorsProvider({
            required: 'Enter this!',
            email: 'Enter a valid email',
            maxlength: ({requiredLength}: {requiredLength: string}) =>
                `Maximum length — <b>${requiredLength}</b>`,
            minlength: ({requiredLength}: {requiredLength: string}) =>
                signal(`Minimum length — <b>${requiredLength}</b>`),
            min: () =>
                toSignal(
                    interval(2000).pipe(
                        scan(tuiIsFalsy, false),
                        map((val) => (val ? 'Fix please' : 'Min number 3')),
                        startWith('Min number 3'),
                    ),
                ),
        }),
    ],
})
export default class Example {
    protected readonly form = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        value: new FormControl('', [Validators.minLength(4), Validators.maxLength(4)]),
        number: new FormControl(2, [Validators.min(3)]),
    });
}
