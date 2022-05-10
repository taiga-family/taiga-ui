import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    ALWAYS_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiBooleanHandler,
    TuiDay,
    TuiMonth,
    TuiMonthRange,
    TuiYear,
} from '@taiga-ui/cdk';
import {TuiAlertService} from '@taiga-ui/core';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';
import {default as exampleModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleHtml} from '!!raw-loader!./examples/import/insert-template.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-calendar-month',
    templateUrl: './calendar-month.template.html',
    changeDetection,
})
export class ExampleTuiCalendarMonthComponent {
    readonly exampleModule = exampleModule;
    readonly exampleHtml = exampleHtml;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
    };

    readonly minVariants = [TUI_FIRST_DAY, new TuiMonth(2019, 2), new TuiMonth(2007, 0)];

    readonly maxVariants = [
        TUI_LAST_DAY,
        new TuiMonth(2020, 2),
        new TuiMonth(2023, 0),
        new TuiMonth(2019, 4),
    ];

    min = this.minVariants[0];
    max = this.maxVariants[0];

    readonly disabledItemHandlerVariants: ReadonlyArray<TuiBooleanHandler<TuiMonth>> = [
        ALWAYS_FALSE_HANDLER,
        ({month}) => month % 3 === 0,
    ];

    disabledItemHandler = this.disabledItemHandlerVariants[0];

    readonly valueVariants: ReadonlyArray<TuiMonth | TuiMonthRange> = [
        TuiDay.currentLocal(),
        new TuiMonthRange(
            TuiDay.currentLocal(),
            TuiDay.currentLocal().append({month: 3}),
        ),
        new TuiMonth(2007, 2),
    ];

    value: TuiMonth | TuiMonthRange | null = null;

    readonly yearVariants: readonly TuiYear[] = [
        TuiDay.currentLocal(),
        new TuiYear(2007),
    ];

    year = this.yearVariants[0];

    constructor(
        @Inject(TuiAlertService)
        private readonly alertService: TuiAlertService,
    ) {}

    onMonthClick(month: TuiMonth): void {
        this.alertService.open(String(month)).subscribe();
    }
}
