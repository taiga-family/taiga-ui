import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiDay, TuiMonth} from '@taiga-ui/cdk';
import {
    TuiPrimitiveCalendarRangeComponent,
    TuiPrimitiveCalendarRangeModule,
} from '@taiga-ui/kit';
import {configureTestSuite} from '@taiga-ui/testing';

describe(`PrimitiveRangeCalendar component`, () => {
    @Component({
        template: `
            <tui-primitive-calendar-range></tui-primitive-calendar-range>
        `,
    })
    class TestComponent {
        @ViewChild(TuiPrimitiveCalendarRangeComponent, {static: true})
        component!: TuiPrimitiveCalendarRangeComponent;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiPrimitiveCalendarRangeComponent;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiPrimitiveCalendarRangeModule, NoopAnimationsModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        component = testComponent.component;
    });

    describe(`viewedMonthFirst`, () => {
        it(`When initialized without value, sets defaultViewedMonthFirst`, () => {
            expect(component.userViewedMonthFirst).toBe(
                component.defaultViewedMonthFirst,
            );
        });

        it(`When initialized without value and defaultViewedMonthSecond shows the month of the local date`, () => {
            expect(component.userViewedMonthFirst.toString()).toBe(
                TuiMonth.currentLocal().toString(),
            );
        });

        it(`Returns max when initialized with max less than default`, () => {
            const maxDate = new TuiDay(2000, 1, 1);

            component.max = maxDate;
            component.ngOnInit();
            expect(component.userViewedMonthFirst).toEqual(maxDate.append({month: -1}));
        });

        it(`Returns min when initialized with default less than min`, () => {
            const minDate = new TuiDay(2024, 1, 1);

            component.min = minDate;
            component.ngOnInit();
            expect(component.userViewedMonthFirst).toEqual(minDate);
        });
    });

    describe(`viewedMonthSecond`, () => {
        it(`When initialized without value, sets defaultViewedMonthSecond`, () => {
            expect(component.userViewedMonthSecond).toBe(
                component.defaultViewedMonthSecond,
            );
        });

        it(`When initialized without value and defaultViewedMonthSecond shows the next local date after month`, () => {
            const formattedNextMonth = TuiMonth.currentLocal()
                .append({
                    month: 1,
                })
                .toString();

            expect(component.userViewedMonthSecond.toString()).toBe(formattedNextMonth);
        });

        it(`Returns max when initialized with max less than default`, () => {
            const maxDate = new TuiDay(2000, 1, 1);

            component.max = maxDate;
            component.ngOnInit();
            expect(component.userViewedMonthSecond).toEqual(maxDate);
        });

        it(`Returns min when initialized with default less than min`, () => {
            const minDate = new TuiDay(2024, 1, 1);

            component.min = minDate;
            component.ngOnInit();
            expect(component.userViewedMonthSecond).toEqual(minDate.append({month: 1}));
        });
    });

    describe(`cappedUserViewedMonthSecond`, () => {
        it(`returns userViewedMonthSecond if it is less than max`, () => {
            expect(component.cappedUserViewedMonthSecond).toBe(
                component.userViewedMonthSecond,
            );
        });

        it(`returns max if it is less than userViewedMonthSecond`, () => {
            const day = new TuiDay(2019, 5, 20);

            component.max = day;
            component.userViewedMonthSecond = day.append({day: 1});

            expect(component.cappedUserViewedMonthSecond).toBe(day);
        });
    });
});
