import 'cypress-plugin-tab';

import {provideNoopAnimations} from '@angular/platform-browser/animations';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
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
    cy.intercept(
        {method: 'GET', resourceType: 'font', url: 'https://fonts.gstatic.com/**'},
        {
            // Specify `null` as the encoding in order to read the file as a `Buffer` https://docs.cypress.io/api/commands/fixture#Encoding
            fixture: 'manrope-fonts.ttf,null',
            headers: {
                devNotes: 'Mocked by Cypress',
            },
        },
    );

    return mount(component, {
        ...config,
        providers: [
            ...(config?.providers || []),
            provideNoopAnimations(),
            NG_EVENT_PLUGINS,
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
