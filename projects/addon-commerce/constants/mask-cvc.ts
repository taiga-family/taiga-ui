import {type MaskitoOptions} from '@maskito/core';
import {TUI_DIGIT_REGEXP} from '@taiga-ui/cdk/constants';
import {type TuiHandler} from '@taiga-ui/cdk/types';

export const TUI_MASK_CVC: TuiHandler<number, MaskitoOptions> = (length) => ({
    mask: Array.from({length}, () => TUI_DIGIT_REGEXP),
});
