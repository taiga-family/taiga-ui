import type {Provider, Signal, Type} from '@angular/core';
import {InjectionToken} from '@angular/core';
import type {TuiIdentityMatcher, TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiAsAuxiliary} from '@taiga-ui/core/tokens';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';

export interface TuiDataListAccessor<T = unknown> {
    /**
     * @deprecated Use `options` property instead
     */
    getOptions(includeDisabled?: boolean): readonly T[];
    // TODO(v5): remove `undefined` for this property
    options?: Signal<readonly T[]>;
}

// TODO: Consider refactoring checkOption, it is only needed in ComboBox
export interface TuiDataListHost<T> {
    checkOption?(option: T): void;
    handleOption?(option: T): void;
    /**
     * @deprecated Use `inject(TuiItemsHandlersDirective<T>).identityMatcher` instead
     */
    readonly identityMatcher?: TuiIdentityMatcher<T>;
    /**
     * @deprecated Use `inject(TuiItemsHandlersDirective<T>).stringify` instead
     */
    readonly stringify?: TuiStringHandler<T>;
    readonly size?: TuiSizeL | TuiSizeS;
}

/**
 * Accessor for data-list options
 */
export const TUI_DATA_LIST_ACCESSOR = new InjectionToken<TuiDataListAccessor>(
    'TUI_DATA_LIST_ACCESSOR',
);

export function tuiAsDataListAccessor(accessor: Type<TuiDataListAccessor>): Provider {
    return [tuiProvide(TUI_DATA_LIST_ACCESSOR, accessor), tuiAsAuxiliary(accessor)];
}

/**
 * DataList controller
 */
export const TUI_DATA_LIST_HOST = new InjectionToken<TuiDataListHost<unknown>>(
    'TUI_DATA_LIST_HOST',
);

export function tuiAsDataListHost<T>(host: Type<TuiDataListHost<T>>): Provider {
    return tuiProvide(TUI_DATA_LIST_HOST, host);
}
