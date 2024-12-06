import type {FactoryProvider, InjectionToken, ProviderToken} from '@angular/core';
import {inject} from '@angular/core';

export function tuiProvideOptions<T>(
    provide: InjectionToken<T>,
    options: ProviderToken<Partial<T>> | Partial<T>,
    fallback: T,
): FactoryProvider {
    return {
        provide,
        useFactory: (): T => ({
            ...(inject(provide, {optional: true, skipSelf: true}) || fallback),
            ...(inject(options as any, {optional: true}) || options),
        }),
    };
}
