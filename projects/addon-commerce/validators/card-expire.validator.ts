import {AbstractControl, ValidationErrors} from '@angular/forms';
import {TuiCard} from '@taiga-ui/addon-commerce/interfaces';
import {tuiIsExpireValid} from '@taiga-ui/addon-commerce/utils';
import {TuiValidationError} from '@taiga-ui/cdk';

export function tuiCardExpireValidator(
    control: AbstractControl,
): ValidationErrors | null {
    const value = control.value as TuiCard;

    return value?.expire?.length === 5 && !tuiIsExpireValid(value?.expire)
        ? {expire: new TuiValidationError(`Expire date`)}
        : null;
}
