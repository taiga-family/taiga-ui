import {CdkVirtualScrollable, VIRTUAL_SCROLLABLE} from '@angular/cdk/scrolling';
import {type InjectOptions, Injector, type ProviderToken} from '@angular/core';

// Content is rendered in a portal, so virtual scroll around the host must not reach it
export function tuiDropdownInjector(parent: Injector): Injector {
    return {
        get: ((
            token: ProviderToken<unknown>,
            notFoundValue?: unknown,
            options?: InjectOptions,
        ) => {
            if (token === VIRTUAL_SCROLLABLE) {
                return null;
            }

            // TODO: Drop the viewport check when Angular 22.2 is the minimum version: https://github.com/angular/angular/issues/70547
            return isVirtualScroll(token)
                ? Injector.NULL.get(token, notFoundValue)
                : parent.get(token, notFoundValue, options);
        }) as Injector['get'],
    };
}

function isVirtualScroll(token: ProviderToken<unknown>): boolean {
    return typeof token === 'function' && token.prototype instanceof CdkVirtualScrollable;
}
