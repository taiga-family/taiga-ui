import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {provideTaiga} from '@taiga-ui/core';
import {TuiRating} from '@taiga-ui/kit';

describe('TuiRating readonly keyboard navigation', () => {
    @Component({
        imports: [FormsModule, TuiRating],
        template: `
            <button type="button">Previous</button>
            <tui-rating
                [ngModel]="3"
                [readonly]="true"
            />
            <button type="button">Next</button>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {}

    it.each([
        {key: 'Tab', shiftKey: false, prevented: false},
        {key: 'Tab', shiftKey: true, prevented: false},
        {key: 'ArrowRight', shiftKey: false, prevented: true},
    ])(
        'cancels $key with shiftKey=$shiftKey: $prevented',
        async ({key, shiftKey, prevented}) => {
            TestBed.configureTestingModule({
                imports: [Test],
                providers: [provideTaiga()],
            });
            const fixture = TestBed.createComponent(Test);

            fixture.detectChanges();
            await fixture.whenStable();

            const input: HTMLInputElement = fixture.debugElement.query(
                By.css('input[type="range"]'),
            ).nativeElement;

            input.focus();
            expect(input.ownerDocument.activeElement).toBe(input);

            const event = new KeyboardEvent('keydown', {
                key,
                bubbles: true,
                cancelable: true,
                shiftKey,
            });

            input.dispatchEvent(event);

            expect(event.defaultPrevented).toBe(prevented);
        },
    );
});
