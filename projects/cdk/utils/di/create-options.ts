import type {FactoryProvider, InjectionToken} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';

export function tuiCreateOptions<T>(
    defaults: T,
): [token: InjectionToken<T>, provider: (item: Partial<T>) => FactoryProvider] {
    const token = tuiCreateToken(defaults);

    return [token, (options) => tuiProvideOptions(token, options, defaults)];
}
