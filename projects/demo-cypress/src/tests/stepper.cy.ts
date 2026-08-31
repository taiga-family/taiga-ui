import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiStepper} from '@taiga-ui/kit';
import {TuiCard} from '@taiga-ui/layout';

@Component({
    imports: [TuiCard, TuiStepper],
    template: `
        <div tuiCardLarge>
            <tui-stepper
                orientation="vertical"
                [activeItemIndex]="1"
            >
                <button
                    size="s"
                    tuiStep
                >
                    Small
                </button>
                <button
                    size="m"
                    tuiStep
                >
                    Medium
                </button>
                <button
                    size="l"
                    tuiStep
                >
                    Large
                </button>
            </tui-stepper>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sandbox {}

describe('Stepper', () => {
    beforeEach(() => cy.mount(Sandbox));

    it('does not inherit CardLarge cell spacing', () => {
        cy.get('[tuiCardLarge]').compareSnapshot('stepper-card-large');

        cy.get('[tuiStep]').each(($step) => {
            cy.wrap($step)
                .should('have.css', 'margin-left', '0px')
                .and('have.css', 'margin-right', '0px');
        });
    });

    it('supports custom sizes', () => {
        cy.get('[tuiStep]').eq(0).should('have.attr', 'data-size', 's');
        cy.get('[tuiStep]').eq(1).should('have.attr', 'data-size', 'm');
        cy.get('[tuiStep]').eq(2).should('have.attr', 'data-size', 'l');
    });
});
