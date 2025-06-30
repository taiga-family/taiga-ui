import {InjectionToken} from '@angular/core';

/**
 * @deprecated: drop in v5.0
 */
export function tuiCreateToken<T>(defaults?: T): InjectionToken<T> {
    return defaults === undefined
        ? new InjectionToken('')
        : tuiCreateTokenFromFactory(() => defaults);
}

/**
 * @deprecated: drop in v5.0
 */
export function tuiCreateTokenFromFactory<T>(factory?: () => T): InjectionToken<T> {
    return factory ? new InjectionToken<T>('', {factory}) : new InjectionToken<T>('');
}
