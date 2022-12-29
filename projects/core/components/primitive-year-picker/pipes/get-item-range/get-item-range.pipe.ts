import {Pipe, PipeTransform} from '@angular/core';
import {TuiDayRange, TuiMonthRange, TuiYear} from '@taiga-ui/cdk';
import {TuiRangeState} from '@taiga-ui/core/enums';

@Pipe({
    name: `tuiGetItemRange`,
})
export class TuiGetItemRangePipe implements PipeTransform {
    // eslint-disable-next-line complexity
    transform(
        item: number,
        value: TuiDayRange | TuiMonthRange | TuiYear | null,
        hoveredItem: number | null,
    ): TuiRangeState | null {
        if (value === null) {
            return null;
        }

        if (value instanceof TuiYear) {
            return value.year === item ? TuiRangeState.Single : null;
        }

        if (
            (value.from.year === item && !value.from.yearSame(value.to)) ||
            (hoveredItem !== null &&
                hoveredItem > value.from.year &&
                value.from.year === item &&
                value.from.yearSame(value.to)) ||
            (hoveredItem !== null &&
                hoveredItem === item &&
                hoveredItem < value.from.year &&
                value.from.yearSame(value.to))
        ) {
            return TuiRangeState.Start;
        }

        if (
            (value.to.year === item && !value.from.yearSame(value.to)) ||
            (hoveredItem !== null &&
                hoveredItem < value.from.year &&
                value.from.year === item &&
                value.from.yearSame(value.to)) ||
            (hoveredItem !== null &&
                hoveredItem === item &&
                hoveredItem > value.from.year &&
                value.from.yearSame(value.to))
        ) {
            return TuiRangeState.End;
        }

        return value.from.yearSame(value.to) && value.from.year === item
            ? TuiRangeState.Single
            : null;
    }
}
