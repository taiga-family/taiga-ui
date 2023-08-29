import {Inject, Pipe, PipeTransform} from '@angular/core';
import {tuiRoundWith} from '@taiga-ui/cdk';
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

    transform(value: number, precision = 2): string {
        const rounded = tuiRoundWith({
            method: this.numberFormat.rounding,
            precision,
            value: Math.abs(Number(value)),
        });

        return tuiFormatNumber(rounded, {
            ...this.numberFormat,
            decimalLimit: 0,
            rounding: `truncate`,
        });
    }
}
