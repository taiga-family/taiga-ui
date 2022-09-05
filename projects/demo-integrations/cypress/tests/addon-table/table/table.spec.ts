describe(`Table`, () => {
    beforeEach(() => {
        cy.viewport(`macbook-13`);
        cy.tuiVisit(`components/table`);
    });

    it(`Dynamic column`, () => {
        cy.get(`tui-table-example-6 button`).first().click();

        cy.get(`tui-table-example-6`).matchImageSnapshot(`table-dynamic`);
    });
});
