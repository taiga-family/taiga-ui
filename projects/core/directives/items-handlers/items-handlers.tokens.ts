import type {Provider, WritableSignal} from '@angular/core';
import {Optional, signal, SkipSelf} from '@angular/core';
import {TUI_DEFAULT_IDENTITY_MATCHER, TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import type {
    TuiBooleanHandler,
    TuiIdentityMatcher,
    TuiStringHandler,
} from '@taiga-ui/cdk/types';
import {tuiCreateToken} from '@taiga-ui/cdk/utils/miscellaneous';

export interface TuiItemsHandlers<T> {
    readonly disabledItemHandler: WritableSignal<TuiBooleanHandler<T>>;
    readonly identityMatcher: WritableSignal<TuiIdentityMatcher<T>>;
    readonly stringify: WritableSignal<TuiStringHandler<T>>;
}

export const TUI_DEFAULT_ITEMS_HANDLERS: TuiItemsHandlers<unknown> = {
    stringify: signal(String),
    identityMatcher: signal(TUI_DEFAULT_IDENTITY_MATCHER),
    disabledItemHandler: signal(TUI_FALSE_HANDLER),
};

/**
 * Default items handlers for components
 */
export const TUI_ITEMS_HANDLERS = tuiCreateToken(TUI_DEFAULT_ITEMS_HANDLERS);

export function tuiItemsHandlersProvider<T>(
    options: Partial<TuiItemsHandlers<T>>,
): Provider {
    return {
        provide: TUI_ITEMS_HANDLERS,
        deps: [[new Optional(), new SkipSelf(), TUI_ITEMS_HANDLERS]],
        useFactory: (parent: TuiItemsHandlers<T> | null): TuiItemsHandlers<T> => ({
            stringify: signal(
                parent?.stringify() ?? TUI_DEFAULT_ITEMS_HANDLERS.stringify(),
            ),
            identityMatcher: signal(
                parent?.identityMatcher() ?? TUI_DEFAULT_ITEMS_HANDLERS.identityMatcher(),
            ),
            disabledItemHandler: signal(
                parent?.disabledItemHandler() ??
                    TUI_DEFAULT_ITEMS_HANDLERS.disabledItemHandler(),
            ),
            ...options,
        }),
    };
}
