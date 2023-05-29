import {CHAR_HYPHEN, CHAR_PLUS} from '@taiga-ui/cdk';
import {TUI_DIGIT_REGEXP, TuiTextMaskList} from '@taiga-ui/core';

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

/**
 * @deprecated Use {@link https://tinkoff.github.io/maskito/kit/time Time} from {@link https://github.com/Tinkoff/maskito Maskito} instead
 * TODO: delete in v4.0
 */
export const TUI_TIME_MASK: TuiTextMaskList = [
    TUI_DIGIT_REGEXP,
    TUI_DIGIT_REGEXP,
    `:`,
    TUI_DIGIT_REGEXP,
    TUI_DIGIT_REGEXP,
];
