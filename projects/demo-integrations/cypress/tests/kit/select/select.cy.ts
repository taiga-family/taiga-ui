describe(`Select`, () => {
    beforeEach(() => {
        cy.viewport(`macbook-13`);
        cy.tuiVisit(`components/select`);
    });

    it(`opens dropdown by click on icon`, () => {
        cy.get(`#base tui-select`)
            .last()
            .tuiWaitBeforeScreenshot()
            .trigger(`click`, {x: 200, y: 30});

        cy.get(`tui-dropdown`)
            .tuiWaitBeforeScreenshot()
            .matchImageSnapshot(`01-click-arrow`);
    });
});
