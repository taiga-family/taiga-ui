import {Inject, Pipe, PipeTransform} from '@angular/core';
import {formatNumber, TUI_NUMBER_FORMAT, TuiNumberFormatSettings} from '@taiga-ui/core';

@Pipe({name: `tuiIntegerPart`})
export class TuiIntegerPartPipe implements PipeTransform {
    constructor(
        @Inject(TUI_NUMBER_FORMAT) private readonly numberFormat: TuiNumberFormatSettings,
    ) {}

    transform(value: number, precision: number): string {
        return formatNumber(
            Math.floor(Math.abs(Number(value.toFixed(precision)))),
            null,
            this.numberFormat.decimalSeparator,
            this.numberFormat.thousandSeparator,
        );
    }
}
