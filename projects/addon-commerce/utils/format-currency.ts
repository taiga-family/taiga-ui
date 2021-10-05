import {TuiCurrencyVariants} from '@taiga-ui/addon-commerce/types';
import {padStart} from '@taiga-ui/cdk';
import {getCurrencySymbol} from './get-currency-symbol';

export function formatCurrency(currency: TuiCurrencyVariants): string {
    const stringifiedCurrency = stringifyCurrency(currency);

    return getCurrencySymbol(stringifiedCurrency) || stringifiedCurrency;
}

function stringifyCurrency(currency: TuiCurrencyVariants): string {
    return currency === null || typeof currency === 'string'
        ? currency || ''
        : padStart(String(currency), 3, '0');
}
