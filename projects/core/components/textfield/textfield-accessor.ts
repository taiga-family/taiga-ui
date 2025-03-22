import type {Provider, Type} from '@angular/core';
import {tuiCreateToken, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';

export interface TuiTextfieldAccessor<T = unknown> {
    setValue(value: T | null): void;
}

export const TUI_TEXTFIELD_ACCESSOR = tuiCreateToken<TuiTextfieldAccessor>();

export function tuiAsTextfieldAccessor(accessor: Type<TuiTextfieldAccessor>): Provider {
    return tuiProvide(TUI_TEXTFIELD_ACCESSOR, accessor);
}
