import {computed, inject, type InjectOptions, type Signal} from '@angular/core';
import {NgControl} from '@angular/forms';
import {type TuiCompatValidationError} from '@taiga-ui/cdk/classes';

/**
 * @deprecated use inject(FORM_FIELD) from `@angular/forms/signals` if Angular >= 21
 */
export function tuiInjectFormField(
    options: InjectOptions = {},
): Signal<{errors: Signal<readonly TuiCompatValidationError[]>}> {
    const control = inject(NgControl, options);

    // @ts-expect-error
    return computed(() => control?.field?.());
}
