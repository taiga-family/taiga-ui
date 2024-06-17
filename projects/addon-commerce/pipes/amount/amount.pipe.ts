import type {PipeTransform, Signal} from '@angular/core';
import {inject, Pipe} from '@angular/core';
import type {TuiCurrencyVariants} from '@taiga-ui/addon-commerce/types';
import {tuiFormatCurrency} from '@taiga-ui/addon-commerce/utils';
import {CHAR_NO_BREAK_SPACE, TuiObservablePipe, tuiPure} from '@taiga-ui/cdk';
import type {TuiHorizontalDirection} from '@taiga-ui/core';
import {TUI_NUMBER_FORMAT, tuiFormatNumber} from '@taiga-ui/core';
import {map} from 'rxjs';

import {TUI_AMOUNT_OPTIONS} from './amount.options';
import {tuiFormatSignSymbol} from './amount.utils';

const DEFAULT_PRECISION = 2;

@Pipe({standalone: true, name: 'tuiAmount', pure: false})
export class TuiAmountPipe extends TuiObservablePipe implements PipeTransform {
    private readonly options = inject(TUI_AMOUNT_OPTIONS);
    private readonly format = inject(TUI_NUMBER_FORMAT);

    public transform(
        value: number,
        currency: TuiCurrencyVariants = this.options.currency,
        currencyAlign: TuiHorizontalDirection = this.options.currencyAlign,
    ): string {
        return this.getSignal(value, currency, currencyAlign)();
    }

    @tuiPure
    protected getSignal(
        value: number,
        currency: TuiCurrencyVariants,
        currencyAlign: TuiHorizontalDirection,
    ): Signal<string> {
        return this.toSignal(
            this.format.pipe(
                map(format => {
                    const sign = tuiFormatSignSymbol(value, this.options.sign);
                    const currencySymbol = tuiFormatCurrency(currency);
                    const formatted = tuiFormatNumber(Math.abs(value), {
                        ...format,
                        precision: Number.isNaN(format.precision)
                            ? DEFAULT_PRECISION
                            : format.precision,
                    });
                    const space =
                        currencySymbol?.length > 1 || currencyAlign === 'right'
                            ? CHAR_NO_BREAK_SPACE
                            : '';

                    return currencyAlign === 'right'
                        ? `${sign}${formatted}${space}${currencySymbol}`
                        : `${sign}${currencySymbol}${space}${formatted}`;
                }),
            ),
            '',
        );
    }
}
