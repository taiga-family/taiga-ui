describe(`Checkbox`, () => {
    describe(`API`, () => {
        [`m`, `l`].forEach(size => {
            it(`size=${size}`, () => {
                cy.tuiVisit(`components/checkbox/API?size=${size}`);

                cy.get(`#demo-content`)
                    .tuiWaitBeforeScreenshot()
                    .matchImageSnapshot(`checkbox-size-${size}`);
            });
        });
    });
});
