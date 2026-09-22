import {InjectionToken} from '@angular/core';
import {type TuiCurrencyVariants} from '@taiga-ui/addon-commerce/types';
import {tuiGetCurrencySymbol} from '@taiga-ui/addon-commerce/utils';
import {type TuiHandler} from '@taiga-ui/cdk/types';

export const TUI_CURRENCY_SYMBOLS = new InjectionToken<
    TuiHandler<TuiCurrencyVariants, string | null>
>(ngDevMode ? 'TUI_CURRENCY_SYMBOLS' : '', {factory: () => tuiGetCurrencySymbol});
