import {tuiComponentsExcluded} from '@demo-integrations/support/helpers/components-excluded';
import {
    DEMO_PATHS,
    isEmbedPage,
    isInputNumberPage,
    isScrollbarPage,
    isTilesPage,
} from '@demo-integrations/support/properties/demo-paths';
import {
    EXAMPLE_ID,
    WAIT_BEFORE_SCREENSHOT,
    WAIT_BEFORE_SCREENSHOT_COMPONENTS,
} from '@demo-integrations/support/properties/shared.entities';

describe(`Demo`, () => {
    for (const path of DEMO_PATHS) {
        it(path, () => {
            cy.tuiVisit(path, {hideScrollbar: !isScrollbarPage(path)});

            cy.get(`body`).then($body => {
                if (isInputNumberPage(path)) {
                    cy.wait(WAIT_BEFORE_SCREENSHOT);
                } else if (isTilesPage(path) || isEmbedPage(path)) {
                    cy.wait(10_000);
                }

                if ($body.find(`tui-doc-example`).length < 1) {
                    return;
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

                    return tuiComponentsExcluded(path, index + 1)
                        ? cy.get(`@example`)
                        : cy
                              .get(`@example`)
                              .wait(WAIT_BEFORE_SCREENSHOT_COMPONENTS)
                              .matchImageSnapshot(`${path}/${index + 1}`);
                });
            });
        });
    }
});
