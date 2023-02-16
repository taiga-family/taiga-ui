import {tuiComponentsExcluded} from '@demo-integrations/support/helpers/components-excluded';
import {
    DEMO_PATHS,
    isEmbedPage,
    isInputNumberPage,
    isScrollbarPage,
    isTilesPage,
} from '@demo-integrations/support/helpers/demo-paths';

describe(`Demo`, () => {
    for (const path of DEMO_PATHS) {
        it(path, () => {
            cy.tuiVisit(path, {hideScrollbar: !isScrollbarPage(path)});

            cy.get(`body`).then($body => {
                if (isInputNumberPage(path)) {
                    cy.tuiWaitBeforeScreenshot();
                } else if (isTilesPage(path)) {
                    cy.wait(10_000);
                } else if (isEmbedPage(path)) {
                    cy.wait(40_000);
                }

                if ($body.find(`tui-doc-example`).length < 1) {
                    return;
                }

                cy.get(`tui-doc-example`).each((example, index) => {
                    cy.wrap(example)
                        .find(`.t-example`)
                        .tuiFindByExampleId()
                        .tuiScrollIntoView()
                        .as(`example`);

                    if (isScrollbarPage(path)) {
                        cy.get(`.t-thumb`, {log: false})
                            .tuiWaitBeforeScreenshot()
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
                              .wait(Cypress.env(`waitBeforeScreenshotComponents`) ?? 50, {
                                  log: false,
                              })
                              .matchImageSnapshot(`${path}/${index + 1}`);
                });
            });
        });
    }
});
