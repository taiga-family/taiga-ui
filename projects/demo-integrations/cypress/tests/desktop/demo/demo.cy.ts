import {
    DEMO_PATHS,
    isInputNumberPage,
    isScrollbarPage,
} from '@demo-integrations/support/properties/demo-paths';
import {tuiExcluded} from '@demo-integrations/support/properties/exclusions';
import {
    EXAMPLE_ID,
    WAIT_BEFORE_SCREENSHOT,
} from '@demo-integrations/support/properties/shared.entities';

describe(`Demo`, () => {
    for (const path of DEMO_PATHS) {
        it(path, () => {
            cy.tuiVisit(path, {hideScrollbar: !isScrollbarPage(path)});

            const waitSomeAnimationBefore = isInputNumberPage(path);

            if (waitSomeAnimationBefore) {
                cy.wait(WAIT_BEFORE_SCREENSHOT);
            }

            cy.get(`tui-doc-example`).each((example, index) => {
                cy.wrap(example)
                    .find(`.t-example`)
                    .findByAutomationId(EXAMPLE_ID)
                    .tuiScrollIntoView()
                    .as(`example`);

                if (isScrollbarPage(path)) {
                    cy.get(`.t-thumb`, {log: false})
                        .wait(WAIT_BEFORE_SCREENSHOT)
                        .should(`be.visible`)
                        .then(() =>
                            Cypress.log({
                                name: `wait rendering scrollbar for prevent flaky`,
                            }),
                        );
                }

                return tuiExcluded(path, index + 1)
                    ? cy.get(`@example`)
                    : cy
                          .get(`@example`)
                          .wait(Cypress.env(`waitBeforeScreenshotComponents`))
                          .matchImageSnapshot(`${path}/${index + 1}`);
            });
        });
    }
});
