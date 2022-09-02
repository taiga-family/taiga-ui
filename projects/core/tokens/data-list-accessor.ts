import type {Provider, Type} from '@angular/core';
import {InjectionToken} from '@angular/core';
import type {TuiDataListAccessor} from '@taiga-ui/core/interfaces';

export const TUI_DATA_LIST_ACCESSOR = new InjectionToken<TuiDataListAccessor>(
    `Accessor for options`,
);

export function tuiAsDataListAccessor(useExisting: Type<TuiDataListAccessor>): Provider {
    return {
        provide: TUI_DATA_LIST_ACCESSOR,
        useExisting,
    };
}
