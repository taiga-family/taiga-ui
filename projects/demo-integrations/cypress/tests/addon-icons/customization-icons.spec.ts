describe('Icons', () => {
    it('display icons that are easily customizable', () => {
        cy.tuiVisit('icons/SVG_Processing');
        cy.get('tui-doc-page').matchImageSnapshot('customize-icons8');
    });
});
