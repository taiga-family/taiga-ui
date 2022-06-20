import {TuiDecimalSymbol} from '@taiga-ui/core/types';

/**
 * Formatting configuration for displayed numbers
 * decimalSeparator - example: 100,45 (',' by default)
 * thousandSeparator - example: 360 000 (' ' by default)
 */
export interface TuiNumberFormatSettings {
    readonly decimalSeparator: TuiDecimalSymbol;
    readonly thousandSeparator: string;
    readonly zeroPadding: boolean;
}

/**
 * @deprecated use {@link TuiNumberFormatSettings}
 * TODO delete in v3.0
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface NumberFormatSettings extends TuiNumberFormatSettings {}
