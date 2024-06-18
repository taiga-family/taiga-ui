import {AsyncPipe} from '@angular/common';
import type {OnInit} from '@angular/core';
import {Component, ViewChild} from '@angular/core';
import type {AbstractControl, ValidationErrors} from '@angular/forms';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiMarkControlAsTouchedAndValidate, TuiValidationError} from '@taiga-ui/cdk';
import {TuiButton, TuiError, TuiLabel} from '@taiga-ui/core';
import {TuiCheckboxComponent, TuiFieldErrorPipe} from '@taiga-ui/kit';
import {TuiInputModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

const secretRegexTen = /^\d{10}$/;
const secretRegexTwelve = /^\d{12}$/;

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiLabel,
        TuiInputModule,
        TuiTextfieldControllerModule,
        TuiError,
        TuiFieldErrorPipe,
        AsyncPipe,
        TuiCheckboxComponent,
        TuiButton,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent implements OnInit {
    @ViewChild('errorContent')
    protected errorContent: PolymorpheusContent;

    @ViewChild('bigErrorContent')
    protected bigErrorContent: PolymorpheusContent;

    protected readonly testValue2 = new FormControl('');

    protected readonly testForm = new FormGroup({
        testValue1: new FormControl('', [Validators.required, this.getSecretValidator()]),
        testValue2: this.testValue2,
        testValue3: new FormControl(false, [Validators.requiredTrue]),
    });

    public ngOnInit(): void {
        this.testValue2.setValidators([Validators.required, this.companyValidator]);
    }

    protected onSubmit(): void {
        tuiMarkControlAsTouchedAndValidate(this.testForm);
    }

    private readonly companyValidator = (
        field: AbstractControl,
    ): ValidationErrors | null =>
        field.value
            ? {
                  inn: new TuiValidationError(this.bigErrorContent),
              }
            : null;

    private getSecretValidator(): (field: AbstractControl) => ValidationErrors | null {
        return (field: AbstractControl): ValidationErrors | null =>
            field.value &&
            (secretRegexTen.test(field.value) || secretRegexTwelve.test(field.value))
                ? null
                : {
                      secret: new TuiValidationError(this.errorContent),
                  };
    }
}
