import {Inject, Pipe, PipeTransform} from '@angular/core';
import {NumberFormatSettings} from '@taiga-ui/core/interfaces/number-format-settings';
import {TUI_NUMBER_FORMAT} from '@taiga-ui/core/tokens/number-format';
import {formatNumber} from '@taiga-ui/core/utils/format';

@Pipe({name: 'tuiFormatNumber'})
export class TuiFormatNumberPipe implements PipeTransform {
    constructor(
        @Inject(TUI_NUMBER_FORMAT)
        protected readonly numberFormatSettings: NumberFormatSettings,
    ) {}
    /**
     * Formats number adding thousand separators and correct decimal separator
     * padding decimal part with zeroes to given length
     * @param value number
     * @param decimalSeparator
     * @param thousandSeparator
     * @param decimalLimit number of digits of decimal part, null to keep untouched
     */
    transform(
        value: number,
        decimalLimit: number | null = null,
        decimalSeparator: string = this.numberFormatSettings.decimalSeparator,
        thousandSeparator: string = this.numberFormatSettings.thousandSeparator,
    ): string {
        return formatNumber(value, decimalLimit, decimalSeparator, thousandSeparator);
    }
}
