import type {WritableSignal} from '@angular/core';
import {effect, signal} from '@angular/core';

import {tuiInjectElement} from './inject-element';

/**
 * Host binding `host: {'[value]': 'yourSignal()'}` is not an option for our textfields –
 * they use {@link TuiTextfieldDirective} as a host directive.
 * `TuiTextfieldDirective` has host binding which depends on native input's value.
 * Host bindings of the host directives are re-calculated BEFORE component's ones –
 * native input's value should be updated SYNCHRONOUSLY before next change detection iteration.
 */
export function tuiValueBinding(
    initialValue: string = tuiInjectElement<HTMLInputElement>().value || '',
): WritableSignal<string> {
    const el = tuiInjectElement<HTMLInputElement>();
    const value = signal(initialValue);

    effect(() => {
        el.value = value();
    });

    return value;
}
