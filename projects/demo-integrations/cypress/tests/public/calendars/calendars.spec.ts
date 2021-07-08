describe('Calendars', () => {
    before(() => {
        cy.visit('/');
        cy.wait(500);
        cy.viewport(720, 700);
    });
    it('Calendar', () => {
        cy.visit(
            `components/calendar/API?tuiMode=null&value$=2&maxViewedMonth$=1&max$=0`,
            {
                failOnStatusCode: false,
            },
        );

        cy.get('[tuidocheader]').invoke('attr', 'style', 'position: absolute !important');

        cy.get('tui-calendar').first().matchImageSnapshot('calendar');
    });

    it('Month', () => {
        cy.viewport(720, 700);
        cy.visit('components/calendar-month/API?tuiMode=null&year$=1&value$=2', {
            failOnStatusCode: false,
        });

        cy.get('[tuidocheader]').invoke('attr', 'style', 'position: absolute !important');

        cy.get('tui-calendar-month').first().matchImageSnapshot('month');
    });
});
