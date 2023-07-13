import {FactoryProvider, InjectionToken, Optional, SkipSelf} from '@angular/core';

export function tuiProvideOptions<T>(
    provide: InjectionToken<T>,
    options: Partial<T>,
    fallback: T,
): FactoryProvider {
    return {
        provide,
        deps: [[new Optional(), new SkipSelf(), provide]],
        useFactory: (parent: T | null): T => ({
            ...(parent || fallback),
            ...options,
        }),
    };
}
