/**
 * Some tests use `cy.realPress([...])`, to simulate text selection.
 * But this command is not supported by all browsers.
 * ___
 * @see https://docs.cypress.io/guides/guides/cross-browser-testing#Running-Specific-Tests-by-Browser
 * @see https://github.com/dmtrKovalenko/cypress-real-events#requirements
 * @see https://github.com/cypress-io/cypress/issues/2839#issuecomment-867411151
 */
export const BROWSER_SUPPORTS_REAL_EVENTS: Cypress.TestConfigOverrides = {
    browser: `!firefox`,
};
