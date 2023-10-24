import {Inject, Pipe, PipeTransform} from '@angular/core';
import {tuiFormatCurrency, tuiFormatSignSymbol} from '@taiga-ui/addon-commerce';
import {
    TUI_NUMBER_FORMAT,
    tuiFormatNumber,
    TuiNumberFormatSettings,
} from '@taiga-ui/core';

import {TUI_AMOUNT_OPTIONS, TuiAmountOptions} from './amount.options';

@Pipe({
    name: `tuiAmount`,
})
export class TuiAmountPipePipe implements PipeTransform {
    constructor(
        @Inject(TUI_AMOUNT_OPTIONS) private readonly options: TuiAmountOptions,
        @Inject(TUI_NUMBER_FORMAT) private readonly format: TuiNumberFormatSettings,
    ) {}

    transform(
        value: number,
        currency = this.options.currency,
        currencyAlign = this.options.currencyAlign,
    ): string {
        const sign = tuiFormatSignSymbol(value, this.options.sign);
        const currencySymbol = tuiFormatCurrency(currency);
        const formatted = tuiFormatNumber(Math.abs(value), {
            ...this.format,
            decimalLimit: this.getDecimalLimit(value),
        });
        // eslint-disable-next-line no-irregular-whitespace
        const space = currencySymbol?.length > 1 || currencyAlign === `right` ? ` ` : ``;

        return currencyAlign === `right`
            ? `${sign}${formatted}${space}${currencySymbol}`
            : `${sign}${currencySymbol}${space}${formatted}`;
    }

    private getDecimalLimit(value: number): number {
        return this.options.decimal === `always` ||
            (this.options.decimal === `not-zero` && value % 1)
            ? this.options.precision
            : 0;
    }
}
