import type {OnInit} from '@angular/core';
import {Component, ViewChild} from '@angular/core';
import type {AbstractControl, ValidationErrors} from '@angular/forms';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiMarkControlAsTouchedAndValidate, TuiValidationError} from '@taiga-ui/cdk';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

const secretRegexTen = /^\d{10}$/;
const secretRegexTwelve = /^\d{12}$/;

@Component({
    selector: 'tui-field-error-pipe-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiFieldErrorPipeExample3 implements OnInit {
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
