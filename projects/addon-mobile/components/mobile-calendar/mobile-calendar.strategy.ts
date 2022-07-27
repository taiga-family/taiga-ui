import {CdkVirtualScrollViewport, VirtualScrollStrategy} from '@angular/cdk/scrolling';
import {MONTHS_IN_YEAR, tuiPure, TuiScrollService} from '@taiga-ui/cdk';
import {Observable, Subject} from 'rxjs';
import {distinctUntilChanged} from 'rxjs/operators';

import {
    ANDROID_CYCLE,
    BUFFER,
    IOS_CYCLE,
    RANGE,
    YEARLY_CYCLE,
} from './mobile-calendar.const';

const ANDROID_CYCLE_HEIGHT = reduceCycle(ANDROID_CYCLE);
const IOS_CYCLE_HEIGHT = reduceCycle(IOS_CYCLE);

function reduceCycle(
    cycle: ReadonlyArray<readonly number[]>,
    lastYear: number = 28,
    lastMonth: number = 12,
): number {
    return cycle.reduce(
        (total, year, yearIndex) =>
            yearIndex <= lastYear
                ? total +
                  year.reduce(
                      (sum, month, monthIndex) =>
                          yearIndex < lastYear ||
                          (yearIndex === lastYear && monthIndex < lastMonth)
                              ? sum + month
                              : sum,
                      0,
                  )
                : total,
        0,
    );
}

/**
 * This scroll strategy is hard wired with styles for iOS and Android.
 * It is dependent on month height on those platforms and is designed to
 * work for {@link TuiMobileCalendarComponent} with years 1906 to 2102
 */
export class TuiMobileCalendarStrategy implements VirtualScrollStrategy {
    private readonly index$ = new Subject<number>();

    private viewport: CdkVirtualScrollViewport | null = null;

    constructor(
        private readonly isIos: boolean,
        private readonly scrollService: TuiScrollService,
    ) {}

    @tuiPure
    get scrolledIndexChange(): Observable<number> {
        return this.index$.pipe(distinctUntilChanged());
    }

    attach(viewport: CdkVirtualScrollViewport): void {
        const cycle = this.isIos ? IOS_CYCLE_HEIGHT : ANDROID_CYCLE_HEIGHT;

        this.viewport = viewport;
        this.viewport.setTotalContentSize(cycle * 7);
        this.updateRenderedRange(this.viewport);
    }

    detach(): void {
        this.index$.complete();
        this.viewport = null;
    }

    onContentScrolled(): void {
        if (this.viewport) {
            this.updateRenderedRange(this.viewport);
        }
    }

    /** These do not matter for this case */
    onDataLengthChanged(): void {}
    onContentRendered(): void {}
    onRenderedOffsetChanged(): void {}

    scrollToIndex(index: number, behavior: ScrollBehavior): void {
        if (!this.viewport) {
            return;
        }

        const scrollTop = this.getOffsetForIndex(index);

        if (behavior !== `smooth`) {
            this.viewport.scrollToOffset(scrollTop, behavior);

            return;
        }

        this.scrollService
            .scroll$(this.viewport.elementRef.nativeElement, scrollTop)
            .subscribe();
    }

    private getOffsetForIndex(index: number): number {
        const month = index % MONTHS_IN_YEAR;
        const year = (index - month) / MONTHS_IN_YEAR;

        return this.computeHeight(year, month);
    }

    private getIndexForOffset(offset: number): number {
        const cycle = this.isIos ? IOS_CYCLE : ANDROID_CYCLE;
        const cycleHeight = this.isIos ? IOS_CYCLE_HEIGHT : ANDROID_CYCLE_HEIGHT;
        const remainder = offset % cycleHeight;
        const years = ((offset - remainder) / cycleHeight) * YEARLY_CYCLE;

        let accumulator = 0;

        for (let year = 0; year < cycle.length; year++) {
            for (let month = 0; month < cycle[year].length; month++) {
                accumulator += cycle[year][month];

                if (accumulator - cycle[year][month] / 2 > remainder) {
                    return Math.max((years + year) * MONTHS_IN_YEAR + month, 0);
                }
            }
        }

        return RANGE;
    }

    private computeHeight(year: number, month?: number): number {
        const cycle = this.isIos ? IOS_CYCLE : ANDROID_CYCLE;
        const remainder = year % YEARLY_CYCLE;
        const remainderHeight = reduceCycle(cycle, remainder, month);
        const fullCycles = (year - remainder) / YEARLY_CYCLE;
        const fullCyclesHeight = this.isIos
            ? fullCycles * IOS_CYCLE_HEIGHT
            : fullCycles * ANDROID_CYCLE_HEIGHT;

        return fullCyclesHeight + remainderHeight;
    }

    private updateRenderedRange(viewport: CdkVirtualScrollViewport): void {
        const offset = viewport.measureScrollOffset();
        const {start, end} = viewport.getRenderedRange();
        const viewportSize = viewport.getViewportSize();
        const dataLength = viewport.getDataLength();
        const newRange = {start, end};
        const firstVisibleIndex = this.getIndexForOffset(offset);
        const startBuffer = offset - this.getOffsetForIndex(start);

        if (startBuffer < BUFFER && start !== 0) {
            newRange.start = Math.max(0, this.getIndexForOffset(offset - BUFFER * 2));
            newRange.end = Math.min(
                dataLength,
                this.getIndexForOffset(offset + viewportSize + BUFFER),
            );
        } else {
            const endBuffer = this.getOffsetForIndex(end) - offset - viewportSize;

            if (endBuffer < BUFFER && end !== dataLength) {
                newRange.start = Math.max(0, this.getIndexForOffset(offset - BUFFER));
                newRange.end = Math.min(
                    dataLength,
                    this.getIndexForOffset(offset + viewportSize + BUFFER * 2),
                );
            }
        }

        viewport.setRenderedRange(newRange);
        viewport.setRenderedContentOffset(this.getOffsetForIndex(newRange.start));
        this.index$.next(firstVisibleIndex);
    }
}
