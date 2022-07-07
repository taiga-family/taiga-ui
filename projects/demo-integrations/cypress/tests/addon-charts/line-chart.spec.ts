describe('LineChart', () => {
    beforeEach(() => cy.tuiVisit('components/line-chart'));

    it('should not show hint', () => {
        cy.get('tui-line-chart-example-1 tui-line-chart .t-column')
            .first()
            .trigger('mouseenter', {force: true})
            .wait(1000);

        cy.matchImageSnapshot('line-chart', {capture: 'viewport'});
    });
});
