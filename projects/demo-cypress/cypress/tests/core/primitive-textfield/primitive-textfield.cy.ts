describe(`TuiPrimitiveTextfield`, () => {
    beforeEach(() => {
        cy.viewport(720, 700);
    });

    it(`Tooltip in primitive-textfield works`, () => {
        cy.tuiVisit(
            `components/primitive-textfield/API?tuiMode=null&tuiHintContent=Ivan%20Ivanov`,
            {clock: null /* TODO: investigate why flaky instead of null */},
        );
        cy.get(`#demo-content tui-tooltip`)
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
        cy.get(`#demo-content`)
            .should(`be.visible`)
            .matchImageSnapshot(`02-prefix-postfix`);
    });

    it(`label should not be visible in focused state with filler`, () => {
        cy.tuiVisit(
            `components/primitive-textfield/API?filler=&tuiTextfieldFiller=filler&tuiTextfieldLabelOutside=true`,
        );
        cy.get(`#demo-content input`)
            .click()
            .tuiWaitBeforeScreenshot()
            .matchImageSnapshot(`03-label-filler`);
    });
});
