import {DIALOG_PAGE_URL} from '../../../support/shared.entities';

describe('Dialogs', () => {
    beforeEach(() => {
        cy.viewport(720, 900);
    });

    it('A dialog and a nested dialog are open correctly', () => {
        cy.goToDemoPage(DIALOG_PAGE_URL, {waitAllIcons: true});

        cy.get(`tui-dialog-example-2 button`).first().click();
        cy.waitKitDialog();
        cy.get('tui-dialog').matchImageSnapshot('1');

        cy.get('dialog-example button').eq(1).click();
        cy.waitKitDialog();

        cy.get('tui-dialog').eq(1).matchImageSnapshot('2');
    });

    it('Mobile dialog works', () => {
        cy.goToDemoPage(DIALOG_PAGE_URL, {waitAllIcons: true});

        cy.get(`tui-dialog-example-4 button`).first().click();
        cy.waitKitDialog();
        cy.get('tui-dialog').matchImageSnapshot('3');
    });

    it('Dialog with directive works', () => {
        cy.goToDemoPage(DIALOG_PAGE_URL);

        cy.get(`tui-dialog-example-6 button`).first().click();
        cy.waitKitDialog();
        cy.get('tui-dialog').matchImageSnapshot('dialog-directive');
    });
});
