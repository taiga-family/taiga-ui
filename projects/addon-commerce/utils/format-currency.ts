import {type TuiCurrencyVariants} from '@taiga-ui/addon-commerce/types';

import {tuiGetCurrencySymbol} from './get-currency-symbol';
import {tuiStringifyCurrency} from './stringify-currency';

/**
 * @deprecated Use {@link tuiGetCurrencySymbol} instead.
 */
export function tuiFormatCurrency(currency: TuiCurrencyVariants): string {
    return tuiGetCurrencySymbol(currency) || tuiStringifyCurrency(currency);
}
