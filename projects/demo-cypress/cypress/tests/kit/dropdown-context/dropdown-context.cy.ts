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
        cy.get(`#context-menu`).find(`tr`).last().rightclick();

        cy.window()
            .tuiWaitBeforeScreenshot()
            .matchImageSnapshot(`01-opened-context-menu`, {capture: `viewport`});
    });

    it(`closes previous dropdown after new one is opened`, () => {
        cy.get(`#context-menu`).find(`tr`).eq(1).rightclick(`left`);
        cy.get(`tui-dropdown`).should(`have.length`, 1);
        cy.get(`#context-menu`).matchImageSnapshot(`02-1-opened-dropdown`);

        cy.get(`#context-menu`).find(`tr`).eq(2).rightclick(`center`);
        cy.get(`tui-dropdown`).should(`have.length`, 1);

        cy.get(`#context-menu`).matchImageSnapshot(
            `02-2-close-previous-dropdown-open-new-dropdown`,
        );
    });

    it(`does not close dropdown when nested dropdown is clicked`, () => {
        cy.get(`#context-menu`).find(`tr`).eq(1).rightclick(`left`);
        cy.get(`[tuioption]`).last().click();

        cy.get(`#context-menu`).matchImageSnapshot(`03-1-second-opened`);

        cy.get(`[tuioption]`).last().click();

        cy.get(`#context-menu`).matchImageSnapshot(`03-2-second-remains`);
    });

    it(`closes dropdown when clicked outside`, () => {
        cy.get(`#context-menu`).find(`tr`).eq(1).rightclick(`left`);
        cy.get(`#context-menu`).find(`tr`).eq(2).click();

        cy.get(`#context-menu`).matchImageSnapshot(`04-1-dropdown-closed`);
    });
});
