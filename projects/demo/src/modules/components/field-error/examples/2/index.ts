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

const innRegexTen = /^\d{10}$/;
const innRegexTwelve = /^\d{12}$/;

export function innValidator(field: AbstractControl): any {
    return field.value &&
        (innRegexTen.test(field.value) || innRegexTwelve.test(field.value))
        ? null
        : {
              inn: new TuiValidationError('ИНН — 10 или 12 цифр'),
          };
}

@Component({
    selector: 'tui-field-error-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiFieldErrorExample2 implements OnInit {
    @ViewChild('errorContent')
    errorContent?: PolymorpheusTemplate<{}>;

    @ViewChild('bigErrorContent')
    bigErrorContent?: PolymorpheusTemplate<{}>;

    testValue2 = new FormControl('');

    testForm = new FormGroup({
        testValue1: new FormControl('', [Validators.required, this.getInnValidator()]),
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

    private getInnValidator(): (field: AbstractControl) => ValidationErrors | null {
        return (field: AbstractControl): ValidationErrors | null =>
            field.value &&
            (innRegexTen.test(field.value) || innRegexTwelve.test(field.value))
                ? null
                : {
                      inn: new TuiValidationError(this.errorContent || ''),
                  };
    }
}
