import type {AbstractControl, ValidatorFn} from '@angular/forms';
import {TuiValidationError} from '@taiga-ui/cdk/classes';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

export function tuiCreateUnfinishedValidator(
    element: HTMLInputElement,
    message: PolymorpheusContent,
): ValidatorFn {
    return ({
        value,
    }: AbstractControl): {tuiUnfinished: TuiValidationError | string} | null =>
        value === null && element.value !== ''
            ? {tuiUnfinished: message ? new TuiValidationError(message) : ''}
            : null;
}
