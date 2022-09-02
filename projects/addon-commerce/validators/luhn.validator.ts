import type {AbstractControl, ValidatorFn} from '@angular/forms';
import {tuiIsCardNumberValid} from '@taiga-ui/addon-commerce/utils';
import {TuiValidationError} from '@taiga-ui/cdk';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export function tuiCreateLuhnValidator(message: PolymorpheusContent): ValidatorFn {
    return ({value}: AbstractControl) => {
        return tuiIsCardNumberValid(value)
            ? null
            : {luhn: new TuiValidationError(message)};
    };
}
