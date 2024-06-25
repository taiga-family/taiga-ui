import type {AbstractControl, ValidatorFn} from '@angular/forms';
import {TuiValidationError} from '@taiga-ui/cdk/classes';
import {tuiIsHTMLElement, tuiIsInput} from '@taiga-ui/cdk/utils/dom';
import type {TuiFocusableElementAccessor} from '@taiga-ui/legacy/tokens';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

/**
 * @deprecated: drop in v5.0
 */
export function tuiCreateUnfinishedValidator(
    nativeInputGetter: () => TuiFocusableElementAccessor,
    message: PolymorpheusContent,
): ValidatorFn {
    return ({
        value,
    }: AbstractControl): {unfinished: TuiValidationError | string} | null => {
        const nativeInput = nativeInputGetter();

        return value === null &&
            nativeInput &&
            tuiIsHTMLElement(nativeInput.nativeFocusableElement) &&
            tuiIsInput(nativeInput.nativeFocusableElement) &&
            nativeInput.nativeFocusableElement.value !== ''
            ? {unfinished: new TuiValidationError(message)}
            : null;
    };
}
