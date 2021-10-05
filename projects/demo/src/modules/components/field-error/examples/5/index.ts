import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

export function maxLengthValidator(context: {requiredLength: string}): string {
    return `Maximum length — ${context.requiredLength}`;
}

export function minLengthValidator(context: {requiredLength: string}): string {
    return `Minimum length — ${context.requiredLength}`;
}

@Component({
    selector: 'tui-field-error-example-5',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
    providers: [
        {
            provide: TUI_VALIDATION_ERRORS,
            useValue: {
                required: 'Enter this!',
                email: 'Enter a valid email',
                maxlength: maxLengthValidator,
                minlength: minLengthValidator,
            },
        },
    ],
})
export class TuiFieldErrorExample5 {
    readonly testValue1 = new FormControl('', [
        Validators.minLength(4),
        Validators.maxLength(4),
    ]);
    readonly testValue2 = new FormControl('', [Validators.required, Validators.email]);

    readonly testForm = new FormGroup({
        testValue1: this.testValue1,
        testValue2: this.testValue2,
    });

    constructor() {
        this.testValue1.valueChanges.subscribe(() => {
            this.testValue1.markAsTouched();
        });
    }
}
