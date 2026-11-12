import {type CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import {
    ChangeDetectionStrategy,
    Component,
    provideExperimentalZonelessChangeDetection,
    signal,
} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {WA_IS_IOS} from '@ng-web-apis/platform';
import {TuiMobileCalendarSheet} from '@taiga-ui/addon-mobile';
import {MONTHS_IN_YEAR, TuiDayOfWeek, TuiMonth} from '@taiga-ui/cdk';
import {tuiCalendarOptionsProvider} from '@taiga-ui/core';
import {capture, instance, mock, verify, when} from 'ts-mockito';

import {IOS_WEEK, RANGE, STARTING_YEAR} from '../mobile-calendar.const';
import {TuiMobileCalendarStrategy} from '../mobile-calendar.strategy';

describe('TuiMobileCalendarStrategy', () => {
    const weekStart = signal<0 | 1>(TuiDayOfWeek.Sunday);
    const month = new TuiMonth(2021, 7);
    const index = (month.year - STARTING_YEAR) * MONTHS_IN_YEAR + month.month;
    const monthCount = RANGE * MONTHS_IN_YEAR;

    @Component({
        imports: [TuiMobileCalendarSheet],
        template: '<tui-mobile-calendar-sheet [month]="month" />',
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [
            TuiMobileCalendarStrategy,
            tuiCalendarOptionsProvider({weekStart}),
            {provide: WA_IS_IOS, useValue: true},
        ],
    })
    class Test {
        protected readonly month = month;
    }

    it('updates the rendered sheets and keeps the current month aligned when the week start changes', async () => {
        TestBed.configureTestingModule({
            providers: [provideExperimentalZonelessChangeDetection()],
        });

        const fixture = TestBed.createComponent(Test);
        const strategy = fixture.debugElement.injector.get(TuiMobileCalendarStrategy);
        const viewport = mock<CdkVirtualScrollViewport>();
        const element: HTMLElement = fixture.nativeElement;
        const rows = (): number => element.querySelectorAll('.t-row').length;

        when(viewport.getRenderedRange()).thenReturn({start: index, end: index + 3});
        when(viewport.getViewportSize()).thenReturn(200);
        when(viewport.getDataLength()).thenReturn(monthCount);
        when(viewport.measureScrollOffset()).thenReturn(0);
        strategy.attach(instance(viewport));
        strategy.scrollToIndex(index, 'instant');

        const [sundayOffset] = capture(viewport.scrollToOffset).last();
        const [sundayContentSize] = capture(viewport.setTotalContentSize).last();

        when(viewport.measureScrollOffset()).thenReturn(sundayOffset);
        strategy.onContentScrolled();
        fixture.detectChanges();
        expect(rows()).toBe(5);

        weekStart.set(TuiDayOfWeek.Monday);
        fixture.detectChanges();
        await Promise.resolve();
        await fixture.whenStable();

        expect(rows()).toBe(6);

        const [mondayOffset] = capture(viewport.scrollToOffset).last();

        expect(mondayOffset).toBe(sundayOffset + IOS_WEEK);
        verify(viewport.setRenderedContentOffset(mondayOffset)).once();
        expect(capture(viewport.setTotalContentSize).last()[0]).toBe(
            sundayContentSize - IOS_WEEK,
        );

        strategy.scrollToIndex(index + 1, 'instant');
        const [septemberOffset] = capture(viewport.scrollToOffset).last();

        expect(septemberOffset - mondayOffset).toBe(7 * IOS_WEEK);
    });
});
