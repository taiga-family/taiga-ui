/**
 * @description:
 * https://github.com/cypress-io/cypress/issues/8418
 */
export const stubExceptions = (): void => {
    Cypress.on(`uncaught:exception`, err => {
        // returning false here prevents Cypress from
        // failing the test
        cy.log(`Cypress detected uncaught exception: `, err);
        console.info(`Cypress detected uncaught exception: `, err);

        return false;
    });
};
