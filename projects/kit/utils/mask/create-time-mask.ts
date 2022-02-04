import {TuiTimeMode} from '@taiga-ui/cdk';
import {TUI_DIGIT_REGEXP, TuiTextMaskList} from '@taiga-ui/core';
import {MAX_TIME_VALUES} from '@taiga-ui/kit/constants';
import {TuiTimeFormatParts} from '@taiga-ui/kit/types';

function tuiCreateTimePartMask(
    maxPartValue: number,
    prefix?: string,
): Array<string | RegExp> {
    const {length} = String(maxPartValue);
    const regExp = Array(length).fill(TUI_DIGIT_REGEXP);

    if (prefix) {
        regExp.unshift(prefix);
    }

    return regExp;
}

export function tuiCreateTimeMask(
    mode: TuiTimeMode,
    maxValues: Partial<Record<TuiTimeFormatParts, number>> = {},
): TuiTextMaskList {
    const {HH, MM, SS, MS} = {
        ...MAX_TIME_VALUES,
        ...maxValues,
    };

    return [
        ...tuiCreateTimePartMask(HH),
        ...tuiCreateTimePartMask(MM, ':'),
        ...(mode.includes('HH:MM:SS') ? tuiCreateTimePartMask(SS, ':') : []),
        ...(mode === 'HH:MM:SS.MSS' ? tuiCreateTimePartMask(MS, '.') : []),
    ];
}
