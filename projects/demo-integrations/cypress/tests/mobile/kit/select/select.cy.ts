import {
    SELECT_PAGE_URL,
    WAIT_BEFORE_SCREENSHOT,
} from '@demo-integrations/support/shared.entities';

describe(`Select`, () => {
    beforeEach(() => {
        cy.tuiVisit(SELECT_PAGE_URL);
    });

    it(`native select value`, () => {
        cy.get(`#native-select select`).first().wait(WAIT_BEFORE_SCREENSHOT).select(1);

        cy.get(`#native-select`)
            .wait(WAIT_BEFORE_SCREENSHOT)
            .matchImageSnapshot(`native-select-value`);
    });
});
