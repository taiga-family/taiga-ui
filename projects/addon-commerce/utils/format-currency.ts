import {TuiCurrencyVariants} from '@taiga-ui/addon-commerce/types';
import {tuiIsString} from '@taiga-ui/cdk';

import {tuiGetCurrencySymbol} from './get-currency-symbol';

/**
 * @deprecated: use {@link tuiFormatCurrency} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function formatCurrency(currency: TuiCurrencyVariants): string {
    const stringifiedCurrency = stringifyCurrency(currency);

    return tuiGetCurrencySymbol(stringifiedCurrency) || stringifiedCurrency;
}

export const tuiFormatCurrency = formatCurrency;

function stringifyCurrency(currency: TuiCurrencyVariants): string {
    return currency === null || tuiIsString(currency)
        ? currency || ``
        : String(currency).padStart(3, `0`);
}
