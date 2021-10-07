import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

const LONG_TEXT_EXAMPLE = `
In Java: everything is an object.
In Clojure: everything is a list.
In JavaScript: everything is a terrible mistake.
`;

export function maxLengthMessageFactory(context: {requiredLength: string}): string {
    return `Maximum length — ${context.requiredLength}`;
}

@Component({
    selector: 'tui-text-area-example-4',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
    styleUrls: ['./index.less'],
    providers: [
        {
            provide: TUI_VALIDATION_ERRORS,
            useValue: {
                required: 'Enter this!',
                maxlength: maxLengthMessageFactory,
            },
        },
    ],
})
export class TuiTextAreaExample4 {
    readonly maxLength = 97;

    readonly testForm = new FormGroup({
        testValue1: new FormControl(LONG_TEXT_EXAMPLE.trim(), [
            Validators.required,
            Validators.maxLength(this.maxLength),
        ]),
    });

    constructor() {
        this.testForm.markAllAsTouched();
    }
}
