import {DEFAULT_TIMEOUT_BEFORE_ACTION} from '../../../support/shared.entities';

describe(`Calendars`, () => {
    beforeEach(() => {
        cy.viewport(720, 700);
    });
    it(`Calendar`, () => {
        cy.tuiVisit(
            `components/calendar/API?tuiMode=null&value$=2&maxViewedMonth$=1&max$=0`,
        );

        cy.get(`tui-calendar`)
            .first()
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            .matchImageSnapshot(`calendar`);
    });

    it(`Month`, () => {
        cy.tuiVisit(`components/calendar-month/API?tuiMode=null&year$=1&value$=2`);

        cy.get(`tui-calendar-month`)
            .first()
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            .matchImageSnapshot(`month`);
    });
});
