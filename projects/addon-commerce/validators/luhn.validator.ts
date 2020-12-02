import {AbstractControl, ValidatorFn} from '@angular/forms';
import {isCardNumberValid} from '@taiga-ui/addon-commerce/utils';
import {TuiValidationError} from '@taiga-ui/cdk';
import {TUI_NON_DIGITS_REGEXP} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

// TODO: i18n
const error = 'Неверный формат карты';

export function tuiCreateLuhnValidator(
    message: PolymorpheusContent = error,
): ValidatorFn {
    return ({value}: AbstractControl) => {
        const cardNumber = String(value).replace(TUI_NON_DIGITS_REGEXP, '');

        return isCardNumberValid(cardNumber)
            ? null
            : {luhn: new TuiValidationError(message)};
    };
}
