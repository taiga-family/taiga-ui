import {TuiTimeMode} from '@taiga-ui/cdk';
import {TUI_DIGIT_REGEXP, TuiTextMaskList} from '@taiga-ui/core';
import {MAX_TIME_VALUES} from '@taiga-ui/kit/constants';
import {TuiTimeFormatParts} from '@taiga-ui/kit/types';

function tuiCreateTimePartMask(
    maxPartValue: number | undefined,
    prefix?: string,
): RegExp[] {
    const partLength =
        typeof maxPartValue === 'number' ? maxPartValue.toString().length : 0;

    if (!partLength) {
        return [];
    }

    const regExp = Array(partLength).fill(TUI_DIGIT_REGEXP);

    if (prefix) {
        regExp.unshift(prefix);
    }

    return regExp;
}

export function tuiCreateTimeMask(
    mode: TuiTimeMode,
    maxValues: Record<TuiTimeFormatParts, number> = MAX_TIME_VALUES,
): TuiTextMaskList {
    return [
        ...tuiCreateTimePartMask(maxValues.HH),
        ...tuiCreateTimePartMask(maxValues.MM, ':'),
        ...(mode.includes('HH:MM:SS') ? tuiCreateTimePartMask(maxValues.SS, ':') : []),
        ...(mode === 'HH:MM:SS.MSS' ? tuiCreateTimePartMask(maxValues.MS, '.') : []),
    ];
}
