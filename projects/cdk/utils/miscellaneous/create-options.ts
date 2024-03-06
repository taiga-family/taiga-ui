import type {InjectionToken} from '@angular/core';

import {tuiCreateTokenFromFactory} from './create-token';

/** @deprecated use {@link tuiCreateToken} instead */
export function tuiCreateOptions<T>(defaults: T): InjectionToken<T> {
    return tuiCreateTokenFromFactory(() => defaults);
}
