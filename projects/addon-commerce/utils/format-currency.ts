import type {TuiCurrencyVariants} from '@taiga-ui/addon-commerce/types';
import {tuiIsString} from '@taiga-ui/cdk';

import {tuiGetCurrencySymbol} from './get-currency-symbol';

function stringifyCurrency(currency: TuiCurrencyVariants): string {
    return currency === null || tuiIsString(currency)
        ? currency || ''
        : String(currency).padStart(3, '0');
}

export function tuiFormatCurrency(currency: TuiCurrencyVariants): string {
    const stringifiedCurrency = stringifyCurrency(currency);

    return tuiGetCurrencySymbol(stringifiedCurrency) || stringifiedCurrency;
}
