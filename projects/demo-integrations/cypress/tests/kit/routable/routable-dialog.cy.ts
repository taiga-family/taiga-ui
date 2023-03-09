describe(`RoutableDialog`, () => {
    beforeEach(() => {
        cy.viewport(`macbook-13`);
    });

    it(`should open dialog by click and then close by outside click`, () => {
        cy.tuiVisit(`/dialog/routable`);

        cy.findByText(`Open dialog`).click();
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

    it(`should open dialog in named outlet example`, () => {
        cy.tuiVisit(`/dialog/routable/NamedOutlet`);

        cy.findByText(`Open dialog`).click();
        cy.tuiWaitKitDialog();
        cy.url().should(
            `include`,
            `/dialog/routable/NamedOutlet/(myOutlet:path/to/dialog)`,
        );

        cy.tuiClickOutside();
        cy.url()
            .should(`include`, `/dialog/routable/NamedOutlet`)
            .should(`not.include`, `(myOutlet:path/to/dialog)`);
    });

    it(`should works after switching tabs`, () => {
        cy.tuiVisit(`/dialog/routable`);

        cy.findByText(`NamedOutlet`).click();

        cy.findByText(`Open dialog`).click();
        cy.tuiWaitKitDialog();
        cy.tuiClickOutside();

        cy.findByText(`Description and examples`).click();
        cy.findByText(`Open dialog`).click();
        cy.tuiWaitKitDialog();
    });
});
