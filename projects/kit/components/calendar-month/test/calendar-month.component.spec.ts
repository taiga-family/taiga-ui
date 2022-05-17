import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiDay, TuiMonth, TuiMonthRange, TuiYear} from '@taiga-ui/cdk';
import {TuiInteractiveState, TuiRangeState} from '@taiga-ui/core';
import {configureTestSuite} from '@taiga-ui/testing';

import {TuiCalendarMonthComponent} from '../calendar-month.component';
import {TuiCalendarMonthModule} from '../calendar-month.module';

const TODAY = TuiDay.currentLocal();

describe('CalendarMonth', () => {
    @Component({
        template: `
            <tui-calendar-month
                [value]="value"
                [disabledItemHandler]="disabledItemHandler"
                [min]="min"
                [max]="max"
                [(year)]="year"
            ></tui-calendar-month>
        `,
    })
    class TestComponent {
        @ViewChild(TuiCalendarMonthComponent, {static: true})
        component!: TuiCalendarMonthComponent;

        year = new TuiYear(TODAY.year);

        min = TODAY.append({year: -2});
        max = TODAY.append({year: 2});
        value = TODAY;
        month = TuiMonth.currentLocal();
        disabledItemHandler = (item: TuiMonth): boolean => item.month === 10;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiCalendarMonthComponent;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiCalendarMonthModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        component = testComponent.component;
        fixture.detectChanges();
    });

    describe('isSingle', () => {
        it('returns true if there is a value and it is a month', () => {
            component.value = TODAY;

            expect(component.isSingle).toBe(true);
        });

        it('returns true if there is a value and it is a single month range', () => {
            component.value = new TuiMonthRange(TODAY, TODAY);

            expect(component.isSingle).toBe(true);
        });

        it('returns false if there is no value', () => {
            component.value = null;

            expect(component.isSingle).toBe(false);
        });
    });

    describe('getItemState', () => {
        it('returns disabled if there is', () => {
            const disabledMonth = new TuiMonth(TODAY.year, 10);

            expect(component.getItemState(disabledMonth)).toBe(
                TuiInteractiveState.Disabled,
            );
        });

        it('returns pressed if there is', () => {
            const pressedMonth = new TuiMonth(TODAY.year, 3);

            component.pressedItem = pressedMonth;

            expect(component.getItemState(pressedMonth)).toBe(
                TuiInteractiveState.Pressed,
            );
        });

        it('returns hovered if there is', () => {
            const hoveredItem = new TuiMonth(TODAY.year, 3);

            component.hoveredItem = hoveredItem;

            expect(component.getItemState(hoveredItem)).toBe(TuiInteractiveState.Hovered);
        });

        it('returns null if there is no state', () => {
            const ordinaryItem = new TuiMonth(TODAY.year, 3);

            expect(component.getItemState(ordinaryItem)).toBe(null);
        });
    });

    describe('isItemInsideRange', () => {
        it('returns false if no value', () => {
            component.value = null;

            const candidate = new TuiMonth(TODAY.year, 5);

            expect(component.isItemInsideRange(candidate)).toBe(false);
        });

        it('returns false if value is month', () => {
            const candidate = new TuiMonth(TODAY.year, 5);

            component.value = candidate;

            expect(component.isItemInsideRange(candidate)).toBe(false);
        });

        it('returns false if it is not hovered item inside singe month range', () => {
            const candidate = new TuiMonth(TODAY.year, 5);

            component.value = new TuiMonthRange(
                new TuiMonth(TODAY.year, 5),
                new TuiMonth(TODAY.year, 5),
            );

            expect(component.isItemInsideRange(candidate)).toBe(false);
        });

        it('returns true if it is hovered item inside singe month range', () => {
            const candidate = new TuiMonth(TODAY.year, 5);

            component.hoveredItem = candidate;
            component.value = new TuiMonthRange(
                new TuiMonth(TODAY.year, 5),
                new TuiMonth(TODAY.year, 5),
            );

            expect(component.isItemInsideRange(candidate)).toBe(false);
        });

        it('returns true if value inside a month range', () => {
            const candidate = new TuiMonth(TODAY.year, 5);

            component.value = new TuiMonthRange(
                new TuiMonth(TODAY.year, 2),
                new TuiMonth(TODAY.year, 7),
            );

            expect(component.isItemInsideRange(candidate)).toBe(true);
        });
    });

    describe('getItemRange', () => {
        it('returns null if no value', () => {
            const month = new TuiMonth(TODAY.year, 7);

            component.value = null;

            expect(component.getItemRange(month)).toBe(null);
        });

        it('returns single if value is single month choice', () => {
            const month = new TuiMonth(TODAY.year, 7);

            component.value = month;

            expect(component.getItemRange(month)).toBe(TuiRangeState.Single);
        });

        it('returns start if item is start of range', () => {
            const month = new TuiMonth(TODAY.year, 7);

            component.value = new TuiMonthRange(month, month.append({month: 2}));

            expect(component.getItemRange(month)).toBe(TuiRangeState.Start);
        });

        it('returns end if item is start of range', () => {
            const month = new TuiMonth(TODAY.year, 7);

            component.value = new TuiMonthRange(month.append({month: -2}), month);

            expect(component.getItemRange(month)).toBe(TuiRangeState.End);
        });

        it('returns end if hovered item before item', () => {
            const month = new TuiMonth(TODAY.year, 7);

            component.value = new TuiMonthRange(month, month);
            component.hoveredItem = new TuiMonth(TODAY.year, 4);

            expect(component.getItemRange(month)).toBe(TuiRangeState.End);
        });
    });

    describe('year change', () => {
        it('append year on next', () => {
            const year = new TuiYear(TODAY.year);

            component.year = year;

            component.onNextYear();

            expect(component.year.year).toBe(year.year + 1);
            expect(testComponent.year.year).toBe(year.year + 1);
        });

        it('append year on next', () => {
            const year = new TuiYear(TODAY.year);

            component.year = year;

            component.onPreviousYear();

            expect(component.year.year).toBe(year.year - 1);
            expect(testComponent.year.year).toBe(year.year - 1);
        });
    });
});
