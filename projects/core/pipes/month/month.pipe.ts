import type {PipeTransform} from '@angular/core';
import {Inject, Pipe} from '@angular/core';
import type {TuiInjectionTokenType, TuiMonth} from '@taiga-ui/cdk';
import {TUI_MONTHS} from '@taiga-ui/core/tokens';
import type {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Pipe({name: `tuiMonth`})
export class TuiMonthPipe implements PipeTransform {
    constructor(
        @Inject(TUI_MONTHS)
        private readonly months$: TuiInjectionTokenType<typeof TUI_MONTHS>,
    ) {}

    transform({month}: TuiMonth): Observable<string> {
        return this.months$.pipe(map(months => months[month]));
    }
}
