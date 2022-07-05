/// <reference types="cypress" />
/// <reference types="node" />

/**
 * Check if element is inside viewport
 *
 * @note WARNING! `.should('be.visible')` doesn't not check if element is inside viewport
 * @see https://github.com/cypress-io/cypress/issues/17483
 * @see https://github.com/cypress-io/cypress/issues/877#issuecomment-342187174
 * @see https://github.com/cypress-io/cypress/issues/877#issuecomment-657583222
 * @example
 ```ts
 cy.get('#test').should('be.inViewport');
 ```
 * */
export const tuiBeInViewportAssertion: Chai.ChaiPlugin = _chai => {
    chai.Assertion.addMethod('inViewport', function () {
        const subject = this._obj;

        const bottomOfCurrentViewport: number =
            // @ts-ignore TS2339: Property 'state' does not exist on type 'cy & CyEventEmitter'.
            Cypress.$(cy.state('window')).height() || 0;
        const rect = subject[0].getBoundingClientRect();

        this.assert(
            (rect.top > 0 && rect.top < bottomOfCurrentViewport) ||
                (rect.bottom > 0 && rect.bottom < bottomOfCurrentViewport),
            'expected #{this} to be in viewport',
            'expected #{this} to not be in viewport',
            subject,
        );
    });
};
