import {TuiCurrencyVariants} from '@taiga-ui/addon-commerce/types';
import {padStart} from '@taiga-ui/cdk';

import {getCurrencySymbol} from './get-currency-symbol';

export function formatCurrency(currency: TuiCurrencyVariants): string {
    const stringifiedCurrency = stringifyCurrency(currency);

    return getCurrencySymbol(stringifiedCurrency) || stringifiedCurrency;
}

function stringifyCurrency(currency: TuiCurrencyVariants): string {
    if (currency === null || typeof currency === 'string') {
        return currency || '';
    }

    const strinifiedCode = String(currency);

    return padStart(strinifiedCode, 3, '0');
}
