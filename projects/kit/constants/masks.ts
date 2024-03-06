import type {MaskitoOptions} from '@maskito/core';
import {CHAR_HYPHEN, CHAR_PLUS} from '@taiga-ui/cdk';
import {TUI_DIGIT_REGEXP} from '@taiga-ui/core';

/**
 * TODO: move to proprietary package in v4.0
 */
export const TUI_PHONE_MASK: MaskitoOptions = {
    mask: [
        CHAR_PLUS,
        '7',
        ' ',
        TUI_DIGIT_REGEXP,
        TUI_DIGIT_REGEXP,
        TUI_DIGIT_REGEXP,
        ' ',
        TUI_DIGIT_REGEXP,
        TUI_DIGIT_REGEXP,
        TUI_DIGIT_REGEXP,
        CHAR_HYPHEN,
        TUI_DIGIT_REGEXP,
        TUI_DIGIT_REGEXP,
        CHAR_HYPHEN,
        TUI_DIGIT_REGEXP,
        TUI_DIGIT_REGEXP,
    ],
};
