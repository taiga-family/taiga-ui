export const tuiScrollIntoView = (
    $subject: Cypress.PrevSubjectMap<void>[Cypress.PrevSubject],
): Cypress.Chainable<unknown> =>
    cy
        .wrap($subject, {log: false})
        .scrollIntoView({
            ensureScrollable: true,
            easing: `linear`,
            duration: 0,
        })
        .should(`be.inViewport`)
        .should(`be.visible`)
        .tuiWaitBeforeAction();
