import {tuiAssert, TuiDateMode} from '@taiga-ui/cdk';
import {TUI_DIGIT_REGEXP, TuiTextMaskList} from '@taiga-ui/core';

export function tuiCreateDateMask(mode: TuiDateMode, separator: string): TuiTextMaskList {
    tuiAssert.assert(separator.length === 1, 'Separator should consist of only 1 symbol');

    const DAY = [TUI_DIGIT_REGEXP, TUI_DIGIT_REGEXP];
    const MONTH = [TUI_DIGIT_REGEXP, TUI_DIGIT_REGEXP];
    const YEAR = [TUI_DIGIT_REGEXP, TUI_DIGIT_REGEXP, TUI_DIGIT_REGEXP, TUI_DIGIT_REGEXP];

    switch (mode) {
        case 'YMD':
            return [...YEAR, separator, ...MONTH, separator, ...DAY];
        case 'MDY':
            return [...MONTH, separator, ...DAY, separator, ...YEAR];
        default:
        case 'DMY':
            return [...DAY, separator, ...MONTH, separator, ...YEAR];
    }
}
