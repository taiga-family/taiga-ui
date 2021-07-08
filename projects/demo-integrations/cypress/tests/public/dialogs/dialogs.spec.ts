export function waitKitDialog() {
    cy.get('tui-dialog')
        .last()
        .should('be.visible')
        .should('not.have.class', 'ng-animating');
}

xdescribe('Dialogs', () => {
    before(() => {
        cy.visit('/');
        cy.wait(500);
        cy.viewport(720, 720);
    });

    it('A dialog and a nested dialog are open correctly', () => {
        cy.visit('services/dialog-service', {failOnStatusCode: false});

        cy.wait(500);

        cy.get(`tui-dialog-example-2 button`).first().click();
        waitKitDialog();
        cy.get('tui-dialog').matchImageSnapshot('1');

        cy.get('dialog-example button').eq(1).click();
        waitKitDialog();

        cy.get('tui-dialog').eq(1).matchImageSnapshot('2');
    });

    it('Mobile dialog works', () => {
        cy.viewport(720, 900);
        cy.visit('services/dialog-service', {failOnStatusCode: false});
        cy.wait(500);

        cy.get(`tui-dialog-example-4 button`).first().click();
        waitKitDialog();
        cy.get('tui-dialog').matchImageSnapshot('3');
    });
});
