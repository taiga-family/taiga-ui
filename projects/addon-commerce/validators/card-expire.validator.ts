import {AbstractControl, ValidationErrors} from '@angular/forms';
import {isExpireValid} from '@taiga-ui/addon-commerce/utils';
import {TuiValidationError} from '@taiga-ui/cdk';

export function tuiCardExpireValidator({
    value,
}: AbstractControl): ValidationErrors | null {
    return value?.expire?.length === 5 && !isExpireValid(value?.expire)
        ? {expire: new TuiValidationError(`Expire date`)}
        : null;
}
