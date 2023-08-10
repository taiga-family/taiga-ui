import {TUI_DECIMAL_SYMBOLS} from '@taiga-ui/core/constants';
import {TuiNumberFormatSettings} from '@taiga-ui/core/interfaces';

/**
 * TODO: delete in v4.0
 * @deprecated Use {@link https://maskito.dev/kit/number Number} from {@link https://github.com/taiga-family/maskito Maskito} instead
 */
export function tuiEnableAutoCorrectDecimalSymbol({
    thousandSeparator,
}: TuiNumberFormatSettings): boolean {
    return !TUI_DECIMAL_SYMBOLS.includes(thousandSeparator);
}
