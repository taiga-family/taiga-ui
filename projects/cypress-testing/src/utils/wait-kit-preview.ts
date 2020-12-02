export function waitKitPreview() {
    cy.get('tui-preview')
        .should('be.visible')
        .should('not.have.class', 'ng-animating')
        .wait(500);
}
