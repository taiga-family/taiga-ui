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
     * @param options See {@link TuiNumberFormatSettings}
     */
    transform(
        value: number,
        {
            decimalLimit = this.numberFormat.decimalLimit,
            decimalSeparator = this.numberFormat.decimalSeparator,
            thousandSeparator = this.numberFormat.thousandSeparator,
            zeroPadding = this.numberFormat.zeroPadding,
        }: Partial<TuiNumberFormatSettings> = {},
    ): string {
        return tuiFormatNumber(value, {
            decimalLimit,
            decimalSeparator,
            thousandSeparator,
            zeroPadding,
        });
    }
}
