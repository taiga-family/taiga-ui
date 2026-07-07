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
                    [invalid]="invalid()"
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
        public readonly invalid = signal<boolean | null>(null);
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

    function fakeAnimationEnd(animationName: string): void {
        pincode.onAnimationEnd({
            animationName,
            target: document.createElement('span'),
        } as unknown as AnimationEvent);
    }

    function fakeAnimationStart(animationName: string): void {
        pincode.onAnimationStart({animationName} as unknown as AnimationEvent);
    }

    describe('state', () => {
        it('is null when value is shorter than maxlength', () => {
            typeValue('12');
            expect(pincode.el.getAttribute('data-state')).toBeNull();
        });

        it('is pending when value length equals maxlength', () => {
            typeValue('1234');
            expect(pincode.el.getAttribute('data-state')).toBe('pending');
        });

        it('is null when maxlength is 0', () => {
            testComponent.maxlength = 0;
            fixture.detectChanges();
            expect(pincode.el.getAttribute('data-state')).toBeNull();
        });

        it('is success when invalid is false', () => {
            typeValue('1234');
            testComponent.invalid.set(false);
            fixture.detectChanges();
            expect(pincode.el.getAttribute('data-state')).toBe('success');
        });

        it('is invalid when invalid is true', () => {
            typeValue('1234');
            testComponent.invalid.set(true);
            fixture.detectChanges();
            expect(pincode.el.getAttribute('data-state')).toBe('invalid');
        });

        it('overrides pending with success even when value is shorter than maxlength', () => {
            typeValue('12');
            testComponent.invalid.set(false);
            fixture.detectChanges();
            expect(pincode.el.getAttribute('data-state')).toBe('success');
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
            testComponent.invalid.set(false);
            fixture.detectChanges();

            pincode.confirmed.subscribe(spy);
            fakeAnimationStart('tuiPincodeDotIn');

            expect(spy).toHaveBeenCalledTimes(1);
        });

        it('does not fire twice for the same cycle', () => {
            const spy = jest.fn();

            typeValue('1234');
            testComponent.invalid.set(false);
            fixture.detectChanges();

            pincode.confirmed.subscribe(spy);
            fakeAnimationStart('tuiPincodeDotIn');
            fakeAnimationStart('tuiPincodeDotIn');

            expect(spy).toHaveBeenCalledTimes(1);
        });

        it('does not fire for unrelated animation names', () => {
            const spy = jest.fn();

            typeValue('1234');
            testComponent.invalid.set(false);
            fixture.detectChanges();

            pincode.confirmed.subscribe(spy);
            fakeAnimationStart('tuiPincodeWave');

            expect(spy).not.toHaveBeenCalled();
        });

        it('fires again after a new validation cycle starts', () => {
            const spy = jest.fn();

            typeValue('1234');
            testComponent.invalid.set(false);
            fixture.detectChanges();

            pincode.confirmed.subscribe(spy);
            fakeAnimationStart('tuiPincodeDotIn');
            expect(spy).toHaveBeenCalledTimes(1);

            testComponent.invalid.set(null);
            fixture.detectChanges();
            typeValue('1234');
            testComponent.invalid.set(false);
            fixture.detectChanges();

            fakeAnimationStart('tuiPincodeDotIn');
            expect(spy).toHaveBeenCalledTimes(2);
        });
    });

    describe('finished output (success)', () => {
        it('fires after all cells complete collapse animation', () => {
            const spy = jest.fn();

            typeValue('1234');
            testComponent.invalid.set(false);
            fixture.detectChanges();

            pincode.finished.subscribe(spy);

            fakeAnimationEnd('tuiPincodeDotCollapseScale');
            fakeAnimationEnd('tuiPincodeDotCollapseScale');
            fakeAnimationEnd('tuiPincodeDotCollapseScale');
            expect(spy).not.toHaveBeenCalled();

            fakeAnimationEnd('tuiPincodeDotCollapseScale');
            expect(spy).toHaveBeenCalledTimes(1);
        });

        it('does not clear value', () => {
            typeValue('1234');
            testComponent.invalid.set(false);
            fixture.detectChanges();

            fakeAnimationEnd('tuiPincodeDotCollapseScale');
            fakeAnimationEnd('tuiPincodeDotCollapseScale');
            fakeAnimationEnd('tuiPincodeDotCollapseScale');
            fakeAnimationEnd('tuiPincodeDotCollapseScale');

            fixture.detectChanges();
            expect(pincode.el.value).toBe('1234');
        });
    });

    describe('finished output (invalid)', () => {
        it('fires after all cells complete shake animation and clears value', () => {
            const spy = jest.fn();

            typeValue('1234');
            testComponent.invalid.set(true);
            fixture.detectChanges();

            pincode.finished.subscribe(spy);

            fakeAnimationEnd('tuiPincodeScale');
            fakeAnimationEnd('tuiPincodeScale');
            fakeAnimationEnd('tuiPincodeScale');
            expect(spy).not.toHaveBeenCalled();

            fakeAnimationEnd('tuiPincodeScale');
            expect(spy).toHaveBeenCalledTimes(1);
            fixture.detectChanges();
            expect(pincode.el.value).toBe('');
        });

        it('requires only as many events as filled cells', () => {
            const spy = jest.fn();

            typeValue('12');
            testComponent.invalid.set(true);
            fixture.detectChanges();

            pincode.finished.subscribe(spy);

            fakeAnimationEnd('tuiPincodeScale');
            expect(spy).not.toHaveBeenCalled();

            fakeAnimationEnd('tuiPincodeScale');
            expect(spy).toHaveBeenCalledTimes(1);
        });

        it('does not clear value for unrelated animation end events', () => {
            typeValue('1234');
            testComponent.invalid.set(true);
            fixture.detectChanges();

            fakeAnimationEnd('tuiPincodeShake');
            expect(pincode.el.value).toBe('1234');
        });
    });
});
