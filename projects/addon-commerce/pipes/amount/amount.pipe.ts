import {inject, Pipe, type PipeTransform} from '@angular/core';
import {type TuiCurrencyVariants} from '@taiga-ui/addon-commerce/types';
import {tuiFormatCurrency, tuiFormatSignSymbol} from '@taiga-ui/addon-commerce/utils';
import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';
import {
    TUI_NUMBER_FORMAT,
    type TuiDecimal,
    tuiFormatNumber,
    type TuiHorizontalDirection,
} from '@taiga-ui/core';
import {map, type Observable} from 'rxjs';

import {TUI_AMOUNT_OPTIONS} from './amount.options';

const DEFAULT_DECIMAL_LIMIT = 2;

@Pipe({
    name: 'tuiAmount',
    standalone: true,
})
export class TuiAmountPipe implements PipeTransform {
    private readonly options = inject(TUI_AMOUNT_OPTIONS);
    private readonly format = inject(TUI_NUMBER_FORMAT);

    public transform(
        value: number,
        currency: TuiCurrencyVariants = this.options.currency,
        currencyAlign: TuiHorizontalDirection = this.options.currencyAlign,
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
                        format?.decimal || 'not-zero',
                    ),
                });
                const space =
                    currencySymbol?.length > 1 || currencyAlign === 'right'
                        ? CHAR_NO_BREAK_SPACE
                        : '';

                return currencyAlign === 'right'
                    ? `${sign}${formatted}${space}${currencySymbol}`
                    : `${sign}${currencySymbol}${space}${formatted}`;
            }),
        );
    }

    private getDecimalLimit(value: number, limit: number, decimal: TuiDecimal): number {
        return decimal === 'always' || (decimal === 'not-zero' && value % 1) ? limit : 0;
    }
}
