describe(`InputYear`, () => {
    describe(`Does not allow incorrect year entry`, () => {
        beforeEach(() => {
            cy.tuiVisit(`components/input-year/API?max=2020`);
            cy.get(`#demo-content input`)
                .should(`be.visible`)
                .first()
                .focus()
                .as(`input`);
        });

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

        it(`0000 => blur => 0`, () => {
            cy.get(`@input`)
                .type(`0000`)
                .should(`have.value`, `0000`)
                .blur()
                .should(`have.value`, `0`);
        });

        it(`0040 => blur => 40`, () => {
            cy.get(`@input`)
                .type(`0040`)
                .should(`have.value`, `0040`)
                .blur()
                .should(`have.value`, `40`);
        });
    });

    describe(`Value validation on blur`, () => {
        beforeEach(() => {
            cy.tuiVisit(`components/input-year/API?max=2020&min=2007`);
            cy.get(`#demo-content input`)
                .should(`be.visible`)
                .first()
                .focus()
                .as(`input`);
        });

        it(`can not be less than min`, () => {
            cy.get(`@input`)
                .type(`2005`)
                .should(`have.value`, `2005`)
                .blur()
                .should(`have.value`, `2007`);
        });
    });
});
