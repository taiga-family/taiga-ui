import {AbstractControl, ValidatorFn} from '@angular/forms';
import {
    TuiFocusableElementAccessor,
    tuiIsHTMLElement,
    tuiIsInput,
    TuiValidationError,
} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

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
            nativeInput.nativeFocusableElement.value !== ``
            ? {unfinished: new TuiValidationError(message)}
            : null;
    };
}
