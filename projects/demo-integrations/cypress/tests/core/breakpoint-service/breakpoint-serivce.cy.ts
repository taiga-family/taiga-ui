describe(`Breakpoint service`, () => {
    for (const [, {width, height}] of [
        {width: 768, height: 900},
        {width: 1024, height: 900},
        {width: 1280, height: 900},
    ].entries()) {
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
