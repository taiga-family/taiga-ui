import type {PipeTransform, Signal} from '@angular/core';
import {inject, INJECTOR, Pipe, untracked} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import type {TuiCurrencyVariants} from '@taiga-ui/addon-commerce/types';
import {tuiFormatCurrency} from '@taiga-ui/addon-commerce/utils';
import {CHAR_NO_BREAK_SPACE, tuiPure} from '@taiga-ui/cdk';
import type {TuiHorizontalDirection} from '@taiga-ui/core';
import {TUI_NUMBER_FORMAT, tuiFormatNumber} from '@taiga-ui/core';
import {map, Subject, takeUntil} from 'rxjs';

import {TUI_AMOUNT_OPTIONS} from './amount.options';
import {tuiFormatSignSymbol} from './amount.utils';

const DEFAULT_PRECISION = 2;

@Pipe({standalone: true, name: 'tuiAmount', pure: false})
export class TuiAmountPipe implements PipeTransform {
    private readonly options = inject(TUI_AMOUNT_OPTIONS);
    private readonly format = inject(TUI_NUMBER_FORMAT);
    private readonly destroy$ = new Subject<void>();
    private readonly injector = inject(INJECTOR);

    public transform(
        value: number,
        currency: TuiCurrencyVariants = this.options.currency,
        currencyAlign: TuiHorizontalDirection = this.options.currencyAlign,
    ): string {
        return this.getSignal(value, currency, currencyAlign)();
    }

    @tuiPure
    private getSignal(
        value: number,
        currency: TuiCurrencyVariants,
        currencyAlign: TuiHorizontalDirection,
    ): Signal<string> {
        this.destroy$.next();

        return untracked(() =>
            toSignal(
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
                    takeUntil(this.destroy$),
                ),
                {injector: this.injector, initialValue: ''},
            ),
        );
    }
}
