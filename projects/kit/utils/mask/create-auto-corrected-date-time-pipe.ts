import type {TuiTimeMode} from '@taiga-ui/cdk';
import {DATE_FILLER_LENGTH, tuiIsString} from '@taiga-ui/cdk';
import type {
    TuiTextMaskConfig,
    TuiTextMaskOptions,
    TuiTextMaskPipeHandler,
} from '@taiga-ui/core';
import {DATE_TIME_SEPARATOR} from '@taiga-ui/kit/constants';

import type {TuiAutoCorrectedDatePipeConfigs} from './create-auto-corrected-date-pipe';
import {tuiNormalizeDateValue} from './create-auto-corrected-date-pipe';
import {tuiCreateAutoCorrectedTimePipe} from './create-auto-corrected-time-pipe';

interface TuiAutoCorrectedDateTimePipeConfigs extends TuiAutoCorrectedDatePipeConfigs {
    timeMode: TuiTimeMode;
}

export function tuiCreateAutoCorrectedDateTimePipe(
    configs: TuiAutoCorrectedDateTimePipeConfigs,
): TuiTextMaskPipeHandler {
    const timePipe = tuiCreateAutoCorrectedTimePipe(configs.timeMode);

    return value => {
        if (value.length < DATE_FILLER_LENGTH) {
            return {value};
        }

        const [date, time] = value.split(DATE_TIME_SEPARATOR);

        const formattedDate = tuiNormalizeDateValue(date, configs);

        if (!time) {
            return {value: formattedDate};
        }

        const pipedTime = timePipe(
            time,
            {} as unknown as TuiTextMaskOptions & TuiTextMaskConfig,
        );

        if (!pipedTime || tuiIsString(pipedTime)) {
            return false;
        }

        return {
            value: `${formattedDate}${DATE_TIME_SEPARATOR}${pipedTime.value}`,
            indexesOfPipedChars: pipedTime.indexesOfPipedChars
                ? pipedTime.indexesOfPipedChars.map(i => i + date.length + 2)
                : undefined,
        };
    };
}
