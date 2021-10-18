import {AbstractControl, ValidatorFn} from '@angular/forms';
import {isCardNumberValid} from '@taiga-ui/addon-commerce/utils';
import {TuiValidationError} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export function tuiCreateLuhnValidator(message: PolymorpheusContent): ValidatorFn {
    return ({value}: AbstractControl) => {
        return isCardNumberValid(value) ? null : {luhn: new TuiValidationError(message)};
    };
}
