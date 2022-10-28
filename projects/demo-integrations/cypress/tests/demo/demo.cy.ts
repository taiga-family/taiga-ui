import {
    DEMO_PATHS,
    isInputNumberPage,
    isMobileCalendarPage,
    isScrollbarPage,
} from '../../support/demo-paths';
import {tuiExcluded} from '../../support/exclusions';
import {EXAMPLE_ID, WAIT_BEFORE_SCREENSHOT} from '../../support/shared.entities';

describe(`Demo`, () => {
    for (const path of DEMO_PATHS) {
        it(path, () => {
            cy.tuiVisit(path, {hideScrollbar: !isScrollbarPage(path)});

            const waitSomeAnimationBefore =
                isMobileCalendarPage(path) || isInputNumberPage(path);

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
                        .should(`be.visible`)
                        .then(() =>
                            Cypress.log({
                                name: `wait rendering scrollbar for prevent flaky`,
                            }),
                        );
                }

                return tuiExcluded(path, index + 1)
                    ? cy.get(`@example`)
                    : cy.get(`@example`).matchImageSnapshot(`${path}/${index + 1}`);
            });
        });
    }
});
