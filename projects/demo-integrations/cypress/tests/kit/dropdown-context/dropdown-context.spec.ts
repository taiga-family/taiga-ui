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

    it(`focuses content inside on Arrow Down key`, () => {
        cy.get(`#contextMenu`).find(`tr`).eq(1).rightclick();

        cy.get(`body`).type(`{downarrow}{downarrow}`);
        cy.window()
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            .matchImageSnapshot(`02-arrow-down`, {capture: `viewport`});

        cy.focused().click();
        cy.window()
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            .matchImageSnapshot(`02-arrow-down-clicked`, {capture: `viewport`});
    });

    it(`focuses content inside on Arrow Up key`, () => {
        cy.get(`#contextMenu`).find(`tr`).eq(2).rightclick();

        cy.get(`body`).type(`{uparrow}`);

        cy.window()
            // 300ms - debounce time of DataListDropdownManager + 100ms for flaky-free test
            .wait(400)
            .matchImageSnapshot(`03-arrow-up`, {capture: `viewport`});

        cy.get(`body`).type(`{rightarrow}`);

        cy.window()
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            .matchImageSnapshot(`03-arrow-up-right`, {capture: `viewport`});
    });
});
