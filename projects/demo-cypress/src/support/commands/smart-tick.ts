import type {ComponentFixture} from '@angular/core/testing';

export function smartTick<T extends Cypress.PrevSubjectMap<void>[Cypress.PrevSubject]>(
    $subject: T,
    durationMs: number,
    {
        frequencyMs = 100,
        fixture,
    }: {
        fixture?: ComponentFixture<unknown>;
        frequencyMs?: number; // ms
    } = {},
): Cypress.Chainable<T> {
    const iterations = Math.ceil(durationMs / frequencyMs);
    const lastIterationMs = durationMs % frequencyMs || frequencyMs;

    for (let i = 1; i <= iterations; i++) {
        cy.tick(i === iterations ? lastIterationMs : frequencyMs, {log: false}).then(
            () => fixture?.detectChanges(), // ensure @Input()-properties are changed
        );
        cy.wait(0, {log: false});
    }

    Cypress.log({
        displayName: 'smartTick',
        message: `${durationMs}ms`,
        consoleProps() {
            return {
                durationMs,
                frequencyMs,
            };
        },
    });

    return cy.wrap($subject, {log: false});
}
