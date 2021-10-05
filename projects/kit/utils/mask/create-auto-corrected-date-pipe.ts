import {DATE_FILLER_LENGTH, TuiDay} from '@taiga-ui/cdk';
import {TuiTextMaskPipeHandler, TuiWithOptionalMinMaxWithValue} from '@taiga-ui/core';

export function normalizeDateValue(
    dateValue: string,
    {value, min, max}: TuiWithOptionalMinMaxWithValue<TuiDay | null, TuiDay>,
): string {
    return value && value.toString() === dateValue
        ? dateValue
        : TuiDay.normalizeParse(dateValue).dayLimit(min, max).toString();
}

export function tuiCreateAutoCorrectedDatePipe(
    config: TuiWithOptionalMinMaxWithValue<TuiDay | null, TuiDay>,
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
