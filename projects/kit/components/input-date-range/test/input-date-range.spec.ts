import {ChangeDetectionStrategy, Component, effect, signal} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {RANGE_SEPARATOR_CHAR, TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TuiInputDateRange} from '@taiga-ui/kit';

describe('TuiInputDateRangeDirective', () => {
    @Component({
        imports: [ReactiveFormsModule, TuiInputDateRange],
        template: `
            <tui-textfield>
                <input
                    tuiInputDateRange
                    [formControl]="control"
                />
            </tui-textfield>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public syncRuns = 0;
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
});
