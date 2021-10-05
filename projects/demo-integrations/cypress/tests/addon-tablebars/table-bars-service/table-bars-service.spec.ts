describe('TableBarsService', () => {
    it('works', () => {
        cy.viewport(1000, 720);

        cy.goToDemoPage('/services/table-bars-service');

        cy.get(`tui-table-bar-example-1 button`).first().click();
        cy.getByAutomationId('tui-table-bar__bar')
            .first()
            .wait(100)
            .matchImageSnapshot('table-bars');
    });
});
