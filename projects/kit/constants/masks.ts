import {CHAR_HYPHEN, CHAR_PLUS} from '@taiga-ui/cdk';
import type {TuiTextMaskList} from '@taiga-ui/core';
import {TUI_DIGIT_REGEXP} from '@taiga-ui/core';

export const TUI_PHONE_MASK: TuiTextMaskList = [
    CHAR_PLUS,
    `7`,
    ` `,
    TUI_DIGIT_REGEXP,
    TUI_DIGIT_REGEXP,
    TUI_DIGIT_REGEXP,
    ` `,
    TUI_DIGIT_REGEXP,
    TUI_DIGIT_REGEXP,
    TUI_DIGIT_REGEXP,
    CHAR_HYPHEN,
    TUI_DIGIT_REGEXP,
    TUI_DIGIT_REGEXP,
    CHAR_HYPHEN,
    TUI_DIGIT_REGEXP,
    TUI_DIGIT_REGEXP,
];
export const TUI_TIME_MASK: TuiTextMaskList = [
    TUI_DIGIT_REGEXP,
    TUI_DIGIT_REGEXP,
    `:`,
    TUI_DIGIT_REGEXP,
    TUI_DIGIT_REGEXP,
];
