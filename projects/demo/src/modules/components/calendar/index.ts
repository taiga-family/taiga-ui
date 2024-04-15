import {type AfterViewInit, Component, ViewChild} from '@angular/core';
import {RouterModule} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemoModule} from '@demo/utils';
import type {TuiBooleanHandler} from '@taiga-ui/cdk';
import {
    TUI_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiDay,
    TuiDayRange,
    TuiMonth,
} from '@taiga-ui/cdk';
import type {TuiMarkerHandler} from '@taiga-ui/core';
import {
    TUI_DEFAULT_MARKER_HANDLER,
    TuiCalendarModule,
    TuiLinkDirective,
} from '@taiga-ui/core';

const TWO_DOTS: [string, string] = ['var(--tui-primary)', 'var(--tui-info-fill)'];
const ONE_DOT: [string] = ['var(--tui-success-fill)'];

@Component({
    standalone: true,
    imports: [RouterModule, TuiLinkDirective, TuiCalendarModule, TuiDemoModule],
    templateUrl: './index.html',
    changeDetection,
})
export default class ExampleTuiCalendarComponent implements AfterViewInit {
    @ViewChild('localizationExample')
    private readonly localizationExample: any;

    @ViewChild('colorCustomizationExample')
    private readonly colorCustomizationExample: any;

    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');
    protected readonly examples: Array<{name: string; description?: any}> = [
        {name: 'Basic'},
        {name: 'Range'},
        {name: 'With markers'},
        {name: 'Localizaition'},
        {name: 'Color customization'},
        {name: 'Select multiple dates'},
        {name: 'Open in year view'},
    ];

    protected showAdjacent = true;

    protected readonly minVariants = [
        TUI_FIRST_DAY,
        new TuiDay(2017, 2, 5),
        new TuiDay(1900, 0, 1),
    ];

    protected min = this.minVariants[0];

    protected readonly maxVariants = [
        TUI_LAST_DAY,
        new TuiDay(2020, 3, 30),
        new TuiDay(2300, 0, 1),
    ];

    protected max = this.maxVariants[0];

    protected readonly minViewedMonthVariants = [
        new TuiMonth(0, 0),
        new TuiMonth(2017, 2),
        new TuiMonth(1900, 0),
    ];

    protected minViewedMonth = this.minViewedMonthVariants[0];

    protected readonly maxViewedMonthVariants = [
        TUI_LAST_DAY,
        new TuiMonth(2020, 3),
        new TuiMonth(2300, 0),
    ];

    protected maxViewedMonth = this.maxViewedMonthVariants[0];

    protected readonly disabledItemHandlerVariants: ReadonlyArray<
        TuiBooleanHandler<TuiDay>
    > = [TUI_FALSE_HANDLER, ({day}) => day % 3 === 0];

    protected disabledItemHandler = this.disabledItemHandlerVariants[0];

    protected readonly markerHandlerVariants: readonly TuiMarkerHandler[] = [
        TUI_DEFAULT_MARKER_HANDLER,
        (day: TuiDay) => (day.day % 2 === 0 ? TWO_DOTS : ONE_DOT),
    ];

    protected markerHandler: TuiMarkerHandler = this.markerHandlerVariants[0];

    protected readonly valueVariants: ReadonlyArray<TuiDay | TuiDayRange> = [
        TuiDay.currentLocal(),
        new TuiDayRange(TuiDay.currentLocal(), TuiDay.currentLocal().append({day: 3})),
        new TuiDay(2020, 3, 21),
    ];

    protected value: TuiDay | TuiDayRange | null = null;

    protected month = TuiMonth.currentLocal();

    protected hoveredItem: TuiDay | null = null;

    public ngAfterViewInit(): void {
        this.examples[3].description = this.localizationExample;
        this.examples[4].description = this.colorCustomizationExample;
    }
}
