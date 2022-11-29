import {WAIT_BEFORE_SCREENSHOT} from '@demo-integrations/support/properties/shared.entities';

describe(`DropdownContext`, () => {
    beforeEach(() => {
        cy.viewport(720, 900);
        cy.tuiVisit(`directives/dropdown-context`);

        // note: synchronized viewport position for prevent flaky tests
        cy.get(`tui-doc-example[heading="Context menu"]`)
            .findByAutomationId(`tui-doc-example`)
            .tuiScrollIntoView();
    });

    it(`opens dropdown on right click`, () => {
        cy.get(`#contextMenu`).find(`tr`).last().rightclick();

        cy.window()
            .wait(WAIT_BEFORE_SCREENSHOT)
            .matchImageSnapshot(`01-opened-context-menu`, {capture: `viewport`});
    });

    it(`closes previous dropdown after new one is opened`, () => {
        cy.get(`#contextMenu`).find(`tr`).eq(1).rightclick(`left`);
        cy.get(`tui-dropdown`).should(`have.length`, 1);
        cy.get(`#contextMenu`).matchImageSnapshot(`02-1-opened-dropdown`);

        cy.get(`#contextMenu`).find(`tr`).eq(2).rightclick(`center`);
        cy.get(`tui-dropdown`).should(`have.length`, 1);

        cy.get(`#contextMenu`).matchImageSnapshot(
            `02-2-close-previous-dropdown-open-new-dropdown`,
        );
    });

    it(`focuses content inside on Arrow Up key`, () => {
        cy.get(`#contextMenu`).find(`tr`).eq(2).rightclick();

        cy.get(`body`).type(`{uparrow}`);

        cy.window()
            .wait(WAIT_BEFORE_SCREENSHOT)
            .matchImageSnapshot(`03-arrow-up`, {capture: `viewport`});

        cy.get(`body`).type(`{rightarrow}`);

        cy.window()
            .wait(WAIT_BEFORE_SCREENSHOT)
            .matchImageSnapshot(`03-arrow-up-right`, {capture: `viewport`});
    });
});
