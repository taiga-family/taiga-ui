describe('Addon preview', () => {
    beforeEach(() => {
        cy.viewport(1400, 720);
        cy.goToDemoPage('components/preview');
        cy.hideHeader();
    });

    it('Full preview', () => {
        cy.get(`tui-preview-example-1 button`).first().click();
        cy.get('tui-preview').wait(200).matchImageSnapshot('preview');
    });

    it('Full preview scrolled', () => {
        cy.get(`tui-preview-example-1 button`).first().click();
        cy.get('tui-preview')
            .wait(200)
            .get('tui-preview section')
            .first()
            .trigger('wheel', 'center', {deltaY: -50});
        cy.get('tui-preview').matchImageSnapshot('preview scroll');
    });

    it('No preview avaliable', () => {
        cy.get(`tui-preview-example-3 button`).first().click();
        cy.get('tui-preview').wait(200).matchImageSnapshot('preview-unavailable');
    });
});
