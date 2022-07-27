import {Pipe, PipeTransform} from '@angular/core';
import {TuiCurrencyVariants} from '@taiga-ui/addon-commerce/types';
import {formatCurrency} from '@taiga-ui/addon-commerce/utils';

@Pipe({
    name: `tuiCurrency`,
})
export class TuiCurrencyPipe implements PipeTransform {
    transform(currency: TuiCurrencyVariants): string {
        return formatCurrency(currency);
    }
}
