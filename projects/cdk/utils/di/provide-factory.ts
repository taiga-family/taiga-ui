import {
    type AbstractType,
    type InjectionToken,
    type Provider,
    type Type,
} from '@angular/core';

export function tuiProvideFactory<T>(
    token: AbstractType<T> | InjectionToken<T> | Type<T>,
    valueOrFactory: T | (() => T),
): Provider {
    return {
        provide: token,
        useFactory: () => {
            return typeof valueOrFactory === 'function'
                ? (valueOrFactory as () => T)()
                : valueOrFactory;
        },
    };
}
