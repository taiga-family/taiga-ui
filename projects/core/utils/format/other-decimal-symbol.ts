import {TuiDecimalSymbol} from '@taiga-ui/core/types';

/**
 * @deprecated: use {@link tuiOtherDecimalSymbol} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function otherDecimalSymbol(symbol: TuiDecimalSymbol): TuiDecimalSymbol {
    return symbol === `.` ? `,` : `.`;
}

export const tuiOtherDecimalSymbol = otherDecimalSymbol;
