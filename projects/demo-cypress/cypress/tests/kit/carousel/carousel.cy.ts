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

    it(`should show next item after drag`, () => {
        cy.tuiVisit(`components/carousel/API?draggable=true`);

        cy.get(`#demo-content .t-item`)
            .first()
            .trigger(`mousedown`)
            .trigger(`mousemove`, {force: true, x: 600, y: 100})
            .trigger(`mousemove`, {force: true, x: -0, y: 100})
            .tuiWaitBeforeAction()
            .trigger(`mouseup`, {force: true});

        cy.get(`#demo-content`).matchImageSnapshot(`carousel-draggable`);
    });
});
