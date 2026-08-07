import {
    computed,
    inject,
    Pipe,
    type PipeTransform,
    signal,
    untracked,
} from '@angular/core';
import {TUI_CURRENCY_SYMBOLS} from '@taiga-ui/addon-commerce/tokens';
import {type TuiCurrencyVariants} from '@taiga-ui/addon-commerce/types';
import {tuiStringifyCurrency} from '@taiga-ui/addon-commerce/utils';
import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk/constants';
import {TUI_NUMBER_FORMAT} from '@taiga-ui/core/tokens';
import {type TuiHorizontalDirection} from '@taiga-ui/core/types';
import {tuiFormatNumber} from '@taiga-ui/kit/utils';

import {TUI_AMOUNT_OPTIONS} from './amount.options';
import {type TuiAmountSign} from './amount.types';
import {tuiFormatSignSymbol} from './amount.utils';

const DEFAULT_PRECISION = 2;

@Pipe({name: 'tuiAmount', pure: false})
export class TuiAmountPipe implements PipeTransform {
    private readonly options = inject(TUI_AMOUNT_OPTIONS);
    private readonly currencySymbolHandler = inject(TUI_CURRENCY_SYMBOLS);
    private readonly format = inject(TUI_NUMBER_FORMAT);
    private readonly value = signal(Number.NaN);
    private readonly currency = signal(this.options.currency);
    private readonly currencyAlign = signal(this.options.currencyAlign);
    private readonly sign = signal(this.options.sign);

    private readonly formatted = computed(() => {
        const format = this.format();
        const currency = this.currency();

        const currencySymbol =
            this.currencySymbolHandler(currency) || tuiStringifyCurrency(currency);

        const formatted = tuiFormatNumber(Math.abs(this.value()), {
            ...format,
            precision: Number.isNaN(format.precision)
                ? DEFAULT_PRECISION
                : format.precision,
        });

        const sign =
            formatted === '0' ? '' : tuiFormatSignSymbol(this.value(), this.sign());

        const space =
            currencySymbol &&
            (currencySymbol.length > 1 || this.currencyAlign() === 'end')
                ? CHAR_NO_BREAK_SPACE
                : '';

        return this.currencyAlign() === 'end'
            ? `${sign}${formatted}${space}${currencySymbol}`
            : `${sign}${currencySymbol}${space}${formatted}`;
    });

    public transform(
        value: number,
        currency: TuiCurrencyVariants = this.options.currency,
        currencyAlign: TuiHorizontalDirection = this.options.currencyAlign,
        sign: TuiAmountSign = this.options.sign,
    ): string {
        untracked(() => {
            this.value.set(value);
            this.currency.set(currency);
            this.currencyAlign.set(currencyAlign);
            this.sign.set(sign);
        });

        return this.formatted();
    }
}
