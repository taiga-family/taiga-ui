describe(`Dropdown`, () => {
    beforeEach(() => {
        cy.viewport(720, 720);
    });

    it(`TuiDropdown`, () => {
        cy.tuiVisit(`/directives/dropdown`);

        cy.get(`tui-dropdown-example-1 button`).first().click().wait(1000);
        cy.matchImageSnapshot(`1`);

        cy.get(`tui-dropdown-example-2 input`).first().click().wait(1000);
        cy.matchImageSnapshot(`2`);
    });

    it(`Hosted Dropdown`, () => {
        cy.tuiVisit(`/components/hosted-dropdown`);

        cy.get(`tui-hosted-dropdown-example-1 button`).first().click().wait(1000);
        cy.matchImageSnapshot(`3`);
    });
});
