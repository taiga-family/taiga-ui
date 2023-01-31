export const tuiFocus = (
    $subject: Cypress.PrevSubjectMap<void>[Cypress.PrevSubject],
): Cypress.Chainable<unknown> =>
    cy
        .wrap($subject, {log: false})
        .focus()
        .should(`be.focused`)
        .should(`be.visible`)
        .tuiWaitBeforeAction();
