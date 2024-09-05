import type {InjectionToken, Provider} from '@angular/core';
import {type TuiHandler} from '@taiga-ui/cdk/types';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';

export function tuiCreateOptions<T>(
    defaults: T,
): [token: InjectionToken<T>, provider: TuiHandler<Partial<T>, Provider>] {
    const token = tuiCreateToken(defaults);

    return [token, (options) => tuiProvideOptions(token, options, defaults)];
}
