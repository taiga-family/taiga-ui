import {DATE_FILLER_LENGTH, TuiDay, TuiTime, TuiTimeMode} from '@taiga-ui/cdk';
import {TuiTextMaskPipeHandler, TuiWithOptionalMinMaxWithValue} from '@taiga-ui/core';
import {DATE_TIME_SEPARATOR} from '@taiga-ui/kit/constants';

import {normalizeDateValue} from './create-auto-corrected-date-pipe';
import {tuiCreateAutoCorrectedTimePipe} from './create-auto-corrected-time-pipe';

export function tuiCreateAutoCorrectedDateTimePipe(
    {
        min,
        max,
        value,
    }: TuiWithOptionalMinMaxWithValue<
        [TuiDay | null, TuiTime | null],
        TuiDay | [TuiDay, TuiTime]
    >,
    timeMode: TuiTimeMode,
    nativeInput?: HTMLInputElement | null,
): TuiTextMaskPipeHandler {
    const [prevSelectedDate] = value;
    const [minDay, minTime] = Array.isArray(min) ? min : [min, null];
    const [maxDay, maxTime] = Array.isArray(max) ? max : [max, null];

    return value => {
        if (value.length < DATE_FILLER_LENGTH) {
            return {value};
        }

        const [date, time] = value.split(DATE_TIME_SEPARATOR);
        const dateWithSepLength = date.length + DATE_TIME_SEPARATOR.length;

        const formattedDate = normalizeDateValue(date, {
            min: minDay,
            max: maxDay,
            value: prevSelectedDate,
        });

        if (!time) {
            return {value: formattedDate};
        }

        const parsedFormattedDate = TuiDay.normalizeParse(formattedDate);
        // @bad TODO: Workaround until mask pipe can replace chars and keep caret position
        const sendCaretToEnd = (value: string) => {
            const caret = dateWithSepLength + value.length;

            setTimeout(() => {
                nativeInput?.setSelectionRange(caret, caret);
            });
        };

        const timePipe = tuiCreateAutoCorrectedTimePipe(
            timeMode,
            {
                min: minDay && minDay.daySame(parsedFormattedDate) ? minTime : null,
                max: maxDay && maxDay.daySame(parsedFormattedDate) ? maxTime : null,
            },
            sendCaretToEnd,
        );

        const pipedTime = timePipe(time, {} as any);

        if (!pipedTime || typeof pipedTime === 'string') {
            return false;
        }

        return {
            value: `${formattedDate}${DATE_TIME_SEPARATOR}${pipedTime.value}`,
            indexesOfPipedChars: !!pipedTime.indexesOfPipedChars
                ? pipedTime.indexesOfPipedChars.map(i => i + dateWithSepLength)
                : undefined,
        };
    };
}
