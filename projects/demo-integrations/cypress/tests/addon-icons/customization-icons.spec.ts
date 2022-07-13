import {DEFAULT_TIMEOUT_BEFORE_ACTION, EXAMPLE_ID} from '../../support/shared.entities';

describe('Icons', () => {
    it('display icons that are easily customizable', () => {
        cy.tuiVisit('icons/SVG_Processing');

        cy.get('#base')
            .findByAutomationId(EXAMPLE_ID)
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            .matchImageSnapshot('customize-icons8');
    });
});
