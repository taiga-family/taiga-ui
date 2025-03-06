import type {Provider, Signal, Type} from '@angular/core';
import {computed, inject} from '@angular/core';
import {tuiCreateToken, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';

import {TuiTextfieldComponent} from './textfield.component';

export const TUI_AUXILIARY = tuiCreateToken(null);

export function tuiAsAuxiliary(x: Type<unknown>): Provider {
    return tuiProvide(TUI_AUXILIARY, x, true);
}

export function tuiInjectAuxiliary<T>(
    predicate: (
        auxiliaries: ReadonlyArray<Type<unknown>>,
    ) => Type<unknown> | null | undefined = ([auxiliary]) => auxiliary ?? null,
): Signal<T | null> {
    const {auxiliaries} = inject(TuiTextfieldComponent);

    return computed(() => (predicate(auxiliaries()) ?? null) as T | null);
}
