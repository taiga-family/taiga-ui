import {DEMO_PATHS} from '../../support/demo-paths';
import {excluded} from '../../support/exclusions';
import {EXAMPLE_ID} from '../../support/shared.entities';

describe('Demo', () => {
    DEMO_PATHS.forEach(path => {
        it(`${path}`, () => {
            cy.goToDemoPage(path, {waitAllIcons: true});
            cy.hideHeader();

            cy.getByAutomationId(EXAMPLE_ID).each((sample, index) => {
                if (excluded(path, index + 1)) {
                    return cy.wrap(sample);
                }

                return cy
                    .wrap(sample)
                    .scrollIntoView({offset: {top: 0, left: 0}})
                    .matchImageSnapshot(`${path}/${index + 1}`);
            });
        });
    });
});
