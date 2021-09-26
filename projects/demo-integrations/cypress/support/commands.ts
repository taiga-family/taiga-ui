import {addMatchImageSnapshotCommand} from 'cypress-image-snapshot/command';
import {goToDemoPage} from './go-to-demo-page.util';
import {hideHeader} from './hide-header.util';

declare global {
    namespace Cypress {
        interface Chainable<Subject = any> {
            getByAutomationId(automationId: string): Chainable<JQuery<HTMLElement>>;

            goToDemoPage: typeof goToDemoPage;
            hideHeader: typeof hideHeader;
        }
    }
}

Cypress.Commands.add('getByAutomationId', id => cy.get(`[automation-id=${id}]`));
Cypress.Commands.add('goToDemoPage', goToDemoPage);
Cypress.Commands.add('hideHeader', hideHeader);

addMatchImageSnapshotCommand();
