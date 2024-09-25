import type {Provider, TemplateRef, Type} from '@angular/core';
import type {TuiContext, TuiIdentityMatcher, TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiCreateToken, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

export interface TuiDataListAccessor<T = unknown> {
    getOptions(includeDisabled?: boolean): readonly T[];
}

// TODO: Consider refactoring checkOption, it is only needed in ComboBox
export interface TuiDataListHost<T> {
    checkOption?(option: T): void;
    handleOption?(option: T): void;
    readonly identityMatcher?: TuiIdentityMatcher<T>;
    readonly stringify?: TuiStringHandler<T>;
    readonly size?: TuiSizeL | TuiSizeS;
}

/**
 * Content for tuiOption component
 */
export const TUI_OPTION_CONTENT =
    tuiCreateToken<
        PolymorpheusContent<TuiContext<TemplateRef<Record<string, unknown>>>>
    >();

export function tuiAsOptionContent(
    useValue: PolymorpheusContent<TuiContext<TemplateRef<Record<string, unknown>>>>,
): Provider {
    return {
        provide: TUI_OPTION_CONTENT,
        useValue,
    };
}

/**
 * Accessor for data-list options
 */
export const TUI_DATA_LIST_ACCESSOR = tuiCreateToken<TuiDataListAccessor>();

export function tuiAsDataListAccessor(accessor: Type<TuiDataListAccessor>): Provider {
    return tuiProvide(TUI_DATA_LIST_ACCESSOR, accessor);
}

/**
 * DataList controller
 */
export const TUI_DATA_LIST_HOST = tuiCreateToken<TuiDataListHost<unknown>>();

export function tuiAsDataListHost<T>(host: Type<TuiDataListHost<T>>): Provider {
    return tuiProvide(TUI_DATA_LIST_HOST, host);
}
