describe(`Dropdown`, () => {
    beforeEach(() => cy.viewport(720, 720));

    it(`TuiDropdown`, () => {
        cy.tuiVisit(`directives/dropdown`);

        cy.get(`tui-dropdown-example-1 button`).first().tuiScrollIntoView().click();
        cy.tuiWaitBeforeScreenshot().matchImageSnapshot(`1`);

        cy.get(`tui-dropdown-example-2 input`).first().tuiScrollIntoView().click();
        cy.tuiWaitBeforeScreenshot().matchImageSnapshot(`2`);
    });

    it(`Hosted Dropdown`, () => {
        cy.tuiVisit(`components/hosted-dropdown`);

        cy.get(`tui-hosted-dropdown-example-1 button`)
            .first()
            .tuiScrollIntoView()
            .click();
        cy.tuiWaitBeforeScreenshot().matchImageSnapshot(`3`);
    });
});
