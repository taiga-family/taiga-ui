export const DIALOG_PAGE_URL = 'components/dialog';

export function waitKitDialog() {
    cy.get('tui-dialog')
        .last()
        .should('be.visible')
        .should('not.have.class', 'ng-animating');
}
