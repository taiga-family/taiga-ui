import {AsyncPipe, NgForOf} from '@angular/common';
import {Component, ViewChild} from '@angular/core';
import type {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {
    FormArray,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiValidationError} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiErrorComponent,
    TuiLabelDirective,
    TuiTextfieldOptionsDirective,
} from '@taiga-ui/core';
import {TuiFieldErrorPipe} from '@taiga-ui/kit';
import {TuiInputPhoneModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        NgForOf,
        TuiLabelDirective,
        TuiInputPhoneModule,
        TuiTextfieldOptionsDirective,
        TuiTextfieldControllerModule,
        TuiButtonDirective,
        TuiErrorComponent,
        TuiFieldErrorPipe,
        AsyncPipe,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    @ViewChild('phoneErrorContent')
    protected phoneErrorContent: PolymorpheusContent;

    protected testForm = new FormGroup({
        phones: new FormArray(
            [new FormControl('', [Validators.required, this.getPhoneLengthValidator()])],
            [this.getPhoneArrayValidator()],
        ),
    });

    protected get formData(): FormArray {
        return this.testForm.get('phones') as FormArray;
    }

    protected addPhone(): void {
        this.formData.push(new FormControl('', this.addValidators()));
    }

    protected removePhone(index: number): void {
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

    protected addValidators(): ValidationErrors | null {
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
                      length: new TuiValidationError(this.phoneErrorContent),
                  }
                : null;
    }

    private getPhoneArrayValidator(): ValidatorFn {
        return ((array: FormArray): ValidationErrors | null =>
            array.controls.length < 2 ||
            (!!array.controls.filter(item => item.errors).length && array.controls.length)
                ? {
                      length: new TuiValidationError(
                          'You should add at least 2 phone number',
                      ),
                  }
                : null) as ValidatorFn;
    }
}
