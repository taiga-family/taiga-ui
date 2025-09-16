import {type FactoryProvider, InjectionToken} from '@angular/core';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';

export function tuiCreateOptions<T>(
    defaults: T,
): [
    token: InjectionToken<T>,
    provider: (item: Partial<T> | (() => Partial<T>)) => FactoryProvider,
] {
    const token = new InjectionToken(ngDevMode ? 'Options token' : '', {
        factory: () => defaults,
    });

    return [token, (options) => tuiProvideOptions(token, options, defaults)];
}
