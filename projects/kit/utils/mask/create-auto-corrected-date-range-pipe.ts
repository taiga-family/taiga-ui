import {
    DATE_FILLER_LENGTH,
    DATE_RANGE_FILLER_LENGTH,
    RANGE_SEPARATOR_CHAR,
    TuiDay,
    TuiDayRange,
} from '@taiga-ui/cdk';
import {TuiTextMaskPipeHandler, TuiWithOptionalMinMaxWithValue} from '@taiga-ui/core';

function parseWithLimit(
    value: string,
    config: TuiWithOptionalMinMaxWithValue<TuiDayRange | null, TuiDay>,
): TuiDay {
    return TuiDay.normalizeParse(value.slice(0, DATE_FILLER_LENGTH)).dayLimit(
        config.min,
        config.max,
    );
}

function processRawValue(
    value: string,
    config: TuiWithOptionalMinMaxWithValue<TuiDayRange | null, TuiDay>,
): string {
    switch (value.length) {
        case DATE_FILLER_LENGTH:
            return parseWithLimit(value, config).toString();
        case DATE_FILLER_LENGTH + RANGE_SEPARATOR_CHAR.length:
            return parseWithLimit(value, config).toString() + RANGE_SEPARATOR_CHAR;
        case DATE_RANGE_FILLER_LENGTH:
            return config.value && config.value.toString() === value
                ? value
                : TuiDayRange.sort(
                      parseWithLimit(value.slice(0, DATE_FILLER_LENGTH), config),
                      parseWithLimit(
                          value.slice(DATE_FILLER_LENGTH + RANGE_SEPARATOR_CHAR.length),
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
    config: TuiWithOptionalMinMaxWithValue<TuiDayRange | null, TuiDay>,
): TuiTextMaskPipeHandler {
    return value => ({value: processRawValue(value, config)});
}
