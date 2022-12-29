import {Pipe, PipeTransform} from '@angular/core';
import {TuiDayRange, tuiInRange, TuiMonthRange, TuiYear} from '@taiga-ui/cdk';

@Pipe({
    name: `tuiItemIsInterval`,
})
export class TuiItemIsIntervalPipe implements PipeTransform {
    transform(
        item: number,
        value: TuiDayRange | TuiMonthRange | TuiYear | null,
        hoveredItem: number | null,
    ): boolean {
        if (value === null || !this.isRange(value)) {
            return false;
        }

        if (!value.from.yearSame(value.to)) {
            return value.from.year <= item && value.to.year > item;
        }

        if (hoveredItem === null || value.from.year === hoveredItem) {
            return false;
        }

        return tuiInRange(
            item,
            Math.min(value.from.year, hoveredItem),
            Math.max(value.from.year, hoveredItem),
        );
    }

    private isRange(item: TuiMonthRange | TuiYear): item is TuiMonthRange {
        return item instanceof TuiMonthRange;
    }
}
