import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {
    TuiMobileCalendarComponent,
    tuiProvideMobileCalendar,
} from '@taiga-ui/addon-mobile';
import type {TuiBooleanHandler, TuiDayLike, TuiDayRange} from '@taiga-ui/cdk';
import {
    TUI_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiDay,
    TuiMonth,
    tuiProvide,
} from '@taiga-ui/cdk';
import type {TuiMarkerHandler} from '@taiga-ui/core';
import {
    TuiHintOptionsDirective,
    TuiLinkDirective,
    TuiNotificationComponent,
} from '@taiga-ui/core';
import type {TuiDayRangePeriod} from '@taiga-ui/kit';
import {tuiCreateDefaultDayRangePeriods} from '@taiga-ui/kit';
import {TuiInputDateRangeModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/abstract-props-accessor';
import {AbstractExampleTuiControl} from '../abstract/control';
import {InheritedDocumentationComponent} from '../abstract/inherited-documentation';

const TWO_DOTS: [string, string] = ['var(--tui-primary)', 'var(--tui-info-fill)'];
const ONE_DOT: [string] = ['var(--tui-success-fill)'];

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        InheritedDocumentationComponent,
        RouterLink,
        TuiLinkDirective,
        TuiNotificationComponent,
        TuiInputDateRangeModule,
        ReactiveFormsModule,
        TuiHintOptionsDirective,
        TuiTextfieldControllerModule,
        TuiMobileCalendarComponent,
    ],
    templateUrl: './index.html',
    changeDetection,
    providers: [
        tuiProvide(ABSTRACT_PROPS_ACCESSOR, PageComponent),
        tuiProvideMobileCalendar(),
    ],
})
export default class PageComponent extends AbstractExampleTuiControl {
    protected readonly dayVariants = [
        TUI_FIRST_DAY,
        new TuiDay(2021, 2, 5),
        new TuiDay(1900, 0, 1),
        new TuiDay(2300, 0, 1),
        new TuiDay(2017, 11, 11),
        new TuiDay(new Date().getFullYear() + 3, 1, 1),
        TUI_LAST_DAY,
    ];

    protected min: TuiDay = this.dayVariants[0];

    protected readonly minLengthVariants: readonly TuiDayLike[] = [{day: 3}, {day: 15}];

    protected minLength: TuiDayLike | null = null;

    protected max = this.dayVariants[this.dayVariants.length - 1];

    protected readonly markerHandlerVariants: readonly TuiMarkerHandler[] = [
        (day: TuiDay) => (day.day % 2 === 0 ? TWO_DOTS : ONE_DOT),
    ];

    protected markerHandler: TuiMarkerHandler | null = null;

    protected readonly disabledItemHandlerVariants: ReadonlyArray<
        TuiBooleanHandler<TuiDay>
    > = [TUI_FALSE_HANDLER, ({day}) => day % 3 === 0];

    protected disabledItemHandler = this.disabledItemHandlerVariants[0];

    protected readonly itemsVariants: ReadonlyArray<readonly TuiDayRangePeriod[]> = [
        [],
        tuiCreateDefaultDayRangePeriods(),
    ];

    protected items = this.itemsVariants[0];

    protected readonly defaultViewedMonthVariants: readonly TuiMonth[] = [
        TuiMonth.currentLocal(),
        TuiMonth.currentLocal().append({month: 1}),
        new TuiMonth(2007, 5),
    ];

    protected defaultViewedMonth = this.defaultViewedMonthVariants[0];

    public override cleaner = false;
    public control = new FormControl<TuiDayRange | null>(null, Validators.required);

    public override readonly maxLengthVariants: readonly TuiDayLike[] = [
        {day: 5},
        {month: 1},
        {year: 1},
    ];

    public override maxLength: TuiDayLike | null = null;
}
