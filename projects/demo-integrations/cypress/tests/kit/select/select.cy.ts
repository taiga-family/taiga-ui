import {
    DEFAULT_TIMEOUT_BEFORE_ACTION,
    SELECT_PAGE_URL,
} from '../../../support/properties/shared.entities';

describe(`Select`, () => {
    beforeEach(() => {
        cy.viewport(`macbook-13`);
        cy.tuiVisit(SELECT_PAGE_URL);
    });

    it(`opens dropdown by click on icon`, () => {
        cy.get(`#base tui-select`)
            .last()
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            .trigger(`click`, {x: 300, y: 30});

        cy.get(`#base`)
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            .matchImageSnapshot(`01-click-arrow`);
    });
});
