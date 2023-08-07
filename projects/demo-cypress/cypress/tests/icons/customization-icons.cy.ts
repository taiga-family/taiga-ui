describe(`Icons`, () => {
    it(`display icons that are easily customizable`, () => {
        cy.tuiVisit(`icons/customization`);

        cy.get(`#base`)
            .tuiFindByExampleId()
            .tuiWaitBeforeScreenshot()
            .matchImageSnapshot(`customize-icons8`);
    });
});
