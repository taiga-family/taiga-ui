describe(`Checkbox`, () => {
    describe(`API`, () => {
        for (const size of [`m`, `l`]) {
            it(`size=${size}`, () => {
                cy.tuiVisit(`components/checkbox/API?tuiMode=null&size=${size}`);

                cy.get(`#demoContent`).matchImageSnapshot(`checkbox-size-${size}`);
            });
        }
    });
});
