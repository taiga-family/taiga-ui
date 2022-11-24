import {
    EXAMPLE_ID,
    WAIT_BEFORE_SCREENSHOT,
} from '@demo-integrations/support/properties/shared.entities';

describe(`Icons`, () => {
    it(`display icons that are easily customizable`, () => {
        cy.tuiVisit(`icons/SVG_Tips`);

        cy.get(`#base`)
            .findByAutomationId(EXAMPLE_ID)
            .wait(WAIT_BEFORE_SCREENSHOT)
            .matchImageSnapshot(`customize-icons8`);
    });
});
