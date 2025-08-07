import {type FactoryProvider, InjectionToken, type ProviderToken} from '@angular/core';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';

export function tuiCreateOptions<T>(
    defaults: T,
): [
    token: InjectionToken<T>,
    provider: (item: Partial<T> | ProviderToken<Partial<T>>) => FactoryProvider,
] {
    const token = new InjectionToken(ngDevMode ? 'token' : '', {
        factory: () => defaults,
    });

    return [token, (options) => tuiProvideOptions(token, options, defaults)];
}
