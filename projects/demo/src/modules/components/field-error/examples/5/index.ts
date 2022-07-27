import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit';
import {interval} from 'rxjs';
import {map, scan, startWith} from 'rxjs/operators';

export function maxLengthValidator(context: {requiredLength: string}): string {
    return `Maximum length — ${context.requiredLength}`;
}

export function minLengthValidator(context: {requiredLength: string}): string {
    return `Minimum length — ${context.requiredLength}`;
}

@Component({
    selector: `tui-field-error-example-5`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
    providers: [
        {
            provide: TUI_VALIDATION_ERRORS,
            useValue: {
                required: `Enter this!`,
                email: `Enter a valid email`,
                maxlength: maxLengthValidator,
                minlength: minLengthValidator,
                min: interval(2000).pipe(
                    scan(acc => !acc, false),
                    map(val => (val ? `Fix please` : `Min number 3`)),
                    startWith(`Min number 3`),
                ),
            },
        },
    ],
})
export class TuiFieldErrorExample5 {
    readonly testValue1 = new FormControl(``, [
        Validators.minLength(4),
        Validators.maxLength(4),
    ]);

    readonly testValue2 = new FormControl(``, [Validators.required, Validators.email]);

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
