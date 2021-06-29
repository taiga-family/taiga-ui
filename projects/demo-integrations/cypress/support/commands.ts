import {addMatchImageSnapshotCommand} from 'cypress-image-snapshot/command';

declare global {
    namespace Cypress {
        interface Chainable<Subject = any> {
            getByAutomationId(automationId: string): Chainable<JQuery<HTMLElement>>;
        }
    }
}

Cypress.Commands.add('getByAutomationId', id => cy.get(`[automation-id=${id}]`));

addMatchImageSnapshotCommand();
