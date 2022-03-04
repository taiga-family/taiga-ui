import {TUI_DECIMAL_SYMBOLS} from '@taiga-ui/core/constants';
import {NumberFormatSettings} from '@taiga-ui/core/interfaces';

export function tuiEnableAutoCorrectDecimalSymbol({
    thousandSeparator,
}: NumberFormatSettings): boolean {
    return !TUI_DECIMAL_SYMBOLS.includes(thousandSeparator);
}
