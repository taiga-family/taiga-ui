import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {
    ALWAYS_FALSE_HANDLER,
    TuiBooleanHandler,
    TuiDay,
    TuiDayOfWeek,
    TuiDayRange,
    TuiMonth,
} from '@taiga-ui/cdk';
import {TuiCalendarSheetPipe} from '@taiga-ui/core/pipes';
import {TUI_FIRST_DAY_OF_WEEK} from '@taiga-ui/core/tokens';
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

    @ViewChild(TuiPrimitiveCalendarComponent, {static: true})
    component!: TuiPrimitiveCalendarComponent;

    onDayClick(_: TuiDay) {}
}

describe('PrimitiveCalendar', () => {
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

            component.onItemPressed(dayToPress);

            expect(component.getItemState(dayToPress)).toBe(TuiInteractiveState.Pressed);
        });

        it('returns hovered state if it is not disabled and pressed', () => {
            const dayToHover = new TuiDay(2019, 4, 16);

            component.onItemHovered(dayToHover);

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
            component.onItemHovered(hoveredDay);

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

        component.onItemHovered(day);
    });

    it('does not recalculate month and sheet if it has already been set with the same month', () => {
        const firstlySetMonth = new TuiMonth(2019, 4);
        const candidateToSecondSet = new TuiMonth(2019, 4);

        const getSheetPipe = new TuiCalendarSheetPipe(TuiDayOfWeek.Monday);

        const savedSheet = getSheetPipe.transform(firstlySetMonth);

        expect(getSheetPipe.transform(candidateToSecondSet)).toBe(savedSheet);
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

describe('integration with TUI_FIRST_DAY_OF_WEEK token', () => {
    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    const MOCKED_MONTH = new TuiMonth(2021, 5);

    beforeEach(() => {
        restoreRealDate();

        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;

        testComponent.month = MOCKED_MONTH;
        fixture.detectChanges();
    });

    describe('Week starts with Sunday if TUI_FIRST_DAY_OF_WEEK was set as TuiDayOfWeek.Sunday', () => {
        configureTestSuite(() => {
            TestBed.configureTestingModule({
                imports: [TuiPrimitiveCalendarModule],
                declarations: [TestComponent],
                providers: [
                    {
                        provide: TUI_FIRST_DAY_OF_WEEK,
                        useValue: TuiDayOfWeek.Sunday,
                    },
                ],
            });
        });

        it('contains calendar header (with days of week names) which starts with Sunday', () => {
            expect(getDaysOfWeek()).toEqual([
                'Sun',
                'Mon',
                'Tue',
                'Wed',
                'Thu',
                'Fri',
                'Sat',
            ]);
        });

        it('contains the first column with dates which are actual Sundays', () => {
            expect(getColumnDates(0)).toEqual(['30', '6', '13', '20', '27', '4']);
        });

        it('contains the fifth column with dates which are actual Thursday', () => {
            expect(getColumnDates(4)).toEqual(['3', '10', '17', '24', '1', '8']);
        });
    });

    describe('Week starts with Monday if TUI_FIRST_DAY_OF_WEEK was set as TuiDayOfWeek.Monday', () => {
        configureTestSuite(() => {
            TestBed.configureTestingModule({
                imports: [TuiPrimitiveCalendarModule],
                declarations: [TestComponent],
                providers: [
                    {
                        provide: TUI_FIRST_DAY_OF_WEEK,
                        useValue: TuiDayOfWeek.Monday,
                    },
                ],
            });
        });

        it('contains calendar header (with days of week names) which starts with Monday', () => {
            expect(getDaysOfWeek()).toEqual([
                'Mon',
                'Tue',
                'Wed',
                'Thu',
                'Fri',
                'Sat',
                'Sun',
            ]);
        });

        it('contains the first column with dates which are actual Mondays', () => {
            expect(getColumnDates(0)).toEqual(['31', '7', '14', '21', '28', '5']);
        });

        it('contains the fifth column with dates which are actual Fridays', () => {
            expect(getColumnDates(4)).toEqual(['4', '11', '18', '25', '2', '9']);
        });
    });

    describe('Week starts with Wednesday if TUI_FIRST_DAY_OF_WEEK was set as TuiDayOfWeek.Wednesday', () => {
        configureTestSuite(() => {
            TestBed.configureTestingModule({
                imports: [TuiPrimitiveCalendarModule],
                declarations: [TestComponent],
                providers: [
                    {
                        provide: TUI_FIRST_DAY_OF_WEEK,
                        useValue: TuiDayOfWeek.Wednesday,
                    },
                ],
            });
        });

        it('contains calendar header (with days of week names) which starts with Wednesday', () => {
            expect(getDaysOfWeek()).toEqual([
                'Wed',
                'Thu',
                'Fri',
                'Sat',
                'Sun',
                'Mon',
                'Tue',
            ]);
        });

        it('contains the first column with dates which are actual Wednesdays', () => {
            expect(getColumnDates(0)).toEqual(['26', '2', '9', '16', '23', '30']);
        });

        it('contains the fifth column with dates which are actual Sundays', () => {
            expect(getColumnDates(4)).toEqual(['30', '6', '13', '20', '27', '4']);
        });
    });

    function getDaysOfWeek(): string[] {
        const daysOfWeekContainers =
            fixture.debugElement.queryAll(By.css('.row_weekday .cell')) || [];

        return daysOfWeekContainers.map(container => container.nativeElement.textContent);
    }

    function getColumnDates(columnIndex: number): string[] {
        const columnDatesContainers =
            fixture.debugElement.queryAll(
                By.css(`.row:not(.row_weekday) .cell:nth-child(${columnIndex + 1})`),
            ) || [];

        return columnDatesContainers.map(container =>
            container.nativeElement.textContent.trim(),
        );
    }
});
