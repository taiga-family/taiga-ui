import {TuiDecimalSymbol} from '@taiga-ui/core/types';

/**
 * Formatting configuration for displayed numbers
 *** decimalSeparator - example: 100,45 (',' by default)
 *** thousandSeparator - example: 360 000 (' ' by default)
 */
export interface TuiNumberFormatSettings {
    readonly decimalSeparator: TuiDecimalSymbol;
    readonly thousandSeparator: string;
    readonly zeroPadding: boolean;
    /**
     *** 'negative-only' – shows sign for negative only (by default)
     *** 'always' — always shows sign (except 0)
     *** 'never' — never shows sign
     *** 'force-negative' — always shows minus (except 0)
     *** 'force-positive' – always shows plus (except 0)
     */
    readonly signMode:
        | 'negative-only'
        | 'always'
        | 'never'
        | 'force-negative'
        | 'force-positive';
}

/**
 * @deprecated use {@link TuiNumberFormatSettings}
 * TODO delete in v3.0
 */
export interface NumberFormatSettings extends Omit<TuiNumberFormatSettings, 'signMode'> {
    readonly signMode?: TuiNumberFormatSettings['signMode'];
}
