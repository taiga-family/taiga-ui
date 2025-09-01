import {type FactoryProvider, InjectionToken, type ProviderToken} from '@angular/core';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';

// TODO: Drop ProviderToken in v.5
export function tuiCreateOptions<T>(
    defaults: T,
): [
    token: InjectionToken<T>,
    provider: (
        item: Partial<T> | ProviderToken<Partial<T>> | (() => Partial<T>),
    ) => FactoryProvider,
] {
    const token = new InjectionToken(ngDevMode ? 'token' : '', {
        factory: () => defaults,
    });

    return [token, (options) => tuiProvideOptions(token, options, defaults)];
}
