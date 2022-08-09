import {CHAR_HYPHEN} from '@taiga-ui/cdk';
import {TUI_DEFAULT_NUMBER_FORMAT} from '@taiga-ui/core/constants';
import {TuiNumberFormatSettings} from '@taiga-ui/core/interfaces';

import {tuiGetFractionPartPadded} from './get-fractional-part-padded';

/**
 * Formats number adding a thousand separators and correct decimal separator
 * padding decimal part with zeroes to given length
 *
 * @param value the input number
 * @param settings See {@link TuiNumberFormatSettings}
 * @return the formatted string
 */
export function tuiFormatNumber(
    value: number,
    settings: Partial<TuiNumberFormatSettings> = {},
): string {
    const {decimalLimit, decimalSeparator, thousandSeparator, zeroPadding} = {
        ...TUI_DEFAULT_NUMBER_FORMAT,
        ...settings,
    };
    const integerPartString = String(Math.floor(Math.abs(value)));

    let fractionPartPadded = tuiGetFractionPartPadded(value, decimalLimit);

    if (Number.isFinite(decimalLimit)) {
        if (zeroPadding) {
            const zeroPaddingSize: number = Math.max(
                decimalLimit - fractionPartPadded.length,
                0,
            );
            const zeroPartString = `0`.repeat(zeroPaddingSize);

            fractionPartPadded = `${fractionPartPadded}${zeroPartString}`;
        } else {
            fractionPartPadded = fractionPartPadded.replace(/0*$/, ``);
        }
    }

    const remainder = integerPartString.length % 3;
    const sign = value < 0 ? CHAR_HYPHEN : ``;
    let result = sign + integerPartString.charAt(0);

    for (let i = 1; i < integerPartString.length; i++) {
        if (i % 3 === remainder && integerPartString.length > 3) {
            result += thousandSeparator;
        }

        result += integerPartString.charAt(i);
    }

    return fractionPartPadded ? result + decimalSeparator + fractionPartPadded : result;
}
