describe(`InputYear`, () => {
    beforeEach(() => {
        cy.tuiVisit(`components/input-year/API?max=2020`);
        cy.get(`#demo-content input`).should(`be.visible`).first().focus().as(`input`);
    });

    describe(`Does not allow incorrect year entry`, () => {
        it(`12345 => 1234`, () => {
            cy.get(`@input`)
                .type(`123456789`)
                .should(`have.value`, `1234`)
                .should(`have.prop`, `selectionStart`, `1234`.length)
                .should(`have.prop`, `selectionEnd`, `1234`.length);
        });

        it(`2040 => 2020`, () => {
            cy.get(`@input`)
                .type(`2040`)
                .should(`have.value`, `2020`)
                .should(`have.prop`, `selectionStart`, `2020`.length)
                .should(`have.prop`, `selectionEnd`, `2020`.length);
        });

        it(`0000 => 0`, () => {
            cy.get(`@input`)
                .type(`0000`)
                .should(`have.value`, `0`)
                .should(`have.prop`, `selectionStart`, 1)
                .should(`have.prop`, `selectionEnd`, 1);
        });

        it(`0040 => 40`, () => {
            cy.get(`@input`)
                .type(`0040`)
                .should(`have.value`, `40`)
                .should(`have.prop`, `selectionStart`, `40`.length)
                .should(`have.prop`, `selectionEnd`, `40`.length);
        });
    });
});
