describe(`InputExpire`, () => {
    beforeEach(() => {
        cy.tuiVisit(`components/input-card/API`);
        cy.get(`#demo-content tui-input-expire input`)
            .first()
            .should(`have.value`, ``)
            .as(`input`);
    });

    it(`Empty input => type 5 => 05`, () => {
        cy.get(`@input`)
            .type(`05`)
            .should(`have.value`, `05`)
            .should(`have.prop`, `selectionStart`, `05`.length)
            .should(`have.prop`, `selectionEnd`, `05`.length);
    });

    it(`Empty input => type 14 => (prevent 4) => 1`, () => {
        cy.get(`@input`)
            .type(`14`)
            .should(`have.value`, `1`)
            .should(`have.prop`, `selectionStart`, 1)
            .should(`have.prop`, `selectionEnd`, 1);
    });

    it(`Empty input => type 12 => 12`, () => {
        cy.get(`@input`)
            .type(`12`)
            .should(`have.value`, `12`)
            .should(`have.prop`, `selectionStart`, `12`.length)
            .should(`have.prop`, `selectionEnd`, `12`.length);
    });

    it(`Empty input => Type 00 => 0`, () => {
        cy.get(`@input`)
            .type(`00`)
            .should(`have.value`, `0`)
            .should(`have.prop`, `selectionStart`, 1)
            .should(`have.prop`, `selectionEnd`, 1);
    });

    it(`Empty input => Type 0130 => 01/30`, () => {
        cy.get(`@input`)
            .type(`0130`)
            .should(`have.value`, `01/30`)
            .should(`have.prop`, `selectionStart`, `01/30`.length)
            .should(`have.prop`, `selectionEnd`, `01/30`.length);
    });
});
