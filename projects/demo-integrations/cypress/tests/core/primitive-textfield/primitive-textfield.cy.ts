describe(`TuiPrimitiveTextfield`, () => {
    beforeEach(() => {
        cy.viewport(720, 700);
    });

    it(`Tooltip in primitive-textfield works`, () => {
        cy.tuiVisit(
            `components/primitive-textfield/API?tuiMode=null&tuiHintContent=Ivan%20Ivanov`,
        );
        cy.get(`#demoContent tui-tooltip`)
            .first()
            .click()
            .wait(500)
            .get(`tui-hint`)
            .click();
        cy.matchImageSnapshot(`hint`, {capture: `viewport`});
    });

    it(`prefix + postfix align on the same line with input's value`, () => {
        cy.tuiVisit(
            `components/primitive-textfield/API?value=TEXT&postfix=__!&prefix=!__`,
        );
        cy.get(`#demoContent`)
            .should(`be.visible`)
            .matchImageSnapshot(`02-prefix-postfix`);
    });
});
