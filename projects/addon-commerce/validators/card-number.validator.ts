import {AbstractControl, ValidationErrors} from '@angular/forms';
import {isCardNumberValid} from '@taiga-ui/addon-commerce/utils';
import {TuiValidationError} from '@taiga-ui/cdk';

export function tuiCardNumberValidator({
    value,
}: AbstractControl): ValidationErrors | null {
    return value?.card && !isCardNumberValid(value.card)
        ? {card: new TuiValidationError(`Invalid card number`)}
        : null;
}
