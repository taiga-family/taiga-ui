import type {ValueProvider} from '@angular/core';
import {InjectionToken} from '@angular/core';

export const TUI_FALLBACK_VALUE = new InjectionToken('');

export function tuiFallbackValueProvider<T>(useValue: T): ValueProvider {
    return {
        provide: TUI_FALLBACK_VALUE,
        useValue,
    };
}
