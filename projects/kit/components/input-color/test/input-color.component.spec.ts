import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {provideTaiga, TuiTextfield} from '@taiga-ui/core';
import {TuiInputColor} from '@taiga-ui/kit';

describe.each(['hex', 'hexa'] as const)('InputColor in %s mode', (format) => {
    @Component({
        imports: [ReactiveFormsModule, TuiInputColor, TuiTextfield],
        template: `
            <tui-textfield>
                <input
                    tuiInputColor
                    [formControl]="control"
                    [format]="format"
                />
            </tui-textfield>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly control = new FormControl('');
        public readonly format = format;
    }

    let fixture: ComponentFixture<Test>;
    let element: HTMLElement;
    let valueSetter: jest.SpyInstance;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [provideTaiga()],
        });
        await TestBed.compileComponents();
        valueSetter = jest.spyOn(HTMLInputElement.prototype, 'value', 'set');
        fixture = TestBed.createComponent(Test);
        element = fixture.nativeElement;
    });

    afterEach(() => valueSetter.mockRestore());

    it.each(['', null])(
        'initializes an empty value (%s) without a native color warning',
        async (value) => {
            fixture.componentInstance.control.setValue(value);
            await stabilize();

            expectEmptyNativeColor();
            expect(fixture.componentInstance.control.value).toBe(value);
            expect(
                element.querySelector<HTMLInputElement>('input[tuiInputColor]')?.value,
            ).toBe('');
        },
    );

    it('resets the form value without writing an empty native color', async () => {
        fixture.componentInstance.control.setValue('#123456');
        await stabilize();
        valueSetter.mockClear();

        fixture.componentInstance.control.reset();
        await stabilize();

        expectEmptyNativeColor();
        expect(fixture.componentInstance.control.value).toBeNull();
        expect(
            element.querySelector<HTMLInputElement>('input[tuiInputColor]')?.value,
        ).toBe('');
    });

    it('updates the form when a native color is selected after resetting', async () => {
        fixture.componentInstance.control.setValue('#abcdef');
        await stabilize();
        fixture.componentInstance.control.reset();
        await stabilize();

        const input = element.querySelector<HTMLInputElement>('input[type="color"]')!;

        input.value = '#123456';
        input.dispatchEvent(new Event('input', {bubbles: true}));
        await stabilize();

        const expected = format === 'hexa' ? '#123456ff' : '#123456';

        expect(fixture.componentInstance.control.value).toBe(expected);
        expect(
            element.querySelector<HTMLInputElement>('input[tuiInputColor]')?.value,
        ).toBe(expected);
    });

    async function stabilize(): Promise<void> {
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();
    }

    function expectEmptyNativeColor(): void {
        const input = element.querySelector<HTMLInputElement>('input[type="color"]');
        // Native inputs sanitize an empty value to black, so inspect the writes too.
        const values = valueSetter.mock.calls
            .filter((_, index) => valueSetter.mock.contexts[index] === input)
            .map(([value]) => value);

        expect(input?.value).toBe('#000000');
        expect(values).toContain('#000000');
        expect(values).not.toContain('');
    }
});
