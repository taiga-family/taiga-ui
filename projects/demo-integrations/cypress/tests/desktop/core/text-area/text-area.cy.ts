describe(`Textarea`, () => {
    for (const size of [`m`, `l`]) {
        it(`size of ${size}`, () => {
            cy.tuiVisit(`components/text-area/API?tuiMode=null&tuiTextfieldSize=${size}`);
            cy.get(`#demoContent`)
                .should(`be.visible`)
                .matchImageSnapshot(`textarea-tuiTextfieldSize-${size}`);
        });
    }
});
