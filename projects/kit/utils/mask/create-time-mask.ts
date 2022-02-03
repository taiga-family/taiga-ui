import {TuiTimeMode} from '@taiga-ui/cdk';
import {TUI_DIGIT_REGEXP, TuiTextMaskList} from '@taiga-ui/core';
import {MAX_TIME_VALUES} from '@taiga-ui/kit/constants';
import {TuiTimeFormatParts} from '@taiga-ui/kit/types';

function tuiCreateTimePartMask(
    maxPartValue: number | undefined,
    prefix?: string,
): Array<string | RegExp> {
    const partLength =
        typeof maxPartValue === 'number' ? maxPartValue.toString().length : 0;

    if (!partLength) {
        return [];
    }

    const regExp = Array.from<undefined, RegExp | string>(
        {length: partLength},
        () => TUI_DIGIT_REGEXP,
    );

    if (prefix) {
        regExp.unshift(prefix);
    }

    return regExp;
}

export function tuiCreateTimeMask(
    mode: TuiTimeMode,
    maxValues: Partial<Record<TuiTimeFormatParts, number>> = {},
): TuiTextMaskList {
    const _maxValues: Record<TuiTimeFormatParts, number> = {
        ...MAX_TIME_VALUES,
        ...maxValues,
    };

    return [
        ...tuiCreateTimePartMask(_maxValues.HH),
        ...tuiCreateTimePartMask(_maxValues.MM, ':'),
        ...(mode.includes('HH:MM:SS') ? tuiCreateTimePartMask(_maxValues.SS, ':') : []),
        ...(mode === 'HH:MM:SS.MSS' ? tuiCreateTimePartMask(_maxValues.MS, '.') : []),
    ];
}
