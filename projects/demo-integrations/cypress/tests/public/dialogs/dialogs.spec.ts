export function waitKitDialog() {
    cy.get('tui-dialog')
        .last()
        .should('be.visible')
        .should('not.have.class', 'ng-animating');
}

const DIALOG_PAGE_URL = 'services/dialog-service';

describe('Dialogs', () => {
    beforeEach(() => {
        cy.viewport(720, 900);
    });

    it('A dialog and a nested dialog are open correctly', () => {
        cy.goToDemoPage(DIALOG_PAGE_URL);

        cy.get(`tui-dialog-example-2 button`).first().click();
        waitKitDialog();
        cy.get('tui-dialog').matchImageSnapshot('1');

        cy.get('dialog-example button').eq(1).click();
        waitKitDialog();

        cy.get('tui-dialog').eq(1).matchImageSnapshot('2');
    });

    it('Mobile dialog works', () => {
        cy.goToDemoPage(DIALOG_PAGE_URL);

        cy.get(`tui-dialog-example-4 button`).first().click();
        waitKitDialog();
        cy.get('tui-dialog').matchImageSnapshot('3');
    });
});

describe('Dialogs + browser back navigation', () => {
    /**
     * Alternative to cy.go('back', {timeout: 0}), which doesnt wait page load event
     */
    const goBack = () => {
        cy.window().then(win => win.history.back());
    };

    beforeEach(() => {
        cy.viewport(720, 900);
    });

    it('closes dialog on browser back navigation', () => {
        const baseUrl = Cypress.config().baseUrl;

        cy.visit('/'); // need to check that browser back navigation is not broken after closing all dialogs
        cy.goToDemoPage(DIALOG_PAGE_URL);

        cy.getByAutomationId('tui-doc-example')
            .as('wrapper')
            .eq(1)
            .find('button')
            .first()
            .click();
        waitKitDialog();

        cy.get('tui-dialog').get('button').contains('Show one more dialog').click();
        waitKitDialog();

        cy.window().matchImageSnapshot('4-1-opened-all-dialogs', {capture: 'viewport'});
        goBack();
        cy.window().matchImageSnapshot('4-2-after-first-back-nav', {capture: 'viewport'});
        goBack();
        cy.window().matchImageSnapshot('4-3-after-second-back-nav', {
            capture: 'viewport',
        });
        cy.url().should('equal', `${baseUrl}/${DIALOG_PAGE_URL}`);
        goBack();
        cy.url().should('equal', `${baseUrl}/`);
    });
});
