import 'cypress-plugin-tab';
import './commands';

import {provideNoopAnimations} from '@angular/platform-browser/animations';
import {provideTaiga} from '@taiga-ui/core';
import {mount} from 'cypress/angular';
import addCompareSnapshotCommand from 'cypress-image-diff-js/command';

addCompareSnapshotCommand();

declare global {
    namespace Cypress {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        interface Chainable<Subject> {
            mount: typeof mount;
        }
    }
}

export const stableMount: typeof mount = (component, config) => {
    return mount(component, {
        ...config,
        providers: [
            ...(config?.providers || []),
            provideNoopAnimations(),
            provideTaiga(),
        ],
    }).then((mountResponse) =>
        cy
            .get('body')
            .find('[data-cy-root]')
            .then(async () => {
                cy.document().its('fonts.status').should('equal', 'loaded');

                return mountResponse.fixture.whenStable().then(() => mountResponse);
            }),
    );
};

Cypress.Commands.add('mount', stableMount);
