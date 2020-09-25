import {AbstractControl, FormArray, FormGroup} from '@angular/forms';

export function markControlAsTouchedAndValidate(control: AbstractControl) {
    if (control instanceof FormArray) {
        control.controls.forEach(nestedControl => {
            markControlAsTouchedAndValidate(nestedControl);
        });

        return;
    }

    if (control instanceof FormGroup) {
        Object.values(control.controls).forEach(nestedControl => {
            markControlAsTouchedAndValidate(nestedControl);
        });

        return;
    }

    control.markAsTouched();
    control.updateValueAndValidity();
}
