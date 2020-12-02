import {TuiDay} from '@taiga-ui/cdk';
import {TuiTextMaskPipeHandler} from '@taiga-ui/core';
import {WithDateMaskPipeConfig} from '@taiga-ui/kit/interfaces';

export function normalizeDateValue(
    dateValue: string,
    {value, min, max}: WithDateMaskPipeConfig<TuiDay | null, TuiDay>,
): string {
    return value && value.toString() === dateValue
        ? dateValue
        : TuiDay.normalizeParse(dateValue).dayLimit(min, max).toString();
}

export function tuiCreateAutoCorrectedDatePipe(
    config: WithDateMaskPipeConfig<TuiDay | null, TuiDay>,
): TuiTextMaskPipeHandler {
    return value => {
        if (value.length !== config.filler.length) {
            return {value};
        }

        return {
            value: normalizeDateValue(value, config),
        };
    };
}
