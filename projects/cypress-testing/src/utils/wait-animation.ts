import Chainable = Cypress.Chainable;

export function waitAnimation(element: Chainable<JQuery>): Chainable<JQuery> {
    return element.should('be.visible').should('not.have.class', 'ng-animating');
}
