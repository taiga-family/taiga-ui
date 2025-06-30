import type {Provider, Type} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {InjectionToken} from '@angular/core';

export interface TuiTextfieldAccessor<T = unknown> {
    setValue(value: T | T[] | null): void;
}

export const TUI_TEXTFIELD_ACCESSOR = new InjectionToken<TuiTextfieldAccessor>(
    'TUI_TEXTFIELD_ACCESSOR',
);

export function tuiAsTextfieldAccessor(accessor: Type<TuiTextfieldAccessor>): Provider {
    return tuiProvide(TUI_TEXTFIELD_ACCESSOR, accessor);
}
