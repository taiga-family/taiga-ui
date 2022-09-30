import {WAIT_BEFORE_SCREENSHOT} from '../../support/shared.entities';

describe(`Code blocks`, () => {
    [`HTML`, `TypeScript`, `LESS`].forEach((tabName, i) => {
        it(tabName, () => {
            cy.tuiVisit(`/components/line-clamp`);
            cy.get(`#basic tui-tabs-with-more [tuiTab]`).contains(tabName).click();

            cy.tuiWaitCodeHighlight();

            cy.get(`#basic`)
                .wait(WAIT_BEFORE_SCREENSHOT)
                .matchImageSnapshot(`01-${i}-code-block-${tabName}`);
        });
    });

    it(`API page`, () => {
        cy.tuiVisit(`/components/line-clamp/Setup`);
        cy.tuiWaitCodeHighlight();

        cy.get(`tui-doc-code`).each(($el, index) => {
            cy.wrap($el)
                .wait(WAIT_BEFORE_SCREENSHOT)
                .matchImageSnapshot(`02-${index}-API-page`);
        });
    });
});
