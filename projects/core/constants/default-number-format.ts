import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';
import {TuiNumberFormatSettings} from '@taiga-ui/core/interfaces';

export const TUI_DEFAULT_NUMBER_FORMAT: TuiNumberFormatSettings = {
    decimalLimit: Infinity,
    decimalSeparator: `,`,
    thousandSeparator: CHAR_NO_BREAK_SPACE,
    zeroPadding: true,
};
