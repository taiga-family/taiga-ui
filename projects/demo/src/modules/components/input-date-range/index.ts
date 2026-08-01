import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocDropdown} from '@demo/components/dropdown';
import {TuiDocIcons} from '@demo/components/icons';
import {TuiDocItemsHandlers} from '@demo/components/items-handlers';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TUI_FIRST_DAY, TUI_LAST_DAY, TuiDay, type TuiDayLike} from '@taiga-ui/cdk';
import {TuiDropdown, type TuiSizeL, type TuiSizeS, TuiTextfield} from '@taiga-ui/core';
import {
    type TuiDayRangePeriod,
    TuiInputDateRange,
    tuiCreateDefaultDayRangePeriods,
} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiDemo,
        TuiDocControl,
        TuiDocDropdown,
        TuiDocIcons,
        TuiDocItemsHandlers,
        TuiDocTextfield,
        TuiDropdown,
        TuiInputDateRange,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl();

    protected readonly dates = [
        TUI_FIRST_DAY,
        TuiDay.currentLocal(),
        TuiDay.currentLocal().append({year: 1, month: 1}),
        TuiDay.currentLocal().append({year: -1, month: -1}),
        TUI_LAST_DAY,
    ] as const;

    protected readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeS> = ['s', 'm', 'l'];
    protected listSize: TuiSizeL | TuiSizeS = this.sizeVariants[2]!;

    protected readonly items = tuiCreateDefaultDayRangePeriods();

    protected min = this.dates[0];
    protected max = this.dates[4];

    protected readonly limits = [{day: 3}, {day: 5}] as const;

    protected readonly periodListItems = [null, this.items];
    protected selectedPeriodList: readonly TuiDayRangePeriod[] | null = null;

    protected minLength: TuiDayLike | null = null;
    protected maxLength: TuiDayLike | null = null;

    protected readonly handler = (item: TuiDay): boolean => item.dayOfWeek() > 4;
}
