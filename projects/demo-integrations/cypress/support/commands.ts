import {addMatchImageSnapshotCommand} from 'cypress-image-snapshot/command';

import {goToDemoPage} from './go-to-demo-page.util';
import {hideHeader} from './hide-header.util';
import {setNightMode} from './set-night-mode';
import {waitKitDialog} from './wait-kit-dialog';

declare global {
    namespace Cypress {
        interface Chainable {
            getByAutomationId(automationId: string): Chainable<JQuery<HTMLElement>>;

            findByAutomationId(automationId: string): Chainable<JQuery<HTMLElement>>;

            goToDemoPage: typeof goToDemoPage;
            hideHeader: typeof hideHeader;
            waitKitDialog: typeof waitKitDialog;
            setNightMode: typeof setNightMode;
        }
    }
}

Cypress.Commands.add('getByAutomationId', id => cy.get(`[automation-id=${id}]`));
Cypress.Commands.add('findByAutomationId', {prevSubject: true}, (subject, id) =>
    subject.find(`[automation-id=${id}]`),
);
Cypress.Commands.add('goToDemoPage', goToDemoPage);
Cypress.Commands.add('hideHeader', hideHeader);
Cypress.Commands.add('waitKitDialog', waitKitDialog);
Cypress.Commands.add('setNightMode', setNightMode);

addMatchImageSnapshotCommand();
