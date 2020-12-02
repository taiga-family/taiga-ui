import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

export function maxLengthValidator(context: {requiredLength: string}): string {
    return `максимальная длина - ${context.requiredLength}`;
}

export function minLengthValidator(context: {requiredLength: string}): string {
    return `максимальная длина - ${context.requiredLength}`;
}

@Component({
    selector: 'tui-field-error-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
    providers: [
        {
            provide: TUI_VALIDATION_ERRORS,
            useValue: {
                required: 'Слышь, заполни',
                email: 'Введите корректный email',
                maxlength: maxLengthValidator,
                minlength: minLengthValidator,
            },
        },
    ],
})
export class TuiFieldErrorExample5 implements OnInit {
    testValue1 = new FormControl('', [Validators.minLength(4), Validators.maxLength(4)]);
    testValue2 = new FormControl('', [Validators.required, Validators.email]);

    testForm = new FormGroup({
        testValue1: this.testValue1,
        testValue2: this.testValue2,
    });

    ngOnInit() {
        this.testValue1.valueChanges.subscribe(() => {
            this.testValue1.markAsTouched();
        });
    }
}
