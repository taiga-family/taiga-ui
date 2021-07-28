import {AbstractControl, FormArray, FormGroup} from '@angular/forms';

export function markControlAsTouchedAndValidate(control: AbstractControl) {
    control.markAsTouched();
    control.updateValueAndValidity();

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
}
