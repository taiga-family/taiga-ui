import type {MaskitoOptions} from '@maskito/core';
import type {TuiHandler} from '@taiga-ui/cdk';
import {TUI_DIGIT_REGEXP} from '@taiga-ui/cdk';

export const TUI_MASK_CVC: TuiHandler<number, MaskitoOptions> = length => ({
    mask: new Array(length).fill(TUI_DIGIT_REGEXP),
});
