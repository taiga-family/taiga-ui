import {Pipe, type PipeTransform} from '@angular/core';
import {TuiDay} from '@taiga-ui/cdk/date-time';

const ISO_MIN = 4;

@Pipe({name: 'tuiWeek'})
export class TuiWeekPipe implements PipeTransform {
    public transform(day: TuiDay): number {
        const today = this.getWeek(day);
        const prev = this.getWeek(day.append({day: -7}));
        const next = this.getWeek(day.append({day: 7}));

        return next === 2 ? 1 : today || prev;
    }

    private getWeek(day: TuiDay): number {
        const beginning = new TuiDay(day.year, 0, 1);
        const delta = beginning.dayOfWeek();
        const first = ISO_MIN > 7 - delta ? 0 : 1;
        const sunday = day.append({day: 6 - day.dayOfWeek()});
        const offset = Math.floor(TuiDay.lengthBetween(beginning, sunday) / 7);

        return first + offset;
    }
}
