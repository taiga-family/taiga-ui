describe('TuiPrimitiveTextfield', () => {
    beforeEach(() => {
        cy.viewport(720, 700);
    });

    it('Tooltip in primitive-textfield works', () => {
        cy.goToDemoPage(
            `components/primitive-textfield/API?tuiMode=null&tuiHintContent=Ivan%20Ivanov`,
        );
        cy.hideHeader();
        cy.get('#demoContent tui-tooltip')
            .first()
            .click()
            .wait(500)
            .get('tui-hint-box')
            .click();
        cy.matchImageSnapshot('hint', {capture: 'viewport'});
    });

    it("prefix + postfix align on the same line with input's value", () => {
        cy.goToDemoPage(
            `components/primitive-textfield/API?value=TEXT&postfix=__!&prefix=!__`,
        );
        cy.hideHeader();
        cy.get('#demoContent')
            .should('be.visible')
            .matchImageSnapshot('02-prefix-postfix');
    });
});
