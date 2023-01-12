import {
    DEFAULT_TIMEOUT_BEFORE_ACTION,
    WAIT_BEFORE_SCREENSHOT,
} from '@demo-integrations/support/properties/shared.entities';

describe(`DropdownHover`, () => {
    beforeEach(() => {
        cy.viewport(720, 900);
        cy.tuiVisit(`directives/dropdown-hover`);

        cy.get(`tui-doc-example[heading="HostedDropdown"]`)
            .findByAutomationId(`tui-doc-example`)
            .tuiScrollIntoView()
            .as(`wrapper`);
    });

    it(`before hover`, () => {
        cy.get(`@wrapper`)
            .wait(WAIT_BEFORE_SCREENSHOT)
            .matchImageSnapshot(`dropdown-hover__1`);
    });

    it(`hover on tab and hover on h3`, () => {
        cy.get(`@wrapper`).find(`button[tuiTab]`).eq(1).realHover();
        takeScreenshot(`dropdown-hover__2_1`);

        cy.get(`tui-doc-example[heading="HostedDropdown"] h3.t-title`).realHover();
        takeScreenshot(`dropdown-hover__2_2`);
    });

    it(`click on tab and hover on h3`, () => {
        cy.get(`@wrapper`)
            .find(`button[tuiTab]`)
            .eq(1)
            .realHover()
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            // pressed
            .click();
        takeScreenshot(`dropdown-hover__3_1`);

        cy.get(`tui-doc-example[heading="HostedDropdown"] h3.t-title`).realHover();
        takeScreenshot(`dropdown-hover__3_2`);

        cy.get(`@wrapper`).find(`button[tuiTab]`).eq(0).click();
        takeScreenshot(`dropdown-hover__3_3`);
    });

    it(`click on tab and hover and click nested button in dropdown`, () => {
        cy.get(`@wrapper`)
            .find(`button[tuiTab]`)
            .eq(1)
            .realHover()
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            // pressed
            .click();

        cy.get(`tui-dropdown button[tabindex=-1]`).eq(0);
        takeScreenshot(`dropdown-hover__4_1`);

        cy.get(`tui-dropdown button[tabindex=-1]`).eq(0).focus();
        takeScreenshot(`dropdown-hover__4_2`);

        cy.get(`tui-dropdown button[tabindex=-1]`).eq(0).click();
        takeScreenshot(`dropdown-hover__4_3`);

        cy.get(`tui-doc-example[heading="HostedDropdown"] h3.t-title`).realHover();
        takeScreenshot(`dropdown-hover__4_4`);
    });

    it(`click on tab and hover + click other dropdown`, () => {
        cy.get(`@wrapper`)
            .find(`button[tuiTab]`)
            .eq(1)
            .realHover()
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            // pressed
            .click();

        cy.get(`@wrapper`).find(`button[tuiTab]`).eq(3).realHover();

        takeScreenshot(`dropdown-hover__5_1`);

        cy.get(`tui-doc-example[heading="HostedDropdown"] h3.t-title`).realHover();

        takeScreenshot(`dropdown-hover__5_2`);

        cy.get(`@wrapper`)
            .find(`button[tuiTab]`)
            .eq(3)
            .realHover()
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            // pressed
            .click();

        takeScreenshot(`dropdown-hover__5_3`);

        cy.get(`tui-doc-example[heading="HostedDropdown"] h3.t-title`).realHover();

        takeScreenshot(`dropdown-hover__5_4`);
    });
});

function takeScreenshot(title: string): void {
    cy.wait(WAIT_BEFORE_SCREENSHOT)
        // take screenshot of viewport for to see the entire dropdown in a screenshot
        .matchImageSnapshot(title, {capture: `viewport`});
}
