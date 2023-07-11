import {InjectionToken} from '@angular/core';

export function tuiCreateOptions<T>(defaults: T): InjectionToken<T> {
    return new InjectionToken<T>(``, {
        factory: () => defaults,
    });
}
