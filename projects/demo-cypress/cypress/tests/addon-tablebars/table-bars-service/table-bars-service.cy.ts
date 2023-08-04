describe(`TableBarsService`, () => {
    it(`works`, () => {
        cy.viewport(1000, 720);

        cy.tuiVisit(`/services/table-bars-service`);

        cy.get(`tui-table-bar-example-1 button`).first().click();
        cy.getByAutomationId(`tui-table-bar__bar`)
            .first()
            .tuiWaitBeforeAction()
            .matchImageSnapshot(`table-bars`);
    });
});
