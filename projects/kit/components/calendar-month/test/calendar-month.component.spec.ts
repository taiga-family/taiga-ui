import {ChangeDetectionStrategy, Component, viewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiDay, TuiMonth, TuiMonthRange, TuiYear} from '@taiga-ui/cdk';
import {provideTaiga} from '@taiga-ui/core';
import {TuiCalendarMonth} from '@taiga-ui/kit';

const TODAY = TuiDay.currentLocal();

describe('CalendarMonth', () => {
    @Component({
        imports: [TuiCalendarMonth],
        template: `
            <tui-calendar-month
                [disabledItemHandler]="disabledItemHandler"
                [max]="max"
                [min]="min"
                [value]="value"
                [(year)]="year"
            />
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly component = viewChild.required(TuiCalendarMonth);
        public year: TuiYear | undefined = new TuiYear(TODAY.year);
        public min = TODAY.append({year: -2});
        public max = TODAY.append({year: 2});
        public value: TuiMonth = TODAY;
        public month = TuiMonth.currentLocal();
        public disabledItemHandler = (item: TuiMonth): boolean => item.month === 10;
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;
    let component: TuiCalendarMonth;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [provideTaiga()],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        component = testComponent.component();
        fixture.detectChanges();
    });

    describe('getItemRange', () => {
        it('returns null if no value', () => {
            const month = new TuiMonth(TODAY.year, 7);

            component.value.set(null);

            expect(component.getItemRange(month)).toBeNull();
        });

        it('returns active if value is single month choice', () => {
            const month = new TuiMonth(TODAY.year, 7);

            component.value.set(month);

            expect(component.getItemRange(month)).toBe('active');
        });

        it('returns start if item is start of range', () => {
            const month = new TuiMonth(TODAY.year, 7);

            component.value.set(new TuiMonthRange(month, month.append({month: 2})));

            expect(component.getItemRange(month)).toBe('start');
        });

        it('returns end if item is start of range', () => {
            const month = new TuiMonth(TODAY.year, 7);

            component.value.set(new TuiMonthRange(month.append({month: -2}), month));

            expect(component.getItemRange(month)).toBe('end');
        });

        it('returns end if hovered item before item', () => {
            const month = new TuiMonth(TODAY.year, 7);

            component.value.set(new TuiMonthRange(month, month));
            component.hoveredItem = new TuiMonth(TODAY.year, 4);

            expect(component.getItemRange(month)).toBe('end');
        });
    });

    describe('year change', () => {
        it('append year by onNextYear', () => {
            const year = new TuiYear(TODAY.year);

            testComponent.year = year;

            component.onNextYear();

            expect(testComponent.year.year).toBe(year.year + 1);
        });

        it('reduce year by onPreviousYear', () => {
            const year = new TuiYear(TODAY.year);

            testComponent.year = year;

            component.onPreviousYear();

            expect(testComponent.year.year).toBe(year.year - 1);
        });

        it('use year from value', () => {
            const year = new TuiYear(TODAY.year);

            testComponent.year = undefined;
            testComponent.value = new TuiMonth(year.year, 1);

            component.onPreviousYear();

            expect(testComponent.year).toEqual(year.append({year: -1}));
        });
    });
});
