import type {ExistingProvider, ProviderToken} from '@angular/core';

export function tuiProvide<T>(
    provide: ProviderToken<T>,
    useExisting: ProviderToken<T>,
): ExistingProvider;
export function tuiProvide<T>(
    provide: ProviderToken<T | T[]>,
    useExisting: ProviderToken<T>,
    multi: boolean,
): ExistingProvider;
export function tuiProvide<T>(
    provide: ProviderToken<T>,
    useExisting: ProviderToken<T>,
    multi = false,
): ExistingProvider {
    return {provide, useExisting, multi};
}
