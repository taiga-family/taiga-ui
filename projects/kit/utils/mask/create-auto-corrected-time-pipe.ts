import {TuiTimeMode} from '@taiga-ui/cdk';
import {TuiTextMaskPipeHandler} from '@taiga-ui/core';
import {MAX_TIME_VALUES} from '@taiga-ui/kit/constants';
import {TuiTimeFormatParts} from '@taiga-ui/kit/types';

/**
 * Adjusts the entered time by omitting only suitable values for hours and minutes
 * @returns time as a string
 */
export function tuiCreateAutoCorrectedTimePipe(
    timeMode: TuiTimeMode = 'HH:MM',
    maxValues: Partial<Record<TuiTimeFormatParts, number>> = {},
): TuiTextMaskPipeHandler {
    const timeFormatArray: TuiTimeFormatParts[] = ['HH', 'MM', 'SS', 'MS'];
    const _maxValues: Record<TuiTimeFormatParts, number> = {
        ...MAX_TIME_VALUES,
        ...maxValues,
    };

    return (conformedValue: string) => {
        const indexesOfPipedChars: number[] = [];
        const conformedValueArr = conformedValue.split('');

        timeFormatArray.forEach(format => {
            const position = timeMode.indexOf(format);
            const maxFirstDigit = parseInt(
                _maxValues[format].toString().substr(0, 1),
                10,
            );

            if (parseInt(conformedValueArr[position], 10) > maxFirstDigit) {
                conformedValueArr[position + 1] = conformedValueArr[position];
                conformedValueArr[position] = '0';
                indexesOfPipedChars.push(position);
            }
        });

        const isInvalid = timeFormatArray.some(format => {
            const part: number = parseInt(
                conformedValue.substr(timeMode.indexOf(format), 2),
                10,
            );

            return part > _maxValues[format];
        });

        return isInvalid
            ? false
            : {
                  value: conformedValueArr.join(''),
                  indexesOfPipedChars,
              };
    };
}
