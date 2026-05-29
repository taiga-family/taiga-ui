import {ChangeDetectionStrategy, Component, signal, viewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {provideTaiga, TuiTextfield} from '@taiga-ui/core';
import {TuiPincode, TuiPincodeComponent} from '@taiga-ui/kit';

describe('TuiPincodeComponent', () => {
    @Component({
        imports: [ReactiveFormsModule, TuiPincode, TuiTextfield],
        template: `
            <tui-textfield>
                <input
                    tuiPincode
                    [formControl]="control"
                    [maxlength]="maxlength"
                    [valid]="valid()"
                />
            </tui-textfield>
        `,
        // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
        changeDetection: ChangeDetectionStrategy.Default,
    })
    class Test {
        public readonly pincode = viewChild.required(TuiPincodeComponent);
        public readonly control = new FormControl('');
        public maxlength = 4;
        public readonly valid = signal<boolean | null>(null);
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;
    let pincode: TuiPincodeComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [provideTaiga()],
        });

        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();
        pincode = testComponent.pincode();
    });

    function typeValue(value: string): void {
        pincode.el.value = value;
        pincode.el.dispatchEvent(new Event('input'));
        fixture.detectChanges();
    }

    function fakeAnimationEnd(animationName: string, target?: HTMLElement): void {
        const el = target ?? document.createElement('span');

        pincode.onAnimationEnd({animationName, target: el} as unknown as AnimationEvent);
    }

    describe('mode', () => {
        it('is null when value is shorter than maxlength', () => {
            typeValue('12');
            expect(pincode.el.getAttribute('data-mode')).toBeNull();
        });

        it('is pending when value length equals maxlength', () => {
            typeValue('1234');
            expect(pincode.el.getAttribute('data-mode')).toBe('pending');
        });

        it('is null when maxlength is 0', () => {
            testComponent.maxlength = 0;
            fixture.detectChanges();
            expect(pincode.el.getAttribute('data-mode')).toBeNull();
        });

        it('is success when valid is true', () => {
            typeValue('1234');
            testComponent.valid.set(true);
            fixture.detectChanges();
            expect(pincode.el.getAttribute('data-mode')).toBe('success');
        });

        it('is invalid when valid is false', () => {
            typeValue('1234');
            testComponent.valid.set(false);
            fixture.detectChanges();
            expect(pincode.el.getAttribute('data-mode')).toBe('invalid');
        });

        it('overrides pending with success even when value is shorter than maxlength', () => {
            typeValue('12');
            testComponent.valid.set(true);
            fixture.detectChanges();
            expect(pincode.el.getAttribute('data-mode')).toBe('success');
        });
    });

    describe('paste', () => {
        it('is set to true when full value typed in one input event from empty', () => {
            typeValue('1234');
            expect(pincode.paste()).toBe(true);
        });

        it('is not set when value grows incrementally', () => {
            typeValue('1');
            typeValue('12');
            typeValue('123');
            typeValue('1234');
            expect(pincode.paste()).toBe(false);
        });

        it('is reset to false when value becomes empty', () => {
            typeValue('1234');
            typeValue('');
            expect(pincode.paste()).toBe(false);
        });
    });

    describe('getStyle', () => {
        it('returns correct animation delay per index', () => {
            expect(pincode.getStyle(0)['--t-animation-delay']).toBe('0ms');
            expect(pincode.getStyle(1)['--t-animation-delay']).toBe('100ms');
            expect(pincode.getStyle(3)['--t-animation-delay']).toBe('300ms');
        });

        it('returns correct cycle for maxlength 4', () => {
            // BOUNCE_MS(400) + (4-1)*STAGGER_MS(100) + TAIL_MS(300) = 1000ms
            expect(pincode.getStyle(0)['--t-animation-cycle']).toBe('1000ms');
        });

        it('returns correct offset for center alignment', () => {
            // n=4, center=(4-1)/2=1.5 → offsets: -1.5, -0.5, 0.5, 1.5
            expect(pincode.getStyle(0)['--t-offset']).toBe('-1.5');
            expect(pincode.getStyle(1)['--t-offset']).toBe('-0.5');
            expect(pincode.getStyle(2)['--t-offset']).toBe('0.5');
            expect(pincode.getStyle(3)['--t-offset']).toBe('1.5');
        });
    });

    describe('isFocused', () => {
        it('returns false when input is not focused', () => {
            expect(pincode.isFocused(0)).toBe(false);
        });

        it('returns true for the cell at value.length when focused', () => {
            typeValue('12');
            pincode.el.focus();
            fixture.detectChanges();
            expect(pincode.isFocused(2)).toBe(true);
            expect(pincode.isFocused(1)).toBe(false);
        });

        it('clamps focus to last cell when value is full', () => {
            typeValue('1234');
            pincode.el.focus();
            fixture.detectChanges();
            expect(pincode.isFocused(3)).toBe(true);
        });
    });

    describe('confirmed output', () => {
        it('fires when success animation starts', () => {
            const spy = jest.fn();

            typeValue('1234');
            testComponent.valid.set(true);
            fixture.detectChanges();

            pincode.confirmed.subscribe(spy);
            pincode.onAnimationStart({
                animationName: 'tuiPincodeDotIn',
            } as unknown as AnimationEvent);

            expect(spy).toHaveBeenCalledTimes(1);
        });

        it('does not fire twice for the same cycle', () => {
            const spy = jest.fn();

            typeValue('1234');
            testComponent.valid.set(true);
            fixture.detectChanges();

            pincode.confirmed.subscribe(spy);
            pincode.onAnimationStart({
                animationName: 'tuiPincodeDotIn',
            } as unknown as AnimationEvent);
            pincode.onAnimationStart({
                animationName: 'tuiPincodeDotIn',
            } as unknown as AnimationEvent);

            expect(spy).toHaveBeenCalledTimes(1);
        });

        it('does not fire for unrelated animation names', () => {
            const spy = jest.fn();

            typeValue('1234');
            testComponent.valid.set(true);
            fixture.detectChanges();

            pincode.confirmed.subscribe(spy);
            pincode.onAnimationStart({
                animationName: 'tuiPincodeWave',
            } as unknown as AnimationEvent);

            expect(spy).not.toHaveBeenCalled();
        });
    });

    describe('finished output (success)', () => {
        it('fires after all cells complete collapse animation', () => {
            const spy = jest.fn();

            typeValue('1234');
            testComponent.valid.set(true);
            fixture.detectChanges();

            pincode.finished.subscribe(spy);

            fakeAnimationEnd('tuiPincodeDotCollapseScale');
            fakeAnimationEnd('tuiPincodeDotCollapseScale');
            fakeAnimationEnd('tuiPincodeDotCollapseScale');
            expect(spy).not.toHaveBeenCalled();

            fakeAnimationEnd('tuiPincodeDotCollapseScale');
            expect(spy).toHaveBeenCalledTimes(1);
        });
    });

    describe('finished output (invalid)', () => {
        it('fires after all cells complete shake animation and clears value', () => {
            const spy = jest.fn();
            const placeholder = document.createElement('span');

            placeholder.classList.add('t-dot_placeholder');
            typeValue('1234');
            testComponent.valid.set(false);
            fixture.detectChanges();

            pincode.finished.subscribe(spy);

            fakeAnimationEnd('tuiScale', placeholder);
            fakeAnimationEnd('tuiScale', placeholder);
            fakeAnimationEnd('tuiScale', placeholder);
            expect(spy).not.toHaveBeenCalled();

            fakeAnimationEnd('tuiScale', placeholder);
            expect(spy).toHaveBeenCalledTimes(1);
            expect(pincode.el.value).toBe('');
        });

        it('does not clear value for unrelated animation end events', () => {
            const placeholder = document.createElement('span');

            placeholder.classList.add('t-dot_placeholder');
            typeValue('1234');
            testComponent.valid.set(false);
            fixture.detectChanges();

            fakeAnimationEnd('tuiPincodeShake', placeholder);
            expect(pincode.el.value).toBe('1234');
        });
    });
});
