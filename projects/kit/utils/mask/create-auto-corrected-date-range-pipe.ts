import {RANGE_SEPARATOR_CHAR, TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TuiTextMaskPipeHandler} from '@taiga-ui/core';

import {WithDateMaskPipeConfig} from '@taiga-ui/kit/interfaces';

function parseWithLimit(
    value: string,
    config: WithDateMaskPipeConfig<TuiDayRange | null, TuiDay>,
): TuiDay {
    return TuiDay.normalizeParse(value.slice(0, config.filler.length)).dayLimit(
        config.min,
        config.max,
    );
}

function processRawValue(
    value: string,
    config: WithDateMaskPipeConfig<TuiDayRange | null, TuiDay>,
): string {
    switch (value.length) {
        case config.filler.length:
            return parseWithLimit(value, config).toString();
        case config.filler.length + RANGE_SEPARATOR_CHAR.length:
            return parseWithLimit(value, config).toString() + RANGE_SEPARATOR_CHAR;
        case config.rangeFiller && config.rangeFiller.length:
            return config.value && config.value.toString() === value
                ? value
                : TuiDayRange.sort(
                      parseWithLimit(value.slice(0, config.filler.length), config),
                      parseWithLimit(
                          value.slice(config.filler.length + RANGE_SEPARATOR_CHAR.length),
                          config,
                      ),
                  ).toString();
        default:
            return value;
    }
}

/**
 * Normalizes date in formatted string
 *
 * Normalizes when:
 *
 * 1. It is a single date
 * 2. It is a single date and a separator
 * 3. It is two dates and a separator between them
 *
 * In **other** cases, the value does not change.
 *
 * @param config with min and max date
 * @return mask pipe handler that handles `min` and `max`
 */
export function tuiCreateAutoCorrectedDateRangePipe(
    config: WithDateMaskPipeConfig<TuiDayRange | null, TuiDay>,
): TuiTextMaskPipeHandler {
    return value => ({value: processRawValue(value, config)});
}
