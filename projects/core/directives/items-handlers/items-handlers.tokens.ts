import type {Provider} from '@angular/core';
import {TUI_DEFAULT_IDENTITY_MATCHER, TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import type {
    TuiBooleanHandler,
    TuiIdentityMatcher,
    TuiStringHandler,
} from '@taiga-ui/cdk/types';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';

export interface TuiItemsHandlers<T> {
    readonly disabledItemHandler: TuiBooleanHandler<T>;
    readonly identityMatcher: TuiIdentityMatcher<T>;
    readonly stringify: TuiStringHandler<T>;
}

export const TUI_DEFAULT_ITEMS_HANDLERS: TuiItemsHandlers<unknown> = {
    stringify: String,
    identityMatcher: TUI_DEFAULT_IDENTITY_MATCHER,
    disabledItemHandler: TUI_FALSE_HANDLER,
};

/**
 * Default items handlers for components
 */
export const TUI_ITEMS_HANDLERS = tuiCreateToken(TUI_DEFAULT_ITEMS_HANDLERS);

export function tuiItemsHandlersProvider<T>(
    options: Partial<TuiItemsHandlers<T>>,
): Provider {
    return tuiProvideOptions(TUI_ITEMS_HANDLERS, options, TUI_DEFAULT_ITEMS_HANDLERS);
}
