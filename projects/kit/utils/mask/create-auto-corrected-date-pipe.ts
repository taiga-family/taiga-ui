import {DATE_FILLER_LENGTH, TuiDateMode, TuiDay} from '@taiga-ui/cdk';
import {TuiTextMaskPipeHandler, TuiWithOptionalMinMaxWithValue} from '@taiga-ui/core';

export interface AutoCorrectedDatePipeConfigs
    extends TuiWithOptionalMinMaxWithValue<TuiDay | null, TuiDay> {
    dateFormat: TuiDateMode;
}

export function normalizeDateValue(
    dateValue: string,
    {value, min, max, dateFormat}: AutoCorrectedDatePipeConfigs,
): string {
    return value && value.toString() === dateValue
        ? dateValue
        : TuiDay.normalizeParse(dateValue, dateFormat)
              .dayLimit(min, max)
              .toString(dateFormat);
}

export function tuiCreateAutoCorrectedDatePipe(
    config: AutoCorrectedDatePipeConfigs,
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
