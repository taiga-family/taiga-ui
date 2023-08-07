describe(`LazyRoutableDialog`, () => {
    beforeEach(() => {
        cy.viewport(`macbook-13`);
    });

    it(`should open lazy loaded dialog by click and then close by outside click`, () => {
        cy.tuiVisit(`/dialog/lazy-routable`);

        cy.findByText(`Open dialog`).click();
        cy.tuiWaitKitDialog();
        cy.url().should(`include`, `/dialog/lazy-routable/path/to/dialog`);

        cy.tuiClickOutside();
        cy.url()
            .should(`include`, `/dialog/lazy-routable`)
            .should(`not.include`, `path/to/dialog`);
    });

    it(`should open lazy loaded dialog by direct link and then close by outside click`, () => {
        cy.tuiVisit(`/dialog/lazy-routable/path/to/dialog`);

        cy.tuiWaitKitDialog();
        cy.url().should(`include`, `/dialog/lazy-routable/path/to/dialog`);

        cy.tuiClickOutside();
        cy.url()
            .should(`include`, `/dialog/lazy-routable`)
            .should(`not.include`, `path/to/dialog`);
    });
});
