import {TuiMoneySign, TuiMoneySignSymbol} from '@taiga-ui/addon-commerce/types';
import {CHAR_MINUS, CHAR_PLUS} from '@taiga-ui/cdk';

export function tuiFormatSignSymbol(
    value: number,
    sign: TuiMoneySign,
): TuiMoneySignSymbol {
    if (sign === 'never' || !value || (sign === 'negative-only' && value > 0)) {
        return '';
    }

    if (sign === 'force-negative' || (value < 0 && sign !== 'force-positive')) {
        return CHAR_MINUS;
    }

    return CHAR_PLUS;
}
