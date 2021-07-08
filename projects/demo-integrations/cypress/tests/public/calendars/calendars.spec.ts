import {goToPage} from '../../../utils/go-to-page';

describe('Calendars', () => {
    before(() => {
        cy.visit('/');
        cy.wait(500);
        cy.viewport(720, 700);
    });
    it('Calendar', () => {
        goToPage(
            `components/calendar/API?tuiMode=null&value$=2&maxViewedMonth$=1&max$=0`,
        );

        cy.get('[tuidocheader]').invoke('attr', 'style', 'position: absolute !important');

        cy.get('tui-calendar').first().matchImageSnapshot('calendar');
    });

    it('Month', () => {
        cy.viewport(720, 700);
        goToPage(`components/calendar-month/API?tuiMode=null&year$=1&value$=2`);

        cy.get('[tuidocheader]').invoke('attr', 'style', 'position: absolute !important');

        cy.get('tui-calendar-month').first().matchImageSnapshot('month');
    });
});
