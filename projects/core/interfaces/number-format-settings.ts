import {TuiDecimalSymbol} from '@taiga-ui/core/types';

/**
 * Formatting configuration for displayed numbers
 * decimalSeparator - example: 100,45 (',' by default)
 * thousandSeparator - example: 360 000 (' ' by default)
 */
export interface TuiNumberFormatSettings {
    /**
     * separator between the integer and the decimal part
     */
    readonly decimalSeparator: TuiDecimalSymbol;
    /**
     * separator between thousands
     */
    readonly thousandSeparator: string;
    /**
     * enable zeros at the end of decimal part
     */
    readonly zeroPadding: boolean;
}
