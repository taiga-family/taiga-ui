describe('InputCardGrouped', () => {
    beforeEach(() => {
        cy.viewport('macbook-13');
        cy.tuiVisit('components/input-card-grouped/API?tuiMode=null');
        cy.get('#demoContent').as('wrapper');
    });

    it('set value and clear after', () => {
        cy.get('@wrapper')
            .findByAutomationId('tui-input-card-grouped__card')
            .type('1234 4567 8910 1112')
            .wait(5000); // waiting before closing toast for skip flaky test

        cy.matchImageSnapshot('01-input-card-grouped-filled', {capture: 'viewport'});

        cy.get('@wrapper').find('[src="tuiIconCloseLarge"]').click({force: true});
        cy.matchImageSnapshot('02-input-card-grouped-cleared', {capture: 'viewport'});

        cy.get('@wrapper').click({force: true});
        cy.matchImageSnapshot('03-input-card-grouped-unfocused', {capture: 'viewport'});
    });
});
