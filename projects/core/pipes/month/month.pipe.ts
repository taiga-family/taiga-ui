import type {PipeTransform} from '@angular/core';
import {inject, Pipe} from '@angular/core';
import type {TuiMonth} from '@taiga-ui/cdk/date-time';
import {TUI_MONTHS} from '@taiga-ui/core/tokens';
import type {Observable} from 'rxjs';
import {map} from 'rxjs';

@Pipe({
    standalone: true,
    name: 'tuiMonth',
})
export class TuiMonthPipe implements PipeTransform {
    private readonly months$ = inject(TUI_MONTHS);

    public transform({month}: TuiMonth): Observable<string> {
        return this.months$.pipe(map(months => months[month]));
    }
}
