import {Pipe, type PipeTransform} from '@angular/core';
import {TuiDay} from '@taiga-ui/cdk/date-time';

@Pipe({name: 'tuiWeek'})
export class TuiWeekPipe implements PipeTransform {
    public transform(day: TuiDay, start: number, threshold = 1): number {
        const beginning = new TuiDay(day.year, 0, 1);
        const dayOfWeek = beginning.toUtcNativeDate().getDay();
        const normalized = dayOfWeek - 1 < 0 ? 6 : dayOfWeek - 1;
        const delta = normalized - start;
        const adjusted = delta < 0 ? 7 - delta : delta;
        const first = threshold > 7 - adjusted ? 0 : 1;
        const offset = Math.floor((TuiDay.lengthBetween(beginning, day) - adjusted) / 7);

        return (
            first + offset ||
            this.transform(beginning.append({day: -adjusted}), start, threshold) + 1
        );
    }
}
