import {TuiDecimalSymbol} from '@taiga-ui/core/types';

export function otherDecimalSymbol(symbol: TuiDecimalSymbol): TuiDecimalSymbol {
    return symbol === '.' ? ',' : '.';
}
