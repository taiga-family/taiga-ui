describe(`Button`, () => {
    beforeEach(() => cy.viewport(400, 150).tuiVisit(`components/button`));

    it(`dropdown`, () => {
        cy.get(`tui-doc-example[heading="Rotating"]`)
            .findByAutomationId(`tui-doc-example`)
            .tuiScrollIntoView()
            .as(`content`);

        cy.get(`@content`).find(`button[data-appearance=primary]`).as(`button`);

        cy.matchImageSnapshot({capture: `viewport`});
        cy.get(`@button`).click();
        cy.get(`@content`).tuiScrollIntoView();

        cy.matchImageSnapshot({capture: `viewport`});
        cy.get(`@button`).tuiScrollIntoView().click();
        cy.get(`@content`).tuiScrollIntoView();

        cy.matchImageSnapshot({capture: `viewport`});
    });
});
