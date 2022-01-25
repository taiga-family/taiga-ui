import {TuiTimeMode} from '@taiga-ui/cdk';
import {TUI_DIGIT_REGEXP, TuiTextMaskList} from '@taiga-ui/core';
import {TUI_TIME_MASK} from '@taiga-ui/kit/constants';
import {TuiTimeFormatParts} from '@taiga-ui/kit/types';

export function tuiCreateTimeMask(
    mode: TuiTimeMode,
    maxValues: Record<TuiTimeFormatParts, number> = {HH: 23, MM: 59, SS: 59, MS: 999},
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

export function tuiCreateTimeMaskBak(mode: TuiTimeMode): TuiTextMaskList {
    return [
        ...TUI_TIME_MASK,
        ...(mode.includes('HH:MM:SS') ? [':', TUI_DIGIT_REGEXP, TUI_DIGIT_REGEXP] : []),
        ...(mode === 'HH:MM:SS.MSS'
            ? ['.', TUI_DIGIT_REGEXP, TUI_DIGIT_REGEXP, TUI_DIGIT_REGEXP]
            : []),
    ];
}
