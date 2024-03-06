import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';
import type {TuiNumberFormatSettings} from '@taiga-ui/core/interfaces';

export const TUI_DEFAULT_NUMBER_FORMAT: TuiNumberFormatSettings = {
    decimalLimit: NaN,
    decimalSeparator: ',',
    thousandSeparator: CHAR_NO_BREAK_SPACE,
    zeroPadding: true,
    rounding: 'truncate',
    decimal: 'not-zero',
};
