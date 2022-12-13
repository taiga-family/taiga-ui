describe(`Checkbox`, () => {
    describe(`API`, () => {
        for (const size of [`m`, `l`]) {
            it(`size=${size}`, () => {
                cy.tuiVisit(`components/checkbox/API?tuiMode=null&size=${size}`);

                cy.get(`#demo-content`).matchImageSnapshot(`checkbox-size-${size}`);
            });
        }
    });
});
