import {inject, Pipe, type PipeTransform} from '@angular/core';
import {TUI_CURRENCY_SYMBOLS} from '@taiga-ui/addon-commerce/tokens';
import {type TuiCurrencyVariants} from '@taiga-ui/addon-commerce/types';
import {tuiFormatCurrency} from '@taiga-ui/addon-commerce/utils';

@Pipe({name: 'tuiCurrency'})
export class TuiCurrencyPipe implements PipeTransform {
    private readonly currencySymbolHandler = inject(TUI_CURRENCY_SYMBOLS);

    public transform(currency: TuiCurrencyVariants): string {
        return this.currencySymbolHandler(currency) ?? tuiFormatCurrency(currency);
    }
}
