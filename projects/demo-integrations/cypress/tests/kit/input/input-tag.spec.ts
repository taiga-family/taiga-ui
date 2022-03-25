import {DEFAULT_TIMEOUT_AFTER_PAGE_REDIRECTION} from '../../../support/shared.entities';

describe('Input tag', () => {
    beforeEach(() => {
        cy.goToDemoPage(`components/input-tag`);
        cy.hideHeader();
        cy.hideNavigation();
    });

    it('switch theme mode', () => {
        cy.get('tui-doc-example').should('be.visible');

        cy.wait(DEFAULT_TIMEOUT_AFTER_PAGE_REDIRECTION).matchImageSnapshot(
            '01-light-mode',
            {capture: 'fullPage'},
        );

        cy.get('.night-mode').click();

        cy.wait(DEFAULT_TIMEOUT_AFTER_PAGE_REDIRECTION).matchImageSnapshot(
            '01-night-mode',
            {capture: 'fullPage'},
        );
    });
});
