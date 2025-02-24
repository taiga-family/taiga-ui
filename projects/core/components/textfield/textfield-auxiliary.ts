import type {Provider, Signal, Type} from '@angular/core';
import {inject} from '@angular/core';
import {tuiCreateToken, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';

import {TuiTextfieldComponent} from './textfield.component';

export const TUI_AUXILIARY = tuiCreateToken(null);

export function tuiAsAuxiliary(x: Type<unknown>): Provider {
    return tuiProvide(TUI_AUXILIARY, x);
}

export function tuiInjectAuxiliary<T>(): Signal<T | null> {
    return inject(TuiTextfieldComponent).auxiliary as Signal<T | null>;
}
