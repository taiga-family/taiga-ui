import {WAIT_BEFORE_SCREENSHOT} from '../../../../support/shared.entities';

describe(`InputDate`, () => {
    it(`mobile calendar`, () => {
        cy.tuiVisit(`components/input-date`);

        cy.get(`#base tui-input-date .t-icon tui-svg`)
            .trigger(`click`)
            .wait(WAIT_BEFORE_SCREENSHOT);

        cy.get(`tui-mobile-calendar`).matchImageSnapshot(`input-date-mobile`, {
            capture: `viewport`,
        });
    });
});
