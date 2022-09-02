import type {TuiDecimal, TuiNumberFormatSettings} from '@taiga-ui/core';

export function tuiFormatFractionPart(options: {
    value: number;
    decimal: TuiDecimal;
    precision: number;
    numberFormat: TuiNumberFormatSettings;
}): string {
    const {value, decimal, numberFormat, precision} = options;
    const fraction = value.toFixed(precision).split(`.`)[1];
    const shouldShow =
        decimal !== `never` && (decimal === `always` || !!parseInt(fraction, 10));

    return shouldShow ? `${numberFormat.decimalSeparator}${fraction}` : ``;
}
