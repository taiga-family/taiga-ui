import {type FactoryProvider, inject, type InjectionToken} from '@angular/core';

export function tuiProvideOptions<T>(
    provide: InjectionToken<T>,
    options: Partial<T> | (() => Partial<T>),
    fallback: T,
): FactoryProvider {
    return {
        provide,
        useFactory: (): T => ({
            ...(inject(provide, {optional: true, skipSelf: true}) || fallback),
            ...(inject(options as unknown as InjectionToken<T>, {optional: true}) ||
                (typeof options === 'function' ? options() : options)),
        }),
    };
}
