import {ChangeDetectionStrategy, Component, effect, signal} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {
    RANGE_SEPARATOR_CHAR,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiDay,
    TuiDayRange,
} from '@taiga-ui/cdk';
import {TuiCalendarRange, TuiDayRangePeriod, TuiInputDateRange} from '@taiga-ui/kit';

describe('TuiInputDateRangeDirective', () => {
    @Component({
        imports: [ReactiveFormsModule, TuiInputDateRange],
        template: `
            <tui-textfield>
                <input
                    tuiInputDateRange
                    [formControl]="control"
                    [max]="max()"
                    [min]="min()"
                />
                @if (showCalendar()) {
                    <tui-calendar-range [items]="items()" />
                }
            </tui-textfield>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public syncRuns = 0;
        public readonly showCalendar = signal(true);
        public readonly items = signal<readonly TuiDayRangePeriod[]>([]);
        public readonly max = signal(TUI_LAST_DAY);
        public readonly min = signal(TUI_FIRST_DAY);
        public readonly range = signal<TuiDayRange | null>(null);
        public readonly control = new FormControl<TuiDayRange | null>(null);

        constructor() {
            effect(() => {
                this.syncRuns += 1;
                this.control.setValue(this.range());
            });
        }
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;
    let control: FormControl<TuiDayRange | null>;

    beforeEach(async () => {
        TestBed.configureTestingModule({imports: [Test]});
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        control = fixture.componentInstance.control;
        fixture.detectChanges();
    });

    it('does not track internal value while setting form control from effect', () => {
        const input: HTMLInputElement = fixture.nativeElement.querySelector('input');

        testComponent.range.set(
            new TuiDayRange(new TuiDay(2025, 0, 1), new TuiDay(2025, 0, 3)),
        );

        fixture.detectChanges();

        const syncRuns = testComponent.syncRuns;
        const actualRange = `01.01.2025${RANGE_SEPARATOR_CHAR}03.01.2025`;
        const newRange = `02.01.2025${RANGE_SEPARATOR_CHAR}04.01.2025`;

        expect(testComponent.syncRuns).toBe(syncRuns);
        expect(input.value).toBe(actualRange);
        expect(control.value?.getFormattedDayRange('dd/mm/yyyy', '.')).toBe(actualRange);

        input.value = newRange;
        input.dispatchEvent(new Event('input', {bubbles: true}));
        fixture.detectChanges();

        expect(testComponent.syncRuns).toBe(syncRuns);
        expect(input.value).toBe(newRange);
        expect(control.value?.getFormattedDayRange('dd/mm/yyyy', '.')).toBe(newRange);
    });

    it.each([
        {
            description: 'before min',
            value: `01.01.2025${RANGE_SEPARATOR_CHAR}05.01.2025`,
            expected: new TuiDay(2025, 0, 10),
        },
        {
            description: 'after max',
            value: `25.01.2025${RANGE_SEPARATOR_CHAR}30.01.2025`,
            expected: new TuiDay(2025, 0, 20),
        },
    ])('emits once for a range $description', async ({value, expected}) => {
        const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
        const emissions: Array<TuiDayRange | null> = [];

        testComponent.min.set(new TuiDay(2025, 0, 10));
        testComponent.max.set(new TuiDay(2025, 0, 20));
        fixture.detectChanges();
        await fixture.whenStable();

        control.valueChanges.subscribe((range) => emissions.push(range));

        input.value = value;
        input.dispatchEvent(new Event('input', {bubbles: true}));
        fixture.detectChanges();

        expect(emissions).toHaveLength(1);
        expect(emissions[0]?.daySame(new TuiDayRange(expected, expected))).toBe(true);
    });

    it('moves caret to the end after selecting first day in empty input', () => {
        const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
        const day = new TuiDay(2025, 0, 1);

        input.focus();
        getCalendar()['onDayClick'](day);
        fixture.detectChanges();

        expect(input.value).toBe(`01.01.2025${RANGE_SEPARATOR_CHAR}`);
        expect(input.selectionStart).toBe(input.value.length);
    });

    it('commits unfinished single-day range synchronously on destroy', () => {
        const day = new TuiDay(2025, 0, 1);
        const range = new TuiDayRange(day, day);
        const calendar = getCalendar();

        calendar['onDayClick'](day);
        calendar.ngOnDestroy();

        expect(control.value?.daySame(range)).toBe(true);
    });

    it('restores the chosen preset after reopening when ranges are equal after clamping', async () => {
        const monday = new TuiDay(2025, 0, 6);
        const today = new TuiDayRangePeriod(
            new TuiDayRange(monday, monday.append({})),
            'Today',
        );

        const week = new TuiDayRangePeriod(
            new TuiDayRange(monday.append({}), monday.append({day: 6})),
            'Week',
        );

        testComponent.items.set([today, week]);
        testComponent.max.set(monday);
        control.setValue(today.range);
        fixture.detectChanges();

        getCalendar()['onItemSelect'](week);
        fixture.detectChanges();

        expect(getCalendar()['isItemActive'](today)).toBe(false);
        expect(getCalendar()['isItemActive'](week)).toBe(true);

        testComponent.showCalendar.set(false);
        fixture.detectChanges();
        await fixture.whenStable();

        testComponent.showCalendar.set(true);
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();

        expect(getCalendar().item()).toBe(week);
        expect(getCalendar()['isItemActive'](today)).toBe(false);
        expect(getCalendar()['isItemActive'](week)).toBe(true);
    });

    it('restores a recreated preset with the same name and original dates', async () => {
        const monday = new TuiDay(2025, 0, 6);
        const today = new TuiDayRangePeriod(new TuiDayRange(monday, monday), 'Today');
        const week = new TuiDayRangePeriod(
            new TuiDayRange(monday, monday.append({day: 6})),
            'Week',
        );

        testComponent.items.set([today, week]);
        testComponent.max.set(monday);
        control.setValue(today.range);
        fixture.detectChanges();

        getCalendar()['onItemSelect'](week);
        fixture.detectChanges();

        testComponent.showCalendar.set(false);
        fixture.detectChanges();
        await fixture.whenStable();

        const replacementWeek = new TuiDayRangePeriod(
            new TuiDayRange(monday, monday.append({day: 6})),
            'Week',
        );

        testComponent.items.set([
            new TuiDayRangePeriod(new TuiDayRange(monday, monday), 'Today'),
            replacementWeek,
        ]);
        testComponent.showCalendar.set(true);
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();

        expect(getCalendar().item()).toBe(replacementWeek);
        expect(getCalendar()['isItemActive'](replacementWeek)).toBe(true);
    });

    it('clears a restored preset when the form value changes while open', async () => {
        const monday = new TuiDay(2025, 0, 6);
        const today = new TuiDayRangePeriod(new TuiDayRange(monday, monday), 'Today');
        const week = new TuiDayRangePeriod(
            new TuiDayRange(monday, monday.append({day: 6})),
            'Week',
        );

        testComponent.items.set([today, week]);
        testComponent.max.set(monday);
        control.setValue(today.range);
        fixture.detectChanges();
        getCalendar()['onItemSelect'](week);
        fixture.detectChanges();

        testComponent.showCalendar.set(false);
        fixture.detectChanges();
        await fixture.whenStable();

        testComponent.showCalendar.set(true);
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();

        expect(getCalendar().item()).toBe(week);

        control.setValue(null);
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();

        expect(getCalendar().item()).toBeNull();
        expect(getCalendar()['isItemActive'](week)).toBe(false);
    });

    it('does not restore a selected preset after the form value is cleared', async () => {
        const today = new TuiDay(2025, 0, 6);
        const period = new TuiDayRangePeriod(
            new TuiDayRange(today, today.append({})),
            'Today',
        );

        testComponent.items.set([period]);
        fixture.detectChanges();
        getCalendar()['onItemSelect'](period);
        fixture.detectChanges();

        testComponent.showCalendar.set(false);
        fixture.detectChanges();
        await fixture.whenStable();
        control.setValue(null);

        testComponent.showCalendar.set(true);
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();

        expect(getCalendar().item()).toBeNull();
        expect(getCalendar()['isItemActive'](period)).toBe(false);
    });

    it('preserves a preset until min changes its effective range', async () => {
        const monday = new TuiDay(2025, 0, 6);
        const sunday = monday.append({day: 6});
        const week = new TuiDayRangePeriod(new TuiDayRange(monday, sunday), 'Week');

        testComponent.items.set([week]);
        control.setValue(week.range);
        fixture.detectChanges();

        getCalendar()['onItemSelect'](week);
        fixture.detectChanges();
        testComponent.min.set(monday);
        fixture.detectChanges();
        await fixture.whenStable();

        expect(getCalendar().item()).toBe(week);

        testComponent.min.set(monday.append({day: 1}));
        fixture.detectChanges();
        await fixture.whenStable();

        expect(getCalendar().item()).toBeNull();
        expect(getCalendar()['isItemActive'](week)).toBe(false);
        expect(control.value?.daySame(week.range)).toBe(true);
    });

    it('clears a preset when max changes its effective range', async () => {
        const monday = new TuiDay(2025, 0, 6);
        const week = new TuiDayRangePeriod(
            new TuiDayRange(monday, monday.append({day: 6})),
            'Week',
        );

        const selectedRange = new TuiDayRange(monday, monday);

        testComponent.items.set([week]);
        testComponent.max.set(monday);
        control.setValue(selectedRange);
        fixture.detectChanges();

        getCalendar()['onItemSelect'](week);
        fixture.detectChanges();

        expect(getCalendar().item()).toBe(week);

        testComponent.max.set(monday.append({day: 1}));
        fixture.detectChanges();
        await fixture.whenStable();

        expect(getCalendar().item()).toBeNull();
        expect(getCalendar()['isItemActive'](week)).toBe(false);
        expect(control.value?.daySame(selectedRange)).toBe(true);
    });

    it('forgets a preset if the closed control is cleared and set back', async () => {
        const monday = new TuiDay(2025, 0, 6);
        const today = new TuiDayRangePeriod(new TuiDayRange(monday, monday), 'Today');
        const week = new TuiDayRangePeriod(
            new TuiDayRange(monday, monday.append({day: 6})),
            'Week',
        );

        testComponent.items.set([today, week]);
        testComponent.max.set(monday);
        control.setValue(today.range);
        fixture.detectChanges();
        getCalendar()['onItemSelect'](week);
        fixture.detectChanges();

        testComponent.showCalendar.set(false);
        fixture.detectChanges();
        await fixture.whenStable();

        control.setValue(null);
        fixture.detectChanges();
        await fixture.whenStable();

        control.setValue(new TuiDayRange(monday, monday));
        fixture.detectChanges();
        await fixture.whenStable();

        testComponent.showCalendar.set(true);
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();

        expect(getCalendar().item()).toBeNull();
        expect(getCalendar()['isItemActive'](week)).toBe(false);
        expect(control.value?.daySame(new TuiDayRange(monday, monday))).toBe(true);
    });

    it('clears the retained preset when the control resets without closing', async () => {
        const monday = new TuiDay(2025, 0, 6);
        const today = new TuiDayRangePeriod(new TuiDayRange(monday, monday), 'Today');
        const week = new TuiDayRangePeriod(
            new TuiDayRange(monday, monday.append({day: 6})),
            'Week',
        );

        testComponent.items.set([today, week]);
        testComponent.max.set(monday);
        control.setValue(today.range);
        fixture.detectChanges();
        getCalendar()['onItemSelect'](week);
        fixture.detectChanges();
        expect(getCalendar()['isItemActive'](week)).toBe(true);

        control.setValue(null);
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();

        expect(getCalendar().item()).toBeNull();
        expect(getCalendar().selectedActivePeriod).toBeNull();
        expect(getCalendar()['isItemActive'](week)).toBe(false);
    });

    it('clears a stale preset when the items change without closing', async () => {
        const monday = new TuiDay(2025, 0, 6);
        const oldToday = new TuiDayRangePeriod(new TuiDayRange(monday, monday), 'Today');

        const newToday = new TuiDayRangePeriod(
            new TuiDayRange(monday.append({day: 1}), monday.append({day: 1})),
            'Today',
        );

        testComponent.items.set([oldToday]);
        control.setValue(oldToday.range);
        fixture.detectChanges();

        getCalendar()['onItemSelect'](oldToday);
        fixture.detectChanges();

        testComponent.items.set([newToday]);
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();

        expect(getCalendar().item()).toBeNull();
        expect(getCalendar().selectedActivePeriod).toBeNull();
        expect(getCalendar()['isItemActive'](newToday)).toBe(false);
        expect(control.value?.daySame(oldToday.range)).toBe(true);
    });

    it('updates the selected item when presets are recreated while open', async () => {
        const monday = new TuiDay(2025, 0, 6);
        const oldToday = new TuiDayRangePeriod(new TuiDayRange(monday, monday), 'Today');
        const newToday = new TuiDayRangePeriod(new TuiDayRange(monday, monday), 'Today');

        testComponent.items.set([oldToday]);
        control.setValue(oldToday.range);
        fixture.detectChanges();

        getCalendar()['onItemSelect'](oldToday);
        fixture.detectChanges();

        testComponent.items.set([newToday]);
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();

        expect(getCalendar().item()).toBe(newToday);
        expect(getCalendar()['isItemActive'](newToday)).toBe(true);
    });

    function getCalendar(): TuiCalendarRange {
        return fixture.debugElement.query(By.directive(TuiCalendarRange))
            .componentInstance;
    }
});
