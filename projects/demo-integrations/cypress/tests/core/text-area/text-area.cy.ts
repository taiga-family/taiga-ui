describe(`Textarea`, () => {
    for (const size of [`m`, `l`]) {
        it(`size of ${size}`, () => {
            cy.tuiVisit(`components/text-area/API?tuiMode=null&tuiTextfieldSize=${size}`);
            cy.get(`#demo-content`)
                .should(`be.visible`)
                .matchImageSnapshot(`textarea-tuiTextfieldSize-${size}`);
        });
    }

    it(`line break text`, () => {
        cy.tuiVisit(`components/text-area/API`);
        cy.get(`#demo-content tui-text-area textarea`)
            .eq(1)
            .type(`1{enter}2{enter}3{enter}4`);

        cy.get(`#demo-content tui-text-area`).matchImageSnapshot(`textarea-line-break`);

        cy.get(`.t-row tui-toggle`).first().click();

        cy.get(`#demo-content tui-text-area`).matchImageSnapshot(
            `textarea-line-break-disabled`,
        );
    });
});
