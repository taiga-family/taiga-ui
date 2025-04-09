import type {Provider} from '@angular/core';
import {TUI_DEFAULT_IDENTITY_MATCHER, TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import type {
    TuiBooleanHandler,
    TuiIdentityMatcher,
    TuiStringHandler,
} from '@taiga-ui/cdk/types';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';

/**
 * @deprecated use it only for LEGACY controls. For new controls use the same entity from `@taiga-ui/kit`.
 * TODO(v5): delete
 */
export interface TuiItemsHandlers<T> {
    readonly disabledItemHandler: TuiBooleanHandler<T>;
    readonly identityMatcher: TuiIdentityMatcher<T>;
    readonly stringify: TuiStringHandler<T>;
}

/**
 * @deprecated use it only for LEGACY controls. For new controls use the same entity from `@taiga-ui/kit`.
 * TODO(v5): delete
 */
export const TUI_DEFAULT_ITEMS_HANDLERS: TuiItemsHandlers<unknown> = {
    stringify: String,
    identityMatcher: TUI_DEFAULT_IDENTITY_MATCHER,
    disabledItemHandler: TUI_FALSE_HANDLER,
};

/**
 * @deprecated use it only for LEGACY controls. For new controls use the same entity from `@taiga-ui/kit`.
 * TODO(v5): delete
 */
export const TUI_ITEMS_HANDLERS = tuiCreateToken(TUI_DEFAULT_ITEMS_HANDLERS);

/**
 * @deprecated use it only for LEGACY controls. For new controls use the same entity from `@taiga-ui/kit`.
 * TODO(v5): delete
 */
export function tuiItemsHandlersProvider<T>(
    options: Partial<TuiItemsHandlers<T>>,
): Provider {
    return tuiProvideOptions(TUI_ITEMS_HANDLERS, options, TUI_DEFAULT_ITEMS_HANDLERS);
}
