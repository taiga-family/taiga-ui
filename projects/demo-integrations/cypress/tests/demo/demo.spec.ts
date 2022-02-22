import {DEMO_PATHS} from '../../support/demo-paths';
import {excluded} from '../../support/exclusions';
import {DEFAULT_TIMEOUT_BEFORE_ACTION, EXAMPLE_ID} from '../../support/shared.entities';

describe('Demo', () => {
    DEMO_PATHS.forEach(path => {
        it(`${path}`, () => {
            cy.goToDemoPage(path, {waitAllIcons: true});
            cy.hideHeader();

            cy.get('tui-doc-example').each((example, index) => {
                cy.wrap(example)
                    .find('.t-example')
                    .scrollIntoView()
                    .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
                    .findByAutomationId(EXAMPLE_ID)
                    .as('example');

                if (excluded(path, index + 1)) {
                    return cy.get('@example').should('be.visible');
                }

                return cy
                    .get('@example')
                    .should('be.visible')
                    .matchImageSnapshot(`${path}/${index + 1}`);
            });
        });
    });
});
