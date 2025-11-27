import {
    InjectionToken,
    Optional,
    type Provider,
    type Signal,
    signal,
    SkipSelf,
} from '@angular/core';
import {TUI_DEFAULT_IDENTITY_MATCHER, TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import {
    type TuiBooleanHandler,
    type TuiIdentityMatcher,
    type TuiStringHandler,
} from '@taiga-ui/cdk/types';

export interface TuiItemsHandlers<T> {
    readonly disabledItemHandler: Signal<TuiBooleanHandler<T>>;
    readonly identityMatcher: Signal<TuiIdentityMatcher<T>>;
    readonly stringify: Signal<TuiStringHandler<T>>;
}

export const TUI_DEFAULT_ITEMS_HANDLERS: TuiItemsHandlers<unknown> = {
    stringify: signal(String),
    identityMatcher: signal(TUI_DEFAULT_IDENTITY_MATCHER),
    disabledItemHandler: signal(TUI_FALSE_HANDLER),
};

/**
 * Default items handlers for components
 */
export const TUI_ITEMS_HANDLERS = new InjectionToken(
    ngDevMode ? 'TUI_ITEMS_HANDLERS' : '',
    {
        factory: () => TUI_DEFAULT_ITEMS_HANDLERS,
    },
);

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
