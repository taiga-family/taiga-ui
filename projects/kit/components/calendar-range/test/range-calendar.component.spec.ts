import {Component, type DebugElement, Optional, Self, ViewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, NgControl, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
    TUI_LAST_DAY,
    tuiControlValue,
    TuiDay,
    TuiDayRange,
    TuiMonth,
    TuiYear,
} from '@taiga-ui/cdk';
import {TuiRootModule} from '@taiga-ui/core';
import {
    TUI_CALENDAR_DATE_STREAM,
    TuiCalendarRangeComponent,
    TuiCalendarRangeModule,
    tuiCreateDefaultDayRangePeriods,
    TuiDayRangePeriod,
} from '@taiga-ui/kit';
import {TuiPageObject} from '@taiga-ui/testing';
import {type Observable, of} from 'rxjs';

describe('rangeCalendarComponent', () => {
    @Component({
        template: `
            <tui-root>
                <tui-calendar-range
                    [items]="items"
                    [max]="max"
                    [min]="min"
                    (valueChange)="onRangeChange($event)"
                ></tui-calendar-range>
            </tui-root>
        `,
        providers: [
            {
                provide: TUI_CALENDAR_DATE_STREAM,
                deps: [[new Optional(), new Self(), NgControl]],
                useFactory: (
                    control: NgControl | null,
                ): Observable<TuiDayRange | null> | null =>
                    control ? tuiControlValue(control) : of(null),
            },
        ],
    })
    class TestComponent {
        @ViewChild(TuiCalendarRangeComponent)
        public readonly component!: TuiCalendarRangeComponent;

        public readonly control = new FormControl(
            new TuiDayRange(new TuiDay(2019, 2, 10), new TuiDay(2019, 2, 12)),
        );

        public items: readonly TuiDayRangePeriod[] = [];

        public min = new TuiDay(1900, 0, 1);

        public max = TUI_LAST_DAY;

        public onRangeChange(range: TuiDayRange | null): void {
            this.control.setValue(range);
        }
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: TuiPageObject<TestComponent>;
    let component: TuiCalendarRangeComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [
                TuiCalendarRangeModule,
                TuiRootModule,
                ReactiveFormsModule,
                NoopAnimationsModule,
            ],
            declarations: [TestComponent],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new TuiPageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        component = testComponent.component;
        await fixture.whenStable();
        fixture.detectChanges();
    });

    it('showing two calendars if items is an empty array', () => {
        testComponent.items = [];

        expect(getCalendars()).not.toBeNull();
    });

    describe('points', () => {
        beforeEach(() => {
            testComponent.items = tuiCreateDefaultDayRangePeriods();
            fixture.detectChanges();
        });

        it('If there are items - one calendar with a menu is shown, and 2 calendars are hidden', () => {
            expect(getCalendar()).not.toBeNull();
        });

        it('Default items from generator', () => {
            const items = getItems();

            expect(items.length).toBe(7);
        });

        it('If the value does not fit any range, check the box next to "Other date..."', () => {
            expect(getItems()[6].nativeElement.contains(getCheckmark())).toBe(true);
        });

        it('If the value does not fit the range, the range has no tick', () => {
            expect(getItems()[5].nativeElement.contains(getCheckmark())).toBe(false);
        });

        it('Interval selection takes into account min / max', () => {
            const today = TuiDay.currentLocal();
            const startOfMonth = today.append({day: 1 - today.day});
            const startOfLastMonth = startOfMonth.append({month: -1});
            const min = startOfLastMonth.append({day: 15});

            testComponent.min = min;
            fixture.detectChanges();
            component.onItemSelect(component.items[5]);
            fixture.detectChanges();

            expect(
                testComponent.control.value?.daySame(
                    new TuiDayRange(min, startOfMonth.append({day: -1})),
                ),
            ).toBe(true);
        });

        it('Intervals that are completely outside min and max are not displayed', () => {
            const today = TuiDay.currentLocal();

            testComponent.min = TuiDay.currentLocal().append({
                day: -TuiMonth.getMonthDaysCount(
                    today.month,
                    TuiYear.isLeapYear(today.year),
                ),
            });
            testComponent.max = TuiDay.currentLocal().append({day: -1});
            fixture.detectChanges();

            const items = getItems().map(item => item.nativeElement.textContent.trim());

            expect(items.some(item => item === 'Yesterday')).toBe(true);
            expect(items.some(item => item === 'Today')).toBe(false);
        });

        it('When redefining intervals, the list always contains "Other date..."', () => {
            const august = new TuiDayRange(
                new TuiDay(1944, 7, 1),
                new TuiDay(1944, 7, 31),
            );
            const title = 'In August 44th';

            testComponent.items = [new TuiDayRangePeriod(august, title)];
            fixture.detectChanges();

            const items = getItems();

            expect(items.length).toBe(2);
            expect(items[0].nativeElement.textContent.trim()).toBe(title);
            expect(items[1].nativeElement.textContent.trim()).toBe('Other date...');
        });
    });

    function getCalendar(): DebugElement | null {
        return pageObject.getByAutomationId('tui-calendar-range__calendar');
    }

    function getCalendars(): DebugElement | null {
        return pageObject.getByAutomationId('tui-calendar-range__calendars');
    }

    function getCheckmark(): HTMLElement {
        return pageObject.getByAutomationId('tui-calendar-range__checkmark')!
            .nativeElement;
    }

    function getItems(): DebugElement[] {
        return pageObject.getAllByAutomationId('tui-calendar-range__menu__item');
    }
});
