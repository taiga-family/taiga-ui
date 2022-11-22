describe(`Button`, () => {
    beforeEach(() => cy.viewport(400, 150).tuiVisit(`components/button`));

    it(`dropdown`, () => {
        cy.get(`tui-doc-example[heading="Rotating"]`)
            .findByAutomationId(`tui-doc-example`)
            .tuiScrollIntoView()
            .as(`content`);

        cy.get(`@content`).find(`button[data-appearance=primary]`).as(`button`);

        cy.matchImageSnapshot(`button-dropdown-1`, {capture: `viewport`});
        cy.get(`@button`).click();
        cy.get(`@content`).tuiScrollIntoView();

        cy.matchImageSnapshot(`button-dropdown-2`, {capture: `viewport`});
        cy.get(`@button`).tuiScrollIntoView().click();
        cy.get(`@content`).tuiScrollIntoView();

        cy.matchImageSnapshot(`button-dropdown-3`, {capture: `viewport`});
    });
});
