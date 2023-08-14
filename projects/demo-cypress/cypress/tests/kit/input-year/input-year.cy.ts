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

    describe(`select date from dropdown`, () => {
        beforeEach(() => {
            cy.tuiVisit(`components/input-year/API`);
            cy.get(`#demo-content input`)
                .should(`be.visible`)
                .first()
                .focus()
                .as(`input`);
        });

        it(`empty input => select date via calendar => new date inside text field`, () => {
            cy.get(`@input`).click();

            cy.get(`tui-dropdown`)
                .findByAutomationId(`tui-primitive-year-picker__cell`)
                .contains(`2020`)
                .click({force: true});

            cy.get(`@input`).should(`have.value`, `2020`);
        });

        it(`type 2020 => select new date via calendar => new date inside text field`, () => {
            cy.get(`@input`).click().type(`2020`);

            cy.get(`tui-dropdown`)
                .findByAutomationId(`tui-primitive-year-picker__cell`)
                .contains(`2030`)
                .click({force: true});

            cy.get(`@input`).should(`have.value`, `2030`);
        });
    });
});
