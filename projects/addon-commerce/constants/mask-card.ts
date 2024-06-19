import type {MaskitoOptions} from '@maskito/core';
import {TUI_DIGIT_REGEXP} from '@taiga-ui/cdk/constants';

export const TUI_MASK_CARD: MaskitoOptions = {
    mask: [
        TUI_DIGIT_REGEXP,
        TUI_DIGIT_REGEXP,
        TUI_DIGIT_REGEXP,
        TUI_DIGIT_REGEXP,
        ' ',
        TUI_DIGIT_REGEXP,
        TUI_DIGIT_REGEXP,
        TUI_DIGIT_REGEXP,
        TUI_DIGIT_REGEXP,
        ' ',
        TUI_DIGIT_REGEXP,
        TUI_DIGIT_REGEXP,
        TUI_DIGIT_REGEXP,
        TUI_DIGIT_REGEXP,
        ' ',
        TUI_DIGIT_REGEXP,
        TUI_DIGIT_REGEXP,
        TUI_DIGIT_REGEXP,
        TUI_DIGIT_REGEXP,
        ' ',
        TUI_DIGIT_REGEXP,
        TUI_DIGIT_REGEXP,
        TUI_DIGIT_REGEXP,
    ],
};
