import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiInputNumber} from '@taiga-ui/kit';

describe('TuiInputNumber bigint quantum', () => {
    @Component({
        imports: [ReactiveFormsModule, TuiInputNumber],
        template: `
            <tui-textfield>
                <input
                    bigint
                    tuiInputNumber
                    [formControl]="control"
                    [quantum]="quantum()"
                    [min]="min"
                    [max]="max"
                />
            </tui-textfield>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly control = new FormControl<bigint | null>(null);
        public readonly quantum = signal(BigInt(5));
        public readonly min = -Infinity;
        public readonly max = Infinity;
    }

    let fixture: ComponentFixture<Test>;

    beforeEach(async () => {
        TestBed.configureTestingModule({imports: [Test]});
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
    });

    it.each([
        {value: '-8', quantum: 5, expected: '-10'},
        {value: '-9', quantum: 5, expected: '-10'},
        {value: '-3', quantum: 5, expected: '-5'},
        {value: '-2', quantum: 5, expected: '0'},
        {value: '-10', quantum: 5, expected: '-10'},
        {value: '0', quantum: 5, expected: '0'},
        {value: '2', quantum: 5, expected: '0'},
        {value: '3', quantum: 5, expected: '5'},
        {value: '8', quantum: 5, expected: '10'},
        {value: '-2', quantum: 4, expected: '0'},
        {value: '-6', quantum: 4, expected: '-4'},
        {value: '2', quantum: 4, expected: '4'},
        {value: '6', quantum: 4, expected: '8'},
        {value: '-9007199254740993', quantum: 5, expected: '-9007199254740995'},
        {value: '9007199254740993', quantum: 5, expected: '9007199254740995'},
        {value: '-8', quantum: 0, expected: '-8'},
        {value: '', quantum: 5, expected: null},
    ])(
        'writes $expected to the control for $value with quantum $quantum',
        ({value, quantum, expected}) => {
            fixture.componentInstance.quantum.set(BigInt(quantum));
            fixture.detectChanges();

            const input: HTMLInputElement = fixture.nativeElement.querySelector('input');

            input.value = value;
            input.dispatchEvent(new Event('input', {bubbles: true}));

            // The input propagates changes to the form control through an effect.
            fixture.detectChanges();

            expect(fixture.componentInstance.control.value?.toString() ?? null).toBe(
                expected,
            );
        },
    );
});
