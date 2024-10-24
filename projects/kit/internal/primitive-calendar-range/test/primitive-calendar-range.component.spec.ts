import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiDay, TuiDayRange, TuiMonth} from '@taiga-ui/cdk';
import {TUI_DEFAULT_MARKER_HANDLER, TuiMarkerHandler} from '@taiga-ui/core';
import {
    TuiPrimitiveCalendarRangeComponent,
    TuiPrimitiveCalendarRangeModule,
} from '@taiga-ui/kit';

describe('PrimitiveRangeCalendar component', () => {
    @Component({
        template: `
            <tui-primitive-calendar-range
                [defaultViewedMonthFirst]="defaultViewedMonthFirst"
                [defaultViewedMonthSecond]="defaultViewedMonthSecond"
                [markerHandler]="markerHandler"
                [value]="value"
            ></tui-primitive-calendar-range>
        `,
    })
    class TestComponent {
        @ViewChild(TuiPrimitiveCalendarRangeComponent, {static: true})
        component!: TuiPrimitiveCalendarRangeComponent;

        defaultViewedMonthFirst = TuiMonth.currentLocal();
        defaultViewedMonthSecond = TuiMonth.currentLocal().append({month: 1});

        value: TuiDayRange | null = null;

        markerHandler: TuiMarkerHandler = TUI_DEFAULT_MARKER_HANDLER;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiPrimitiveCalendarRangeComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [TuiPrimitiveCalendarRangeModule, NoopAnimationsModule],
            declarations: [TestComponent],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        component = testComponent.component;
    });

    describe('viewedMonthFirst', () => {
        it('When initialized without value, sets defaultViewedMonthFirst', () => {
            expect(component.userViewedMonthFirst).toBe(
                component.defaultViewedMonthFirst,
            );
        });

        it('When initialized without value and defaultViewedMonthSecond shows the month of the local date', () => {
            expect(component.userViewedMonthFirst.toString()).toBe(
                TuiMonth.currentLocal().toString(),
            );
        });

        it('Returns max when initialized with max less than default', () => {
            const maxDate = new TuiDay(2000, 1, 1);

            component.max = maxDate;
            component.ngOnInit();
            expect(component.userViewedMonthFirst).toEqual(maxDate.append({month: -1}));
        });

        it('Returns min when initialized with default less than min', () => {
            const minDate = TuiDay.currentLocal().append({month: 2});

            component.min = minDate;
            component.ngOnInit();
            expect(component.userViewedMonthFirst).toEqual(minDate);
        });

        it('When initialized input defaultViewedMonthFirst, shows defaultViewedMonthFirst', () => {
            const month = new TuiMonth(2020, 5);

            component.defaultViewedMonthFirst = month;
            component.ngOnInit();

            expect(component.userViewedMonthFirst).toBe(month);
        });
    });

    describe('viewedMonthSecond', () => {
        it('When initialized without value, sets defaultViewedMonthSecond', () => {
            expect(component.userViewedMonthSecond).toBe(
                component.defaultViewedMonthSecond,
            );
        });

        it('When initialized without value and defaultViewedMonthSecond shows the next local date after month', () => {
            const formattedNextMonth = TuiMonth.currentLocal()
                .append({
                    month: 1,
                })
                .toString();

            expect(component.userViewedMonthSecond.toString()).toBe(formattedNextMonth);
        });

        it('Returns max when initialized with max less than default', () => {
            const maxDate = new TuiDay(2000, 1, 1);

            component.max = maxDate;
            component.ngOnInit();
            expect(component.userViewedMonthSecond).toEqual(maxDate);
        });

        it('Returns min when initialized with default less than min', () => {
            const minDate = TuiDay.currentLocal().append({month: 2});

            component.min = minDate;
            component.ngOnInit();
            expect(component.userViewedMonthSecond).toEqual(minDate.append({month: 1}));
        });

        it('When min later than given month, return next month after min', () => {
            const minDate = TuiDay.currentLocal().append({month: 1});

            component.min = minDate;
            component.ngOnInit();

            expect(component.userViewedMonthSecond).toEqual(minDate.append({month: 1}));
        });

        it('When initialized input defaultViewedMonthSecond, shows defaultViewedMonthSecond', () => {
            const month = new TuiMonth(2020, 5);

            component.defaultViewedMonthSecond = month;
            component.ngOnInit();

            expect(component.userViewedMonthSecond).toBe(month);
        });
    });

    describe('cappedUserViewedMonthSecond', () => {
        it('returns userViewedMonthSecond if it is less than max', () => {
            expect(component.cappedUserViewedMonthSecond).toBe(
                component.userViewedMonthSecond,
            );
        });

        it('returns max if it is less than userViewedMonthSecond', () => {
            const day = new TuiDay(2019, 5, 20);

            component.max = day;
            component.userViewedMonthSecond = day.append({day: 1});

            expect(component.cappedUserViewedMonthSecond).toBe(day);
        });
    });

    describe('defaultViewedMonths updating', () => {
        const defaultMonth = TuiMonth.currentLocal();
        const updatedMonth = TuiMonth.currentLocal().append({
            year: 1,
        });

        it('If other input updates after defaultViewedMonth was updated, new viewed months do not change', () => {
            testComponent.defaultViewedMonthFirst = updatedMonth;
            testComponent.defaultViewedMonthSecond = updatedMonth.append({
                month: 1,
            });
            fixture.detectChanges();

            testComponent.markerHandler = (day: TuiDay) =>
                day.day % 2 === 0 ? ['first'] : ['second'];
            fixture.detectChanges();

            expect(component.userViewedMonthFirst.toString()).toBe(
                updatedMonth.toString(),
            );
            expect(component.userViewedMonthSecond.toString()).toBe(
                updatedMonth.append({month: 1}).toString(),
            );
        });

        it('If value not selected, updating defaultViewedMonth change viewed months', () => {
            testComponent.defaultViewedMonthFirst = updatedMonth;
            testComponent.defaultViewedMonthSecond = updatedMonth.append({
                month: 1,
            });
            fixture.detectChanges();

            expect(component.userViewedMonthFirst.toString()).toBe(
                updatedMonth.toString(),
            );
            expect(component.userViewedMonthSecond.toString()).toBe(
                updatedMonth.append({month: 1}).toString(),
            );
        });

        it('If value selected, updating defaultViewedMonth do not change viewed month', () => {
            testComponent.value = new TuiDayRange(
                new TuiDay(2024, 9, 25),
                new TuiDay(2024, 9, 25),
            );
            fixture.detectChanges();

            testComponent.defaultViewedMonthFirst = updatedMonth;
            testComponent.defaultViewedMonthSecond = updatedMonth.append({
                month: 1,
            });
            fixture.detectChanges();

            expect(component.userViewedMonthFirst.toString()).toBe(
                defaultMonth.toString(),
            );
            expect(component.userViewedMonthSecond.toString()).toBe(
                defaultMonth.append({month: 1}).toString(),
            );
        });
    });
});
