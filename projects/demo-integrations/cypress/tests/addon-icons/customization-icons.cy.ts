describe(`Icons`, () => {
    it(`display icons that are easily customizable`, () => {
        cy.tuiVisit(`icons/SVG_Tips`);

        cy.get(`#base`)
            .tuiFindByExampleId()
            .tuiWaitBeforeScreenshot()
            .matchImageSnapshot(`customize-icons8`);

        cy.get(`#inline`)
            .tuiFindByExampleId()
            .tuiWaitBeforeScreenshot()
            .matchImageSnapshot(`inline-text`);
    });
});
