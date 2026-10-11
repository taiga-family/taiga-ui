import {ChangeDetectionStrategy, Component, effect, signal} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {RANGE_SEPARATOR_CHAR, TUI_FIRST_DAY, TUI_LAST_DAY, TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TuiCalendarRange, TuiInputDateRange} from '@taiga-ui/kit';

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
                <tui-calendar-range />
            </tui-textfield>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public syncRuns = 0;
        public readonly range = signal<TuiDayRange | null>(null);
        public readonly min = signal(TUI_FIRST_DAY);
        public readonly max = signal(TUI_LAST_DAY);
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
    ])('emits only a corrected value for a range $description', async ({value, expected}) => {
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

    function getCalendar(): TuiCalendarRange {
        return fixture.debugElement.query(By.directive(TuiCalendarRange))
            .componentInstance;
    }
});
