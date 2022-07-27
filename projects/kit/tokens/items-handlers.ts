import {InjectionToken, ValueProvider} from '@angular/core';
import {
    ALWAYS_FALSE_HANDLER,
    TUI_DEFAULT_IDENTITY_MATCHER,
    TUI_DEFAULT_STRINGIFY,
    TuiBooleanHandler,
    TuiIdentityMatcher,
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

export const TUI_ITEMS_HANDLERS = new InjectionToken<TuiItemsHandlers<unknown>>(
    `Default items handlers for components`,
    {
        factory: () => TUI_DEFAULT_ITEMS_HANDLERS,
    },
);

export const tuiItemsHandlersProvider: <T>(
    options: Partial<TuiItemsHandlers<T>>,
) => ValueProvider = <T>(options: Partial<TuiItemsHandlers<T>>) => ({
    provide: TUI_ITEMS_HANDLERS,
    useValue: {...TUI_DEFAULT_ITEMS_HANDLERS, ...options},
});
