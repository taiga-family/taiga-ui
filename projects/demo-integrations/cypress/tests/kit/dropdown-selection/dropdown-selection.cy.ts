describe(`dropdown-selection`, () => {
    beforeEach(() => cy.tuiVisit(`directives/dropdown-selection`));

    it(`current range must be a text node only`, () => {
        cy.get(`tui-doc-example[id=textarea]`)
            .find(`.t-example`)
            .tuiScrollIntoView()
            .as(`example`);

        // step 1
        cy.get(`@example`)
            .find(`textarea`)
            .type(
                `{moveToStart}{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}`,
            );
        cy.get(`@example`).matchImageSnapshot(`1-1-dropdown-selection`);

        // step 2
        cy.get(`button[tuioption]`).eq(0).click({force: true});
        cy.get(`@example`).matchImageSnapshot(`1-2-dropdown-selection`);

        // step 3
        cy.get(`@example`).type(`{selectall}{backspace}`).type(`@`);
        cy.get(`button[tuioption]`).eq(1).click({force: true});
        cy.get(`@example`).matchImageSnapshot(`1-3-dropdown-selection`);
    });
});
