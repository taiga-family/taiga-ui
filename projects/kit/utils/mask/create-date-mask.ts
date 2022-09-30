import {tuiAssert, TuiDateMode} from '@taiga-ui/cdk';
import {TUI_DIGIT_REGEXP, TuiTextMaskList} from '@taiga-ui/core';

const TWO_DIGITS = new Array(2).fill(TUI_DIGIT_REGEXP);
const FOUR_DIGITS = new Array(4).fill(TUI_DIGIT_REGEXP);

export function tuiCreateDateMask(mode: TuiDateMode, separator: string): TuiTextMaskList {
    tuiAssert.assert(separator.length === 1, `Separator should consist of only 1 symbol`);

    switch (mode) {
        case `YMD`:
            return [...FOUR_DIGITS, separator, ...TWO_DIGITS, separator, ...TWO_DIGITS];
        case `MDY`:
        case `DMY`:
        default:
            return [...TWO_DIGITS, separator, ...TWO_DIGITS, separator, ...FOUR_DIGITS];
    }
}
