import {DEMO_PATHS} from '../../support/demo-paths';
import {excluded} from '../../support/exclusions';
import {DEFAULT_TIMEOUT_BEFORE_ACTION, EXAMPLE_ID} from '../../support/shared.entities';

describe('Demo', () => {
    DEMO_PATHS.forEach(path => {
        it(`${path}`, () => {
            cy.goToDemoPage(path);
            cy.hideHeader();

            cy.getByAutomationId(EXAMPLE_ID).each((sample, index) => {
                if (excluded(path, index + 1)) {
                    return cy.wrap(sample);
                }

                return cy
                    .wrap(sample)
                    .scrollIntoView()
                    .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
                    .matchImageSnapshot(`${path}/${index + 1}`);
            });
        });
    });
});
