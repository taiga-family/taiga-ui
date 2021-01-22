import {TuiTimeMode} from '@taiga-ui/cdk';
import {TUI_DIGIT_REGEXP, TuiTextMaskList} from '@taiga-ui/core';
import {TUI_TIME_MASK} from '@taiga-ui/kit/constants';

export function tuiCreateTimeMask(mode: TuiTimeMode): TuiTextMaskList {
    return [
        ...TUI_TIME_MASK,
        ...(mode.includes('HH:MM:SS') ? [':', TUI_DIGIT_REGEXP, TUI_DIGIT_REGEXP] : []),
        ...(mode === 'HH:MM:SS.MSS'
            ? ['.', TUI_DIGIT_REGEXP, TUI_DIGIT_REGEXP, TUI_DIGIT_REGEXP]
            : []),
    ];
}
