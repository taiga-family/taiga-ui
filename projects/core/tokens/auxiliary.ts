import {
    computed,
    inject,
    InjectionToken,
    type Provider,
    type Signal,
    type Type,
} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';

import {TUI_TEXTFIELD} from './textfield';

export const TUI_AUXILIARY = new InjectionToken<Type<unknown> | null>(
    ngDevMode ? 'TUI_AUXILIARY' : '',
    {factory: () => null},
);

export function tuiAsAuxiliary(x: Type<unknown>): Provider {
    return tuiProvide(TUI_AUXILIARY, x);
}

export function tuiInjectAuxiliary<T>(
    predicate: (auxiliary: any, index: number) => boolean,
): Signal<T | null> {
    const {auxiliaries} = inject(TUI_TEXTFIELD);

    return computed(() => (auxiliaries().find(predicate) ?? null) as T | null);
}
