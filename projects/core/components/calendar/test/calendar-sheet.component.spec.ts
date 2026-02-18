import {
    ChangeDetectionStrategy,
    Component,
    type DebugElement,
    signal,
    viewChild,
} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {
    TUI_FALSE_HANDLER,
    type TuiBooleanHandler,
    TuiDay,
    TuiDayOfWeek,
    TuiDayRange,
    TuiMonth,
    tuiSetSignal,
} from '@taiga-ui/cdk';
import {
    tuiCalendarOptionsProvider,
    TuiCalendarSheet,
    TuiCalendarSheetPipe,
} from '@taiga-ui/core';
import {tuiMockCurrentDate, tuiRestoreRealDate} from '@taiga-ui/testing';

describe('CalendarSheet', () => {
    const today = 23;

    @Component({
        imports: [TuiCalendarSheet],
        template: `
            <tui-calendar-sheet
                [disabledItemHandler]="disabledItemHandler"
                [month]="month"
                [value]="value"
                (dayClick)="onDayClick($event)"
            />
        `,
        // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
        changeDetection: ChangeDetectionStrategy.Default,
    })
    class Test {
        public readonly component = viewChild.required(TuiCalendarSheet);

        public month = new TuiMonth(2018, 1);

        public value: TuiDayRange | null = null;

        public disabledItemHandler: TuiBooleanHandler<TuiDay> = TUI_FALSE_HANDLER;

        public onDayClick(_: TuiDay): void {}
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;
    let component: TuiCalendarSheet;

    describe('main case', () => {
        beforeEach(async () => {
            TestBed.configureTestingModule({imports: [Test]});
            await TestBed.compileComponents();
            tuiMockCurrentDate(new Date(2018, 1, today));

            fixture = TestBed.createComponent(Test);
            testComponent = fixture.componentInstance;
            component = testComponent.component();

            fixture.detectChanges();
        });

        describe('today', () => {
            it('is highlighted if current month and year were selected', () => {
                const currentItem = getTodayCalendarItem();

                expect(currentItem).not.toBeNull();
                expect(currentItem.nativeElement.innerHTML.includes(today)).toBeTruthy();
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
                    expect(getDisabledCalendarItems().length).toBe(1);
                    expect(
                        getDisabledCalendarItems()[0]?.nativeElement.textContent.trim(),
                    ).toBe('20');
                });

                it('click on blocked date does not change value', () => {
                    getDisabledCalendarItems()[0]?.nativeElement.click();
                    fixture.detectChanges();

                    expect(testComponent.value).toBeNull();
                });
            });
        });

        describe('getItemRange', () => {
            it('returns start correctly if there is range in value', () => {
                const day1 = new TuiDay(2019, 4, 16);
                const day2 = new TuiDay(2020, 1, 1);

                tuiSetSignal(component.value, new TuiDayRange(day1, day2));

                expect(component.getItemRange(day1)).toBe('start');
            });

            it('returns end correctly if there is range in value', () => {
                const day1 = new TuiDay(2019, 4, 16);
                const day2 = new TuiDay(2020, 1, 1);

                tuiSetSignal(component.value, new TuiDayRange(day1, day2));

                expect(component.getItemRange(day2)).toBe('end');
            });

            it('returns single if value is single day and item equals this', () => {
                const day1 = new TuiDay(2019, 4, 24);

                tuiSetSignal(component.value, new TuiDayRange(day1, day1));

                expect(component.getItemRange(day1)).toBe('active');
            });
        });

        it('emits hovered item', () => {
            const day = new TuiDay(2019, 4, 16);

            expect(component.hoveredItem()).toBe(null);

            component.onItemHovered(day);

            expect(component.hoveredItem()).toBe(day);
        });

        it('does not recalculate month and sheet if it has already been set with the same month', () => {
            const firstlySetMonth = new TuiMonth(2019, 4);
            const candidateToSecondSet = new TuiMonth(2019, 4);

            TestBed.runInInjectionContext(() => {
                const getSheetPipe = new TuiCalendarSheetPipe();
                const savedSheet = getSheetPipe.transform(firstlySetMonth);

                expect(getSheetPipe.transform(candidateToSecondSet)).toBe(savedSheet);
            });
        });
    });

    describe('integration with TUI_CALENDAR_OPTIONS token', () => {
        let fixture: ComponentFixture<Test>;
        let testComponent: Test;

        const createComponent: () => void = () => {
            tuiRestoreRealDate();

            fixture = TestBed.createComponent(Test);
            testComponent = fixture.componentInstance;

            testComponent.month = new TuiMonth(2021, 5);
            fixture.detectChanges();
        };

        describe('Week starts with Sunday if TUI_CALENDAR_OPTIONS was set as TuiDayOfWeek.Sunday', () => {
            beforeEach(async () => {
                TestBed.configureTestingModule({
                    imports: [Test],
                    providers: [
                        tuiCalendarOptionsProvider({
                            weekStart: signal(TuiDayOfWeek.Sunday),
                        }),
                    ],
                });
                await TestBed.compileComponents();
                createComponent();
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

        describe('Week starts with Monday if TUI_CALENDAR_OPTIONS was set as TuiDayOfWeek.Monday', () => {
            beforeEach(async () => {
                TestBed.configureTestingModule({
                    imports: [Test],
                    providers: [
                        tuiCalendarOptionsProvider({
                            weekStart: signal(TuiDayOfWeek.Monday),
                        }),
                    ],
                });
                await TestBed.compileComponents();
                createComponent();
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

        describe('Week starts with Wednesday if TUI_CALENDAR_OPTIONS was set as TuiDayOfWeek.Wednesday', () => {
            beforeEach(async () => {
                TestBed.configureTestingModule({
                    imports: [Test],
                    providers: [
                        tuiCalendarOptionsProvider({
                            weekStart: signal(TuiDayOfWeek.Wednesday),
                        }),
                    ],
                });
                await TestBed.compileComponents();
                createComponent();
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
                fixture.debugElement.queryAll(By.css('.t-row_weekday .t-cell')) || [];

            return daysOfWeekContainers.map(
                (container) => container.nativeElement.textContent,
            );
        }

        function getColumnCells(columnIndex: number): DebugElement[] {
            return (
                fixture.debugElement.queryAll(
                    By.css(
                        `.t-row:not(.t-row_weekday) .t-cell:nth-child(${
                            columnIndex + 1
                        })`,
                    ),
                ) || []
            );
        }

        function getColumnDates(columnIndex: number): string[] {
            const columnDatesContainers = getColumnCells(columnIndex);

            return columnDatesContainers.map((container) =>
                container.nativeElement.textContent.trim(),
            );
        }
    });

    function getTodayCalendarItem(): DebugElement {
        return fixture.debugElement.query(By.css('.t-cell_today'));
    }

    function getDisabledCalendarItems(): DebugElement[] {
        return fixture.debugElement.queryAll(By.css('.t-cell_disabled'));
    }

    afterEach(() => {
        tuiRestoreRealDate();
    });
});
