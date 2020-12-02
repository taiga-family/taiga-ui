import {Component, ViewChild} from '@angular/core';
import {
    AbstractControl,
    FormArray,
    FormControl,
    FormGroup,
    ValidationErrors,
    ValidatorFn,
    Validators,
} from '@angular/forms';
import {TuiValidationError} from '@taiga-ui/cdk';
import {PolymorpheusTemplate} from '@tinkoff/ng-polymorpheus';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-field-error-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiFieldErrorExample3 {
    @ViewChild('phoneErrorContent')
    phoneErrorContent?: PolymorpheusTemplate<{}>;

    getPhoneArrayValidator = (array: FormArray): ValidationErrors | null => {
        return array.controls.length < 2 ||
            (!!array.controls.filter(item => item.errors).length && array.controls.length)
            ? {length: new TuiValidationError('Необходимо минимум 2 номера телефона')}
            : null;
    };

    testForm = new FormGroup({
        phones: new FormArray(
            [new FormControl('', [Validators.required, this.getPhoneLengthValidator()])],
            [this.getPhoneArrayValidator as ValidatorFn],
        ),
    });

    get formData() {
        return <FormArray>this.testForm.get('phones');
    }

    addPhone() {
        this.formData.push(new FormControl('', this.addValidators()));
    }

    removePhone(index: number) {
        this.formData.removeAt(index);

        let n = 0;

        while (n <= 1 && this.formData.controls[n]) {
            this.formData.controls[n].setValidators([
                Validators.required,
                this.getPhoneLengthValidator(),
            ]);
            n++;
        }
    }

    addValidators(): ValidationErrors | null {
        return this.formData.controls.length < 2
            ? [Validators.required, this.getPhoneLengthValidator()]
            : null;
    }

    private getPhoneLengthValidator(): (
        field: AbstractControl,
    ) => ValidationErrors | null {
        return (field: AbstractControl): ValidationErrors | null =>
            field.value.length !== 12
                ? {
                      lenght: new TuiValidationError(this.phoneErrorContent || ''),
                  }
                : null;
    }
}
