import {TuiDecimalSymbol} from '@taiga-ui/core/types';

export interface TuiNumberMaskOptions {
    readonly allowDecimal?: boolean;
    readonly allowNegative?: boolean;
    readonly autoCorrectDecimalSymbol?: boolean;
    readonly decimalLimit?: number;
    readonly decimalSymbol?: TuiDecimalSymbol;
    readonly integerLimit?: number;
    readonly requireDecimal?: boolean;
    readonly thousandSymbol?: string;
}
