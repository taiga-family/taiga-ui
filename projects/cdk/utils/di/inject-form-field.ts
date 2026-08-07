import {computed, inject, type InjectOptions, type Signal} from '@angular/core';
import {NgControl} from '@angular/forms';

/**
 * @deprecated use inject(FORM_FIELD) from `@angular/forms/signals` if Angular >= 21
 */
export function tuiInjectFormField(options: InjectOptions = {}): Signal<unknown> {
    const control = inject(NgControl, options);

    // @ts-expect-error
    return computed(() => control.field?.());
}
