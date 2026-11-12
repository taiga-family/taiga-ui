import {
    type CdkVirtualScrollViewport,
    type VirtualScrollStrategy,
} from '@angular/cdk/scrolling';
import {
    afterNextRender,
    afterRenderEffect,
    computed,
    inject,
    INJECTOR,
} from '@angular/core';
import {WA_IS_IOS} from '@ng-web-apis/platform';
import {DAYS_IN_WEEK, MONTHS_IN_YEAR, TuiDay} from '@taiga-ui/cdk/date-time';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {TUI_CALENDAR_OPTIONS} from '@taiga-ui/core/components/calendar';
import {distinctUntilChanged, Subject} from 'rxjs';

import {
    ANDROID_LABEL,
    ANDROID_WEEK,
    BUFFER,
    IOS_LABEL,
    IOS_WEEK,
    RANGE,
    STARTING_YEAR,
} from './mobile-calendar.const';

const MONTH_COUNT = RANGE * MONTHS_IN_YEAR;

export class TuiMobileCalendarStrategy implements VirtualScrollStrategy {
    private readonly injector = inject(INJECTOR);
    private readonly isIOS = inject(WA_IS_IOS);
    private readonly weekStart = inject(TUI_CALENDAR_OPTIONS).weekStart;
    private readonly offsets = computed(() => this.getMonthOffsets(this.weekStart()));
    private readonly destroy$ = new Subject<void>();
    private readonly index$ = new Subject<number>();
    private monthOffsets = this.offsets();
    private firstVisibleIndex = 0;
    private viewport: CdkVirtualScrollViewport | null = null;

    public readonly scrolledIndexChange = this.index$.pipe(distinctUntilChanged());

    constructor() {
        afterRenderEffect({
            write: () => {
                const offsets = this.offsets();

                if (!this.viewport || offsets === this.monthOffsets) {
                    return;
                }

                // Let CDK finish any pending render before changing the spacer.
                queueMicrotask(() => this.updateMonthOffsets(offsets));
            },
        });
    }

    public attach(viewport: CdkVirtualScrollViewport): void {
        this.viewport = viewport;
        this.monthOffsets = this.offsets();
        viewport.setTotalContentSize(this.getOffsetForIndex(MONTH_COUNT));
        this.updateRenderedRange(viewport);
    }

    public detach(): void {
        this.index$.complete();
        this.viewport = null;
        this.destroy$.next();
        this.destroy$.complete();
    }

    public onContentScrolled(): void {
        if (this.viewport) {
            this.updateRenderedRange(this.viewport);
        }
    }

    public onDataLengthChanged(): void {}

    public onContentRendered(): void {
        // In zoneless mode, CDK can apply the transform before the new months render.
        this.viewport?.setRenderedContentOffset(
            this.getOffsetForIndex(this.viewport?.getRenderedRange().start ?? 0),
        );
    }

    public onRenderedOffsetChanged(): void {}

    public scrollToIndex(index: number, behavior: ScrollBehavior): void {
        this.viewport?.scrollToOffset(this.getOffsetForIndex(index), behavior);
    }

    private getMonthOffsets(weekStart: number): readonly number[] {
        const labelHeight = this.isIOS ? IOS_LABEL : ANDROID_LABEL;
        const weekHeight = this.isIOS ? IOS_WEEK : ANDROID_WEEK;
        const offsets = [0];
        let offset = 0;

        for (let index = 0; index < MONTH_COUNT; index++) {
            const firstDay = new TuiDay(
                STARTING_YEAR + Math.floor(index / MONTHS_IN_YEAR),
                index % MONTHS_IN_YEAR,
                1,
            );

            const leadingDays =
                (firstDay.dayOfWeek(false) - weekStart + DAYS_IN_WEEK) % DAYS_IN_WEEK;

            const weeks = Math.ceil((leadingDays + firstDay.daysCount) / DAYS_IN_WEEK);

            offset += labelHeight + weeks * weekHeight;
            offsets.push(offset);
        }

        return offsets;
    }

    private getOffsetForIndex(index: number): number {
        return this.monthOffsets[tuiClamp(index, 0, MONTH_COUNT)]!;
    }

    private updateMonthOffsets(offsets: readonly number[]): void {
        const viewport = this.viewport;

        if (!viewport) {
            return;
        }

        const index = this.firstVisibleIndex;

        this.monthOffsets = offsets;
        viewport.setTotalContentSize(this.getOffsetForIndex(MONTH_COUNT));
        this.onContentRendered();

        afterNextRender(
            {write: () => this.scrollToIndex(index, 'instant')},
            {injector: this.injector},
        );
    }

    private getIndexForOffset(offset: number): number {
        let start = 0;
        let end = MONTH_COUNT;

        while (start < end) {
            const index = Math.floor((start + end) / 2);
            const midpoint =
                (this.monthOffsets[index]! + this.monthOffsets[index + 1]!) / 2;

            if (offset < midpoint) {
                end = index;
            } else {
                start = index + 1;
            }
        }

        return start;
    }

    private updateRenderedRange(viewport: CdkVirtualScrollViewport): void {
        const offset = viewport.measureScrollOffset();
        const {start, end} = viewport.getRenderedRange();
        const viewportSize = viewport.getViewportSize();
        const dataLength = viewport.getDataLength();
        const newRange = {start, end};

        this.firstVisibleIndex = Math.min(
            this.getIndexForOffset(offset),
            MONTH_COUNT - 1,
        );

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
        this.index$.next(this.firstVisibleIndex);
    }
}
