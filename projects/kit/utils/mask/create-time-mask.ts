import {TuiTimeMode} from '@taiga-ui/cdk';
import {TUI_DIGIT_REGEXP, TuiTextMaskList} from '@taiga-ui/core';
import {MAX_TIME_VALUES} from '@taiga-ui/kit/constants';
import {TuiTimeFormatParts} from '@taiga-ui/kit/types';

export function tuiCreateTimeMask(
    mode: TuiTimeMode,
    maxValues: Record<TuiTimeFormatParts, number> = MAX_TIME_VALUES,
): TuiTextMaskList {
    return [
        ...Array(maxValues.HH.toString().length).fill(TUI_DIGIT_REGEXP),
        ':',
        ...Array(maxValues.MM.toString().length).fill(TUI_DIGIT_REGEXP),
        ...(mode.includes('HH:MM:SS')
            ? [':', ...Array(maxValues.SS.toString().length).fill(TUI_DIGIT_REGEXP)]
            : []),
        ...(mode === 'HH:MM:SS.MSS'
            ? ['.', ...Array(maxValues.MS.toString().length).fill(TUI_DIGIT_REGEXP)]
            : []),
    ];
}
