import type {TuiDateMode} from '@taiga-ui/cdk';
import {
    DATE_FILLER_LENGTH,
    DATE_RANGE_FILLER_LENGTH,
    RANGE_SEPARATOR_CHAR,
    TuiDay,
    TuiDayRange,
} from '@taiga-ui/cdk';
import type {
    TuiTextMaskPipeHandler,
    TuiWithOptionalMinMaxWithValue,
} from '@taiga-ui/core';

interface TuiAutoCorrectedDatePipeConfigs
    extends TuiWithOptionalMinMaxWithValue<TuiDayRange | null, TuiDay> {
    dateFormat: TuiDateMode;
    dateSeparator: string;
}

function parseWithLimit(value: string, config: TuiAutoCorrectedDatePipeConfigs): TuiDay {
    return TuiDay.normalizeParse(
        value.slice(0, DATE_FILLER_LENGTH),
        config.dateFormat,
    ).dayLimit(config.min, config.max);
}

function processRawValue(value: string, config: TuiAutoCorrectedDatePipeConfigs): string {
    const {dateFormat, dateSeparator} = config;

    switch (value.length) {
        case DATE_FILLER_LENGTH:
            return parseWithLimit(value, config).toString(dateFormat, dateSeparator);
        case DATE_FILLER_LENGTH + RANGE_SEPARATOR_CHAR.length:
            return (
                parseWithLimit(value, config).toString(dateFormat, dateSeparator) +
                RANGE_SEPARATOR_CHAR
            );
        case DATE_RANGE_FILLER_LENGTH:
            return config.value &&
                config.value.toString(dateFormat, dateSeparator) === value
                ? value
                : TuiDayRange.sort(
                      parseWithLimit(value.slice(0, DATE_FILLER_LENGTH), config),
                      parseWithLimit(
                          value.slice(DATE_FILLER_LENGTH + RANGE_SEPARATOR_CHAR.length),
                          config,
                      ),
                  ).toString(dateFormat, dateSeparator);
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
    config: TuiAutoCorrectedDatePipeConfigs,
): TuiTextMaskPipeHandler {
    return value => ({value: processRawValue(value, config)});
}
