import {AbstractControl, ValidationErrors} from '@angular/forms';
import {TuiCard} from '@taiga-ui/addon-commerce/interfaces';
import {tuiIsCardNumberValid} from '@taiga-ui/addon-commerce/utils';
import {TuiValidationError} from '@taiga-ui/cdk';

export function tuiCardNumberValidator(
    control: AbstractControl,
): ValidationErrors | null {
    const value = control.value as TuiCard;

    return value?.card && !tuiIsCardNumberValid(value.card)
        ? {card: new TuiValidationError(`Invalid card number`)}
        : null;
}
