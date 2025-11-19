import {
    computed,
    inject,
    Pipe,
    type PipeTransform,
    signal,
    untracked,
} from '@angular/core';
import {type TuiCurrencyVariants} from '@taiga-ui/addon-commerce/types';
import {tuiFormatCurrency} from '@taiga-ui/addon-commerce/utils';
import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk/constants';
import {TUI_NUMBER_FORMAT} from '@taiga-ui/core/tokens';
import {type TuiHorizontalDirection} from '@taiga-ui/core/types';
import {tuiFormatNumber} from '@taiga-ui/core/utils/format';

import {TUI_AMOUNT_OPTIONS} from './amount.options';
import {tuiFormatSignSymbol} from './amount.utils';

const DEFAULT_PRECISION = 2;

@Pipe({name: 'tuiAmount', pure: false})
export class TuiAmountPipe implements PipeTransform {
    private readonly options = inject(TUI_AMOUNT_OPTIONS);
    private readonly format = inject(TUI_NUMBER_FORMAT);

    private readonly value = signal(NaN);
    private readonly currency = signal(this.options.currency);
    private readonly currencyAlign = signal(this.options.currencyAlign);

    private readonly formatted = computed(() => {
        const format = this.format();
        const currencySymbol = tuiFormatCurrency(this.currency());
        const formatted = tuiFormatNumber(Math.abs(this.value()), {
            ...format,
            precision: Number.isNaN(format.precision)
                ? DEFAULT_PRECISION
                : format.precision,
        });
        const sign =
            formatted === '0' ? '' : tuiFormatSignSymbol(this.value(), this.options.sign);
        const space =
            currencySymbol &&
            (currencySymbol?.length > 1 || this.currencyAlign() === 'right')
                ? CHAR_NO_BREAK_SPACE
                : '';

        return this.currencyAlign() === 'right'
            ? `${sign}${formatted}${space}${currencySymbol}`
            : `${sign}${currencySymbol}${space}${formatted}`;
    });

    public transform(
        value: number,
        currency: TuiCurrencyVariants = this.options.currency,
        currencyAlign: TuiHorizontalDirection = this.options.currencyAlign,
    ): string {
        untracked(() => {
            this.value.set(value);
            this.currency.set(currency);
            this.currencyAlign.set(currencyAlign);
        });

        return this.formatted();
    }
}
