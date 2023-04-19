import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiIsFalsy} from '@taiga-ui/cdk';
import {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit';
import {interval, of} from 'rxjs';
import {map, scan, startWith} from 'rxjs/operators';

@Component({
    selector: 'tui-field-error-pipe-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
    providers: [
        {
            provide: TUI_VALIDATION_ERRORS,
            useValue: {
                required: 'Enter this!',
                email: 'Enter a valid email',
                maxlength: ({requiredLength}: {requiredLength: string}) =>
                    `Maximum length — ${requiredLength}`,
                minlength: ({requiredLength}: {requiredLength: string}) =>
                    of(`Minimum length — ${requiredLength}`),
                min: interval(2000).pipe(
                    scan(tuiIsFalsy, false),
                    map(val => (val ? 'Fix please' : 'Min number 3')),
                    startWith('Min number 3'),
                ),
            },
        },
    ],
})
export class TuiFieldErrorPipeExample2 {
    readonly testValue1 = new FormControl('', [
        Validators.minLength(4),
        Validators.maxLength(4),
    ]);

    readonly testValue2 = new FormControl('', [Validators.required, Validators.email]);

    readonly testValue3 = new FormControl(2, [Validators.min(3)]);

    readonly testForm = new FormGroup({
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
