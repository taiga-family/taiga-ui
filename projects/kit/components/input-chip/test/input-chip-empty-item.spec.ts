import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {provideTaiga} from '@taiga-ui/core';
import {TuiInputChip} from '@taiga-ui/kit';

describe('TuiTextfieldMulti with an empty item template', () => {
    @Component({
        imports: [ReactiveFormsModule, TuiInputChip],
        template: `
            <tui-textfield multi>
                <input
                    tuiInputChip
                    [formControl]="control"
                />
                <ng-template tuiItem />
            </tui-textfield>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly control = new FormControl<string[]>(['foo']);
    }

    const callbacks: ResizeObserverCallback[] = [];
    const original = globalThis.ResizeObserver;

    beforeEach(() => {
        globalThis.ResizeObserver = class {
            constructor(callback: ResizeObserverCallback) {
                callbacks.push(callback);
            }

            public observe(): void {}

            public unobserve(): void {}

            public disconnect(): void {}
        };

        TestBed.configureTestingModule({imports: [Test], providers: [provideTaiga()]});
    });

    afterEach(() => {
        globalThis.ResizeObserver = original;
        callbacks.length = 0;
    });

    it('does not collapse the input when items render nothing', async () => {
        const fixture = TestBed.createComponent(Test);

        fixture.detectChanges();
        await fixture.whenStable();

        // jsdom reports every item as 0px tall, like an empty item template does in a browser
        callbacks.forEach((callback) => callback([], {} as ResizeObserver));
        fixture.detectChanges();

        const textfield: HTMLElement =
            fixture.nativeElement.querySelector('tui-textfield');

        expect(textfield.style.getPropertyValue('--t-item-height')).toBe('');
    });
});
