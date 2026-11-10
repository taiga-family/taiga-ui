import {
    ChangeDetectionStrategy,
    Component,
    provideZoneChangeDetection,
    signal,
} from '@angular/core';
import {type ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {provideTaiga, type TuiKeySteps} from '@taiga-ui/core';
import {TuiInputSlider} from '@taiga-ui/kit';

describe('InputSlider with event coalescing', () => {
    @Component({
        imports: [ReactiveFormsModule, TuiInputSlider],
        template: `
            <tui-textfield>
                <input
                    tuiInputSlider
                    [formControl]="control"
                    [max]="100"
                    [min]="0"
                    [quantum]="quantum()"
                />
                <input
                    tuiSlider
                    type="range"
                    [keySteps]="keySteps()"
                />
            </tui-textfield>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly control = new FormControl(0, {nonNullable: true});
        public readonly quantum = signal(0);
        public readonly keySteps = signal<TuiKeySteps | undefined>(undefined);
    }

    let fixture: ComponentFixture<Test>;
    let textfield: HTMLInputElement;
    let slider: HTMLInputElement;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [
                provideTaiga(),
                provideZoneChangeDetection({eventCoalescing: true}),
            ],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        fixture.detectChanges();
        await fixture.whenStable();
        textfield = fixture.nativeElement.querySelector('[tuiInputSlider]');
        slider = fixture.nativeElement.querySelector('[tuiSlider]');
    });

    it('updates the control once without waiting for change detection', () => {
        const onChange = jest.fn();

        fixture.componentInstance.control.valueChanges.subscribe(onChange);
        slider.value = '50';
        slider.dispatchEvent(new Event('input', {bubbles: true}));

        expect(fixture.componentInstance.control.value).toBe(50);
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(50);

        fixture.detectChanges();

        expect(textfield.value).toBe('50');
        expect(onChange).toHaveBeenCalledTimes(1);
    });

    it.each([0, 50, 100])(
        'preserves %s when blur runs before change detection',
        (value) =>
            fakeAsync(() => {
                fixture.componentInstance.control.setValue(25);
                fixture.detectChanges();
                textfield.focus();
                fixture.detectChanges();
                textfield.blur();
                slider.value = String(value);
                slider.dispatchEvent(new Event('input', {bubbles: true}));
                slider.dispatchEvent(new Event('pointerup', {bubbles: true}));
                tick(0);
                fixture.detectChanges();

                expect(fixture.componentInstance.control.value).toBe(value);
                expect(textfield.value).toBe(String(value));
                expect(slider.value).toBe(String(value));
                expect(document.activeElement).toBe(textfield);
            })(),
    );

    it('keeps the last value after dragging and returning focus to the textfield', fakeAsync(() => {
        textfield.focus();
        fixture.detectChanges();
        textfield.blur();

        for (const value of [10, 30, 70]) {
            slider.value = String(value);
            slider.dispatchEvent(new Event('input', {bubbles: true}));
        }

        slider.dispatchEvent(new Event('pointerup', {bubbles: true}));
        tick(0);
        fixture.detectChanges();

        expect(fixture.componentInstance.control.value).toBe(70);
        expect(textfield.value).toBe('70');
        expect(document.activeElement).toBe(textfield);
    }));

    it('preserves key step conversion with a pending blur timeout', fakeAsync(() => {
        fixture.componentInstance.keySteps.set([
            [0, 0],
            [50, 20],
            [100, 100],
        ]);
        fixture.detectChanges();
        textfield.focus();
        fixture.detectChanges();
        textfield.blur();
        slider.value = '50';
        slider.dispatchEvent(new Event('input', {bubbles: true}));
        slider.dispatchEvent(new Event('pointerup', {bubbles: true}));
        tick(0);
        fixture.detectChanges();

        expect(fixture.componentInstance.control.value).toBe(20);
        expect(textfield.value).toBe('20');
        expect(slider.value).toBe('50');
    }));

    it('preserves quantum rounding with a pending blur timeout', fakeAsync(() => {
        fixture.componentInstance.quantum.set(10);
        fixture.detectChanges();
        textfield.focus();
        fixture.detectChanges();
        textfield.blur();
        slider.value = '56';
        slider.dispatchEvent(new Event('input', {bubbles: true}));
        slider.dispatchEvent(new Event('pointerup', {bubbles: true}));
        tick(0);
        fixture.detectChanges();

        expect(fixture.componentInstance.control.value).toBe(60);
        expect(textfield.value).toBe('60');
        expect(slider.value).toBe('60');
    }));
});
