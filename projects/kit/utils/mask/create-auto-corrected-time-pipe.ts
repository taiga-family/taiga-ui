import {TuiTime, TuiTimeMode} from '@taiga-ui/cdk';
import {TuiTextMaskPipeHandler, TuiWithOptionalMinMax} from '@taiga-ui/core';

/**
 * Adjusts the entered time by omitting only suitable values ​​for hours and minutes
 * @returns time as a string
 */
export function tuiCreateAutoCorrectedTimePipe(
    timeMode: TuiTimeMode = 'HH:MM',
    configs?: TuiWithOptionalMinMax<TuiTime>,
): TuiTextMaskPipeHandler {
    const timeFormatArray = ['HH', 'MM', 'SS', 'MS'] as const;
    const maxValue: Record<typeof timeFormatArray[number], number> = {
        HH: 23,
        MM: 59,
        SS: 59,
        MS: 999,
    };
    const applyMinMaxRestrictions = (
        value: string,
        configs?: TuiWithOptionalMinMax<TuiTime>,
    ): string => {
        const {min = null, max = null} = configs || {};
        const [hours = 0, minutes = 0, s = 0, ms = 0] = timeFormatArray.map(format => {
            const timePart = value.substr(timeMode.indexOf(format), 2);

            return parseInt(timePart.length === 2 ? timePart : `${timePart}0`, 10) || 0;
        });
        let possibleTime = new TuiTime(hours, minutes, s, ms);

        if (min && possibleTime < min) {
            possibleTime = min;
        }

        if (max && possibleTime > max) {
            possibleTime = max;
        }

        return possibleTime.toString(timeMode).slice(0, value.length);
    };

    return (conformedValue: string) => {
        const indexesOfPipedChars: number[] = [];
        const conformedValueArr = conformedValue.split('');

        timeFormatArray.forEach(format => {
            const position = timeMode.indexOf(format);
            const maxFirstDigit = parseInt(maxValue[format].toString().substr(0, 1), 10);

            if (parseInt(conformedValueArr[position], 10) > maxFirstDigit) {
                conformedValueArr[position + 1] = conformedValueArr[position];
                conformedValueArr[position] = '0';
                indexesOfPipedChars.push(position);
            }
        });

        const isInvalid = timeFormatArray.some(
            format =>
                parseInt(conformedValue.substr(timeMode.indexOf(format), 2), 10) >
                maxValue[format],
        );

        return isInvalid
            ? false
            : {
                  value: applyMinMaxRestrictions(conformedValueArr.join(''), configs),
                  indexesOfPipedChars,
              };
    };
}
