describe(`Accordion`, () => {
    it(`gap`, () => {
        cy.tuiVisit(
            `components/accordion/API?style.--tui-accordion-item-gap=10px&rounded=false&closeOthers=false`,
        );

        cy.get(`#demo-content`)
            .should(`be.visible`)
            .tuiWaitBeforeScreenshot()
            .matchImageSnapshot(`01-accordion-gap`);
    });
});
