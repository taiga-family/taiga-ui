import {addMatchImageSnapshotCommand} from 'cypress-image-snapshot/command';

import {goToDemoPage} from './go-to-demo-page.util';
import {hideHeader} from './hide-header.util';
import {hideNavigation} from './hide-navigation.util';
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
            hideNavigation: typeof hideNavigation;
        }
    }
}

Cypress.Commands.add('getByAutomationId', id => cy.get(`[automation-id=${id}]`));
Cypress.Commands.add('findByAutomationId', {prevSubject: true}, (subject: any, id) =>
    /**
     * `subject` is just `jQuery`-element which has method `.find()`.
     * This method doesn't have {@link https://docs.cypress.io/guides/core-concepts/retry-ability retry-ability}!
     * ___
     * `cy.wrap(subject)` is a `$Chainer`-element (cypress built-in implementation) which also has method `.find()`.
     * This method has retry-ability!
     */
    cy.wrap(subject).find(`[automation-id=${id}]`),
);
Cypress.Commands.add('goToDemoPage', goToDemoPage);
Cypress.Commands.add('hideHeader', hideHeader);
Cypress.Commands.add('waitKitDialog', waitKitDialog);
Cypress.Commands.add('setNightMode', setNightMode);
Cypress.Commands.add('hideNavigation', hideNavigation);

addMatchImageSnapshotCommand({
    allowSizeMismatch: true, // Windows CI fix
    runInProcess: true, // macOS CI fix
    failureThreshold: 0.0004,
    failureThresholdType: 'percent',
    comparisonMethod: 'ssim',
    diffDirection: 'vertical',
    customDiffConfig: {
        ssim: 'fast',
        windowSize: 24,
    } as any,
});
