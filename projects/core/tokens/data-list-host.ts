import type {Provider, Type} from '@angular/core';
import type {TuiIdentityMatcher, TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiCreateToken, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';

// TODO: Consider refactoring checkOption, it is only needed in ComboBox
export interface TuiDataListHost<T> {
    checkOption?(option: T): void;
    handleOption?(option: T): void;
    readonly identityMatcher?: TuiIdentityMatcher<T>;
    readonly stringify?: TuiStringHandler<T>;
    readonly size?: TuiSizeL | TuiSizeS;
}

/**
 * DataList controller
 */
export const TUI_DATA_LIST_HOST = tuiCreateToken<TuiDataListHost<unknown>>();

export function tuiAsDataListHost<T>(host: Type<TuiDataListHost<T>>): Provider {
    return tuiProvide(TUI_DATA_LIST_HOST, host);
}
