export function waitKitScrollbar(showing: boolean, host?: string) {
    const barSelector = host ? `${host} .bar_vertical` : '.bar_vertical';

    if (showing) {
        cy.get(`${barSelector} > .thumb`).should('be.visible');
        cy.get(`${barSelector}`).should('not.have.class', 'ng-animating');

        cy.waitScrollbarStableState(`${barSelector} > .thumb`);
    } else {
        cy.get(`${barSelector} > .thumb`).should('not.be.visible');
    }
}
