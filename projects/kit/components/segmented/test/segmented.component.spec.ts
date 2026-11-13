import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {provideTaiga} from '@taiga-ui/core';
import {TuiSegmented} from '@taiga-ui/kit';

describe('TuiSegmented', () => {
    @Component({
        imports: [ReactiveFormsModule, TuiSegmented],
        template: `
            <tui-segmented>
                @if (buttonPosition === 'before') {
                    <button type="button">All</button>
                }
                <label>
                    <input
                        type="radio"
                        value="a"
                        [formControl]="control"
                    />
                    Alpha
                </label>
                @if (buttonPosition === 'between') {
                    <button type="button">All</button>
                }
                <label>
                    <input
                        type="radio"
                        value="b"
                        [formControl]="control"
                    />
                    Beta
                </label>
            </tui-segmented>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly control = new FormControl('a');
        public buttonPosition = 'none';
    }

    it.each(['none', 'before', 'between'])(
        'highlights the selected radio with button position: %s',
        async (buttonPosition) => {
            TestBed.configureTestingModule({
                imports: [Test],
                providers: [provideTaiga()],
            });

            const fixture = TestBed.createComponent(Test);

            fixture.componentInstance.buttonPosition = buttonPosition;
            fixture.detectChanges();
            await fixture.whenStable();

            fixture.componentInstance.control.setValue('b');
            fixture.detectChanges();
            await fixture.whenStable();

            const root: HTMLElement = fixture.nativeElement;

            expect(root.querySelector('.tui-segmented_active')?.textContent?.trim()).toBe(
                'Beta',
            );
        },
    );
});
