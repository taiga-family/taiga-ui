describe(`Icons`, () => {
    it(`display icons that are easily customizable`, () => {
        cy.tuiVisit(`icons/SVG_Tips`);

        cy.get(`#base`)
            .tuiFindByExampleId()
            .tuiWaitBeforeScreenshot()
            .matchImageSnapshot(`customize-icons8`);
    });
});
