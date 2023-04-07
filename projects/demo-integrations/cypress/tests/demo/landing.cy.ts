describe(`Landing`, () => {
    it(`take snapshot`, () => {
        cy.viewport(360, 740).tuiVisit(`/`, {waitAllIcons: false});

        cy.wait(3000).matchImageSnapshot(`landing-360-740`);
    });
});
