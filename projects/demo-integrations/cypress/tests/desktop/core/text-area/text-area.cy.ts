describe(`Textarea`, () => {
    for (const size of [`m`, `l`]) {
        it(`size of ${size}`, () => {
            cy.tuiVisit(`components/text-area/API?tuiMode=null&tuiTextfieldSize=${size}`);
            cy.get(`#demo-content`)
                .should(`be.visible`)
                .matchImageSnapshot(`textarea-tuiTextfieldSize-${size}`);
        });
    }
});
