import {ChangeDetectionStrategy, Component, signal, viewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {
    TuiKeypad,
    type TuiKeypadCell,
    TuiKeypadComponent,
    type TuiKeypadKey,
} from '@taiga-ui/addon-mobile';
import {provideEventPlugins} from '@taiga-ui/event-plugins';

describe('Keypad', () => {
    describe('TuiKeypadComponent', () => {
        @Component({
            imports: [TuiKeypad],
            template: `
                <tui-keypad
                    [ariaLabels]="ariaLabels()"
                    [keys]="keys"
                />
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            public readonly component = viewChild.required(TuiKeypadComponent);
            public readonly ariaLabels = signal<Record<string, string>>({});

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

        it('every key button has an accessible name (aria-label or visible text)', () => {
            const buttons: HTMLButtonElement[] = Array.from(
                fixture.nativeElement.querySelectorAll('button.t-key'),
            );

            expect(buttons.length).toBeGreaterThan(0);
            expect(
                buttons.every((button) =>
                    (
                        button.getAttribute('aria-label') ||
                        button.textContent ||
                        ''
                    ).trim(),
                ),
            ).toBeTruthy();
        });

        it('adds aria-label only to icon-only keys; text/digit keys keep their visible text', () => {
            expect(key('backspace').getAttribute('aria-label')).toBe('backspace');
            expect(key('enter').getAttribute('aria-label')).toBe('enter');

            expect(key('clear').getAttribute('aria-label')).toBeNull();
            expect(key('clear').textContent?.trim()).toBe('AC');
            expect(key('1').getAttribute('aria-label')).toBeNull();
            expect(key('1').textContent?.trim()).toBe('1');
        });

        it('uses ariaLabels to localize keys, overriding the fallback', () => {
            fixture.componentInstance.ariaLabels.set({backspace: 'Удалить', '1': 'Один'});
            fixture.detectChanges();

            expect(key('backspace').getAttribute('aria-label')).toBe('Удалить');
            expect(key('1').getAttribute('aria-label')).toBe('Один');
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
            protected readonly keys: ReadonlyArray<readonly TuiKeypadCell[]> = [
                ['1', '2', '3'],
                [',', '0', 'backspace'],
            ];
        }

        let fixture: ComponentFixture<Test>;

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
            fixture.detectChanges();
        });

        it('prevents default on pointerdown so a tap does not blur the focused field', () => {
            const event = new Event('pointerdown', {bubbles: true, cancelable: true});

            key('1').dispatchEvent(event);

            expect(event.defaultPrevented).toBe(true);
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

        let input: HTMLInputElement;

        const keydown = (key: string, init: KeyboardEventInit = {}): KeyboardEvent => {
            const event = new KeyboardEvent('keydown', {
                key,
                bubbles: true,
                cancelable: true,
                ...init,
            });

            input.dispatchEvent(event);

            return event;
        };

        const beforeInput = (
            inputType: string,
            data: string | null = null,
        ): InputEvent => {
            const event = new InputEvent('beforeinput', {
                inputType,
                data,
                bubbles: true,
                cancelable: true,
            });

            input.dispatchEvent(event);

            return event;
        };

        beforeEach(async () => {
            // provideEventPlugins is required for the `.zoneless` host binding
            TestBed.configureTestingModule({
                imports: [Test],
                providers: [provideEventPlugins()],
            });
            await TestBed.compileComponents();

            const fixture = TestBed.createComponent(Test);

            fixture.detectChanges();
            input = fixture.nativeElement.querySelector('input');
        });

        it('suppresses the native keyboard via inputmode="none"', () => {
            expect(input.getAttribute('inputmode')).toBe('none');
        });

        it('blocks value mutation (typing, paste, IME, delete) so the keypad is the only source', () => {
            expect(beforeInput('insertText', '5').defaultPrevented).toBe(true);
            expect(beforeInput('insertFromPaste', 'abc').defaultPrevented).toBe(true);
            expect(beforeInput('insertCompositionText', 'あ').defaultPrevented).toBe(
                true,
            );
            expect(beforeInput('deleteContentBackward').defaultPrevented).toBe(true);
        });

        it('does not trap focus: navigation keys are left alone (WCAG 2.1.2)', () => {
            expect(keydown('Tab').defaultPrevented).toBe(false);
            expect(keydown('ArrowLeft').defaultPrevented).toBe(false);
            expect(keydown('Escape').defaultPrevented).toBe(false);
        });

        it('leaves the copy shortcut untouched', () => {
            expect(keydown('c', {ctrlKey: true}).defaultPrevented).toBe(false);
        });
    });

    describe('custom template', () => {
        @Component({
            imports: [TuiKeypad],
            template: `
                <tui-keypad [keys]="keys">
                    <ng-template tuiKeypadKey="backspace">x</ng-template>
                </tui-keypad>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            protected readonly keys: ReadonlyArray<readonly TuiKeypadCell[]> = [
                ['backspace'],
            ];
        }

        let fixture: ComponentFixture<Test>;

        beforeEach(async () => {
            TestBed.configureTestingModule({imports: [Test]});
            await TestBed.compileComponents();
            fixture = TestBed.createComponent(Test);
            fixture.detectChanges();
        });

        it('defers to a custom template instead of forcing an aria-label', () => {
            const button: HTMLButtonElement = fixture.nativeElement.querySelector(
                '[data-key="backspace"]',
            );

            expect(button.getAttribute('aria-label')).toBeNull();
            expect(button.textContent?.trim()).toBe('x');
        });
    });

    describe('disabled state', () => {
        @Component({
            imports: [TuiKeypad],
            template: `
                <tui-keypad
                    [disabled]="disabled()"
                    [disabledKeys]="disabledKeys()"
                    [keys]="keys"
                />
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            public readonly component = viewChild.required(TuiKeypadComponent);
            public readonly disabled = signal(false);
            public readonly disabledKeys = signal<readonly TuiKeypadKey[]>([]);

            protected readonly keys: ReadonlyArray<readonly TuiKeypadCell[]> = [
                ['1', '2', '3'],
                ['clear', '0', 'backspace'],
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

        it('disables every key and marks the host when [disabled] is set', () => {
            fixture.componentInstance.disabled.set(true);
            fixture.detectChanges();

            expect(key('1').disabled).toBe(true);
            expect(key('backspace').disabled).toBe(true);
            expect(
                fixture.nativeElement
                    .querySelector('tui-keypad')
                    .getAttribute('disabled'),
            ).toBe('');
        });

        it('ignores input while disabled: no value change, no emit', () => {
            const emitted: string[] = [];

            component.key.subscribe((event) => emitted.push(event));
            fixture.componentInstance.disabled.set(true);
            fixture.detectChanges();
            key('1').click();

            expect(component.value()).toBe('');
            expect(emitted).toEqual([]);
        });

        it('disables only the keys listed in [disabledKeys]', () => {
            fixture.componentInstance.disabledKeys.set(['backspace']);
            fixture.detectChanges();

            expect(key('backspace').disabled).toBe(true);
            expect(key('1').disabled).toBe(false);
        });

        it('a disabled key is inert while the rest keep working', () => {
            const emitted: string[] = [];

            component.value.set('12');
            fixture.componentInstance.disabledKeys.set(['backspace']);
            fixture.detectChanges();
            component.key.subscribe((event) => emitted.push(event));
            key('backspace').click();

            expect(component.value()).toBe('12');

            key('3').click();

            expect(component.value()).toBe('123');
            expect(emitted).toEqual(['3']);
        });

        it('does not clear on long tap of a disabled backspace', () => {
            component.value.set('123');
            fixture.componentInstance.disabledKeys.set(['backspace']);
            fixture.detectChanges();
            key('backspace').dispatchEvent(
                new CustomEvent('longtap', {detail: {clientX: 0, clientY: 0}}),
            );

            expect(component.value()).toBe('123');
        });
    });
});
