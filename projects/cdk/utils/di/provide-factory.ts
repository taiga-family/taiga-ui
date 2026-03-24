import {AbstractType, type InjectionToken, Provider, Type} from '@angular/core';

export function tuiProvideFactory<T>(
    token: InjectionToken<T> | Type<T> | AbstractType<T>,
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
