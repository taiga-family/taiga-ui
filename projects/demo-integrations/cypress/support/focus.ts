import {DEFAULT_TIMEOUT_BEFORE_ACTION} from './shared.entities';

export const tuiFocus = (
    $subject: Cypress.PrevSubjectMap<void>[Cypress.PrevSubject],
): Cypress.Chainable<unknown> =>
    cy
        .wrap($subject, {log: false})
        .focus()
        .should('be.focused')
        .should('be.visible')
        .wait(DEFAULT_TIMEOUT_BEFORE_ACTION);
