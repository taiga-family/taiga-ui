import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiKeypad} from '@taiga-ui/addon-mobile';
import {provideEventPlugins} from '@taiga-ui/event-plugins';

describe('Keypad', () => {
    describe('TuiKeypad', () => {
        @Component({
            imports: [TuiKeypad],
            template: `
                <tui-keypad [columns]="columns()">
                    <button type="button">1</button>
                </tui-keypad>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            public readonly columns = signal(3);
        }

        let fixture: ComponentFixture<Test>;

        const keypad = (): HTMLElement =>
            fixture.nativeElement.querySelector('tui-keypad');

        const key = (): HTMLElement =>
            fixture.nativeElement.querySelector('tui-keypad button');

        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [Test],
                providers: [provideEventPlugins()],
            });
            await TestBed.compileComponents();
            fixture = TestBed.createComponent(Test);
            fixture.detectChanges();
        });

        it('reflects [columns] to the --t-columns custom property', () => {
            expect(keypad().style.getPropertyValue('--t-columns')).toBe('3');

            fixture.componentInstance.columns.set(4);
            fixture.detectChanges();

            expect(keypad().style.getPropertyValue('--t-columns')).toBe('4');
        });

        it('prevents mousedown and pointerdown on keys AND the gaps so a tap never blurs the field', () => {
            for (const type of ['mousedown', 'pointerdown']) {
                const onKey = new Event(type, {bubbles: true, cancelable: true});

                key().dispatchEvent(onKey);

                expect(onKey.defaultPrevented).toBe(true);

                const onGap = new Event(type, {bubbles: true, cancelable: true});

                keypad().dispatchEvent(onGap);

                expect(onGap.defaultPrevented).toBe(true);
            }
        });
    });
});
