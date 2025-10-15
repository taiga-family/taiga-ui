import {inject, Pipe, type PipeTransform} from '@angular/core';
import {toObservable} from '@angular/core/rxjs-interop';
import {type TuiMonth} from '@taiga-ui/cdk/date-time';
import {TUI_MONTHS} from '@taiga-ui/core/tokens';
import {map, type Observable} from 'rxjs';

@Pipe({
    standalone: true,
    name: 'tuiMonth',
})
export class TuiMonthPipe implements PipeTransform {
    private readonly months$ = toObservable(inject(TUI_MONTHS));

    public transform({month}: TuiMonth): Observable<string> {
        return this.months$.pipe(map((months) => months[month] || months[0]));
    }
}
