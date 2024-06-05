import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import type {TuiBooleanHandler} from '@taiga-ui/cdk';
import {
    TUI_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiDay,
    TuiMonth,
    TuiMonthRange,
    TuiYear,
} from '@taiga-ui/cdk';
import {TuiLinkDirective} from '@taiga-ui/core';
import {TuiCalendarMonthComponent} from '@taiga-ui/kit';
import {TuiInputMonthRangeModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiCalendarMonthComponent,
        TuiLinkDirective,
        RouterModule,
        TuiInputMonthRangeModule,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class ExampleComponent {
    protected readonly examples = ['Basic', 'Range'];

    protected readonly minVariants = [
        TUI_FIRST_DAY,
        new TuiMonth(2019, 2),
        new TuiMonth(2007, 0),
    ];

    protected readonly maxVariants = [
        TUI_LAST_DAY,
        new TuiMonth(2020, 2),
        new TuiMonth(2023, 0),
        new TuiMonth(2019, 4),
    ];

    protected min = this.minVariants[0];
    protected max = this.maxVariants[0];
    protected maxLength = 0;
    protected minLength = 0;

    protected readonly disabledItemHandlerVariants: ReadonlyArray<
        TuiBooleanHandler<TuiMonth>
    > = [TUI_FALSE_HANDLER, ({month}) => month % 3 === 0];

    protected disabledItemHandler = this.disabledItemHandlerVariants[0];

    protected readonly valueVariants: ReadonlyArray<TuiMonth | TuiMonthRange> = [
        TuiDay.currentLocal(),
        new TuiMonthRange(
            TuiDay.currentLocal(),
            TuiDay.currentLocal().append({month: 3}),
        ),
        new TuiMonth(2007, 2),
    ];

    protected value: TuiMonth | TuiMonthRange | null = null;

    protected readonly yearVariants: readonly TuiYear[] = [
        TuiDay.currentLocal(),
        new TuiYear(2007),
    ];

    protected year = this.yearVariants[0];
    protected readonly docRoutes = DemoRoute;
}
