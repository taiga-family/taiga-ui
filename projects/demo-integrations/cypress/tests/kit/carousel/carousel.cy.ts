describe(`Carousel`, () => {
    it(`default padding`, () => {
        cy.tuiVisit(`components/carousel/API`);

        cy.get(`#demo-content`)
            .should(`be.visible`)
            .tuiWaitBeforeScreenshot()
            .matchImageSnapshot(`carousel-padding-default`);
    });

    it(`padding has zero value`, () => {
        cy.tuiVisit(`components/carousel/API?style.--tui-carousel-padding=0`);

        cy.get(`#demo-content`)
            .should(`be.visible`)
            .tuiWaitBeforeScreenshot()
            .matchImageSnapshot(`carousel-padding-0`);
    });
});
