import {CHAR_EN_DASH, CHAR_NO_BREAK_SPACE, tuiAssert} from '@taiga-ui/cdk';
import {
    MASK_CARET_TRAP,
    TUI_DIGIT_REGEXP,
    TUI_NON_DIGITS_REGEXP,
} from '@taiga-ui/core/constants';
import {TuiNumberMaskOptions, TuiTextMaskListHandler} from '@taiga-ui/core/mask';
import {TuiDecimalSymbol} from '@taiga-ui/core/types';
import {otherDecimalSymbol} from '@taiga-ui/core/utils/format';

const NON_ZERO_DIGIT = /[1-9]/;

/**
 * Adaptation for {@link https://github.com/text-mask/text-mask/tree/master/addons#createnumbermask `createNumberMask`}
 */
export function tuiCreateNumberMask({
    allowDecimal = false,
    decimalSymbol = ',',
    thousandSymbol = CHAR_NO_BREAK_SPACE,
    autoCorrectDecimalSymbol = true,
    decimalLimit = 2,
    requireDecimal = false,
    allowNegative = false,
    integerLimit = 0,
}: TuiNumberMaskOptions = {}): TuiTextMaskListHandler {
    tuiAssert.assert(Number.isInteger(decimalLimit));
    tuiAssert.assert(decimalLimit > 0);
    tuiAssert.assert(Number.isInteger(integerLimit));
    tuiAssert.assert(integerLimit >= 0);

    return (rawValue, {previousConformedValue}) => {
        if (previousConformedValue && requireDecimal) {
            const conformedWithoutSeparator = rawValue.split(thousandSymbol).join('');
            const previousConformedValueWithoutDecimalSymbolAndSeparator =
                previousConformedValue
                    .split(thousandSymbol)
                    .join('')
                    .split(decimalSymbol)
                    .join('');

            // Forbid removal of decimal separator if decimal part is required
            if (
                conformedWithoutSeparator ===
                previousConformedValueWithoutDecimalSymbolAndSeparator
            ) {
                rawValue = previousConformedValue;
            }
        }

        const isNegative =
            (rawValue[0] === '-' || rawValue[0] === CHAR_EN_DASH) && allowNegative;

        if (
            isDecimalSymbol(rawValue, decimalSymbol, autoCorrectDecimalSymbol) &&
            allowDecimal
        ) {
            return ['0', decimalSymbol, TUI_DIGIT_REGEXP];
        }

        if (isNegative) {
            rawValue = rawValue.substr(1);
        }

        const decimalIndex = getDecimalSymbolIndex(
            rawValue,
            decimalSymbol,
            autoCorrectDecimalSymbol,
        );
        const hasDecimal = decimalIndex !== -1;
        const integer = hasDecimal ? rawValue.slice(0, decimalIndex) : rawValue;
        const thousandSeparators = integer.match(new RegExp(thousandSymbol, 'g')) || [];
        const integerCapped = integerLimit
            ? integer.slice(0, integerLimit + thousandSeparators.length)
            : integer;
        const integerCappedClean = integerCapped
            .replace(TUI_NON_DIGITS_REGEXP, '')
            .replace(/^0+(?!\.|$)/, '0');
        const withSeparator = addThousandsSeparator(integerCappedClean, thousandSymbol);
        const mask = convertToMask(withSeparator);

        if ((hasDecimal && allowDecimal) || requireDecimal) {
            const fraction = hasDecimal
                ? convertToMask(
                      rawValue.slice(decimalIndex + 1).replace(TUI_NON_DIGITS_REGEXP, ''),
                  )
                : [];
            const fractionCapped = decimalLimit
                ? fraction.slice(0, decimalLimit)
                : fraction;

            if (rawValue[decimalIndex] !== otherDecimalSymbol(decimalSymbol)) {
                mask.push(MASK_CARET_TRAP);
            }

            mask.push(decimalSymbol, MASK_CARET_TRAP, ...fractionCapped);

            for (let i = 0; i < decimalLimit - fractionCapped.length; i++) {
                mask.push(TUI_DIGIT_REGEXP);
            }
        }

        if (isNegative) {
            if (mask.length === 0) {
                mask.push(TUI_DIGIT_REGEXP);
            }

            mask.unshift('-');
        }

        return preventLeadingZeroes(mask);
    };
}

function preventLeadingZeroes(mask: Array<string | RegExp>): Array<string | RegExp> {
    const firstDigitIndex = mask.indexOf(TUI_DIGIT_REGEXP);

    if (firstDigitIndex !== -1 && mask[firstDigitIndex + 1] === TUI_DIGIT_REGEXP) {
        mask[firstDigitIndex] = NON_ZERO_DIGIT;
    }

    return mask;
}

function getDecimalSymbolIndex(
    str: string,
    decimalSymbol: TuiDecimalSymbol,
    autoCorrectDecimalSymbol: boolean,
): number {
    if (!autoCorrectDecimalSymbol) {
        return str.lastIndexOf(decimalSymbol);
    }

    return Math.max(
        str.lastIndexOf(decimalSymbol),
        str.lastIndexOf(otherDecimalSymbol(decimalSymbol)),
    );
}

function isDecimalSymbol(
    str: string,
    decimalSymbol: TuiDecimalSymbol,
    autoCorrectDecimalSymbol: boolean,
): boolean {
    if (autoCorrectDecimalSymbol) {
        return /^[,.]$/.test(str);
    }

    return str === decimalSymbol;
}

function convertToMask(strNumber: string): Array<string | RegExp> {
    return strNumber
        .split('')
        .map(char => (TUI_DIGIT_REGEXP.test(char) ? TUI_DIGIT_REGEXP : char));
}

function addThousandsSeparator(strNumber: string, thousandSymbol: string): string {
    return strNumber.length > 3
        ? strNumber.replace(/\B(?=(\d{3})+(?!\d))/g, thousandSymbol)
        : strNumber;
}
