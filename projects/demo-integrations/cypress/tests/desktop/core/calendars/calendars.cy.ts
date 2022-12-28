import {DEFAULT_TIMEOUT_BEFORE_ACTION} from '@demo-integrations/support/properties/shared.entities';

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

    it(`Open calendar from start value`, () => {
        cy.tuiVisit(`components/calendar/API?value$=2`);

        cy.get(`tui-calendar`)
            .first()
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            .matchImageSnapshot(`calendar-is-april-2020`);
    });

    it(`Set range between two days`, () => {
        cy.tuiVisit(`components/calendar/API?value$=1`);

        cy.get(`tui-calendar`)
            .first()
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            .matchImageSnapshot(`range-calendar`);
    });

    it(`Month`, () => {
        cy.tuiVisit(`components/calendar-month/API?tuiMode=null&year$=1&value$=2`);

        cy.get(`tui-calendar-month`)
            .first()
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            .matchImageSnapshot(`month`);
    });
});
