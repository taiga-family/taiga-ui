import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiDay, TuiMonth} from '@taiga-ui/cdk';
import {configureTestSuite} from 'ng-bullet';
import {TuiPrimitiveCalendarRangeComponent} from '../primitive-calendar-range.component';
import {TuiPrimitiveCalendarRangeModule} from '../primitive-calendar-range.module';

describe('PrimitiveRangeCalendar component', () => {
    @Component({
        template: ` <tui-primitive-calendar-range></tui-primitive-calendar-range> `,
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

    describe('viewedMonthFirst', () => {
        it('When initialized without value, sets defaultViewedMonthFirst', () => {
            expect(component.userViewedMonthFirst).toBe(
                component.defaultViewedMonthFirst,
            );
        });

        it('When initialized without value and defaultViewedMonthSecond shows the month of the local date', () => {
            expect(component.userViewedMonthFirst.formattedMonth).toBe(
                TuiMonth.currentLocal().formattedMonth,
            );
        });
    });

    describe('viewedMonthSecond', () => {
        it('When initialized without value, sets defaultViewedMonthSecond', () => {
            expect(component.userViewedMonthSecond).toBe(
                component.defaultViewedMonthSecond,
            );
        });

        it('When initialized without value and defaultViewedMonthSecond shows the next local date after month', () => {
            const formattedNextMonth = TuiMonth.currentLocal().append({month: 1})
                .formattedMonth;

            expect(component.userViewedMonthSecond.formattedMonth).toBe(
                formattedNextMonth,
            );
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
});
