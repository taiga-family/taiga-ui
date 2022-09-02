import type {TuiDecimalSymbol} from '@taiga-ui/core/types';

export function tuiOtherDecimalSymbol(symbol: TuiDecimalSymbol): TuiDecimalSymbol {
    return symbol === `.` ? `,` : `.`;
}
