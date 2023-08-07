describe(`PieChart`, () => {
    beforeEach(() => cy.viewport(400, 400).tuiVisit(`charts/pie-chart`));

    it(`should be show hints on charts`, () => {
        cy.get(`tui-doc-example[heading="With labels"]`)
            .tuiScrollIntoView()
            .as(`wrapper`);

        cy.get(`@wrapper`)
            .tuiWaitBeforeAction()
            .matchImageSnapshot(`01-pie-chart-with-label-0`);

        cy.get(`@wrapper`)
            .findByAutomationId(`tui-doc-example`)
            .findByAutomationId(`tui-pie-chart__segment`)
            .as(`segment`);

        cy.get(`@segment`).each((segment, index) => {
            cy.wrap(segment, {log: false}).realHover();
            cy.tuiWaitBeforeAction().matchImageSnapshot(
                `01-pie-chart-with-label--hover-${index + 1}`,
                {capture: `viewport`},
            );
        });
    });
});
