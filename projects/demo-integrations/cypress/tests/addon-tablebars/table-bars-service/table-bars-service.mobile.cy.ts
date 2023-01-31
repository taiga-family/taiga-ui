import {
    TUI_CYPRESS_MOBILE_USER_AGENT,
    TUI_CYPRESS_MOBILE_VIEWPORT_HEIGHT,
    TUI_CYPRESS_MOBILE_VIEWPORT_WIDTH,
} from '@demo-integrations/cypress.options';

describe(`TableBarsService`, () => {
    it(`works`, () => {
        cy.viewport(
            TUI_CYPRESS_MOBILE_VIEWPORT_WIDTH,
            TUI_CYPRESS_MOBILE_VIEWPORT_HEIGHT,
        ).tuiVisit(`/services/table-bars-service`, {
            headers: {userAgent: TUI_CYPRESS_MOBILE_USER_AGENT},
        });

        cy.get(`tui-table-bar-example-1 button`).first().click();
        cy.getByAutomationId(`tui-table-bar__bar`)
            .first()
            .tuiWaitBeforeAction()
            .matchImageSnapshot(`table-bars`);
    });
});
