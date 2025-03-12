import type {Provider, Type} from '@angular/core';
import {tuiCreateToken, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';

export interface TuiDataListAccessor<T = unknown> {
    getOptions(includeDisabled?: boolean): readonly T[];
}

/**
 * Accessor for data-list options
 */
export const TUI_DATA_LIST_ACCESSOR = tuiCreateToken<TuiDataListAccessor>();

export function tuiAsDataListAccessor(accessor: Type<TuiDataListAccessor>): Provider {
    return tuiProvide(TUI_DATA_LIST_ACCESSOR, accessor);
}
