import {Pipe, PipeTransform} from '@angular/core';
import {formatNumber} from '@taiga-ui/core/utils/format';

@Pipe({name: 'tuiFormatNumber'})
export class TuiFormatNumberPipe implements PipeTransform {
    /**
     * Formats number adding thousand separators and correct decimal separator
     * padding decimal part with zeroes to given length
     * @param value number
     * @param decimalSeparator
     * @param decimalLimit number of digits of decimal part, null to keep untouched
     */
    transform(
        value: number,
        decimalLimit: number | null = null,
        decimalSeparator: string = ',',
    ): string {
        return formatNumber(value, decimalLimit, decimalSeparator);
    }
}
