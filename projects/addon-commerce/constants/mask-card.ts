import {maskitoInitialCalibrationPlugin, type MaskitoOptions} from '@maskito/core';
import {CHAR_NO_BREAK_SPACE, TUI_DIGIT_REGEXP} from '@taiga-ui/cdk/constants';

export const TUI_MASK_CARD: MaskitoOptions = {
    plugins: [maskitoInitialCalibrationPlugin()],
    mask: Array.from({length: 23}).map((_, i) =>
        (i + 1) % 5 ? TUI_DIGIT_REGEXP : CHAR_NO_BREAK_SPACE,
    ),
};
