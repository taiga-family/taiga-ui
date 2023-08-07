describe(`Table`, () => {
    beforeEach(() => {
        cy.viewport(`macbook-13`);
        cy.tuiVisit(`components/table`);
    });

    it(`Dynamic column`, () => {
        cy.get(`#dynamic button`).first().click();

        cy.get(`#dynamic`).matchImageSnapshot(`table-dynamic`);
    });
});
