import {Inject, Pipe, PipeTransform} from '@angular/core';
import {tuiFormatCurrency, tuiFormatSignSymbol} from '@taiga-ui/addon-commerce';
import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';
import {
    TUI_NUMBER_FORMAT_OBSERVABLE,
    TuiDecimal,
    tuiFormatNumber,
    TuiNumberFormatSettings,
} from '@taiga-ui/core';
import {map, Observable} from 'rxjs';

import {TUI_AMOUNT_OPTIONS, TuiAmountOptions} from './amount.options';

const DEFAULT_DECIMAL_LIMIT = 2;

@Pipe({
    name: `tuiAmount`,
})
export class TuiAmountPipePipe implements PipeTransform {
    constructor(
        @Inject(TUI_AMOUNT_OPTIONS) private readonly options: TuiAmountOptions,
        @Inject(TUI_NUMBER_FORMAT_OBSERVABLE)
        private readonly format: Observable<TuiNumberFormatSettings>,
    ) {}

    transform(
        value: number,
        currency = this.options.currency,
        currencyAlign = this.options.currencyAlign,
    ): Observable<string> {
        return this.format.pipe(
            map(format => {
                const sign = tuiFormatSignSymbol(value, this.options.sign);
                const currencySymbol = tuiFormatCurrency(currency);
                const formatted = tuiFormatNumber(Math.abs(value), {
                    ...format,
                    decimalLimit: this.getDecimalLimit(
                        value,
                        Number.isNaN(format.decimalLimit)
                            ? DEFAULT_DECIMAL_LIMIT
                            : format.decimalLimit,
                        format?.decimal || `not-zero`,
                    ),
                });
                const space =
                    currencySymbol?.length > 1 || currencyAlign === `right`
                        ? CHAR_NO_BREAK_SPACE
                        : ``;

                return currencyAlign === `right`
                    ? `${sign}${formatted}${space}${currencySymbol}`
                    : `${sign}${currencySymbol}${space}${formatted}`;
            }),
        );
    }

    private getDecimalLimit(value: number, limit: number, decimal: TuiDecimal): number {
        return decimal === `always` || (decimal === `not-zero` && value % 1) ? limit : 0;
    }
}
