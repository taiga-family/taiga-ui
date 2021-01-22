import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    Inject,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import {
    ALWAYS_FALSE_HANDLER,
    MONTHS_IN_YEAR,
    TUI_FIRST_DAY,
    TUI_IS_IOS,
    TUI_LAST_DAY,
    TuiBooleanHandler,
    TuiDay,
    TuiDayRange,
    tuiDefaultProp,
    TuiDestroyService,
    TuiMapper,
    TuiMonth,
    typedFromEvent,
} from '@taiga-ui/cdk';
import {TUI_CLOSE_WORD, TUI_SHORT_WEEK_DAYS} from '@taiga-ui/core';
import {
    TUI_CANCEL_WORD,
    TUI_CHOOSE_DAY_OR_RANGE_TEXTS,
    TUI_DONE_WORD,
} from '@taiga-ui/kit';
import {Observable, race, timer} from 'rxjs';
import {
    debounceTime,
    delay,
    filter,
    flatMap,
    map,
    switchMap,
    switchMapTo,
    take,
    takeUntil,
    windowToggle,
} from 'rxjs/operators';
import {
    RANGE,
    SCROLL_DEBOUNCE_TIME,
    STARTING_YEAR,
    YEARS_IN_ROW,
} from './mobile-calendar.const';
import {
    TUI_MOBILE_CALENDAR_PROVIDERS,
    TUI_VALUE_STREAM,
} from './mobile-calendar.providers';

// @dynamic
@Component({
    selector: 'tui-mobile-calendar',
    templateUrl: './mobile-calendar.template.html',
    styleUrls: ['./mobile-calendar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_MOBILE_CALENDAR_PROVIDERS,
})
export class TuiMobileCalendarComponent {
    @Input()
    @tuiDefaultProp()
    single = true;

    @Input()
    @tuiDefaultProp()
    min = TUI_FIRST_DAY;

    @Input()
    @tuiDefaultProp()
    max = TUI_LAST_DAY;

    @Input()
    @tuiDefaultProp()
    disabledItemHandler: TuiBooleanHandler<TuiDay> = ALWAYS_FALSE_HANDLER;

    value: TuiDay | TuiDayRange | null = null;

    @Output()
    readonly cancel = new EventEmitter<void>();

    @Output()
    readonly confirm = new EventEmitter<TuiDayRange | TuiDay>();

    @HostBinding('class._ios')
    readonly isIOS: boolean;

    readonly years = Array.from({length: RANGE}, (_, i) => i + STARTING_YEAR);

    readonly months = Array.from(
        {length: RANGE * 12},
        (_, i) =>
            new TuiMonth(
                Math.floor(i / MONTHS_IN_YEAR) + STARTING_YEAR,
                i % MONTHS_IN_YEAR,
            ),
    );

    readonly disabledItemHandlerMapper: TuiMapper<
        TuiBooleanHandler<TuiDay>,
        TuiBooleanHandler<TuiDay>
    > = (disabledItemHandler, min: TuiDay, max: TuiDay) => item =>
        item.dayBefore(min) ||
        (max !== null && item.dayAfter(max)) ||
        disabledItemHandler(item);

    private readonly today = TuiDay.currentLocal();

    private activeYear = this.initialYear;

    private activeMonth = this.initialMonth;

    @ViewChild('yearsScrollRef')
    private readonly yearsScrollRef?: CdkVirtualScrollViewport;

    @ViewChild('monthsScrollRef')
    private readonly monthsScrollRef?: CdkVirtualScrollViewport;

    constructor(
        @Inject(TUI_IS_IOS) isIOS: boolean,
        @Inject(DOCUMENT) private readonly documentRef: Document,
        @Inject(TuiDestroyService)
        private readonly destroy$: TuiDestroyService,
        @Inject(TUI_VALUE_STREAM)
        valueChanges: Observable<TuiDayRange | null>,
        @Inject(TUI_CLOSE_WORD) readonly closeWord$: Observable<string>,
        @Inject(TUI_CANCEL_WORD) readonly cancelWord$: Observable<string>,
        @Inject(TUI_DONE_WORD) readonly doneWord$: Observable<string>,
        @Inject(TUI_SHORT_WEEK_DAYS)
        readonly weekDays$: Observable<
            [string, string, string, string, string, string, string]
        >,
        @Inject(TUI_CHOOSE_DAY_OR_RANGE_TEXTS)
        readonly chooseDayOrRangeTexts$: Observable<[string, string]>,
    ) {
        this.isIOS = isIOS;

        valueChanges.pipe(takeUntil(this.destroy$)).subscribe(value => {
            this.value = value;
        });
    }

    get yearWidth(): number {
        return this.documentRef.documentElement.clientWidth / YEARS_IN_ROW;
    }

    ngAfterViewInit() {
        if (!this.monthsScrollRef) {
            return;
        }

        // Virtual scroll has not yet rendered items even in ngAfterViewInit
        this.monthsScrollRef.scrolledIndexChange
            .pipe(take(1), takeUntil(this.destroy$))
            .subscribe(() => {
                this.scrollToActiveYear();
                this.scrollToActiveMonth();
                this.initYearScroll();
                this.initMonthScroll();
            });
    }

    onClose() {
        this.cancel.emit();
    }

    onConfirm() {
        if (this.value) {
            this.confirm.emit(this.value);
        } else {
            this.cancel.emit();
        }
    }

    onDayClick(day: TuiDay) {
        if (this.single) {
            this.value = day;

            return;
        }

        if (
            this.value === null ||
            this.value instanceof TuiDay ||
            !this.value.isSingleDay
        ) {
            this.value = new TuiDayRange(day, day);

            return;
        }

        this.value = TuiDayRange.sort(this.value.from, day);
    }

    getState(index: number): 'active' | 'adjacent' | null {
        if (this.isYearActive(index)) {
            return 'active';
        }

        if (this.isYearActive(index - 1) || this.isYearActive(index + 1)) {
            return 'adjacent';
        }

        return null;
    }

    onMonthChange(month: number) {
        // Skipping initial callback where index === 0
        if (!month || this.activeMonth === month) {
            return;
        }

        this.activeMonth = month;

        const activeYear = this.monthToYear(month);

        if (activeYear === this.activeYear) {
            return;
        }

        this.activeYear = activeYear;
        this.scrollToActiveYear();
    }

    setYear(year: number) {
        if (this.activeYear === year) {
            return;
        }

        this.activeMonth += this.getMonthOffset(year);
        this.activeYear = year;
        this.scrollToActiveYear('smooth');

        // Delay is required to run months scroll in the next frame to prevent flicker
        setTimeout(() => {
            this.scrollToActiveMonth();
        });
    }

    private get initialYear(): number {
        if (!this.value) {
            return this.today.year;
        }

        if (this.value instanceof TuiDay) {
            return this.value.year;
        }

        return this.value.from.year;
    }

    private get initialMonth(): number {
        if (!this.value) {
            return this.today.month + (this.today.year - STARTING_YEAR) * MONTHS_IN_YEAR;
        }

        if (this.value instanceof TuiDay) {
            return this.value.month + (this.value.year - STARTING_YEAR) * MONTHS_IN_YEAR;
        }

        return (
            this.value.from.month +
            (this.value.from.year - STARTING_YEAR) * MONTHS_IN_YEAR
        );
    }

    private initYearScroll() {
        const {yearsScrollRef} = this;

        if (!yearsScrollRef) {
            return;
        }

        const touchstart$ = typedFromEvent(
            yearsScrollRef.elementRef.nativeElement,
            'touchstart',
        );
        const touchend$ = typedFromEvent(
            yearsScrollRef.elementRef.nativeElement,
            'touchend',
        );
        const click$ = typedFromEvent(yearsScrollRef.elementRef.nativeElement, 'click');

        // Refresh activeYear
        yearsScrollRef
            .elementScrolled()
            .pipe(
                // Ignore smooth scroll resulting from click on the exact year
                windowToggle(touchstart$, () => click$),
                flatMap(x => x),
                // Delay is required to run months scroll in the next frame to prevent flicker
                delay(0),
                map(
                    () =>
                        Math.round(
                            yearsScrollRef.measureScrollOffset() / this.yearWidth,
                        ) +
                        Math.floor(YEARS_IN_ROW / 2) +
                        STARTING_YEAR,
                ),
                filter(activeYear => activeYear !== this.activeYear),
                takeUntil(this.destroy$),
            )
            .subscribe(activeYear => {
                this.activeMonth += this.getMonthOffset(activeYear);
                this.activeYear = activeYear;
                this.scrollToActiveMonth();
            });

        // Smooth scroll to activeYear after scrolling is done
        touchstart$
            .pipe(
                switchMap(() => touchend$),
                switchMap(() =>
                    race<unknown>(
                        yearsScrollRef.elementScrolled(),
                        timer(SCROLL_DEBOUNCE_TIME),
                    ).pipe(
                        debounceTime(SCROLL_DEBOUNCE_TIME * 2),
                        take(1),
                        takeUntil(touchstart$),
                    ),
                ),
                takeUntil(this.destroy$),
            )
            .subscribe(() => {
                this.scrollToActiveYear('smooth');
            });
    }

    private initMonthScroll() {
        const {monthsScrollRef} = this;

        if (!monthsScrollRef) {
            return;
        }

        const touchstart$ = typedFromEvent(
            monthsScrollRef.elementRef.nativeElement,
            'touchstart',
        );
        const touchend$ = typedFromEvent(
            monthsScrollRef.elementRef.nativeElement,
            'touchend',
        );

        // Smooth scroll to closest month after scrolling is done
        touchstart$
            .pipe(
                switchMapTo(touchend$),
                switchMapTo(
                    race<unknown>(
                        monthsScrollRef.elementScrolled(),
                        timer(SCROLL_DEBOUNCE_TIME),
                    ).pipe(
                        debounceTime(SCROLL_DEBOUNCE_TIME * 2),
                        take(1),
                        takeUntil(touchstart$),
                    ),
                ),
                takeUntil(this.destroy$),
            )
            .subscribe(() => {
                this.scrollToActiveMonth('smooth');
            });
    }

    private scrollToActiveYear(behavior?: ScrollBehavior) {
        if (this.yearsScrollRef) {
            this.yearsScrollRef.scrollToIndex(
                Math.max(this.activeYear - STARTING_YEAR - 2, 0),
                behavior,
            );
        }
    }

    private scrollToActiveMonth(behavior?: ScrollBehavior) {
        if (this.monthsScrollRef) {
            this.monthsScrollRef.scrollToIndex(this.activeMonth, behavior);
        }
    }

    private isYearActive(index: number): boolean {
        return index === this.activeYear;
    }

    private monthToYear(month: number): number {
        return Math.ceil((month + 1) / MONTHS_IN_YEAR) + STARTING_YEAR - 1;
    }

    private getMonthOffset(year: number): number {
        return (year - this.activeYear) * MONTHS_IN_YEAR;
    }
}
