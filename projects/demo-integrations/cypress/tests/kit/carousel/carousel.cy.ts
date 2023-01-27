describe(`Carousel`, () => {
    it(`padding: default`, () => {
        cy.tuiVisit(`components/carousel/API`);
        cy.get(`#demo-content`)
            .should(`be.visible`)
            .matchImageSnapshot(`carousel-padding-default`);
    });

    it(`padding: 0`, () => {
        cy.tuiVisit(`components/carousel/API?style.--tui-carousel-padding=0`);
        cy.get(`#demo-content`)
            .should(`be.visible`)
            .matchImageSnapshot(`carousel-padding-0`);
    });
});
