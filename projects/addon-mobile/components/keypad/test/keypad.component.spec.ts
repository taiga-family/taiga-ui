import {ChangeDetectionStrategy, Component, viewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiKeypad, type TuiKeypadCell, TuiKeypadComponent} from '@taiga-ui/addon-mobile';
import {provideEventPlugins} from '@taiga-ui/event-plugins';

describe('Keypad', () => {
    describe('TuiKeypadComponent', () => {
        @Component({
            imports: [TuiKeypad],
            template: `
                <tui-keypad [keys]="keys" />
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            public readonly component = viewChild.required(TuiKeypadComponent);

            protected readonly keys: ReadonlyArray<readonly TuiKeypadCell[]> = [
                ['1', '2', '3'],
                ['clear', '0', 'backspace'],
                ['enter'],
            ];
        }

        let fixture: ComponentFixture<Test>;
        let component: TuiKeypadComponent;

        const key = (name: string): HTMLButtonElement =>
            fixture.nativeElement.querySelector(`[data-key="${name}"]`);

        beforeEach(async () => {
            TestBed.configureTestingModule({imports: [Test]});
            await TestBed.compileComponents();
            fixture = TestBed.createComponent(Test);
            component = fixture.componentInstance.component();
            fixture.detectChanges();
        });

        it('creates', () => {
            expect(component).toBeTruthy();
        });

        it('gives every key button an accessible name', () => {
            const buttons: HTMLButtonElement[] = Array.from(
                fixture.nativeElement.querySelectorAll('button.t-key'),
            );

            expect(buttons.length).toBeGreaterThan(0);
            expect(buttons.every((button) => !!button.getAttribute('aria-label'))).toBe(
                true,
            );
        });

        it('appends a clicked key to the value and emits it', () => {
            const emitted: string[] = [];

            component.key.subscribe((event) => emitted.push(event));
            key('1').click();
            key('3').click();

            expect(component.value()).toBe('13');
            expect(emitted).toEqual(['1', '3']);
        });

        it('removes the last character on backspace', () => {
            component.value.set('12');
            fixture.detectChanges();
            key('backspace').click();

            expect(component.value()).toBe('1');
        });

        it('resets the value on clear', () => {
            component.value.set('123');
            fixture.detectChanges();
            key('clear').click();

            expect(component.value()).toBe('');
        });

        it('clears the whole value on long tap of backspace', () => {
            component.value.set('123');
            fixture.detectChanges();
            key('backspace').dispatchEvent(
                new CustomEvent('longtap', {detail: {clientX: 0, clientY: 0}}),
            );

            expect(component.value()).toBe('');
        });

        it('emits enter without mutating the value', () => {
            const emitted: string[] = [];

            component.value.set('5');
            fixture.detectChanges();
            component.key.subscribe((event) => emitted.push(event));
            key('enter').click();

            expect(component.value()).toBe('5');
            expect(emitted).toEqual(['enter']);
        });
    });

    describe('mobile mode', () => {
        @Component({
            imports: [TuiKeypad],
            template: `
                <tui-keypad [keys]="keys" />
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            public readonly component = viewChild.required(TuiKeypadComponent);

            protected readonly keys: ReadonlyArray<readonly TuiKeypadCell[]> = [
                ['1', '2', '3'],
                [',', '0', 'backspace'],
            ];
        }

        let fixture: ComponentFixture<Test>;
        let component: TuiKeypadComponent;

        const key = (name: string): HTMLButtonElement =>
            fixture.nativeElement.querySelector(`[data-key="${name}"]`);

        beforeEach(async () => {
            // EVENT_MANAGER_PLUGINS must be provided at the root injector, not the component
            TestBed.configureTestingModule({
                imports: [Test],
                providers: [provideEventPlugins()],
            });
            await TestBed.compileComponents();
            fixture = TestBed.createComponent(Test);
            component = fixture.componentInstance.component();
            fixture.detectChanges();
        });

        it('prevents default on pointerdown so a tap does not blur the focused field', () => {
            const event = new Event('pointerdown', {bubbles: true, cancelable: true});

            key('1').dispatchEvent(event);

            expect(event.defaultPrevented).toBe(true);
        });

        it('still appends on tap (click follows touch)', () => {
            key('1').click();
            key('2').click();

            expect(component.value()).toBe('12');
        });

        it('clears the whole value on long press of backspace', () => {
            component.value.set('123');
            fixture.detectChanges();
            key('backspace').dispatchEvent(
                new CustomEvent('longtap', {detail: {clientX: 0, clientY: 0}}),
            );

            expect(component.value()).toBe('');
        });
    });

    describe('TuiKeypadInput', () => {
        @Component({
            imports: [TuiKeypad],
            template: `
                <input tuiKeypadInput />
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {}

        it('suppresses the native keyboard via inputmode="none"', async () => {
            TestBed.configureTestingModule({imports: [Test]});
            await TestBed.compileComponents();

            const fixture = TestBed.createComponent(Test);

            fixture.detectChanges();

            const input: HTMLInputElement = fixture.nativeElement.querySelector('input');

            expect(input.getAttribute('inputmode')).toBe('none');
        });
    });
});
