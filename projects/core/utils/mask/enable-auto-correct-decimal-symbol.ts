import {TUI_DECIMAL_SYMBOLS} from '@taiga-ui/core/constants';
import {TuiNumberFormatSettings} from '@taiga-ui/core/interfaces';

export function tuiEnableAutoCorrectDecimalSymbol({
    thousandSeparator,
}: TuiNumberFormatSettings): boolean {
    return !TUI_DECIMAL_SYMBOLS.includes(thousandSeparator);
}
