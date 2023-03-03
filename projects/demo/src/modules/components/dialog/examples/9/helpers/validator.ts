import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function inputCardGroupedCVCValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const {value} = control;

        if (!value?.cvc) {
            return null;
        }

        return value.cvc.length < 3 ? {invalidCvc: true} : null;
    };
}
