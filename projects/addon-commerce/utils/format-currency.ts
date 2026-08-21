import {type TuiCurrencyVariants} from '@taiga-ui/addon-commerce/types';

import {tuiGetCurrencySymbol} from './get-currency-symbol';

/**
 * @deprecated Use {@link tuiGetCurrencySymbol} instead.
 */
export function tuiFormatCurrency(currency: TuiCurrencyVariants): string {
    const symbol = tuiGetCurrencySymbol(currency);

    if (symbol) {
        return symbol;
    }

    if (currency === null) {
        return '';
    }

    return typeof currency === 'number' ? String(currency).padStart(3, '0') : currency;
}
