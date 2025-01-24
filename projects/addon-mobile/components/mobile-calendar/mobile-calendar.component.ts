import {
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import {AsyncPipe, DOCUMENT, NgForOf, NgIf} from '@angular/common';
import type {AfterViewInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    EventEmitter,
    inject,
    Input,
    NgZone,
    Output,
    ViewChild,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TuiMobileCalendarSheet} from '@taiga-ui/addon-mobile/components/mobile-calendar-sheet';
import {TuiRipple, TuiTouchable} from '@taiga-ui/addon-mobile/directives';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import {
    MONTHS_IN_YEAR,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiDay,
    TuiDayRange,
    TuiMonth,
} from '@taiga-ui/cdk/date-time';
import {
    tuiTypedFromEvent,
    tuiZonefree,
    tuiZonefreeScheduler,
} from '@taiga-ui/cdk/observables';
import {TuiMapperPipe} from '@taiga-ui/cdk/pipes/mapper';
import {TUI_IS_E2E, TUI_IS_IOS} from '@taiga-ui/cdk/tokens';
import type {TuiBooleanHandler, TuiMapper} from '@taiga-ui/cdk/types';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TUI_CALENDAR_SHEET_OPTIONS} from '@taiga-ui/core/components/calendar';
import {TuiLink} from '@taiga-ui/core/components/link';
import {TuiMonthPipe} from '@taiga-ui/core/pipes/month';
import {TuiOrderWeekDaysPipe} from '@taiga-ui/core/pipes/order-week-days';
import {
    TUI_ANIMATIONS_SPEED,
    TUI_CLOSE_WORD,
    TUI_COMMON_ICONS,
    TUI_SHORT_WEEK_DAYS,
} from '@taiga-ui/core/tokens';
import {tuiGetDuration} from '@taiga-ui/core/utils/miscellaneous';
import {
    TUI_CANCEL_WORD,
    TUI_CHOOSE_DAY_OR_RANGE_TEXTS,
    TUI_DONE_WORD,
} from '@taiga-ui/kit/tokens';
import {tuiToggleDay} from '@taiga-ui/kit/utils';
import type {MonoTypeOperatorFunction} from 'rxjs';
import {
    BehaviorSubject,
    debounceTime,
    delay,
    distinctUntilChanged,
    filter,
    identity,
    map,
    mergeMap,
    race,
    skip,
    switchMap,
    take,
    takeUntil,
    timer,
    windowToggle,
} from 'rxjs';

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

@Component({
    standalone: true,
    selector: 'tui-mobile-calendar',
    imports: [
        AsyncPipe,
        CdkFixedSizeVirtualScroll,
        CdkVirtualForOf,
        CdkVirtualScrollViewport,
        NgForOf,
        NgIf,
        TuiButton,
        TuiLink,
        TuiMapperPipe,
        TuiMobileCalendarSheet,
        TuiMonthPipe,
        TuiOrderWeekDaysPipe,
        TuiRipple,
        TuiTouchable,
    ],
    templateUrl: './mobile-calendar.template.html',
    styleUrls: ['./mobile-calendar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_MOBILE_CALENDAR_PROVIDERS,
    host: {
        '[class._ios]': 'isIOS',
        '[class._initialized]': 'initialized',
        '(mousedown.prevent)': '0',
    },
})
export class TuiMobileCalendar implements AfterViewInit {
    @ViewChild('yearsScrollRef')
    private readonly yearsScrollRef?: CdkVirtualScrollViewport;

    @ViewChild('monthsScrollRef')
    private readonly monthsScrollRef?: CdkVirtualScrollViewport;

    private readonly value$ = new BehaviorSubject<
        TuiDay | TuiDayRange | readonly TuiDay[] | null
    >(null);

    private readonly today = TuiDay.currentLocal();
    private activeYear = 0;
    private activeMonth = 0;
    private readonly destroyRef = inject(DestroyRef);
    private readonly doc = inject(DOCUMENT);
    private readonly speed = inject(TUI_ANIMATIONS_SPEED);
    private readonly ngZone = inject(NgZone);

    protected initialized = false;
    protected readonly isIOS = inject(TUI_IS_IOS);
    protected readonly isE2E = inject(TUI_IS_E2E);
    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly closeWord$ = inject(TUI_CLOSE_WORD);
    protected readonly cancelWord$ = inject(TUI_CANCEL_WORD);
    protected readonly doneWord$ = inject(TUI_DONE_WORD);
    protected readonly unorderedWeekDays$ = inject(TUI_SHORT_WEEK_DAYS);
    protected readonly chooseDayOrRangeTexts$ = inject(TUI_CHOOSE_DAY_OR_RANGE_TEXTS, {
        optional: true,
    });

    protected readonly years = Array.from({length: RANGE}, (_, i) => i + STARTING_YEAR);
    protected readonly months = Array.from(
        {length: RANGE * 12},
        (_, i) =>
            new TuiMonth(
                Math.floor(i / MONTHS_IN_YEAR) + STARTING_YEAR,
                i % MONTHS_IN_YEAR,
            ),
    );

    /**
     * @deprecated use static DI options instead
     * ```
     * tuiCalendarSheetOptionsProvider({rangeMode: boolean})
     * ```
     * TODO(v5): delete it
     */
    @Input()
    public single = !inject(TUI_CALENDAR_SHEET_OPTIONS).rangeMode;

    @Input()
    public multi = false;

    @Input()
    public min = TUI_FIRST_DAY;

    @Input()
    public max = TUI_LAST_DAY;

    @Input()
    public disabledItemHandler: TuiBooleanHandler<TuiDay> = TUI_FALSE_HANDLER;

    @Output()
    public readonly cancel = new EventEmitter<void>();

    @Output()
    public readonly confirm = new EventEmitter<
        TuiDay | TuiDayRange | readonly TuiDay[]
    >();

    @Output()
    public readonly valueChange = this.value$.pipe(
        skip(1),
        distinctUntilChanged((a, b) => a?.toString() === b?.toString()),
        map((x) => (!this.single && x instanceof TuiDay ? new TuiDayRange(x, x) : x)),
    );

    constructor() {
        inject(TUI_VALUE_STREAM)
            .pipe(takeUntilDestroyed())
            .subscribe((value) => {
                this.value = value;
            });
    }

    public ngAfterViewInit(): void {
        this.activeYear = this.initialYear;
        this.activeMonth = this.initialMonth;

        // Virtual scroll has not yet rendered items even in ngAfterViewInit
        this.waitScrolledChange();
    }

    public setYear(year: number): void {
        if (this.activeYear === year) {
            return;
        }

        this.activeMonth += this.getMonthOffset(year);
        this.activeYear = year;
        this.scrollToActiveYear('smooth');

        timer(0, tuiZonefreeScheduler(this.ngZone))
            .pipe(tuiZonefree(this.ngZone), takeUntilDestroyed(this.destroyRef))
            .subscribe(() => this.scrollToActiveMonth());
    }

    @Input()
    protected set value(value: TuiDay | TuiDayRange | readonly TuiDay[] | null) {
        this.value$.next(value);
    }

    protected get value(): TuiDay | TuiDayRange | readonly TuiDay[] | null {
        return this.value$.value;
    }

    protected get yearWidth(): number {
        return this.doc.documentElement.clientWidth / YEARS_IN_ROW;
    }

    protected onClose(): void {
        this.cancel.emit();
    }

    protected onConfirm(): void {
        if (this.value) {
            this.confirm.emit(this.value);
        } else {
            this.cancel.emit();
        }
    }

    protected onDayClick(day: TuiDay): void {
        if (this.single) {
            this.value = day;
        } else if (this.isMultiValue(this.value)) {
            this.value = tuiToggleDay(this.value, day);
        } else if (this.value instanceof TuiDay) {
            this.value = TuiDayRange.sort(this.value, day);
        } else if (this.value instanceof TuiDayRange) {
            this.value = day;
        } else if (!this.value) {
            this.value = day;
        }
    }

    protected getState(index: number): 'active' | 'adjacent' | null {
        if (this.isYearActive(index)) {
            return 'active';
        }

        if (this.isYearActive(index - 1) || this.isYearActive(index + 1)) {
            return 'adjacent';
        }

        return null;
    }

    protected onMonthChange(month: number): void {
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

    protected readonly disabledItemHandlerMapper: TuiMapper<
        [TuiBooleanHandler<TuiDay>, TuiDay, TuiDay],
        TuiBooleanHandler<TuiDay>
    > = (disabledItemHandler, min, max) => (item) =>
        item.dayBefore(min) ||
        (max !== null && item.dayAfter(max)) ||
        disabledItemHandler(item);

    private get initialYear(): number {
        if (!this.value) {
            return this.today.year;
        }

        if (this.value instanceof TuiDay) {
            return this.value.year;
        }

        if (!(this.value instanceof TuiDayRange)) {
            return this.value?.[0]?.year ?? this.today.year;
        }

        return this.value.to.year;
    }

    private get initialMonth(): number {
        if (!this.value) {
            return this.today.month + (this.today.year - STARTING_YEAR) * MONTHS_IN_YEAR;
        }

        if (this.value instanceof TuiDay) {
            return this.value.month + (this.value.year - STARTING_YEAR) * MONTHS_IN_YEAR;
        }

        if (!(this.value instanceof TuiDayRange)) {
            return (
                (this.value?.[0]?.month ?? this.today.month) +
                ((this.value?.[0]?.year ?? this.today.year) - STARTING_YEAR) *
                    MONTHS_IN_YEAR
            );
        }

        return (
            this.value.to.month + (this.value.to.year - STARTING_YEAR) * MONTHS_IN_YEAR
        );
    }

    private isMultiValue(day: unknown): day is readonly TuiDay[] | undefined {
        return !(day instanceof TuiDay) && !(day instanceof TuiDayRange) && this.multi;
    }

    private getYearsViewportSize(): number {
        return this.yearsScrollRef?.getViewportSize() || 0;
    }

    private updateViewportDimension(): void {
        this.yearsScrollRef?.checkViewportSize();
        this.monthsScrollRef?.checkViewportSize();
    }

    private lateInit(): MonoTypeOperatorFunction<number> {
        return this.getYearsViewportSize() > 0 ? identity : delay(200);
    }

    private waitScrolledChange(): void {
        this.updateViewportDimension();

        this.monthsScrollRef?.scrolledIndexChange
            .pipe(
                delay(tuiGetDuration(this.speed)),
                this.lateInit(),
                take(1),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe(() => {
                this.initialized = true;
                this.updateViewportDimension();
                this.initYearScroll();
                this.initMonthScroll();
                this.scrollToActiveYear();
                this.scrollToActiveMonth();
            });
    }

    private initYearScroll(): void {
        const {yearsScrollRef} = this;

        if (!yearsScrollRef) {
            return;
        }

        const touchstart$ = tuiTypedFromEvent(
            yearsScrollRef.elementRef.nativeElement,
            'touchstart',
            {passive: true},
        );
        const touchend$ = tuiTypedFromEvent(
            yearsScrollRef.elementRef.nativeElement,
            'touchend',
            {passive: true},
        );
        const click$ = tuiTypedFromEvent(
            yearsScrollRef.elementRef.nativeElement,
            'click',
        );

        // Refresh activeYear
        yearsScrollRef
            .elementScrolled()
            .pipe(
                // Ignore smooth scroll resulting from click on the exact year
                windowToggle(touchstart$, () => click$),
                mergeMap((x) => x),
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
                filter((activeYear) => activeYear !== this.activeYear),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe((activeYear) => {
                this.activeMonth += this.getMonthOffset(activeYear);
                this.activeYear = activeYear;
                this.scrollToActiveMonth();
            });

        // Smooth scroll to activeYear after scrolling is done
        touchstart$
            .pipe(
                switchMap(() => touchend$),
                switchMap(() =>
                    race(
                        yearsScrollRef.elementScrolled(),
                        timer(SCROLL_DEBOUNCE_TIME, tuiZonefreeScheduler(this.ngZone)),
                    ).pipe(
                        debounceTime(
                            SCROLL_DEBOUNCE_TIME * 2,
                            tuiZonefreeScheduler(this.ngZone),
                        ),
                        take(1),
                        takeUntil(touchstart$),
                    ),
                ),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe(() => this.scrollToActiveYear('smooth'));
    }

    private initMonthScroll(): void {
        const {monthsScrollRef} = this;

        if (!monthsScrollRef) {
            return;
        }

        const touchstart$ = tuiTypedFromEvent(
            monthsScrollRef.elementRef.nativeElement,
            'touchstart',
            {passive: true},
        );
        const touchend$ = tuiTypedFromEvent(
            monthsScrollRef.elementRef.nativeElement,
            'touchend',
            {passive: true},
        );

        // Smooth scroll to the closest month after scrolling is done
        touchstart$
            .pipe(
                switchMap(() => touchend$),
                switchMap(() =>
                    race(
                        monthsScrollRef.elementScrolled(),
                        timer(SCROLL_DEBOUNCE_TIME, tuiZonefreeScheduler(this.ngZone)),
                    ).pipe(
                        debounceTime(
                            SCROLL_DEBOUNCE_TIME * 2,
                            tuiZonefreeScheduler(this.ngZone),
                        ),
                        take(1),
                        takeUntil(touchstart$),
                    ),
                ),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe(() => this.scrollToActiveMonth('smooth'));
    }

    private scrollToActiveYear(behavior: ScrollBehavior = 'auto'): void {
        this.yearsScrollRef?.scrollToIndex(
            Math.max(this.activeYear - STARTING_YEAR - 2, 0),
            this.isE2E ? 'auto' : behavior,
        );
    }

    private scrollToActiveMonth(behavior: ScrollBehavior = 'auto'): void {
        this.monthsScrollRef?.scrollToIndex(
            this.activeMonth,
            this.isE2E ? 'auto' : behavior,
        );
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
