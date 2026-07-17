import"./chunk-HU6DUUP4.js";var o=`import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {
    TUI_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    type TuiBooleanHandler,
    TuiDay,
    TuiMonth,
} from '@taiga-ui/cdk';
import {TuiTitle} from '@taiga-ui/core';
import {TUI_MONTH_OPTIONS, TuiDatePicker} from '@taiga-ui/experimental';

@Component({
    imports: [TuiDatePicker, TuiDemo, TuiTitle],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected readonly routes = DemoRoute;
    protected readonly options = inject(TUI_MONTH_OPTIONS);

    protected readonly months = [
        new TuiMonth(2021, 1),
        TuiMonth.currentLocal(),
        TuiMonth.currentLocal().append({month: -5}),
    ] as const;

    protected month = this.months[0];
    protected readonly views = ['day', 'month', 'year'] as const;
    protected view = this.views[0];
    protected showAdjacent = this.options.showAdjacent;
    protected showWeek = this.options.showWeek;

    protected readonly minVariants = [
        TUI_FIRST_DAY,
        new TuiDay(2017, 2, 5),
        new TuiDay(1900, 0, 1),
    ];

    protected min = this.minVariants[0]!;

    protected readonly maxVariants = [
        TUI_LAST_DAY,
        new TuiDay(2020, 3, 30),
        new TuiDay(2300, 0, 1),
    ];

    protected max = this.maxVariants[0]!;

    protected readonly disabledItemHandlerVariants: ReadonlyArray<
        TuiBooleanHandler<TuiDay>
    > = [TUI_FALSE_HANDLER, ({day}) => day % 3 === 0];

    protected disabledItemHandler = this.disabledItemHandlerVariants[0]!;
}
`;export{o as default};
