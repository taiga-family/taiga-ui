import"./chunk-B4AJQJMI.js";var o=`import {
    type AbstractControl,
    type ValidationErrors,
    type ValidatorFn,
} from '@angular/forms';

export function inputCardGroupedCVCValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const {value} = control;

        if (!value?.cvc) {
            return null;
        }

        return value.cvc.length < 3 ? {invalidCvc: true} : null;
    };
}
`;export{o as default};
