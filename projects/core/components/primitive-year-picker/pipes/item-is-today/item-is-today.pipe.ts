import {Pipe, PipeTransform} from '@angular/core';
import {TuiMonth} from '@taiga-ui/cdk';

@Pipe({
    name: `tuiItemIsToday`,
})
export class TuiItemIsTodayPipe implements PipeTransform {
    private readonly currentYear = TuiMonth.currentLocal().year;

    transform(item: number): boolean {
        return this.currentYear === item;
    }
}
