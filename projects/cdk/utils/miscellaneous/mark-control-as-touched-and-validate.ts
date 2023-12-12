import {AbstractControl, FormArray, FormGroup} from '@angular/forms';

export function tuiMarkControlAsTouchedAndValidate(control: AbstractControl): void {
    if (control instanceof FormArray) {
        control.controls.forEach(nestedControl => {
            tuiMarkControlAsTouchedAndValidate(nestedControl);
        });
    }

    if (control instanceof FormGroup) {
        Object.values(control.controls).forEach(nestedControl => {
            tuiMarkControlAsTouchedAndValidate(nestedControl);
        });
    }

    control.markAsTouched();
    control.updateValueAndValidity();
}
