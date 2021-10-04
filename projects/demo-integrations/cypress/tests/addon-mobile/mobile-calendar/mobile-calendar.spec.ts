describe('MobileCalendar', () => {
    before(() => {
        cy.clock(Date.UTC(2021, 10, 10), ['Date']);
    });

    it('works', () => {
        cy.viewport(400, 812);
        cy.goToDemoPage('components/mobile-calendar');

        cy.hideHeader();

        cy.get(`tui-mobile-calendar-example-1 button`).first().click();
        cy.get('tui-mobile-calendar').wait(100).matchImageSnapshot('mobile-calendar');
    });
});
