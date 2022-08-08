import {Inject, Pipe, PipeTransform} from '@angular/core';
import {TuiNumberFormatSettings} from '@taiga-ui/core/interfaces';
import {TUI_NUMBER_FORMAT} from '@taiga-ui/core/tokens';
import {tuiFormatNumber} from '@taiga-ui/core/utils/format';

@Pipe({name: `tuiFormatNumber`})
export class TuiFormatNumberPipe implements PipeTransform {
    constructor(
        @Inject(TUI_NUMBER_FORMAT)
        private readonly numberFormat: TuiNumberFormatSettings,
    ) {}

    /**
     * Formats number adding thousand separators and correct decimal separator
     * padding decimal part with zeroes to given length
     * @param value number
     * @param decimalLimit – number of digits of decimal part, Infinity to keep untouched
     * @param decimalSeparator See {@link TuiNumberFormatSettings}
     * @param thousandSeparator See {@link TuiNumberFormatSettings}
     * @param zeroPadding See {@link TuiNumberFormatSettings}
     */
    transform(
        value: number,
        decimalLimit: number = Infinity,
        decimalSeparator: TuiNumberFormatSettings['decimalSeparator'] = this.numberFormat
            .decimalSeparator,
        thousandSeparator: TuiNumberFormatSettings['thousandSeparator'] = this
            .numberFormat.thousandSeparator,
        zeroPadding: TuiNumberFormatSettings['zeroPadding'] = this.numberFormat
            .zeroPadding,
    ): string {
        return tuiFormatNumber(value, {
            decimalLimit,
            decimalSeparator,
            thousandSeparator,
            zeroPadding,
        });
    }
}
