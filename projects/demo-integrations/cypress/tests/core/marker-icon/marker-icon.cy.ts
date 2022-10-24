describe(`tuiMarkerIcon`, () => {
    it(`link`, () => {
        cy.tuiVisit(`/components/marker-icon#modes`);

        cy.get(`tui-doc-example[heading="modes"]`)
            .findByAutomationId(`tui-doc-example`)
            .tuiScrollIntoView()
            .as(`content`);

        cy.get(`@content`).should(`be.visible`).matchImageSnapshot();

        cy.get(`@content`)
            .find(`a[tuiMarkerIcon]`)
            .trigger(`mouseover`)
            .trigger(`mouseenter`)
            .invoke(`show`)
            .click() // emulate hover
            .matchImageSnapshot();
    });
});
