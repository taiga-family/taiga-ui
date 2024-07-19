import type {Provider, TemplateRef, Type} from '@angular/core';
import {InjectionToken} from '@angular/core';
import type {TuiContext, TuiIdentityMatcher, TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
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
export const TUI_OPTION_CONTENT = new InjectionToken<
    PolymorpheusContent<TuiContext<TemplateRef<Record<string, unknown>>>>
>('[TUI_OPTION_CONTENT]');

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
export const TUI_DATA_LIST_ACCESSOR = new InjectionToken<TuiDataListAccessor>(
    '[TUI_DATA_LIST_ACCESSOR]',
);

export function tuiAsDataListAccessor(accessor: Type<TuiDataListAccessor>): Provider {
    return tuiProvide(TUI_DATA_LIST_ACCESSOR, accessor);
}

/**
 * DataList controller
 */
export const TUI_DATA_LIST_HOST = new InjectionToken<TuiDataListHost<unknown>>(
    '[TUI_DATA_LIST_HOST]',
);

export function tuiAsDataListHost(host: Type<TuiDataListHost<unknown>>): Provider {
    return tuiProvide(TUI_DATA_LIST_HOST, host);
}
