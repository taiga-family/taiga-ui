import {AbstractControl, ValidatorFn} from '@angular/forms';
import {TuiFocusableElementAccessor, TuiValidationError} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

// TODO: i18n
const error = 'Заполните поле до конца';

export function tuiCreateUnfinishedValidator(
    nativeInputGetter: () => TuiFocusableElementAccessor,
    message: PolymorpheusContent = error,
): ValidatorFn {
    return ({
        value,
    }: AbstractControl): {unfinished: TuiValidationError | string} | null => {
        const nativeInput = nativeInputGetter();

        return value === null &&
            nativeInput &&
            nativeInput.nativeFocusableElement instanceof HTMLInputElement &&
            nativeInput.nativeFocusableElement.value !== ''
            ? {unfinished: new TuiValidationError(message)}
            : null;
    };
}
