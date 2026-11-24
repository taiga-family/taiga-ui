import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {TuiLabel} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiLabel],
    template: `
        <label
            tuiLabel
            tuiLabelReverse
        >
            <input type="checkbox" />
            Reversed
        </label>
        <label tuiLabel>
            <input type="checkbox" />
            Default
        </label>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class Test {}

describe('TuiLabel', () => {
    it('reverses the label layout only when requested', () => {
        const fixture = TestBed.createComponent(Test);

        fixture.detectChanges();

        const labels: NodeListOf<HTMLLabelElement> =
            fixture.nativeElement.querySelectorAll('label');

        expect(labels[0]?.hasAttribute('data-label-reverse')).toBe(true);
        expect(labels[1]?.hasAttribute('data-label-reverse')).toBe(false);
    });
});
