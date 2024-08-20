import type {ValueProvider} from '@angular/core';
import {tuiCreateToken} from '@taiga-ui/cdk/utils/miscellaneous';

export const TUI_FALLBACK_VALUE = tuiCreateToken<any>(null);

export function tuiFallbackValueProvider<T>(useValue: T): ValueProvider {
    return {
        provide: TUI_FALLBACK_VALUE,
        useValue,
    };
}
