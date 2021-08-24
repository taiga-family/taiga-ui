import {DIALOG_PAGE_URL, waitKitDialog} from './utils';

describe('Dialogs + browser back navigation', () => {
    /**
     * Alternative to cy.go('back', {timeout: 0}), which doesnt wait page load event
     */
    const goBack = () => {
        cy.window().then(win => win.history.back());
    };

    const getFullUrl = (path: string): string =>
        `${Cypress.config().baseUrl || ''}/${path}`.replace(
            new RegExp('([^:]/)/+', 'g'),
            '$1',
        );

    beforeEach(() => {
        cy.viewport(720, 900);
        cy.visit('/'); // need to check that browser back navigation is not broken after closing all dialogs
    });

    describe('Not inside iframe', () => {
        beforeEach(() => {
            cy.goToDemoPage(DIALOG_PAGE_URL, {inIframe: false});
        });

        it('closes dialog on browser back navigation', () => {
            cy.getByAutomationId('tui-doc-example').eq(1).find('button').first().click();
            waitKitDialog();

            cy.get('tui-dialog').get('button').contains('Show one more dialog').click();
            waitKitDialog();

            cy.window().matchImageSnapshot('4-1-opened-all-dialogs', {
                capture: 'viewport',
            });
            goBack();
            cy.window().matchImageSnapshot('4-2-after-first-back-nav', {
                capture: 'viewport',
            });
            goBack();
            cy.wait(100) // wait for scrollbar
                .window()
                .matchImageSnapshot('4-3-after-second-back-nav', {
                    capture: 'viewport',
                });
            cy.url().should('equal', getFullUrl(DIALOG_PAGE_URL));
            goBack();
            cy.url().should('equal', getFullUrl('/'));
        });

        it('doesnt break browser back navigation after closing dialog in the usual way (without back button)', () => {
            /* open dialog */
            cy.getByAutomationId('tui-doc-example')
                .first()
                .find('button')
                .first()
                .click();

            waitKitDialog();

            /* close dialog */
            cy.get('tui-dialog').find('button').first().click();

            cy.url().should('equal', getFullUrl(DIALOG_PAGE_URL));
            goBack();
            cy.url().should('equal', getFullUrl('/'));
        });
    });

    describe('Inside iframe', () => {
        beforeEach(() => {
            cy.goToDemoPage(DIALOG_PAGE_URL, {inIframe: true});
        });

        it('does not depend on browser back navigation: no history changes on back button', () => {
            /* open dialog */
            cy.getByAutomationId('tui-doc-example')
                .first()
                .find('button')
                .first()
                .click();

            waitKitDialog();

            cy.url().should('equal', getFullUrl(DIALOG_PAGE_URL));
            goBack();
            cy.url().should('equal', getFullUrl('/'));
        });
    });
});
