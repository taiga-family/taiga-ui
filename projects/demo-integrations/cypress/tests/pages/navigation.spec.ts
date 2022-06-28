describe('Navigation', () => {
    it('getting started / [light mode]', () => {
        cy.tuiVisit('/getting-started', {hideNavigation: false, hideHeader: false});
        cy.get('tui-doc-navigation').matchImageSnapshot(
            '01-tui-doc-navigation-light-mode',
        );
    });

    it('getting started / [night mode]', () => {
        cy.tuiVisit('/getting-started', {
            hideNavigation: false,
            hideHeader: false,
            enableNightMode: true,
        });
        cy.get('tui-doc-navigation').matchImageSnapshot(
            '02-tui-doc-navigation-night-mode',
        );
    });
});
