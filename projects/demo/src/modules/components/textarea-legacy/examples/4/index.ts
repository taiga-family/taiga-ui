import {AsyncPipe} from '@angular/common';
import type {AfterViewInit} from '@angular/core';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiMarkControlAsTouchedAndValidate} from '@taiga-ui/cdk';
import {TuiError, TuiHint, TuiLabel} from '@taiga-ui/core';
import {TuiFieldErrorPipe, tuiValidationErrorsProvider} from '@taiga-ui/kit';
import {TuiTextareaModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

const LONG_TEXT_EXAMPLE = `
In Java: everything is an object.
In Clojure: everything is a list.
In JavaScript: everything is a terrible mistake.
`;

export function maxLengthMessageFactory(context: {requiredLength: string}): string {
    return `Maximum length — ${context.requiredLength}`;
}

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        ReactiveFormsModule,
        TuiError,
        TuiFieldErrorPipe,
        TuiHint,
        TuiLabel,
        TuiTextareaModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        tuiValidationErrorsProvider({
            required: 'Enter this!',
            maxlength: maxLengthMessageFactory,
        }),
    ],
})
export default class Example implements AfterViewInit {
    protected readonly maxLength = 97;

    protected readonly testForm = new FormGroup({
        testValue1: new FormControl(LONG_TEXT_EXAMPLE.trim(), [
            Validators.required,
            Validators.maxLength(this.maxLength),
        ]),
    });

    public ngAfterViewInit(): void {
        tuiMarkControlAsTouchedAndValidate(this.testForm);
    }
}
