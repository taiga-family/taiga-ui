import {TuiTimeMode} from '@taiga-ui/cdk';
import {TuiTextMaskPipeHandler} from '@taiga-ui/core';

/**
 * Adjusts the entered time by omitting only suitable values ​​for hours and minutes
 * @returns time as a string
 */
export function tuiCreateAutoCorrectedTimePipe(
    timeMode: TuiTimeMode = 'HH:MM',
): TuiTextMaskPipeHandler {
    const timeFormatArray: ['HH', 'MM', 'SS', 'MS'] = ['HH', 'MM', 'SS', 'MS'];
    const maxValue = {HH: 23, MM: 59, SS: 59, MS: 999};

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
                  value: conformedValueArr.join(''),
                  indexesOfPipedChars,
              };
    };
}
