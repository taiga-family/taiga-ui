export const tuiScrollIntoView = (
    $subject: Cypress.PrevSubjectMap<void>[Cypress.PrevSubject],
): Cypress.Chainable<unknown> =>
    cy
        .wrap($subject, {log: false})
        .scrollIntoView({
            duration: 0,
            easing: `linear`,
            ensureScrollable: true,
        })
        .should(`be.inViewport`)
        .should(`be.visible`)
        .tuiWaitBeforeAction();
