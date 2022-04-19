import {
    DEFAULT_TIMEOUT_AFTER_PAGE_REDIRECTION,
    EDITOR_PAGE_URL,
} from '../../support/shared.entities';
import {WAIT_BEFORE_SCREENSHOT} from './utils';

describe('Editing links in Editor', () => {
    beforeEach(() => cy.tuiVisit(EDITOR_PAGE_URL));

    beforeEach(() => {
        cy.wait(DEFAULT_TIMEOUT_AFTER_PAGE_REDIRECTION);
        cy.get('#basic').findByAutomationId('tui-doc-example').as('wrapper');
        cy.get('@wrapper').scrollIntoView().should('be.visible');

        focusToStartInEditor();
    });

    it('check if at least one link exists', () => {
        getContentEditable()
            .find('a')
            .first()
            .contains('adipiscing elit')
            .should('have.attr', 'href')
            .and('include', 'http://taiga-ui.dev');

        getScreenshotArea().matchImageSnapshot('1-exist-link');
    });

    function focusToStartInEditor(): void {
        getContentEditable().type('{moveToStart}').click();
    }

    function getScreenshotArea(): Cypress.Chainable<JQuery> {
        return cy.get('@wrapper').wait(WAIT_BEFORE_SCREENSHOT);
    }

    function getContentEditable(): Cypress.Chainable<JQuery> {
        return cy.get('@wrapper').find('[contenteditable]');
    }
});
