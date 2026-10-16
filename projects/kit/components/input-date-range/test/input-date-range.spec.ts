import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {RANGE_SEPARATOR_CHAR, TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateRange} from '@taiga-ui/kit';

describe('TuiInputDateRangeDirective', () => {
    @Component({
        standalone: true,
        imports: [ReactiveFormsModule, TuiInputDateRange, TuiRoot, TuiTextfield],
        template: `
            <tui-root>
                <tui-textfield>
                    <input
                        tuiInputDateRange
                        [formControl]="control"
                        [max]="max"
                        [min]="min"
                    />
                </tui-textfield>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly min = new TuiDay(2025, 0, 10);
        public readonly max = new TuiDay(2025, 0, 20);
        public readonly control = new FormControl<TuiDayRange | null>(null);
    }

    let fixture: ComponentFixture<Test>;

    beforeEach(async () => {
        TestBed.configureTestingModule({imports: [Test]});
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        fixture.detectChanges();
        await fixture.whenStable();
    });

    it.each([
        {
            description: 'below min',
            input: `01.01.2025${RANGE_SEPARATOR_CHAR}05.01.2025`,
            expected: new TuiDayRange(new TuiDay(2025, 0, 10), new TuiDay(2025, 0, 10)),
        },
        {
            description: 'above max',
            input: `25.01.2025${RANGE_SEPARATOR_CHAR}30.01.2025`,
            expected: new TuiDayRange(new TuiDay(2025, 0, 20), new TuiDay(2025, 0, 20)),
        },
        {
            description: 'partially below min',
            input: `01.01.2025${RANGE_SEPARATOR_CHAR}15.01.2025`,
            expected: new TuiDayRange(new TuiDay(2025, 0, 10), new TuiDay(2025, 0, 15)),
        },
        {
            description: 'inside bounds',
            input: `11.01.2025${RANGE_SEPARATOR_CHAR}18.01.2025`,
            expected: new TuiDayRange(new TuiDay(2025, 0, 11), new TuiDay(2025, 0, 18)),
        },
    ])('emits valid range $description', ({input: value, expected}) => {
        const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
        const emissions: Array<TuiDayRange | null> = [];

        fixture.componentInstance.control.valueChanges.subscribe((range) => {
            emissions.push(range);
        });

        input.value = value;
        input.dispatchEvent(new Event('input', {bubbles: true}));
        fixture.detectChanges();

        expect(emissions).toHaveLength(1);
        expect(emissions[0]?.daySame(expected)).toBe(true);
    });
});
