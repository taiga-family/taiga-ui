import {inject, Pipe, PipeTransform} from '@angular/core';
import {TuiMonth} from '@taiga-ui/cdk';
import {TUI_MONTHS} from '@taiga-ui/core/tokens';
import {map, Observable} from 'rxjs';

@Pipe({name: 'tuiMonth'})
export class TuiMonthPipe implements PipeTransform {
    private readonly months$ = inject(TUI_MONTHS);

    public transform({month}: TuiMonth): Observable<string> {
        return this.months$.pipe(map(months => months[month]));
    }
}
