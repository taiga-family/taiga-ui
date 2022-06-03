import {Inject, Pipe, PipeTransform} from '@angular/core';
import {TuiNumberFormatSettings} from '@taiga-ui/core/interfaces';
import {TUI_NUMBER_FORMAT} from '@taiga-ui/core/tokens';
import {formatNumber} from '@taiga-ui/core/utils/format';

@Pipe({name: 'tuiFormatNumber'})
export class TuiFormatNumberPipe implements PipeTransform {
    constructor(
        @Inject(TUI_NUMBER_FORMAT)
        private readonly numberFormat: TuiNumberFormatSettings,
    ) {}

    /**
     * Formats number adding thousand separators and correct decimal separator
     * padding decimal part with zeroes to given length
     * @param value number
     * @param decimalSeparator
     * @param thousandSeparator
     * @param decimalLimit number of digits of decimal part, null to keep untouched
     * @param zeroPadding enable zeros at the end of decimal part
     */
    transform(
        value: number,
        decimalLimit: number | null = null,
        decimalSeparator: string = this.numberFormat.decimalSeparator,
        thousandSeparator: string = this.numberFormat.thousandSeparator,
        zeroPadding: boolean = this.numberFormat.zeroPadding,
    ): string {
        return formatNumber(
            value,
            decimalLimit,
            decimalSeparator,
            thousandSeparator,
            zeroPadding,
        );
    }
}
