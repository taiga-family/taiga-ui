describe(`Breakpoint service`, () => {
    for (const {height, width} of [
        {height: 900, width: 768},
        {height: 900, width: 1024},
        {height: 900, width: 1280},
    ]) {
        it(`${width}x${height}`, () => {
            cy.viewport(width, height);
            cy.tuiVisit(`/services/breakpoint-service`);

            cy.get(`tui-doc-example[heading="Basic"]`)
                .findByAutomationId(`tui-doc-example`)
                .tuiScrollIntoView()
                .tuiWaitBeforeScreenshot()
                .matchImageSnapshot(`breakpoint_${width}x${height}`);
        });
    }
});
