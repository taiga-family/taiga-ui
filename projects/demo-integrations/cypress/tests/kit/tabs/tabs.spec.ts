import {
    DEFAULT_TIMEOUT_BEFORE_ACTION,
    EXAMPLE_ID,
    WAIT_BEFORE_SCREENSHOT,
} from '../../../support/shared.entities';

describe(`Tabs`, () => {
    beforeEach(() => cy.viewport(1700, 900));

    describe(`Examples`, () => {
        beforeEach(() => cy.tuiVisit(`/navigation/tabs`));

        it(`no extra margin after the last tab`, () => {
            cy.get(`#complex`)
                .findByAutomationId(EXAMPLE_ID)
                .tuiScrollIntoView()
                .matchImageSnapshot(`01-[wide-screen]-[no-margin-last-tab]`);
        });

        it(`should correctly select tab if child element is also selected`, () => {
            cy.get(`#complex`)
                .findByAutomationId(EXAMPLE_ID)
                .tuiScrollIntoView()
                .as(`complex`);

            cy.get(`@complex`)
                .get(`button[type="button"]`)
                .contains(`Collaborators`)
                .click();

            cy.get(`@complex`)
                .wait(WAIT_BEFORE_SCREENSHOT)
                .matchImageSnapshot(`02-1-complex-select-collaborators`);

            cy.get(`tui-dropdown-box`)
                .get(`button[type="button"]`)
                .contains(`Neil Innes`)
                .click();

            cy.get(`@complex`)
                .wait(WAIT_BEFORE_SCREENSHOT)
                .matchImageSnapshot(`02-2-complex-select-collaborators`);
        });
    });

    describe(`API`, () => {
        for (const index of [-2, -1, 0, 1, 2, 3, 4, 5, 100, 1000]) {
            it(`clamp active activeItemIndex=${index}`, () => {
                cy.tuiVisit(`/navigation/tabs/API?tuiMode=null&activeItemIndex=${index}`);

                cy.get(`#demoContent`)
                    .tuiScrollIntoView()
                    .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
                    .matchImageSnapshot(`03-activeItemIndex-${index}`);
            });
        }
    });
});
