import type {Signal} from '@angular/core';
import {computed, inject} from '@angular/core';

import {TuiTextfieldComponent} from './textfield.component';

export function tuiInjectAuxiliary<T>(
    predicate: (auxiliary: any, index: number) => boolean,
): Signal<T | null> {
    const {auxiliaries} = inject(TuiTextfieldComponent);

    return computed(() => (auxiliaries().find(predicate) ?? null) as T | null);
}
