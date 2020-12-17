import {Inject, Pipe, PipeTransform} from '@angular/core';
import {TuiMonth} from '@taiga-ui/cdk/date-time';
import {TUI_MONTHS} from '@taiga-ui/cdk/tokens';

// @dynamic
@Pipe({name: 'tuiMonth'})
export class TuiMonthPipe implements PipeTransform {
    constructor(@Inject(TUI_MONTHS) private readonly months: readonly string[]) {}

    transform({month}: TuiMonth): string {
        return this.months[month];
    }
}
