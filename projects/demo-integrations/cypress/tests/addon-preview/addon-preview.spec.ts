describe(`Addon preview`, () => {
    beforeEach(() => {
        cy.tuiVisit(`components/preview`);
    });

    it(`Full preview scrolled`, () => {
        cy.get(`tui-preview-example-1 button`).first().click();

        cy.tuiHideDocPage();
        cy.tuiWaitKitDialog(`tui-preview`);

        cy.get(`tui-preview`)
            .wait(350)
            .get(`tui-preview section`)
            .first()
            .trigger(`wheel`, `center`, {deltaY: -50});

        cy.get(`tui-preview`).matchImageSnapshot(`preview scroll`, {capture: `viewport`});
    });

    it(`No preview available`, () => {
        cy.get(`tui-preview-example-3 button`).first().click();

        cy.tuiHideDocPage();
        cy.tuiWaitKitDialog(`tui-preview`);

        cy.get(`tui-preview`)
            .wait(350)
            .matchImageSnapshot(`preview-unavailable`, {capture: `viewport`});
    });
});
