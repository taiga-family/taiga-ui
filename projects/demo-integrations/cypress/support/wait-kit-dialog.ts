export function waitKitDialog(selector = 'tui-dialog') {
    cy.get(selector).last().should('be.visible').should('not.have.class', 'ng-animating');
}
