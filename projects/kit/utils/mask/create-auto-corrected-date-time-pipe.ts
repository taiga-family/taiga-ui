import {DATE_FILLER_LENGTH, TuiDay, TuiTimeMode} from '@taiga-ui/cdk';
import {TuiTextMaskPipeHandler, TuiWithOptionalMinMaxWithValue} from '@taiga-ui/core';
import {DATE_TIME_SEPARATOR} from '@taiga-ui/kit/constants';

import {normalizeDateValue} from './create-auto-corrected-date-pipe';
import {tuiCreateAutoCorrectedTimePipe} from './create-auto-corrected-time-pipe';

export function tuiCreateAutoCorrectedDateTimePipe(
    config: TuiWithOptionalMinMaxWithValue<TuiDay | null, TuiDay>,
    timeMode: TuiTimeMode,
): TuiTextMaskPipeHandler {
    const timePipe = tuiCreateAutoCorrectedTimePipe(timeMode);

    return value => {
        if (value.length < DATE_FILLER_LENGTH) {
            return {value};
        }

        const [date, time] = value.split(DATE_TIME_SEPARATOR);

        const formattedDate = normalizeDateValue(date, config);

        if (!time) {
            return {value: formattedDate};
        }

        const pipedTime = timePipe(time, {} as any);

        if (!pipedTime || typeof pipedTime === 'string') {
            return false;
        }

        return {
            value: `${formattedDate}${DATE_TIME_SEPARATOR}${pipedTime.value}`,
            indexesOfPipedChars: !!pipedTime.indexesOfPipedChars
                ? pipedTime.indexesOfPipedChars.map(i => i + date.length + 2)
                : undefined,
        };
    };
}
