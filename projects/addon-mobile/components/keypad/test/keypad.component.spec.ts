import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiKeypad} from '@taiga-ui/addon-mobile';
import {provideEventPlugins} from '@taiga-ui/event-plugins';

describe('Keypad', () => {
    describe('TuiKeypadComponent', () => {
        @Component({
            imports: [TuiKeypad],
            template: `
                <tui-keypad [columns]="columns()">
                    @for (digit of digits; track digit) {
                        <button
                            tuiKeypadButton
                            type="button"
                            (click)="append(digit)"
                        >
                            {{ digit }}
                        </button>
                    }
                    <a
                        tuiKeypadButton
                        (click)="append('0')"
                    >
                        0
                    </a>
                    <button
                        aria-label="Backspace"
                        tuiKeypadButton
                        type="button"
                        (click)="backspace()"
                        (longtap)="clear()"
                    >
                        x
                    </button>
                </tui-keypad>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            public readonly columns = signal(3);
            public readonly value = signal('');

            protected readonly digits = ['1', '2', '3'];

            protected append(digit: string): void {
                this.value.update((current) => `${current}${digit}`);
            }

            protected backspace(): void {
                this.value.update((current) => current.slice(0, -1));
            }

            protected clear(): void {
                this.value.set('');
            }
        }

        let fixture: ComponentFixture<Test>;

        const keypad = (): HTMLElement =>
            fixture.nativeElement.querySelector('tui-keypad');

        const buttons = (): HTMLElement[] =>
            Array.from(fixture.nativeElement.querySelectorAll('[tuiKeypadButton]'));

        const key = (text: string): HTMLElement =>
            buttons().find((button) => button.textContent?.trim() === text)!;

        const backspace = (): HTMLElement =>
            fixture.nativeElement.querySelector('[aria-label="Backspace"]');

        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [Test],
                providers: [provideEventPlugins()],
            });
            await TestBed.compileComponents();
            fixture = TestBed.createComponent(Test);
            fixture.detectChanges();
        });

        it('projects every tuiKeypadButton into the grid', () => {
            expect(buttons().length).toBe(5);
        });

        it('reflects [columns] to the --t-columns custom property', () => {
            expect(keypad().style.getPropertyValue('--t-columns')).toBe('3');

            fixture.componentInstance.columns.set(4);
            fixture.detectChanges();

            expect(keypad().style.getPropertyValue('--t-columns')).toBe('4');
        });

        it('runs the consumer click handler for a projected key', () => {
            key('1').click();
            key('2').click();

            expect(fixture.componentInstance.value()).toBe('12');
        });

        it('supports an anchor key (a[tuiKeypadButton])', () => {
            key('0').click();

            expect(fixture.componentInstance.value()).toBe('0');
        });

        it('lets the consumer wire a backspace key', () => {
            fixture.componentInstance.value.set('12');
            backspace().click();

            expect(fixture.componentInstance.value()).toBe('1');
        });

        it('routes a consumer-wired (longtap) on a key to its handler (e.g. long-press backspace clears)', () => {
            fixture.componentInstance.value.set('123');
            backspace().dispatchEvent(
                new CustomEvent('longtap', {detail: {clientX: 0, clientY: 0}}),
            );

            expect(fixture.componentInstance.value()).toBe('');
        });

        it('prevents pointerdown on keys AND the gaps between them so a tap never blurs the field', () => {
            const onKey = new Event('pointerdown', {bubbles: true, cancelable: true});

            key('1').dispatchEvent(onKey);

            expect(onKey.defaultPrevented).toBe(true);

            const onGap = new Event('pointerdown', {bubbles: true, cancelable: true});

            keypad().dispatchEvent(onGap);

            expect(onGap.defaultPrevented).toBe(true);
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
});
