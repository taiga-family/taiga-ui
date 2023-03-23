import type {PipeTransform} from '@angular/core';
import {Inject, Pipe} from '@angular/core';
import type {TuiNumberFormatSettings} from '@taiga-ui/core';
import {TUI_NUMBER_FORMAT, tuiFormatNumber} from '@taiga-ui/core';

@Pipe({name: `tuiIntegerPart`})
export class TuiIntegerPartPipe implements PipeTransform {
    constructor(
        @Inject(TUI_NUMBER_FORMAT) private readonly numberFormat: TuiNumberFormatSettings,
    ) {}

    transform(value: number): string {
        return tuiFormatNumber(Math.floor(Math.abs(Number(value))), this.numberFormat);
    }
}
