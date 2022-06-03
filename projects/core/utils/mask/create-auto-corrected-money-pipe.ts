import {
    CHAR_HYPHEN,
    CHAR_NO_BREAK_SPACE,
    CHAR_PLUS,
    getDocumentOrShadowRoot,
    isNativeFocused,
    isSafari,
    tuiAssert,
} from '@taiga-ui/cdk';
import {TuiNumberFormatSettings} from '@taiga-ui/core/interfaces';
import {TuiTextMaskPipeHandler} from '@taiga-ui/core/mask';
import {TuiDecimalSymbol} from '@taiga-ui/core/types';

/**
 * Used to finish a number with zeros to a given precision
 */
export function tuiCreateAutoCorrectedNumberPipe(
    decimalLimit: number = 0,
    decimalSymbol: TuiDecimalSymbol = ',',
    thousandSymbol: string = CHAR_NO_BREAK_SPACE,
    nativeInput?: HTMLInputElement | null,
    allowNegative?: boolean,
    isIOS = false,
    signMode: TuiNumberFormatSettings['signMode'] = 'negative-only',
): TuiTextMaskPipeHandler {
    tuiAssert.assert(Number.isInteger(decimalLimit));
    tuiAssert.assert(decimalLimit >= 0);

    const showPlus = signMode === 'always' || signMode === 'force-positive';

    // Guess for which browser I need this :)
    let previousCaret = -1;
    const unlucky = (!!nativeInput && isSafari(nativeInput)) || isIOS;

    if (nativeInput && unlucky) {
        nativeInput.addEventListener('beforeinput', () => {
            previousCaret = nativeInput.selectionStart || 0;
        });
    }

    return (conformedValue, {rawValue, currentCaretPosition, previousConformedValue}) => {
        // Removing everything by selecting and pressing '-'
        if (!conformedValue && rawValue === CHAR_HYPHEN && allowNegative) {
            return CHAR_HYPHEN;
        }

        // Removing everything by selecting and pressing '+'
        if (!conformedValue && rawValue === CHAR_PLUS && showPlus) {
            return CHAR_PLUS;
        }

        // remove these hacks after text mask library has changed
        if (nativeInput && unlucky && isNativeFocused(nativeInput)) {
            const caret = calculateSafariCaret(
                previousConformedValue,
                conformedValue,
                previousCaret,
            );

            setTimeout(() => {
                nativeInput.setSelectionRange(caret, caret);
            });
        }

        if (
            nativeInput &&
            nativeInput.ownerDocument !== getDocumentOrShadowRoot(nativeInput) &&
            isNativeFocused(nativeInput) &&
            currentCaretPosition
        ) {
            const realCaretPosition =
                currentCaretPosition +
                calculateCaretGap(previousConformedValue, conformedValue, thousandSymbol);

            setTimeout(() => {
                nativeInput.setSelectionRange(realCaretPosition, realCaretPosition);
            });
        }

        if (conformedValue === '' || !decimalLimit) {
            return {value: conformedValue};
        }

        const withDecimalSymbol = addDecimalSymbolIfNeeded(conformedValue, decimalSymbol);
        const decimalPart = withDecimalSymbol.split(decimalSymbol)[1];
        const zeroPaddingSize = decimalLimit - decimalPart.length;

        return {
            value: withDecimalSymbol + '0'.repeat(zeroPaddingSize),
        };
    };
}

function addDecimalSymbolIfNeeded(
    value: string,
    decimalSymbol: TuiDecimalSymbol = ',',
): string {
    return !value.includes(decimalSymbol) ? value + decimalSymbol : value;
}

function calculateSafariCaret(
    previousValue: string = '',
    current: string,
    previousCaret: number,
    decimalSymbol: string = ',',
): number {
    const tailRegex = new RegExp(`${decimalSymbol}.+`);
    const previousWithoutTail = previousValue.replace(tailRegex, '');
    const currentWithoutTail = current.replace(tailRegex, '');

    const pasteOrCutOperation =
        Math.abs(previousWithoutTail.length - currentWithoutTail.length) > 2;

    if (pasteOrCutOperation) {
        return current.length;
    }

    if (previousValue.length === current.length) {
        if (previousValue.indexOf(decimalSymbol) <= previousCaret) {
            return calculateChangedTailIndex(previousValue, current);
        }

        return previousWithoutTail === currentWithoutTail
            ? previousCaret - 1
            : previousCaret + 1;
    }

    if (previousValue.length === 0) {
        return 1;
    }

    const changeLength = current.length - previousValue.length;

    return previousCaret + changeLength;
}

function calculateChangedTailIndex(previous: string, current: string): number {
    for (let i = 0; i < current.length; i++) {
        if (previous[i] !== current[i]) {
            return current[i] === '0' ? i : i + 1;
        }
    }

    return current.length;
}

function calculateCaretGap(
    previousValue: string = '',
    current: string,
    thousandSymbol: string,
): number {
    const pasteOrCutOperation = Math.abs(previousValue.length - current.length) > 2;

    if (pasteOrCutOperation) {
        return 0;
    }

    const wereSpaces = previousValue.split(thousandSymbol).length;
    const nowSpaces = current.split(thousandSymbol).length;

    return nowSpaces - wereSpaces;
}
