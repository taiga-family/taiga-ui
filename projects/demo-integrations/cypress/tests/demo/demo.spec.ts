import {DEMO_PATHS} from '../../support/demo-paths';
import {tuiExcluded} from '../../support/exclusions';
import {EXAMPLE_ID} from '../../support/shared.entities';

describe(`Demo`, () => {
    for (const path of DEMO_PATHS) {
        it(path, () => {
            cy.tuiVisit(path, {hideScrollbar: path !== `components/scrollbar`});

            cy.get(`tui-doc-example`).each((example, index) => {
                cy.wrap(example)
                    .find(`.t-example`)
                    .findByAutomationId(EXAMPLE_ID)
                    .tuiScrollIntoView()
                    .as(`example`);

                return tuiExcluded(path, index + 1)
                    ? cy.get(`@example`)
                    : cy.get(`@example`).matchImageSnapshot(`${path}/${index + 1}`);
            });
        });
    }
});
