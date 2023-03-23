import type {TuiDecimalSymbol} from '@taiga-ui/core/types';

/**
 * Formatting configuration for displayed numbers
 */
export interface TuiNumberFormatSettings {
    /**
     * Number of digits of decimal part.
     * @note Use `Infinity` to keep untouched.
     */
    readonly decimalLimit: number;
    /**
     * Separator between the integer and the decimal part.
     * @example 0,42 (',' by default)
     */
    readonly decimalSeparator: TuiDecimalSymbol;
    /**
     * Separator between thousands.
     * @example 360 000 (' ' by default)
     */
    readonly thousandSeparator: string;
    /**
     * Enable zeros at the end of decimal part.
     */
    readonly zeroPadding: boolean;
}
