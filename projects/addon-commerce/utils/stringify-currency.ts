import {type TuiCurrencyVariants} from '@taiga-ui/addon-commerce/types';

export function tuiStringifyCurrency(currency: TuiCurrencyVariants): string {
    if (currency === null) {
        return '';
    }

    return typeof currency === 'number' ? String(currency).padStart(3, '0') : currency;
}
