import {DATE_FILLER_LENGTH, TuiDateMode, TuiDay} from '@taiga-ui/cdk';
import {TuiTextMaskPipeHandler, TuiWithOptionalMinMaxWithValue} from '@taiga-ui/core';

/**
 * @deprecated Use {@link https://tinkoff.github.io/maskito/kit/date Date} from {@link https://github.com/Tinkoff/maskito Maskito} instead
 */
export interface TuiAutoCorrectedDatePipeConfigs
    extends TuiWithOptionalMinMaxWithValue<TuiDay | null, TuiDay> {
    dateFormat: TuiDateMode;
    dateSeparator: string;
}

/**
 * @deprecated Use {@link https://tinkoff.github.io/maskito/kit/date Date} from {@link https://github.com/Tinkoff/maskito Maskito} instead
 */
export function tuiNormalizeDateValue(
    dateValue: string,
    {value, min, max, dateFormat, dateSeparator}: TuiAutoCorrectedDatePipeConfigs,
): string {
    return value && value.toString(dateFormat, dateSeparator) === dateValue
        ? dateValue
        : TuiDay.normalizeParse(dateValue, dateFormat)
              .dayLimit(min, max)
              .toString(dateFormat, dateSeparator);
}

/**
 * @deprecated Use {@link https://tinkoff.github.io/maskito/kit/date Date} from {@link https://github.com/Tinkoff/maskito Maskito} instead
 */
export function tuiCreateAutoCorrectedDatePipe(
    config: TuiAutoCorrectedDatePipeConfigs,
): TuiTextMaskPipeHandler {
    return value => {
        if (value.length !== DATE_FILLER_LENGTH) {
            return {value};
        }

        return {
            value: tuiNormalizeDateValue(value, config),
        };
    };
}
