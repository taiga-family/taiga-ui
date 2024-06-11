import type {AbstractControl, ValidatorFn} from '@angular/forms';
import {TuiValidationError} from '@taiga-ui/cdk';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

export function tuiCreateUnfinishedValidator(
    element: HTMLInputElement,
    message: PolymorpheusContent,
): ValidatorFn {
    return ({
        value,
    }: AbstractControl): {unfinished: TuiValidationError | string} | null =>
        value === null && element.value !== ''
            ? {unfinished: new TuiValidationError(message)}
            : null;
}
