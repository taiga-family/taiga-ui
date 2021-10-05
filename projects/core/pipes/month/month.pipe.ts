import {Inject, Pipe, PipeTransform} from '@angular/core';
import {TuiMonth} from '@taiga-ui/cdk/date-time';
import {TUI_MONTHS} from '@taiga-ui/core/tokens';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

// @dynamic
@Pipe({name: 'tuiMonth'})
export class TuiMonthPipe implements PipeTransform {
    constructor(@Inject(TUI_MONTHS) private readonly months$: Observable<string[]>) {}

    transform({month}: TuiMonth): Observable<string> {
        return this.months$.pipe(map(months => months[month]));
    }
}
