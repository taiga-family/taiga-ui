import type {PipeTransform} from '@angular/core';
import {Inject, Pipe} from '@angular/core';
import type {TuiDecimal} from '@taiga-ui/core';
import {TUI_NUMBER_FORMAT, TuiNumberFormatSettings} from '@taiga-ui/core';

import {tuiFormatFractionPart} from '../utils/format-fraction-part';

@Pipe({name: `tuiFractionPart`})
export class TuiFractionPartPipe implements PipeTransform {
    constructor(
        @Inject(TUI_NUMBER_FORMAT) private readonly numberFormat: TuiNumberFormatSettings,
    ) {}

    transform(value: number, decimal: TuiDecimal, precision: number): string {
        return tuiFormatFractionPart({
            value,
            decimal,
            precision,
            numberFormat: this.numberFormat,
        });
    }
}
