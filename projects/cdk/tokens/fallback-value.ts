import {InjectionToken, type ValueProvider} from '@angular/core';

export const TUI_FALLBACK_VALUE = new InjectionToken<any>(
    ngDevMode ? 'TUI_FALLBACK_VALUE' : '',
    {
        factory: () => null,
    },
);

export function tuiFallbackValueProvider<T>(useValue: T): ValueProvider {
    return {
        provide: TUI_FALLBACK_VALUE,
        useValue,
    };
}
