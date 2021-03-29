import {
    CHAR_NO_BREAK_SPACE,
    getDocumentOrShadowRoot,
    isNativeFocused,
    isSafari,
    tuiAssert,
} from '@taiga-ui/cdk';
import {TuiTextMaskPipeHandler} from '@taiga-ui/core/mask';
import {TuiDecimalSymbol} from '@taiga-ui/core/types';

/**
 * Used to finish a number with zeros to a given precision
 */
export function tuiCreateAutoCorrectedNumberPipe(
    decimalLimit: number = 0,
    decimalSymbol: TuiDecimalSymbol = ',',
    nativeInput?: HTMLInputElement,
): TuiTextMaskPipeHandler {
    tuiAssert.assert(Number.isInteger(decimalLimit));
    tuiAssert.assert(decimalLimit >= 0);

    // Guess for which browser I need this :)
    let previousCaret = -1;

    const unlucky = !!nativeInput && isSafari(nativeInput);

    if (nativeInput && unlucky) {
        nativeInput.addEventListener('beforeinput', () => {
            previousCaret = nativeInput.selectionStart || 0;
        });
    }

    return (conformedValue, config) => {
        // remove these hacks after text mask library has changed
        if (nativeInput && unlucky && isNativeFocused(nativeInput)) {
            const caret = calculateSafariCaret(
                config.previousConformedValue,
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
            config.currentCaretPosition
        ) {
            const realCaretPosition =
                config.currentCaretPosition +
                calculateCaretGap(config.previousConformedValue, conformedValue);

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
    return value.indexOf(decimalSymbol) === -1 ? value + decimalSymbol : value;
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

function calculateCaretGap(previousValue: string = '', current: string): number {
    const pasteOrCutOperation = Math.abs(previousValue.length - current.length) > 2;

    if (pasteOrCutOperation) {
        return 0;
    }

    const wereSpaces = previousValue.split(CHAR_NO_BREAK_SPACE).length;
    const nowSpaces = current.split(CHAR_NO_BREAK_SPACE).length;

    return nowSpaces - wereSpaces;
}
