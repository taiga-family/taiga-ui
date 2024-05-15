import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';
import type {TuiNumberFormatSettings} from '@taiga-ui/core/types';

export const TUI_DEFAULT_NUMBER_FORMAT: TuiNumberFormatSettings = {
    precision: NaN,
    decimalSeparator: ',',
    thousandSeparator: CHAR_NO_BREAK_SPACE,
    rounding: 'truncate',
    decimalMode: 'pad',
};
