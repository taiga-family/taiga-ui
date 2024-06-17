import type {PipeTransform} from '@angular/core';
import {inject, Pipe} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import type {TuiMonth} from '@taiga-ui/cdk';
import {TUI_MONTHS} from '@taiga-ui/core/tokens';

@Pipe({
    standalone: true,
    name: 'tuiMonth',
    pure: false,
})
export class TuiMonthPipe implements PipeTransform {
    private readonly months = toSignal(inject(TUI_MONTHS));

    public transform({month}: TuiMonth): string | null {
        return this.months()?.[month] || null;
    }
}
