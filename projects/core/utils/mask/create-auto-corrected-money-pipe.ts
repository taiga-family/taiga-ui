import {
    CHAR_NO_BREAK_SPACE,
    getDocumentOrShadowRoot,
    isNativeFocused,
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

    return (conformedValue, config) => {
        // remove this hack after text mask library has changed
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

function calculateCaretGap(privousValue: string = '', current: string): number {
    const pasteOrCutOperation = Math.abs(privousValue.length - current.length) > 2;

    if (pasteOrCutOperation) {
        return 0;
    }

    const wereSpaces = privousValue.split(CHAR_NO_BREAK_SPACE).length;
    const nowSpaces = current.split(CHAR_NO_BREAK_SPACE).length;

    return nowSpaces - wereSpaces;
}
