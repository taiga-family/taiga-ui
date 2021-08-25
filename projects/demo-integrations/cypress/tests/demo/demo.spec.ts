import {DEMO_PATHS} from '../demo-paths';
import {EXAMPLE_ID} from '../shared.entities';
import {excluded} from './exclusions';

describe('Demo', () => {
    beforeEach(() => {
        cy.viewport(1280, 720);
    });

    DEMO_PATHS.forEach(path => {
        it(`${path}`, () => {
            cy.goToDemoPage(path, {waitAllIcons: true});

            cy.get('[tuidocheader]').invoke(
                'attr',
                'style',
                'position: absolute !important',
            );

            cy.getByAutomationId(EXAMPLE_ID).each((sample, index) => {
                if (excluded(path, index + 1)) {
                    return cy.wrap(sample);
                }

                return cy
                    .wrap(sample)
                    .scrollIntoView({offset: {top: 64, left: 0}})
                    .wait(100)
                    .matchImageSnapshot(`${path}/${index + 1}`);
            });
        });
    });
});
