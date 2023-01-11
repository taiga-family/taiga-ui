describe(`LineDaysChart`, () => {
    beforeEach(() => cy.tuiVisit(`charts/line-days-chart`));

    it(`should not show hint after blur`, () => {
        cy.get(`tui-line-days-chart-example-1 tui-line-days-chart tui-line-chart`)
            .eq(5)
            .find(`.t-column`)
            .first()
            .click();

        cy.get(`tui-doc-example[heading="Basic"]`)
            .findByAutomationId(`tui-doc-example`)
            .matchImageSnapshot(`line-days-chart__1`);

        cy.get(`tui-doc-example[heading="Basic"] h3`).click();

        cy.get(`tui-doc-example[heading="Basic"]`)
            .findByAutomationId(`tui-doc-example`)
            .matchImageSnapshot(`line-days-chart__2`);
    });
});
