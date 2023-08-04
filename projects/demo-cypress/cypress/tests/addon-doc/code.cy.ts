describe(`Code blocks`, () => {
    it(`API page`, () => {
        cy.tuiVisit(`/components/line-clamp/Setup`);
        cy.tuiWaitCodeHighlight();

        cy.get(`tui-doc-code`).each(($el, index) => {
            cy.wrap($el, {log: false})
                .tuiWaitBeforeScreenshot()
                .matchImageSnapshot(`02-${index}-API-page`);
        });
    });

    for (const [index, title] of [`HTML`, `TypeScript`, `LESS`].entries()) {
        it(title, () => {
            cy.tuiVisit(`/components/line-clamp`);
            cy.get(`#basic tui-tabs-with-more [tuiTab]`).contains(title).click();

            cy.tuiWaitCodeHighlight();

            cy.get(`#basic`)
                .tuiWaitBeforeScreenshot()
                .matchImageSnapshot(`01-${index}-code-block-${title}`);
        });
    }
});
