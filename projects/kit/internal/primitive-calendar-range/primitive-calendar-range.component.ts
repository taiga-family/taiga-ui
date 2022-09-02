import type {OnInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Inject,
    Input,
    Optional,
    Output,
} from '@angular/core';
import type {
    TuiBooleanHandler,
    TuiDay,
    TuiDayRange,
    TuiInjectionTokenType,
    TuiMapper,
} from '@taiga-ui/cdk';
import {
    ALWAYS_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    tuiDefaultProp,
    TuiDestroyService,
    TuiMonth,
    tuiWatch,
} from '@taiga-ui/cdk';
import type {TuiMarkerHandler} from '@taiga-ui/core';
import {TUI_DEFAULT_MARKER_HANDLER} from '@taiga-ui/core';
import {TUI_CALENDAR_DATE_STREAM} from '@taiga-ui/kit/tokens';
import {takeUntil} from 'rxjs/operators';

/**
 * @internal
 */
@Component({
    selector: `tui-primitive-calendar-range`,
    templateUrl: `./primitive-calendar-range.template.html`,
    styleUrls: [`./primitive-calendar-range.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
})
export class TuiPrimitiveCalendarRangeComponent implements OnInit {
    @Input()
    @tuiDefaultProp()
    disabledItemHandler: TuiBooleanHandler<TuiDay> = ALWAYS_FALSE_HANDLER;

    @Input()
    @tuiDefaultProp()
    markerHandler: TuiMarkerHandler = TUI_DEFAULT_MARKER_HANDLER;

    @Input()
    @tuiDefaultProp()
    defaultViewedMonthFirst = TuiMonth.currentLocal();

    @Input()
    @tuiDefaultProp()
    defaultViewedMonthSecond = TuiMonth.currentLocal().append({month: 1});

    @Input()
    @tuiDefaultProp()
    min = TUI_FIRST_DAY;

    @Input()
    @tuiDefaultProp()
    max = TUI_LAST_DAY;

    @Input()
    @tuiDefaultProp()
    value: TuiDayRange | null = null;

    @Output()
    readonly dayClick = new EventEmitter<TuiDay>();

    hoveredItem: TuiDay | null = null;

    userViewedMonthFirst: TuiMonth = this.defaultViewedMonthFirst;
    userViewedMonthSecond: TuiMonth = this.defaultViewedMonthSecond;

    constructor(
        @Inject(TUI_CALENDAR_DATE_STREAM)
        @Optional()
        valueChanges: TuiInjectionTokenType<typeof TUI_CALENDAR_DATE_STREAM> | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TuiDestroyService) destroy$: TuiDestroyService,
    ) {
        if (!valueChanges) {
            return;
        }

        valueChanges
            .pipe(tuiWatch(changeDetectorRef), takeUntil(destroy$))
            .subscribe(value => {
                this.value = value as TuiDayRange | null;
                this.updateViewedMonths();
            });
    }

    get cappedUserViewedMonthSecond(): TuiMonth {
        return this.userViewedMonthSecond.monthBefore(this.max)
            ? this.userViewedMonthSecond
            : this.max;
    }

    get cappedUserViewedMonthFirst(): TuiMonth {
        return this.userViewedMonthFirst.monthSameOrBefore(this.userViewedMonthSecond)
            ? this.userViewedMonthFirst
            : this.userViewedMonthSecond;
    }

    monthOffset: TuiMapper<TuiMonth, TuiMonth> = (value, offset: number) =>
        value.append({month: offset});

    ngOnInit(): void {
        this.setInitialMonths();
    }

    onSectionFirstViewedMonth(month: TuiMonth): void {
        this.userViewedMonthFirst = month;

        if (this.userViewedMonthSecond.year < this.userViewedMonthFirst.year) {
            this.userViewedMonthSecond = this.userViewedMonthSecond.append({
                year: month.year - this.userViewedMonthSecond.year,
            });
        }
    }

    onSectionSecondViewedMonth(month: TuiMonth): void {
        this.userViewedMonthSecond = month;

        if (this.userViewedMonthFirst.year > this.userViewedMonthSecond.year) {
            this.userViewedMonthFirst = this.userViewedMonthFirst.append({
                year: month.year - this.userViewedMonthFirst.year,
            });
        }
    }

    onDayClick(day: TuiDay): void {
        this.dayClick.emit(day);
    }

    private setInitialMonths(): void {
        if (!this.value) {
            this.userViewedMonthSecond = this.updatedViewedMonthSecond(
                this.defaultViewedMonthSecond,
            );

            this.userViewedMonthFirst = this.updatedViewedMonthFirst(
                this.defaultViewedMonthFirst,
            );
        }
    }

    private updatedViewedMonthSecond(month: TuiMonth): TuiMonth {
        if (month.monthSameOrAfter(this.max)) {
            return this.max;
        }

        if (month.monthBefore(this.min)) {
            return this.min.append({month: 1});
        }

        return month;
    }

    private updatedViewedMonthFirst(month: TuiMonth): TuiMonth {
        if (month.monthSameOrAfter(this.userViewedMonthSecond)) {
            return this.userViewedMonthSecond.append({month: -1});
        }

        if (month.monthSameOrBefore(this.min)) {
            return this.min;
        }

        return month;
    }

    private updateViewedMonths(): void {
        this.userViewedMonthFirst =
            this.value === null ? this.defaultViewedMonthFirst : this.value.from;
        this.userViewedMonthSecond =
            this.value === null ? this.defaultViewedMonthSecond : this.value.to;

        if (this.userViewedMonthFirst.monthSame(this.userViewedMonthSecond)) {
            this.userViewedMonthSecond = this.userViewedMonthSecond.append({month: 1});
        }
    }
}
