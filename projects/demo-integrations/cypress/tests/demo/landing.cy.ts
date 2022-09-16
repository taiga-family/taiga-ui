describe(`Landing`, () => {
    it(`take snapshot`, () => {
        cy.viewport(360, 740).tuiVisit(`/`, {waitAllIcons: false});
        cy.matchImageSnapshot();
    });
});
