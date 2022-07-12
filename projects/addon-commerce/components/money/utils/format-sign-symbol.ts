import {TuiMoneySign, TuiMoneySignSymbol} from '@taiga-ui/addon-commerce/types';
import {CHAR_EN_DASH, CHAR_PLUS} from '@taiga-ui/cdk';

export function tuiFormatSignSymbol(
    value: number,
    sign: TuiMoneySign,
): TuiMoneySignSymbol {
    if (sign === 'never' || !value || (sign === 'negative-only' && value > 0)) {
        return '';
    }

    if (sign === 'force-negative' || (value < 0 && sign !== 'force-positive')) {
        /** TODO(nsbarsukov): investigate if it should be replaced by {@link CHAR_HYPHEN} */
        return CHAR_EN_DASH;
    }

    return CHAR_PLUS;
}
