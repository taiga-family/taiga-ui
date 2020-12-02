import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {
    ALWAYS_FALSE_HANDLER,
    TuiBooleanHandler,
    TuiDay,
    TuiDayRange,
    TuiMonth,
} from '@taiga-ui/cdk';
import {
    mockCurrentDate,
    pendingIfNotMoscowTimeZone,
    restoreRealDate,
} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {TuiInteractiveState} from '../../../enums/interactive-state';
import {TuiRangeState} from '../../../enums/range-state';
import {TuiPrimitiveCalendarComponent} from '../primitive-calendar.component';
import {TuiPrimitiveCalendarModule} from '../primitive-calendar.module';

describe('PrimitiveCalendar', () => {
    @Component({
        template: `
            <tui-primitive-calendar
                [month]="month"
                [disabledItemHandler]="disabledItemHandler"
                [value]="value"
                (dayClick)="onDayClick($event)"
            ></tui-primitive-calendar>
        `,
    })
    class TestComponent {
        month = new TuiMonth(2018, 1);

        value: TuiDayRange | null = null;

        disabledItemHandler: TuiBooleanHandler<TuiDay> = ALWAYS_FALSE_HANDLER;

        @ViewChild(TuiPrimitiveCalendarComponent)
        component: TuiPrimitiveCalendarComponent;

        onDayClick(_: TuiDay) {}
    }

    const TODAY = 23;
    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiPrimitiveCalendarComponent;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiPrimitiveCalendarModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        mockCurrentDate(new Date(2018, 1, TODAY));

        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        component = testComponent.component;

        fixture.detectChanges();
    });

    describe('today', () => {
        beforeEach(() => {
            pendingIfNotMoscowTimeZone();
        });

        it('is highlighted if current month and year were selected', () => {
            const currentItem = getTodayCalendarItem();

            expect(currentItem).not.toBeNull();
            expect(currentItem.nativeElement.innerHTML.includes(TODAY)).toBe(true);
        });

        it('is not highlighted if not current month and current year were selected', () => {
            testComponent.month = new TuiMonth(2017, 9);
            fixture.detectChanges();

            const todayItem = getTodayCalendarItem();

            expect(todayItem).toBeNull();
        });

        it('is not highlighted if current month and not current year were selected', () => {
            testComponent.month = new TuiMonth(2018, 10);
            fixture.detectChanges();

            const todayItem = getTodayCalendarItem();

            expect(todayItem).toBeNull();
        });
    });

    describe('disabledItemHandler', () => {
        it('all dates are not disabled as default', () => {
            expect(getDisabledCalendarItems()).toEqual([]);
        });

        describe('if there are dates under condition', () => {
            beforeEach(() => {
                testComponent.disabledItemHandler = ({day}) => day === 20;
                fixture.detectChanges();
            });

            it('blocked date under condition', () => {
                expect(getDisabledCalendarItems().length).toEqual(1);
                expect(
                    getDisabledCalendarItems()[0].nativeElement.textContent.trim(),
                ).toEqual('20');
            });

            it('click on blocked date does not change value', () => {
                getDisabledCalendarItems()[0].nativeElement.click();
                fixture.detectChanges();
                expect(testComponent.value).toBe(null);
            });

            it('can be checked due itemIsDisabled', () => {
                const disabledDay = new TuiDay(2010, 4, 20);

                expect(component.itemIsDisabled(disabledDay)).toBe(true);
            });
        });
    });

    describe('getItemState', () => {
        it('returns pressed state if it is not disabled', () => {
            const dayToPress = new TuiDay(2019, 4, 16);

            component.onItemPressed(true, dayToPress);

            expect(component.getItemState(dayToPress)).toBe(TuiInteractiveState.Pressed);
        });

        it('returns hovered state if it is not disabled and pressed', () => {
            const dayToHover = new TuiDay(2019, 4, 16);

            component.onItemHovered(true, dayToHover);

            expect(component.getItemState(dayToHover)).toBe(TuiInteractiveState.Hovered);
        });
    });

    describe('getItemRange', () => {
        it('returns start correctly if there is range in value', () => {
            const day1 = new TuiDay(2019, 4, 16);
            const day2 = new TuiDay(2020, 1, 1);
            const range = new TuiDayRange(day1, day2);

            component.value = range;

            expect(component.getItemRange(day1)).toBe(TuiRangeState.Start);
        });

        it('returns end correctly if there is range in value', () => {
            const day1 = new TuiDay(2019, 4, 16);
            const day2 = new TuiDay(2020, 1, 1);
            const range = new TuiDayRange(day1, day2);

            component.value = range;

            expect(component.getItemRange(day2)).toBe(TuiRangeState.End);
        });

        it('returns single if value is single day and item eqauls this', () => {
            const day1 = new TuiDay(2019, 4, 24);
            const range = new TuiDayRange(day1, day1);

            component.value = range;

            expect(component.getItemRange(day1)).toBe(TuiRangeState.Single);
        });
    });

    describe('itemIsInterval', () => {
        it('returns false if there is single day range value but no hoveredItem', () => {
            const day = new TuiDay(2019, 4, 16);

            component.value = new TuiDayRange(day, day);
            component.hoveredItem = null;

            expect(component.itemIsInterval(day)).toBe(false);
        });

        it('returns true if item is between single day range value and hoveredItem', () => {
            const singleDayRangeValue = new TuiDayRange(
                new TuiDay(2019, 4, 14),
                new TuiDay(2019, 4, 14),
            );
            const day = new TuiDay(2019, 4, 16);
            const hoveredDay = new TuiDay(2019, 4, 18);

            component.value = singleDayRangeValue;
            component.onItemHovered(true, hoveredDay);

            expect(component.itemIsInterval(day)).toBe(true);
        });

        it('returns true if item is between day range value', () => {
            const dayRangeValue = new TuiDayRange(
                new TuiDay(2019, 4, 14),
                new TuiDay(2019, 4, 24),
            );
            const day = new TuiDay(2019, 4, 16);

            component.value = dayRangeValue;

            expect(component.itemIsInterval(day)).toBe(true);
        });
    });

    it('emits hovered item', done => {
        const day = new TuiDay(2019, 4, 16);

        component.hoveredItemChange.subscribe((hoveredDay: TuiDay) => {
            expect(hoveredDay).toBe(day);
            done();
        });

        component.onItemHovered(true, day);
    });

    it('does not recalculate month and sheet if it has already been set with the same month', () => {
        const firstlySetMonth = new TuiMonth(2019, 4);
        const candidateToSecondSet = new TuiMonth(2019, 4);

        component.month = firstlySetMonth;

        const savedSheet = component.sheet;

        component.month = candidateToSecondSet;

        expect(component.sheet).toBe(savedSheet);
    });

    function getTodayCalendarItem(): DebugElement {
        return fixture.debugElement.query(By.css('.cell_today'));
    }

    function getDisabledCalendarItems(): DebugElement[] {
        return fixture.debugElement.queryAll(
            By.css('[data-tui-element-state="disabled"]'),
        );
    }

    afterEach(() => {
        restoreRealDate();
    });
});
