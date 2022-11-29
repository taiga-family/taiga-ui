import {
    SELECT_PAGE_URL,
    WAIT_BEFORE_SCREENSHOT,
} from '@demo-integrations/support/properties/shared.entities';

describe(`Select`, () => {
    beforeEach(() => {
        cy.viewport(`macbook-13`);
        cy.tuiVisit(SELECT_PAGE_URL);
    });

    it(`opens dropdown by click on icon`, () => {
        cy.get(`#base tui-select`)
            .last()
            .wait(WAIT_BEFORE_SCREENSHOT)
            .trigger(`click`, {x: 300, y: 30});

        cy.get(`#base`).wait(WAIT_BEFORE_SCREENSHOT).matchImageSnapshot(`01-click-arrow`);
    });
});
