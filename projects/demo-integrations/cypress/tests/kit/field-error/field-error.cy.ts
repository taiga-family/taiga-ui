import {EXAMPLE_ID} from '../../../support/properties/shared.entities';

describe(`TuiFieldError`, () => {
    it(`Errors of invalid control are shown correctly`, () => {
        cy.tuiVisit(`/components/field-error`);

        cy.get(`tui-field-error-example-1 input`)
            .first()
            .focus()
            .wait(50)
            .blur()
            .getByAutomationId(EXAMPLE_ID)
            .first()
            .wait(300)
            .matchImageSnapshot(`shows-error-under-field`);
    });
});
