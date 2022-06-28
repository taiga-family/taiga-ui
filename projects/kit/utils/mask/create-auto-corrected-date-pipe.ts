import {DATE_FILLER_LENGTH, TuiDateMode, TuiDay} from '@taiga-ui/cdk';
import {TuiTextMaskPipeHandler, TuiWithOptionalMinMaxWithValue} from '@taiga-ui/core';

export interface TuiAutoCorrectedDatePipeConfigs
    extends TuiWithOptionalMinMaxWithValue<TuiDay | null, TuiDay> {
    dateFormat: TuiDateMode;
    dateSeparator: string;
}

/**
 * @deprecated: use {@link tuiNormalizeDateValue} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function normalizeDateValue(
    dateValue: string,
    {value, min, max, dateFormat, dateSeparator}: TuiAutoCorrectedDatePipeConfigs,
): string {
    return value && value.toString(dateFormat, dateSeparator) === dateValue
        ? dateValue
        : TuiDay.normalizeParse(dateValue, dateFormat)
              .dayLimit(min, max)
              .toString(dateFormat, dateSeparator);
}

export function tuiCreateAutoCorrectedDatePipe(
    config: TuiAutoCorrectedDatePipeConfigs,
): TuiTextMaskPipeHandler {
    return value => {
        if (value.length !== DATE_FILLER_LENGTH) {
            return {value};
        }

        return {
            value: normalizeDateValue(value, config),
        };
    };
}

export const tuiNormalizeDateValue = normalizeDateValue;
