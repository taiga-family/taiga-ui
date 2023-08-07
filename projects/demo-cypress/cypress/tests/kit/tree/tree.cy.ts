describe(`Tree`, () => {
    beforeEach(() => {
        cy.tuiVisit(`/components/tree`);
    });

    it(`Programmatic control`, () => {
        cy.get(`#programmatic button.programmatic`).eq(0).click();
        cy.get(`#programmatic button.programmatic`).eq(1).click();

        cy.get(`#programmatic`)
            .tuiWaitBeforeScreenshot()
            .matchImageSnapshot(`01-programmatic-control`);
    });
});
