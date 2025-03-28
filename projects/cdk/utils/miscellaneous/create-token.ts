import {InjectionToken} from '@angular/core';

export function tuiCreateToken<T>(defaults?: T): InjectionToken<T> {
    return defaults === undefined
        ? new InjectionToken('')
        : tuiCreateTokenFromFactory(() => defaults);
}

export function tuiCreateTokenFromFactory<T>(factory?: () => T): InjectionToken<T> {
    return factory ? new InjectionToken<T>('', {factory}) : new InjectionToken<T>('');
}
