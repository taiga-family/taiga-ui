/// <reference types="cypress" />
import {smartTick} from './smart-tick';

declare global {
    namespace Cypress {
        interface Chainable<Subject> {
            smartTick(
                durationMs: number,
                options?: Parameters<typeof smartTick>[2],
            ): Chainable<Subject>;

            paste(value: string): Chainable<Subject>;
        }
    }
}

Cypress.Commands.add(
    'smartTick',
    {prevSubject: ['optional', 'element', 'window', 'document']},
    smartTick,
);
