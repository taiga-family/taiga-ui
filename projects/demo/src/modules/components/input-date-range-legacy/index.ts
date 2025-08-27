import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {tuiProvideMobileCalendar} from '@taiga-ui/addon-mobile';
import {
    TUI_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    type TuiBooleanHandler,
    TuiDay,
    type TuiDayLike,
    type TuiDayRange,
    TuiMonth,
    tuiProvide,
} from '@taiga-ui/cdk';
import {TuiHint, type TuiMarkerHandler} from '@taiga-ui/core';
import {tuiCreateDefaultDayRangePeriods, type TuiDayRangePeriod} from '@taiga-ui/kit';
import {TuiInputDateRangeModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/abstract-props-accessor';
import {AbstractExampleTuiControl} from '../abstract/control';
import {InheritedDocumentation} from '../abstract/inherited-documentation';

const TWO_DOTS: [string, string] = [
    'var(--tui-background-accent-1)',
    'var(--tui-status-info)',
];
const ONE_DOT: [string] = ['var(--tui-status-positive)'];

@Component({
    standalone: true,
    imports: [
        InheritedDocumentation,
        ReactiveFormsModule,
        TuiDemo,
        TuiHint,
        TuiInputDateRangeModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    changeDetection,
    providers: [
        tuiProvide(ABSTRACT_PROPS_ACCESSOR, PageComponent),
        tuiProvideMobileCalendar(),
    ],
})
export default class PageComponent extends AbstractExampleTuiControl {
    protected readonly routes = DemoRoute;
    protected readonly dayVariants = [
        TUI_FIRST_DAY,
        new TuiDay(2021, 2, 5),
        new TuiDay(1900, 0, 1),
        new TuiDay(2300, 0, 1),
        new TuiDay(2017, 11, 11),
        new TuiDay(new Date().getFullYear() + 3, 1, 1),
        TUI_LAST_DAY,
        TuiDay.currentLocal(),
    ];

    protected min: TuiDay = this.dayVariants[0]!;

    protected readonly minLengthVariants: readonly TuiDayLike[] = [{day: 3}, {day: 15}];

    protected minLength: TuiDayLike | null = null;

    protected max = this.dayVariants[this.dayVariants.length - 2]!;

    protected readonly markerHandlerVariants: readonly TuiMarkerHandler[] = [
        (day: TuiDay) => (day.day % 2 === 0 ? TWO_DOTS : ONE_DOT),
    ];

    protected markerHandler: TuiMarkerHandler | null = null;

    protected readonly disabledItemHandlerVariants: ReadonlyArray<
        TuiBooleanHandler<TuiDay>
    > = [TUI_FALSE_HANDLER, ({day}) => day % 3 === 0];

    protected disabledItemHandler = this.disabledItemHandlerVariants[0]!;

    protected readonly itemsVariants: ReadonlyArray<readonly TuiDayRangePeriod[]> = [
        [],
        tuiCreateDefaultDayRangePeriods(),
    ];

    protected items = this.itemsVariants[0]!;

    protected readonly defaultViewedMonthVariants: readonly TuiMonth[] = [
        TuiMonth.currentLocal(),
        TuiMonth.currentLocal().append({month: 1}),
        new TuiMonth(2007, 5),
    ];

    protected defaultViewedMonth = this.defaultViewedMonthVariants[0]!;

    public override cleaner = false;
    public control = new FormControl<TuiDayRange | null>(null, Validators.required);

    public override readonly maxLengthVariants: readonly TuiDayLike[] = [
        {day: 5},
        {month: 1},
        {year: 1},
    ];

    public override maxLength: TuiDayLike | null = null;
}
