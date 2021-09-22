describe('Dropdown', () => {
    beforeEach(() => {
        cy.viewport(720, 720);
    });

    it('TuiDropdown', () => {
        cy.goToDemoPage('/directives/dropdown');

        cy.get(`tui-dropdown-example-1 button`).first().click().wait(1000);
        cy.matchImageSnapshot('1');

        cy.get('tui-dropdown-example-2 button').first().trigger('mouseenter').wait(1000);
        cy.matchImageSnapshot('2');
    });

    it('Hosted Dropdown', () => {
        cy.goToDemoPage('/components/hosted-dropdown');

        cy.get(`tui-hosted-dropdown-example-1 button`).first().click().wait(1000);
        cy.matchImageSnapshot('3');
    });
});
