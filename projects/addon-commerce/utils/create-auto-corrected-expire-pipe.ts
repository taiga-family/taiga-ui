import {TUI_NON_DIGIT_REGEXP, TuiTextMaskPipeHandler} from '@taiga-ui/core';

const TUI_EXP_YEAR_MONTH = /^\d{2}[/|.]\d{4}$/;
const TUI_EXP_SAFARI = /^\d{1,4}.\d{1,2}.\d{1,4}$/;

/**
 * Correct expiration date text allowing only valid months
 * @internal
 *
 * @returns MM/YY
 */
export function tuiCreateAutoCorrectedExpirePipe(): TuiTextMaskPipeHandler {
    return (conformedValue, {rawValue}) => {
        // Autofilled with MM/YYYY format
        if (TUI_EXP_YEAR_MONTH.test(rawValue)) {
            conformedValue = `${rawValue.slice(0, 2)}/${rawValue.slice(5)}`;
        }

        // Autofilled with Safari crazy format
        if (
            rawValue.length > 7 &&
            rawValue.length < 11 &&
            TUI_EXP_SAFARI.test(rawValue)
        ) {
            const array = rawValue.split(TUI_NON_DIGIT_REGEXP);
            const month = array[1];
            const year = array.find(({length}) => length === 4);

            conformedValue = `${`0`.repeat(2 - month.length)}${month}/${
                year ? year.slice(2) : ``
            }`;
        }

        const indexesOfPipedChars: number[] = [];
        const conformedValueArr = conformedValue.split(``);

        if (parseInt(conformedValueArr[0], 10) > 1) {
            conformedValueArr[2] = `/`;
            conformedValueArr[1] = conformedValueArr[0];
            conformedValueArr[0] = `0`;
            indexesOfPipedChars.push(0);
        }

        return {
            value: conformedValueArr.join(``),
            indexesOfPipedChars,
        };
    };
}
