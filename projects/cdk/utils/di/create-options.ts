import type {FactoryProvider, InjectionToken, ProviderToken} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';

export function tuiCreateOptions<T>(
    defaults: T,
): [
    token: InjectionToken<T>,
    provider: (item: ProviderToken<Partial<T>> | Partial<T>) => FactoryProvider,
] {
    const token = tuiCreateToken(defaults);

    return [token, (options) => tuiProvideOptions(token, options, defaults)];
}
