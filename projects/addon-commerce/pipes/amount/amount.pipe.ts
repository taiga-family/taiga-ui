import {inject, Pipe, type PipeTransform} from '@angular/core';
import {type TuiCurrencyVariants} from '@taiga-ui/addon-commerce/types';
import {tuiFormatCurrency} from '@taiga-ui/addon-commerce/utils';
import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk/constants';
import {TUI_NUMBER_FORMAT} from '@taiga-ui/core/tokens';
import {type TuiHorizontalDirection} from '@taiga-ui/core/types';
import {tuiFormatNumber} from '@taiga-ui/core/utils/format';
import {map, type Observable} from 'rxjs';

import {TUI_AMOUNT_OPTIONS} from './amount.options';
import {tuiFormatSignSymbol} from './amount.utils';

const DEFAULT_PRECISION = 2;

@Pipe({standalone: true, name: 'tuiAmount'})
export class TuiAmountPipe implements PipeTransform {
    private readonly options = inject(TUI_AMOUNT_OPTIONS);
    private readonly format = inject(TUI_NUMBER_FORMAT);

    public transform(
        value: number,
        currency: TuiCurrencyVariants = this.options.currency,
        currencyAlign: TuiHorizontalDirection = this.options.currencyAlign,
    ): Observable<string> {
        return this.format.pipe(
            map((format) => {
                const currencySymbol = tuiFormatCurrency(currency);
                const formatted = tuiFormatNumber(Math.abs(value), {
                    ...format,
                    precision: Number.isNaN(format.precision)
                        ? DEFAULT_PRECISION
                        : format.precision,
                });
                const sign =
                    formatted === '0'
                        ? ''
                        : tuiFormatSignSymbol(value, this.options.sign);
                const space =
                    currencySymbol &&
                    (currencySymbol?.length > 1 || currencyAlign === 'right')
                        ? CHAR_NO_BREAK_SPACE
                        : '';

                return currencyAlign === 'right'
                    ? `${sign}${formatted}${space}${currencySymbol}`
                    : `${sign}${currencySymbol}${space}${formatted}`;
            }),
        );
    }
}
