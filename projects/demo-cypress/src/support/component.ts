import 'cypress-plugin-tab';
import './commands';

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
        providers: [...(config?.providers || []), provideTaiga()],
    }).then((mountResponse) =>
        cy
            .then(
                () =>
                    'state' in Cypress &&
                    typeof Cypress.state === 'function' &&
                    Cypress.state('clock') && // returns `undefined` if `cy.clock()` was not called
                    cy.tick(0), // Otherwise `fixture.whenStable()` will never resolve
            )
            .get('body')
            .find('[data-cy-root]')
            .then(async () => {
                cy.document().its('fonts.status').should('equal', 'loaded');

                return mountResponse.fixture.whenStable().then(() => mountResponse);
            }),
    );
};

Cypress.Commands.add('mount', stableMount);
