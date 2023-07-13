import {Provider} from '@angular/core';
import {
    ALWAYS_FALSE_HANDLER,
    TUI_DEFAULT_IDENTITY_MATCHER,
    TUI_DEFAULT_STRINGIFY,
    TuiBooleanHandler,
    tuiCreateOptions,
    TuiIdentityMatcher,
    tuiProvideOptions,
    TuiStringHandler,
} from '@taiga-ui/cdk';

export interface TuiItemsHandlers<T> {
    readonly stringify: TuiStringHandler<T>;
    readonly identityMatcher: TuiIdentityMatcher<T>;
    readonly disabledItemHandler: TuiBooleanHandler<T>;
}

export const TUI_DEFAULT_ITEMS_HANDLERS: TuiItemsHandlers<unknown> = {
    stringify: TUI_DEFAULT_STRINGIFY,
    identityMatcher: TUI_DEFAULT_IDENTITY_MATCHER,
    disabledItemHandler: ALWAYS_FALSE_HANDLER,
};

/**
 * Default items handlers for components
 */
export const TUI_ITEMS_HANDLERS = tuiCreateOptions(TUI_DEFAULT_ITEMS_HANDLERS);

export function tuiItemsHandlersProvider<T>(
    options: Partial<TuiItemsHandlers<T>>,
): Provider {
    return tuiProvideOptions(TUI_ITEMS_HANDLERS, options, TUI_DEFAULT_ITEMS_HANDLERS);
}
