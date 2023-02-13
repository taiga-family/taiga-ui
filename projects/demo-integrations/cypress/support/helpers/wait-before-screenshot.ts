export function tuiWaitBeforeScreenshot(
    $subject?: Cypress.PrevSubjectMap<void>[Cypress.PrevSubject],
): Cypress.Chainable<unknown> {
    const timeout = (Cypress.env(`waitBeforeScreenshot`) as number) ?? 1000;

    return cy.wait(timeout, {log: false}).wrap($subject, {log: false});
}

export function tuiWaitBeforeAction(
    $subject: Cypress.PrevSubjectMap<void>[Cypress.PrevSubject],
): Cypress.Chainable<unknown> {
    const timeout = (Cypress.env(`waitBeforeAction`) as number) ?? 50;

    return cy.wait(timeout, {log: false}).wrap($subject, {log: false});
}
