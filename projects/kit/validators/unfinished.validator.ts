import {AbstractControl, ValidatorFn} from '@angular/forms';
import {TuiFocusableElementAccessor, TuiValidationError} from '@taiga-ui/cdk';
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
            // TODO: iframe warning
            nativeInput.nativeFocusableElement instanceof HTMLInputElement &&
            nativeInput.nativeFocusableElement.value !== ``
            ? {unfinished: new TuiValidationError(message)}
            : null;
    };
}
