import {CHAR_MINUS, CHAR_PLUS} from '@taiga-ui/cdk/constants';

import type {TuiAmountSign, TuiAmountSignSymbol} from './amount.types';

export function tuiFormatSignSymbol(
    value: number,
    sign: TuiAmountSign,
): TuiAmountSignSymbol {
    if (sign === 'never' || !value || (sign === 'negative-only' && value > 0)) {
        return '';
    }

    if (sign === 'force-negative' || (value < 0 && sign !== 'force-positive')) {
        return CHAR_MINUS;
    }

    return CHAR_PLUS;
}
