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

export const stableMount: typeof mount = (component, config) =>
    mount(component, {
        ...config,
        providers: [...(config?.providers || []), NG_EVENT_PLUGINS],
    }).then((mountResponse) =>
        cy
            .get('body')
            .find('[data-cy-root]')
            .then(async () =>
                mountResponse.fixture.whenStable().then(() => mountResponse),
            ),
    );

Cypress.Commands.add('mount', stableMount);
