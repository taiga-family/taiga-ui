export function tuiEnsureDocExample(): string {
    return (Cypress.env(`EXAMPLE_ID`) as string) ?? `tui-doc-example`;
}

export function tuiGetDocExample(): Cypress.Chainable<unknown> {
    return cy.getByAutomationId(tuiEnsureDocExample());
}

export function tuiFindDocExample<S>($subject: S): Cypress.Chainable<unknown> {
    return cy.wrap($subject, {log: false}).findByAutomationId(tuiEnsureDocExample());
}
