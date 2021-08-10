import {TuiTime, TuiTimeMode} from '@taiga-ui/cdk';
import {TuiTextMaskPipeHandler, TuiWithOptionalMinMax} from '@taiga-ui/core';

/**
 * Adjusts the entered time by omitting only suitable values ​​for hours and minutes
 * @returns time as a string
 */
export function tuiCreateAutoCorrectedTimePipe(
    timeMode: TuiTimeMode = 'HH:MM',
    configs: TuiWithOptionalMinMax<TuiTime> = {min: null, max: null},
    onValueExplicitChange?: (modifiedValue: string) => void,
): TuiTextMaskPipeHandler {
    const timeFormatArray = ['HH', 'MM', 'SS', 'MS'] as const;
    const maxValue: Record<typeof timeFormatArray[number], number> = {
        HH: 23,
        MM: 59,
        SS: 59,
        MS: 999,
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
                  value: applyMinMaxRestrictions({
                      ...configs,
                      timeMode,
                      onValueExplicitChange,
                      value: conformedValueArr.join(''),
                  }),
                  indexesOfPipedChars,
              };
    };
}

function applyMinMaxRestrictions({
    value,
    min,
    max,
    timeMode,
    onValueExplicitChange,
}: {
    value: string;
    min: TuiTime | null;
    max: TuiTime | null;
    timeMode: TuiTimeMode;
    onValueExplicitChange?: (modifiedValue: string) => void;
}): string {
    if (value.length < timeMode.length) {
        return value;
    }

    let modifiedTime = TuiTime.fromString(value);

    if (min && modifiedTime < min) {
        modifiedTime = min;
    } else if (max && modifiedTime > max) {
        modifiedTime = max;
    }

    const modifiedTimeStr = modifiedTime.toString(timeMode).slice(0, value.length);

    if (modifiedTimeStr !== value && onValueExplicitChange) {
        onValueExplicitChange(modifiedTimeStr);
    }

    return modifiedTimeStr;
}
