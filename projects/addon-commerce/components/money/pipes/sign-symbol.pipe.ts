import type {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';
import type {TuiMoneySign, TuiMoneySignSymbol} from '@taiga-ui/addon-commerce/types';

import {tuiFormatSignSymbol} from '../utils/format-sign-symbol';

@Pipe({name: `tuiSignSymbol`})
export class TuiSignSymbolPipe implements PipeTransform {
    transform(value: number, sign: TuiMoneySign): TuiMoneySignSymbol {
        return tuiFormatSignSymbol(value, sign);
    }
}
