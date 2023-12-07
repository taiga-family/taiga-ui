import {AbstractControl, UntypedFormArray, UntypedFormGroup} from '@angular/forms';

export function tuiMarkControlAsTouchedAndValidate(control: AbstractControl): void {
    if (control instanceof UntypedFormArray) {
        control.controls.forEach(nestedControl => {
            tuiMarkControlAsTouchedAndValidate(nestedControl);
        });
    }

    if (control instanceof UntypedFormGroup) {
        Object.values(control.controls).forEach(nestedControl => {
            tuiMarkControlAsTouchedAndValidate(nestedControl);
        });
    }

    control.markAsTouched();
    control.updateValueAndValidity();
}
