import {maskitoStringifyNumber} from '@maskito/kit';
import {tuiIsSafeToRound, tuiRoundWith} from '@taiga-ui/cdk/utils/math';
import {
    TUI_DEFAULT_NUMBER_FORMAT,
    type TuiNumberFormatSettings,
} from '@taiga-ui/core/tokens';
import {tuiGetFractionPartPadded} from '@taiga-ui/core/utils/format';

export function tuiFormatNumber(
    value: bigint | number | null,
    {
        rounding = TUI_DEFAULT_NUMBER_FORMAT.rounding,
        decimalMode,
        precision,
        maximumFractionDigits = precision ?? Infinity,
        ...settings
    }: Partial<TuiNumberFormatSettings> = {},
): string {
    const rounded =
        typeof value === 'number' &&
        Number.isFinite(maximumFractionDigits) &&
        tuiIsSafeToRound(value, maximumFractionDigits)
            ? tuiRoundWith({
                  value,
                  precision: maximumFractionDigits,
                  method: rounding,
              })
            : value;

    const fractionPart = tuiGetFractionPartPadded(rounded, maximumFractionDigits);

    const withTrailingZeroes =
        decimalMode === 'always' || (Number(fractionPart) > 0 && decimalMode === 'pad');

    const minimumFractionDigits =
        settings.minimumFractionDigits ??
        (Number.isFinite(maximumFractionDigits) && withTrailingZeroes
            ? maximumFractionDigits
            : fractionPart.length);

    return maskitoStringifyNumber(rounded, {
        ...TUI_DEFAULT_NUMBER_FORMAT,
        ...settings,
        minimumFractionDigits,
        maximumFractionDigits: withTrailingZeroes
            ? maximumFractionDigits
            : Math.max(minimumFractionDigits, fractionPart.replace(/0*$/, '').length),
    });
}
