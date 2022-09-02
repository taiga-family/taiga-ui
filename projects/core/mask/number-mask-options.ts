import type {TuiDecimalSymbol} from '@taiga-ui/core/types';

export interface TuiNumberMaskOptions {
    readonly allowDecimal?: boolean;
    readonly decimalSymbol?: TuiDecimalSymbol;
    readonly thousandSymbol?: string;
    readonly autoCorrectDecimalSymbol?: boolean;
    readonly decimalLimit?: number;
    readonly requireDecimal?: boolean;
    readonly allowNegative?: boolean;
    readonly integerLimit?: number;
}
