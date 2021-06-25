import {DEMO_PATHS} from '../demo-paths';
import {EXAMPLE_ID} from '../shared.entities';
import {excluded} from './exclusions';

function goToPage(path: string) {
    const a = document.createElement('a');

    a.href = path;

    cy.document().then(docRef => {
        docRef.body.appendChild(a);
        a.click();
        docRef.body.removeChild(a);
    });
}

describe('Demo', () => {
    before(() => {
        cy.viewport(1280, 720);
        cy.visit('/');
        cy.wait(500);
    });

    DEMO_PATHS.forEach(path => {
        it(`${path}`, () => {
            goToPage(path);

            cy.wait(700);
            cy.viewport(1280, 720);

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
                    .matchImageSnapshot(`${path}/${index + 1}`);
            });
        });
    });
});
