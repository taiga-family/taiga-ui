import {
    type FactoryProvider,
    inject,
    type InjectionToken,
    type ProviderToken,
} from '@angular/core';

export function tuiProvideOptions<T>(
    provide: InjectionToken<T>,
    options: Partial<T> | ProviderToken<Partial<T>>,
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
