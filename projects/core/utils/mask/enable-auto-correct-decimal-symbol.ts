import {TUI_DECIMAL_SYMBOLS} from '@taiga-ui/core/constants';
import {TuiNumberFormatSettings} from '@taiga-ui/core/interfaces';

/**
 * TODO: delete in v4.0
 * @deprecated Use {@link https://tinkoff.github.io/maskito/kit/number Number} from {@link https://github.com/Tinkoff/maskito Maskito} instead
 */
export function tuiEnableAutoCorrectDecimalSymbol({
    thousandSeparator,
}: TuiNumberFormatSettings): boolean {
    return !TUI_DECIMAL_SYMBOLS.includes(thousandSeparator);
}
