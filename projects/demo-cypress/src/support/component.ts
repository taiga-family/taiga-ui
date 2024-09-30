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

export const stableMount: typeof mount = (...mountArgs) =>
    mount(...mountArgs).then((mountResponse) =>
        cy
            .get('body')
            .find('[data-cy-root]')
            .then(async () =>
                mountResponse.fixture.whenStable().then(() => mountResponse),
            ),
    );

Cypress.Commands.add('mount', stableMount);
