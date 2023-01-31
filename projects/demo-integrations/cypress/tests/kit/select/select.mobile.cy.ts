import {
    TUI_CYPRESS_MOBILE_USER_AGENT,
    TUI_CYPRESS_MOBILE_VIEWPORT_HEIGHT,
    TUI_CYPRESS_MOBILE_VIEWPORT_WIDTH,
} from '@demo-integrations/cypress.options';

describe(`Select`, () => {
    beforeEach(() =>
        cy
            .viewport(
                TUI_CYPRESS_MOBILE_VIEWPORT_WIDTH,
                TUI_CYPRESS_MOBILE_VIEWPORT_HEIGHT,
            )
            .tuiVisit(`components/select`, {
                headers: {userAgent: TUI_CYPRESS_MOBILE_USER_AGENT},
            }),
    );

    it(`native select value`, () => {
        cy.get(`#native-select select`).first().tuiWaitBeforeScreenshot().select(1);

        cy.get(`#native-select`)
            .tuiWaitBeforeScreenshot()
            .matchImageSnapshot(`native-select-value`);
    });
});
