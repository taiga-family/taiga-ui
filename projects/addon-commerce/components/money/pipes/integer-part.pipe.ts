import type {PipeTransform} from '@angular/core';
import {Inject, Pipe} from '@angular/core';
import {
    TUI_NUMBER_FORMAT,
    tuiFormatNumber,
    TuiNumberFormatSettings,
} from '@taiga-ui/core';

@Pipe({name: `tuiIntegerPart`})
export class TuiIntegerPartPipe implements PipeTransform {
    constructor(
        @Inject(TUI_NUMBER_FORMAT) private readonly numberFormat: TuiNumberFormatSettings,
    ) {}

    transform(value: number, precision: number): string {
        return tuiFormatNumber(
            Math.floor(Math.abs(Number(value.toFixed(precision)))),
            this.numberFormat,
        );
    }
}
