import {CHAR_EN_DASH, CHAR_NO_BREAK_SPACE, tuiAssert, TuiDateMode} from '@taiga-ui/cdk';
import {TuiTextMaskList} from '@taiga-ui/core';

import {tuiCreateDateMask} from './create-date-mask';

export function tuiCreateDateRangeMask(
    dateMode: TuiDateMode,
    dateSeparator: string,
): TuiTextMaskList {
    tuiAssert.assert(
        dateSeparator.length === 1,
        `Separator should consist of only 1 symbol`,
    );

    const dateMask = tuiCreateDateMask(dateMode, dateSeparator);

    return [
        ...dateMask,
        CHAR_NO_BREAK_SPACE,
        CHAR_EN_DASH,
        CHAR_NO_BREAK_SPACE,
        ...dateMask,
    ];
}
