import type {DebugElement} from '@angular/core';
import {Component, Optional, Self, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, NgControl} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {
    TUI_LAST_DAY,
    tuiControlValue,
    TuiDay,
    TuiDayRange,
    TuiMonth,
    TuiYear,
} from '@taiga-ui/cdk';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {
    TUI_CALENDAR_DATE_STREAM,
    TuiCalendarRange,
    tuiCreateDefaultDayRangePeriods,
    TuiDayRangePeriod,
} from '@taiga-ui/kit';
import {TuiPageObject} from '@taiga-ui/testing';
import type {Observable} from 'rxjs';
import {of} from 'rxjs';

describe('rangeCalendarComponent', () => {
    @Component({
        standalone: true,
        imports: [TuiCalendarRange],
        template: `
            <tui-calendar-range
                [items]="items"
                [max]="max"
                [min]="min"
                [value]="value"
                (valueChange)="onRangeChange($event)"
            />
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
    class Test {
        @ViewChild(TuiCalendarRange)
        public readonly component!: TuiCalendarRange;

        public readonly control = new FormControl(
            new TuiDayRange(new TuiDay(2019, 2, 10), new TuiDay(2019, 2, 12)),
        );

        public items: readonly TuiDayRangePeriod[] = [];

        public min = new TuiDay(1900, 0, 1);

        public max = TUI_LAST_DAY;

        public value: TuiDayRange | null = null;

        public onRangeChange(range: TuiDayRange | null): void {
            this.control.setValue(range);
        }
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;
    let pageObject: TuiPageObject<Test>;
    let component: TuiCalendarRange;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        pageObject = new TuiPageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        component = testComponent.component;
        await fixture.whenStable();
        fixture.detectChanges();
    });

    it('showing two calendars if items is an empty array', () => {
        testComponent.items = [];
        fixture.detectChanges();

        expect(fixture.debugElement.queryAll(By.css('tui-calendar')).length).toBe(2);
    });

    describe('points', () => {
        beforeEach(() => {
            testComponent.items = tuiCreateDefaultDayRangePeriods();
            fixture.detectChanges();
        });

        it('if there are items - one calendar with a menu is shown, and 2 calendars are hidden', () => {
            expect(getCalendar()).not.toBeNull();
        });

        it('default items from generator', () => {
            const items = getItems();

            expect(items.length).toBe(7);
        });

        it('if the value fit any range, check the box next to appropriate range', () => {
            const today = TuiDay.currentLocal();

            testComponent.value = new TuiDayRange(today, today);
            fixture.detectChanges();

            const items = getItems();

            expect(items[1].nativeElement.contains(getCheckmark())).toBe(true);
        });

        it('if the value does not fit any range, check the box next to "Other date..."', () => {
            expect(getItems()[6].nativeElement.contains(getCheckmark())).toBe(true);
        });

        it('if the value does not fit the range, the range has no tick', () => {
            expect(getItems()[5].nativeElement.contains(getCheckmark())).toBe(false);
        });

        it('interval selection takes into account min / max', () => {
            const today = TuiDay.currentLocal();
            const startOfMonth = today.append({day: 1 - today.day});
            const startOfLastMonth = startOfMonth.append({month: -1});
            const min = startOfLastMonth.append({day: 15});

            testComponent.min = min;
            fixture.detectChanges();

            component['onItemSelect'](component.items[5]);
            fixture.detectChanges();

            expect(
                testComponent.control.value?.daySame(
                    new TuiDayRange(min, startOfMonth.append({day: -1})),
                ),
            ).toBe(true);
        });

        it('intervals that are completely outside min and max are not displayed', () => {
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

        it('when redefining intervals, the list always contains "Other date..."', () => {
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

        it('when redefining intervals, displays appropriate checkbox', () => {
            const today = TuiDay.currentLocal();
            const previousMonth = today.append({month: -1});
            const title = 'New interval';

            component['onItemSelect'](component.items[0]);
            fixture.detectChanges();

            testComponent.items = [
                new TuiDayRangePeriod(new TuiDayRange(previousMonth, today), title),
                ...testComponent.items,
            ];
            fixture.detectChanges();

            const items = getItems();

            expect(items[0].nativeElement.textContent.trim()).toBe(title);

            expect(items[0].nativeElement.contains(getCheckmark())).toBe(false);
            expect(items[1].nativeElement.contains(getCheckmark())).toBe(true);
        });

        it('if there are ranges with same range dates, displays appropriate checkbox when switching between them', () => {
            const today = TuiDay.currentLocal();
            const previousMonth = today.append({month: -1});

            testComponent.items = [
                new TuiDayRangePeriod(new TuiDayRange(previousMonth, today), '1'),
                new TuiDayRangePeriod(new TuiDayRange(previousMonth, today), '2'),
            ];
            fixture.detectChanges();

            component['onItemSelect'](component.items[1]);
            fixture.detectChanges();

            const items = getItems();

            expect(items[0].nativeElement.contains(getCheckmark())).toBe(false);
            expect(items[1].nativeElement.contains(getCheckmark())).toBe(true);
        });
    });

    function getCalendar(): DebugElement | null {
        return pageObject.getByAutomationId('tui-calendar-range__calendar');
    }

    function getCheckmark(): HTMLElement {
        return pageObject.getByAutomationId('tui-calendar-range__checkmark')!
            .nativeElement;
    }

    function getItems(): DebugElement[] {
        return pageObject.getAllByAutomationId('tui-calendar-range__menu__item');
    }
});
