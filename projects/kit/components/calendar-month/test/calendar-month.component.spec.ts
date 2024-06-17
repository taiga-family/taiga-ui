import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TuiDay, TuiMonth, TuiMonthRange, TuiYear} from '@taiga-ui/cdk';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {TuiCalendarMonthComponent} from '@taiga-ui/kit';

const TODAY = TuiDay.currentLocal();

describe('CalendarMonth', () => {
    @Component({
        standalone: true,
        imports: [TuiCalendarMonthComponent],
        template: `
            <tui-calendar-month
                [disabledItemHandler]="disabledItemHandler"
                [max]="max"
                [min]="min"
                [value]="value"
                [(year)]="year"
            ></tui-calendar-month>
        `,
    })
    class Test {
        @ViewChild(TuiCalendarMonthComponent, {static: true})
        public component!: TuiCalendarMonthComponent;

        public year = new TuiYear(TODAY.year);

        public min = TODAY.append({year: -2});
        public max = TODAY.append({year: 2});
        public value = TODAY;
        public month = TuiMonth.currentLocal();
        public disabledItemHandler = (item: TuiMonth): boolean => item.month === 10;
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;
    let component: TuiCalendarMonthComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
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

            expect(component.getItemRange(month)).toBeNull();
        });

        it('returns single if value is single month choice', () => {
            const month = new TuiMonth(TODAY.year, 7);

            component.value = month;

            expect(component.getItemRange(month)).toBe('single');
        });

        it('returns start if item is start of range', () => {
            const month = new TuiMonth(TODAY.year, 7);

            component.value = new TuiMonthRange(month, month.append({month: 2}));

            expect(component.getItemRange(month)).toBe('start');
        });

        it('returns end if item is start of range', () => {
            const month = new TuiMonth(TODAY.year, 7);

            component.value = new TuiMonthRange(month.append({month: -2}), month);

            expect(component.getItemRange(month)).toBe('end');
        });

        it('returns end if hovered item before item', () => {
            const month = new TuiMonth(TODAY.year, 7);

            component.value = new TuiMonthRange(month, month);
            component.hoveredItem = new TuiMonth(TODAY.year, 4);

            expect(component.getItemRange(month)).toBe('end');
        });
    });

    describe('year change', () => {
        it('append year by onNextYear', () => {
            const year = new TuiYear(TODAY.year);

            component.year = year;

            component.onNextYear();

            expect(component.year.year).toBe(year.year + 1);
            expect(testComponent.year.year).toBe(year.year + 1);
        });

        it('reduce year by onPreviousYear', () => {
            const year = new TuiYear(TODAY.year);

            component.year = year;

            component.onPreviousYear();

            expect(component.year.year).toBe(year.year - 1);
            expect(testComponent.year.year).toBe(year.year - 1);
        });
    });
});
