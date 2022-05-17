import {CHAR_EN_DASH, CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';
import {TUI_DIGIT_REGEXP, TuiTextMaskList} from '@taiga-ui/core';

export const TUI_PHONE_MASK: TuiTextMaskList = [
    '+',
    '7',
    ' ',
    TUI_DIGIT_REGEXP,
    TUI_DIGIT_REGEXP,
    TUI_DIGIT_REGEXP,
    ' ',
    TUI_DIGIT_REGEXP,
    TUI_DIGIT_REGEXP,
    TUI_DIGIT_REGEXP,
    '-',
    TUI_DIGIT_REGEXP,
    TUI_DIGIT_REGEXP,
    '-',
    TUI_DIGIT_REGEXP,
    TUI_DIGIT_REGEXP,
];
export const TUI_TIME_MASK: TuiTextMaskList = [
    TUI_DIGIT_REGEXP,
    TUI_DIGIT_REGEXP,
    ':',
    TUI_DIGIT_REGEXP,
    TUI_DIGIT_REGEXP,
];

/**
 * @deprecated use {@link tuiCreateDateMask} (from '@taiga-ui/kit') instead
 */
export const TUI_DATE_MASK: TuiTextMaskList = [
    TUI_DIGIT_REGEXP,
    TUI_DIGIT_REGEXP,
    '.',
    TUI_DIGIT_REGEXP,
    TUI_DIGIT_REGEXP,
    '.',
    TUI_DIGIT_REGEXP,
    TUI_DIGIT_REGEXP,
    TUI_DIGIT_REGEXP,
    TUI_DIGIT_REGEXP,
];
/**
 * @deprecated use {@link tuiCreateDateRangeMask} (from '@taiga-ui/kit') instead
 */
export const TUI_DATE_RANGE_MASK: TuiTextMaskList = [
    ...TUI_DATE_MASK,
    CHAR_NO_BREAK_SPACE,
    CHAR_EN_DASH,
    CHAR_NO_BREAK_SPACE,
    ...TUI_DATE_MASK,
];
