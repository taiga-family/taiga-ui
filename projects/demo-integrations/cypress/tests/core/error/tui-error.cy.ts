describe(`TuiError`, () => {
    it(`No extra space between content`, () => {
        cy.tuiVisit(`components/error#base`);

        cy.get(`tui-doc-example[heading="Basic"]`)
            .findByAutomationId(`tui-doc-example`)
            .as(`content`);

        cy.get(`@content`).findByAutomationId(`tui-toggle__checkbox`).click();

        cy.get(`@content`).tuiWaitBeforeScreenshot().matchImageSnapshot(`tui-error`);
    });
});
