import {type AbstractControl, FormArray, FormGroup} from '@angular/forms';
import {tuiToInt} from '@taiga-ui/cdk/utils/math';

import {tuiIsControlEmpty} from './is-control-empty';

export function tuiCountFilledControls(control: AbstractControl): number {
    if (control instanceof FormArray) {
        return control.controls.reduce(
            (acc, nestedControl) => acc + tuiCountFilledControls(nestedControl),
            0,
        );
    }

    if (control instanceof FormGroup) {
        return Object.values(control.controls).reduce(
            (acc, nestedControl) => acc + tuiCountFilledControls(nestedControl),
            0,
        );
    }

    return tuiToInt(!tuiIsControlEmpty(control));
}
