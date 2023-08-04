describe(`Checkbox`, () => {
    describe(`API`, () => {
        for (const size of [`m`, `l`]) {
            it(`size=${size}`, () => {
                cy.tuiVisit(`components/checkbox/API?size=${size}`);

                cy.get(`#demo-content`)
                    .tuiWaitBeforeScreenshot()
                    .matchImageSnapshot(`checkbox-size-${size}`);
            });
        }
    });
});
