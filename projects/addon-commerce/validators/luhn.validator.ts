import {AbstractControl, ValidatorFn} from '@angular/forms';
import {tuiIsCardNumberValid} from '@taiga-ui/addon-commerce/utils';
import {TuiValidationError} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export function tuiCreateLuhnValidator(message: PolymorpheusContent): ValidatorFn {
    return (control: AbstractControl) => {
        const value = control.value as number | string;

        return tuiIsCardNumberValid(value)
            ? null
            : {luhn: new TuiValidationError(message)};
    };
}
