import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {TUI_FIRST_DAY, TUI_LAST_DAY, TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {TuiCalendarRange, TuiDayRangePeriod, TuiInputDateRange} from '@taiga-ui/kit';

describe('TuiInputDateRangeDirective presets', () => {
    @Component({
        standalone: true,
        imports: [NgIf, ReactiveFormsModule, TuiInputDateRange, TuiRoot, TuiTextfield],
        template: `
            <tui-root>
                <tui-textfield>
                    <input
                        tuiInputDateRange
                        [formControl]="control"
                        [max]="max()"
                        [min]="min()"
                    />
                    <tui-calendar-range
                        *ngIf="showCalendar()"
                        [items]="items"
                    />
                </tui-textfield>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly control = new FormControl<TuiDayRange | null>(null);
        public readonly showCalendar = signal(true);
        public items: readonly TuiDayRangePeriod[] = [];
        public readonly max = signal(TUI_LAST_DAY);
        public readonly min = signal(TUI_FIRST_DAY);
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;

    beforeEach(async () => {
        TestBed.configureTestingModule({imports: [Test]});
        await TestBed.compileComponents();

        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('remembers the clicked preset when the dropdown is reopened', async () => {
        const monday = new TuiDay(2025, 0, 6);
        const today = new TuiDayRangePeriod(new TuiDayRange(monday, monday), 'Today');
        const week = new TuiDayRangePeriod(
            new TuiDayRange(monday, monday.append({day: 6})),
            'Week',
        );

        testComponent.items = [today, week];
        testComponent.max.set(monday);
        testComponent.control.setValue(today.range);
        fixture.changeDetectorRef.markForCheck();
        fixture.detectChanges();

        getCalendar()['onItemSelect'](week);
        fixture.detectChanges();

        expect(testComponent.control.value?.daySame(today.range)).toBe(true);
        expect(getCalendar()['isItemActive'](today)).toBe(false);
        expect(getCalendar()['isItemActive'](week)).toBe(true);

        testComponent.showCalendar.set(false);
        fixture.detectChanges();
        await fixture.whenStable();

        testComponent.showCalendar.set(true);
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();

        expect(getCalendar().item).toBe(week);
        expect(getCalendar()['isItemActive'](today)).toBe(false);
        expect(getCalendar()['isItemActive'](week)).toBe(true);
    });

    it('does not restore a preset after the control value is cleared', async () => {
        const monday = new TuiDay(2025, 0, 6);
        const period = new TuiDayRangePeriod(new TuiDayRange(monday, monday), 'Today');

        testComponent.items = [period];
        fixture.changeDetectorRef.markForCheck();
        fixture.detectChanges();

        getCalendar()['onItemSelect'](period);
        fixture.detectChanges();

        testComponent.showCalendar.set(false);
        fixture.detectChanges();
        await fixture.whenStable();

        testComponent.control.setValue(null);
        testComponent.showCalendar.set(true);
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();

        expect(getCalendar().item).toBeNull();
        expect(getCalendar()['isItemActive'](period)).toBe(false);
    });

    it('preserves a preset until min changes its effective range', async () => {
        const monday = new TuiDay(2025, 0, 6);
        const sunday = monday.append({day: 6});
        const week = new TuiDayRangePeriod(new TuiDayRange(monday, sunday), 'Week');

        testComponent.items = [week];
        testComponent.control.setValue(week.range);
        fixture.changeDetectorRef.markForCheck();
        fixture.detectChanges();

        getCalendar()['onItemSelect'](week);
        fixture.detectChanges();

        testComponent.min.set(monday);
        fixture.changeDetectorRef.markForCheck();
        fixture.detectChanges();
        await fixture.whenStable();

        expect(getCalendar()['isItemActive'](week)).toBe(true);

        testComponent.min.set(monday.append({day: 1}));
        fixture.changeDetectorRef.markForCheck();
        fixture.detectChanges();
        await fixture.whenStable();

        expect(getCalendar().item).toBeNull();
        expect(getCalendar()['isItemActive'](week)).toBe(false);
        expect(testComponent.control.value?.daySame(week.range)).toBe(true);
    });

    it('clears a preset when max changes its effective range', async () => {
        const monday = new TuiDay(2025, 0, 6);
        const week = new TuiDayRangePeriod(
            new TuiDayRange(monday, monday.append({day: 6})),
            'Week',
        );

        const selectedRange = new TuiDayRange(monday, monday);

        testComponent.items = [week];
        testComponent.max.set(monday);
        testComponent.control.setValue(selectedRange);
        fixture.changeDetectorRef.markForCheck();
        fixture.detectChanges();

        getCalendar()['onItemSelect'](week);
        fixture.detectChanges();
        expect(getCalendar()['isItemActive'](week)).toBe(true);

        testComponent.max.set(monday.append({day: 1}));
        fixture.changeDetectorRef.markForCheck();
        fixture.detectChanges();
        await fixture.whenStable();

        expect(getCalendar().max?.daySame(monday.append({day: 1}))).toBe(true);
        expect(testComponent.control.value?.daySame(selectedRange)).toBe(true);

        expect(getCalendar().item).toBeNull();
        expect(getCalendar()['isItemActive'](week)).toBe(false);
    });

    it('forgets a preset if the closed control is cleared and set back', async () => {
        const monday = new TuiDay(2025, 0, 6);
        const today = new TuiDayRangePeriod(new TuiDayRange(monday, monday), 'Today');
        const week = new TuiDayRangePeriod(
            new TuiDayRange(monday, monday.append({day: 6})),
            'Week',
        );

        testComponent.items = [today, week];
        testComponent.max.set(monday);
        testComponent.control.setValue(today.range);
        fixture.changeDetectorRef.markForCheck();
        fixture.detectChanges();
        getCalendar()['onItemSelect'](week);
        fixture.detectChanges();

        testComponent.showCalendar.set(false);
        fixture.detectChanges();
        await fixture.whenStable();

        testComponent.control.setValue(null);
        fixture.detectChanges();
        await fixture.whenStable();

        testComponent.control.setValue(new TuiDayRange(monday, monday));
        fixture.detectChanges();
        await fixture.whenStable();

        testComponent.showCalendar.set(true);
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();

        expect(getCalendar().item).toBeNull();
        expect(getCalendar()['isItemActive'](week)).toBe(false);
        expect(testComponent.control.value?.daySame(today.range)).toBe(true);
    });

    it('clears the retained preset when the control resets without closing', async () => {
        const monday = new TuiDay(2025, 0, 6);
        const today = new TuiDayRangePeriod(new TuiDayRange(monday, monday), 'Today');
        const week = new TuiDayRangePeriod(
            new TuiDayRange(monday, monday.append({day: 6})),
            'Week',
        );

        testComponent.items = [today, week];
        testComponent.max.set(monday);
        testComponent.control.setValue(today.range);
        fixture.changeDetectorRef.markForCheck();
        fixture.detectChanges();
        getCalendar()['onItemSelect'](week);
        fixture.detectChanges();
        expect(getCalendar()['isItemActive'](week)).toBe(true);

        testComponent.control.setValue(null);
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();

        expect(getCalendar().item).toBeNull();
        expect(getCalendar().selectedActivePeriod).toBeNull();
        expect(getCalendar()['isItemActive'](week)).toBe(false);
    });

    function getCalendar(): TuiCalendarRange {
        return fixture.debugElement.query(By.directive(TuiCalendarRange))
            .componentInstance;
    }
});
