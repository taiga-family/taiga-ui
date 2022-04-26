import {AbstractControl, FormArray, FormGroup} from '@angular/forms';

export function markControlAsTouchedAndValidate(control: AbstractControl): void {
    if (control instanceof FormArray) {
        control.controls.forEach(nestedControl => {
            markControlAsTouchedAndValidate(nestedControl);
        });
    }

    if (control instanceof FormGroup) {
        Object.values(control.controls).forEach(nestedControl => {
            markControlAsTouchedAndValidate(nestedControl);
        });
    }

    control.markAsTouched();
    control.updateValueAndValidity();
}
