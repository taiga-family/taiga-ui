import {type MaskitoOptions} from '@maskito/core';
import {CHAR_NO_BREAK_SPACE, TUI_DIGIT_REGEXP} from '@taiga-ui/cdk/constants';

export const TUI_MASK_CARD: MaskitoOptions = {
    mask: [
        TUI_DIGIT_REGEXP,
        TUI_DIGIT_REGEXP,
        TUI_DIGIT_REGEXP,
        TUI_DIGIT_REGEXP,
        CHAR_NO_BREAK_SPACE,
        TUI_DIGIT_REGEXP,
        TUI_DIGIT_REGEXP,
        TUI_DIGIT_REGEXP,
        TUI_DIGIT_REGEXP,
        CHAR_NO_BREAK_SPACE,
        TUI_DIGIT_REGEXP,
        TUI_DIGIT_REGEXP,
        TUI_DIGIT_REGEXP,
        TUI_DIGIT_REGEXP,
        CHAR_NO_BREAK_SPACE,
        TUI_DIGIT_REGEXP,
        TUI_DIGIT_REGEXP,
        TUI_DIGIT_REGEXP,
        TUI_DIGIT_REGEXP,
        CHAR_NO_BREAK_SPACE,
        TUI_DIGIT_REGEXP,
        TUI_DIGIT_REGEXP,
        TUI_DIGIT_REGEXP,
    ],
};
