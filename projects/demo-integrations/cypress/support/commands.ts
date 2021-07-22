import {addMatchImageSnapshotCommand} from 'cypress-image-snapshot/command';
import {goToDemoPage} from './utils';

declare global {
    namespace Cypress {
        interface Chainable<Subject = any> {
            getByAutomationId(automationId: string): Chainable<JQuery<HTMLElement>>;
            goToDemoPage(path: string): void;
        }
    }
}

Cypress.Commands.add('getByAutomationId', id => cy.get(`[automation-id=${id}]`));
Cypress.Commands.add('goToDemoPage', goToDemoPage);

addMatchImageSnapshotCommand();
