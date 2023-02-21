describe(`RoutableDialog`, () => {
    beforeEach(() => {
        cy.viewport(`macbook-13`);
    });

    it(`should open dialog by click and then close by outside click`, () => {
        cy.tuiVisit(`/dialog/routable`);

        cy.get(`tui-page-1-example button`).click();
        cy.tuiWaitKitDialog();
        cy.url().should(`include`, `/dialog/routable/path/to/dialog`);

        cy.tuiClickOutside();
        cy.url()
            .should(`include`, `/dialog/routable`)
            .should(`not.include`, `path/to/dialog`);
    });

    it(`should open dialog by direct link and then close by outside click`, () => {
        cy.tuiVisit(`/dialog/routable/path/to/dialog`);

        cy.tuiWaitKitDialog();
        cy.url().should(`include`, `/dialog/routable/path/to/dialog`);

        cy.tuiClickOutside();
        cy.url()
            .should(`include`, `/dialog/routable`)
            .should(`not.include`, `path/to/dialog`);
    });
});
