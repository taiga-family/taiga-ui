import {Directive, inject, input, model} from '@angular/core';
import {
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    type TuiDay,
    type TuiDayRange,
    TuiMonth,
} from '@taiga-ui/cdk/date-time';
import {type TuiBooleanHandler} from '@taiga-ui/cdk/types';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/core/directives/items-handlers';

@Directive()
export abstract class AbstractTuiCalendar<
    T extends TuiDay | TuiDayRange | readonly TuiDay[] =
        | TuiDay
        | TuiDayRange
        | readonly TuiDay[],
> {
    public readonly month = model(TuiMonth.currentLocal());
    public readonly value = model<T | null>(null);

    public readonly min = input(TUI_FIRST_DAY, {
        transform: (x: TuiDay | null) => x ?? TUI_FIRST_DAY,
    });

    public readonly max = input(TUI_LAST_DAY, {
        transform: (x: TuiDay | null) => x ?? TUI_LAST_DAY,
    });

    public readonly disabledItemHandler = input<TuiBooleanHandler<TuiDay>>(
        inject(TUI_ITEMS_HANDLERS).disabledItemHandler(),
    );
}
