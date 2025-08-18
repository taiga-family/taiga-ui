import {type AbstractControl, type ValidationErrors} from '@angular/forms';
import {tuiIsExpireValid} from '@taiga-ui/addon-commerce/utils';
import {TuiValidationError} from '@taiga-ui/cdk/classes';

export function tuiCardExpireValidator({
    value,
}: AbstractControl): ValidationErrors | null {
    return value?.expire?.length === 5 && !tuiIsExpireValid(value?.expire)
        ? {expire: new TuiValidationError('Expire date')}
        : null;
}
