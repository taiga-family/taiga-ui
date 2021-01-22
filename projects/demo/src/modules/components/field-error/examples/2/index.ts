import {Component, OnInit, ViewChild} from '@angular/core';
import {
    AbstractControl,
    FormControl,
    FormGroup,
    ValidationErrors,
    Validators,
} from '@angular/forms';
import {TuiValidationError} from '@taiga-ui/cdk';
import {PolymorpheusTemplate} from '@tinkoff/ng-polymorpheus';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

const secretRegexTen = /^\d{10}$/;
const secretRegexTwelve = /^\d{12}$/;

export function innValidator(field: AbstractControl): any {
    return field.value &&
        (secretRegexTen.test(field.value) || secretRegexTwelve.test(field.value))
        ? null
        : {
              inn: new TuiValidationError('Secret number contains 10 or 12 digits'),
          };
}

@Component({
    selector: 'tui-field-error-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiFieldErrorExample2 implements OnInit {
    @ViewChild('errorContent')
    errorContent?: PolymorpheusTemplate<{}>;

    @ViewChild('bigErrorContent')
    bigErrorContent?: PolymorpheusTemplate<{}>;

    readonly testValue2 = new FormControl('');

    readonly testForm = new FormGroup({
        testValue1: new FormControl('', [Validators.required, this.getSecretValidator()]),
        testValue2: this.testValue2,
    });

    private readonly companyValidator = (
        field: AbstractControl,
    ): ValidationErrors | null =>
        field.value
            ? {
                  inn: new TuiValidationError(this.bigErrorContent || ''),
              }
            : null;

    ngOnInit() {
        this.testValue2.setValidators([Validators.required, this.companyValidator]);
    }

    private getSecretValidator(): (field: AbstractControl) => ValidationErrors | null {
        return (field: AbstractControl): ValidationErrors | null =>
            field.value &&
            (secretRegexTen.test(field.value) || secretRegexTwelve.test(field.value))
                ? null
                : {
                      secret: new TuiValidationError(this.errorContent || ''),
                  };
    }
}
