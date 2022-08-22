import {
    DEFAULT_TIMEOUT_BEFORE_ACTION,
    DROPDOWN_CONTEXT_PAGE_URL,
} from '../../../support/shared.entities';

describe(`DropdownContext`, () => {
    beforeEach(() => {
        cy.viewport(720, 900);
        cy.tuiVisit(DROPDOWN_CONTEXT_PAGE_URL);
    });

    it(`opens dropdown on right click`, () => {
        cy.get(`#contextMenu`).find(`tr`).last().rightclick();

        cy.window()
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            .matchImageSnapshot(`01-opened-context-menu`, {capture: `viewport`});
    });
});
