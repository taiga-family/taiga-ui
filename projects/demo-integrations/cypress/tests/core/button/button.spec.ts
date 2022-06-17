describe('Button', () => {
    it('tuiMode=OnDark + appearance=icon + hovered state', () => {
        cy.tuiVisit(
            '/components/button/API?tuiMode=onDark&appearance=icon&icon=tuiIconEyeClosed',
        );

        cy.get('#demoContent')
            .should('be.visible')
            .find('[tuiButton]')
            .trigger('mouseenter')
            .matchImageSnapshot(
                '01-[tuiMode=onDark]-[appearance=icon]-[data-state=hovered]',
            );
    });
});
