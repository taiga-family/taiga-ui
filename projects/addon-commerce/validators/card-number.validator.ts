import type {AbstractControl, ValidationErrors} from '@angular/forms';
import {tuiIsCardNumberValid} from '@taiga-ui/addon-commerce/utils';
import {TuiValidationError} from '@taiga-ui/cdk';

export function tuiCardNumberValidator({
    value,
}: AbstractControl): ValidationErrors | null {
    return value?.card && !tuiIsCardNumberValid(value.card)
        ? {card: new TuiValidationError(`Invalid card number`)}
        : null;
}
