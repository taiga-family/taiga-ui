import type {Provider, Signal, Type} from '@angular/core';
import {computed, inject} from '@angular/core';
import {tuiCreateToken, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';

import {TuiTextfieldComponent} from './textfield.component';

export const TUI_AUXILIARY = tuiCreateToken(null);

export function tuiAsAuxiliary(x: Type<unknown>): Provider {
    return tuiProvide(TUI_AUXILIARY, x);
}

export function tuiInjectAuxiliary<T>(
    predicate: (auxiliary: Type<unknown>, index: number) => boolean,
): Signal<T | null> {
    const {auxiliaries} = inject(TuiTextfieldComponent);

    return computed(() => (auxiliaries().find(predicate) ?? null) as T | null);
}
