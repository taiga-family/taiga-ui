import {
    TUI_CYPRESS_MOBILE_USER_AGENT,
    TUI_CYPRESS_MOBILE_VIEWPORT_HEIGHT,
    TUI_CYPRESS_MOBILE_VIEWPORT_WIDTH,
} from '@demo-integrations/cypress.options';

describe(`InputDate`, () => {
    beforeEach(() => {
        cy.viewport(
            TUI_CYPRESS_MOBILE_VIEWPORT_WIDTH,
            TUI_CYPRESS_MOBILE_VIEWPORT_HEIGHT,
        ).tuiVisit(`components/input-date`, {
            headers: {userAgent: TUI_CYPRESS_MOBILE_USER_AGENT},
        });
    });

    it(`mobile calendar`, () => {
        cy.get(`#base tui-input-date .t-icon tui-svg`)
            .trigger(`click`)
            .tuiWaitBeforeScreenshot();

        cy.get(`tui-mobile-calendar`).matchImageSnapshot(`input-date-mobile`, {
            capture: `viewport`,
        });
    });

    it(`native data picker`, () => {
        cy.get(`#native-input-date tui-input-date input[type="date"]`)
            .type(`2010-03-14`)
            .trigger(`change`)
            .tuiWaitBeforeScreenshot();

        cy.get(`#native-input-date tui-input-date`).matchImageSnapshot(
            `native-date-input`,
        );
    });
});
