import {
    type FactoryProvider,
    inject,
    type InjectionToken,
    type ProviderToken,
} from '@angular/core';

// TODO: Drop ProviderToken in v.5
export function tuiProvideOptions<T>(
    provide: InjectionToken<T>,
    options: Partial<T> | ProviderToken<Partial<T>> | (() => Partial<T>),
    fallback: T,
): FactoryProvider {
    return {
        provide,
        useFactory: (): T => ({
            ...(inject(provide, {optional: true, skipSelf: true}) || fallback),
            ...(inject(options as any, {optional: true}) ||
                // @ts-ignore
                (typeof options === 'function' ? options() : options)),
        }),
    };
}
