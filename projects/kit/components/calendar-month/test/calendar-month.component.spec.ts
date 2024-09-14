import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TuiDay, TuiMonth, TuiMonthRange, TuiYear} from '@taiga-ui/cdk';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {TuiCalendarMonth} from '@taiga-ui/kit';

const TODAY = TuiDay.currentLocal();

describe('CalendarMonth', () => {
    @Component({
        standalone: true,
        imports: [TuiCalendarMonth],
        template: `
            <tui-calendar-month
                [disabledItemHandler]="disabledItemHandler"
                [max]="max"
                [min]="min"
                [value]="value"
                [(year)]="year"
            ></tui-calendar-month>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        @ViewChild(TuiCalendarMonth, {static: true})
        public component!: TuiCalendarMonth;

        public year = new TuiYear(TODAY.year);

        public min = TODAY.append({year: -2});
        public max = TODAY.append({year: 2});
        public value = TODAY;
        public month = TuiMonth.currentLocal();
        public disabledItemHandler = (item: TuiMonth): boolean => item.month === 10;
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;
    let component: TuiCalendarMonth;

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

    describe('getItemRange', () => {
        it('returns null if no value', () => {
            const month = new TuiMonth(TODAY.year, 7);

            component.value = null;

            expect(component.getItemRange(month)).toBeNull();
        });

        it('returns active if value is single month choice', () => {
            const month = new TuiMonth(TODAY.year, 7);

            component.value = month;

            expect(component.getItemRange(month)).toBe('active');
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
