import type {Provider, Type} from '@angular/core';
import {InjectionToken} from '@angular/core';
import type {TuiDataListAccessor} from '@taiga-ui/core/interfaces';

/**
 * Accessor for data-list options
 */
export const TUI_DATA_LIST_ACCESSOR = new InjectionToken<TuiDataListAccessor>(
    `[TUI_DATA_LIST_ACCESSOR]`,
);

export function tuiAsDataListAccessor(useExisting: Type<TuiDataListAccessor>): Provider {
    return {
        provide: TUI_DATA_LIST_ACCESSOR,
        useExisting,
    };
}
