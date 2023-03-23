import type {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';
import type {TuiCurrencyVariants} from '@taiga-ui/addon-commerce/types';
import {tuiFormatCurrency} from '@taiga-ui/addon-commerce/utils';

@Pipe({
    name: `tuiCurrency`,
})
export class TuiCurrencyPipe implements PipeTransform {
    transform(currency: TuiCurrencyVariants): string {
        return tuiFormatCurrency(currency);
    }
}
