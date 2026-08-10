import {inject, Pipe, type PipeTransform} from '@angular/core';
import {TUI_CURRENCY_SYMBOLS} from '@taiga-ui/addon-commerce/tokens';
import {type TuiCurrencyVariants} from '@taiga-ui/addon-commerce/types';

@Pipe({name: 'tuiCurrency'})
export class TuiCurrencyPipe implements PipeTransform {
    private readonly currencySymbolHandler = inject(TUI_CURRENCY_SYMBOLS);

    public transform(currency: TuiCurrencyVariants): string {
        const symbol = this.currencySymbolHandler(currency);

        if (symbol) {
            return symbol;
        }

        if (currency === null) {
            return '';
        }

        return typeof currency === 'number'
            ? String(currency).padStart(3, '0')
            : currency;
    }
}
