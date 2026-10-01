import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiStatus} from '@taiga-ui/kit';

@Component({
    imports: [TuiStatus],
    template: `
        <span
            style="inline-size: 1rem; white-space: nowrap"
            tuiStatus="var(--tui-status-positive)"
        >
            Status with a long label
        </span>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class Test {}

describe('Status', () => {
    beforeEach(() => cy.mount(Test));

    it('does not shrink status dot in constrained width', () => {
        cy.get('[tuiStatus]').should(($status) => {
            const styles = getComputedStyle($status[0]!, '::before');

            expect(styles.width).to.equal('8px');
        });
    });
});
