import {DEFAULT_TIMEOUT_BEFORE_ACTION} from '../../support/shared.entities';

describe('Icons', () => {
    it('display icons that are easily customizable', () => {
        cy.tuiVisit('icons/SVG_Processing');

        cy.get('tui-doc-page')
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            .matchImageSnapshot('customize-icons8');
    });
});
