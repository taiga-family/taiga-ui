import {InjectionToken} from '@angular/core';

export function tuiCreateOptions<T>(defaults: T): InjectionToken<T> {
    // eslint-disable-next-line @taiga-ui/injection-token-description
    return new InjectionToken<T>(``, {
        factory: () => defaults,
    });
}
