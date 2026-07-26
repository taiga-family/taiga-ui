import {Pipe, type PipeTransform} from '@angular/core';
import {tuiFormatCurrency} from '@taiga-ui/addon-commerce/utils';

@Pipe({name: 'tuiCurrency'})
export class TuiCurrencyPipe implements PipeTransform {
    public readonly transform = tuiFormatCurrency;
}
