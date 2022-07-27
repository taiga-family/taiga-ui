import {Pipe, PipeTransform} from '@angular/core';
import {TuiMoneySignSymbol, TuiMoneySignT} from '@taiga-ui/addon-commerce/types';

import {tuiFormatSignSymbol} from '../utils/format-sign-symbol';

@Pipe({name: `tuiSignSymbol`})
export class TuiSignSymbolPipe implements PipeTransform {
    transform(value: number, sign: TuiMoneySignT): TuiMoneySignSymbol {
        return tuiFormatSignSymbol(value, sign);
    }
}
