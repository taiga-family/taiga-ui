import {WAIT_BEFORE_SCREENSHOT} from '../../../support/properties/shared.entities';

describe(`TuiHint`, () => {
    beforeEach(() => cy.viewport(720, 700));

    it(`TuiHint works`, () => {
        cy.tuiVisit(`/directives/hint`);

        cy.get(`tui-hint-example-1 tui-avatar`)
            .first()
            .trigger(`mouseenter`)
            .wait(WAIT_BEFORE_SCREENSHOT)
            .get(`tui-hint-example-1`)
            .first()
            .wait(WAIT_BEFORE_SCREENSHOT)
            .matchImageSnapshot(`hint`);
    });

    it(`Manual hint works`, () => {
        cy.tuiVisit(`/directives/manual-hint/API?tuiMode=null&tuiManualHintShow=true`);

        cy.get(`tui-hint-box`)
            .first()
            .wait(WAIT_BEFORE_SCREENSHOT)
            .matchImageSnapshot(`manual-hint`);
    });

    it(`Tooltip horizontal direction`, () => {
        cy.tuiVisit(`/components/tooltip`);
        cy.get(`tui-doc-example`)
            .first()
            .trigger(`mouseenter`, {x: 35, y: 200})
            .wait(WAIT_BEFORE_SCREENSHOT)
            .matchImageSnapshot(`tooltip-left`);
    });

    it(`Tooltip vertical direction`, () => {
        cy.tuiVisit(`/components/tooltip`);
        cy.get(`tui-doc-example`)
            .first()
            .trigger(`mouseenter`, {x: 35, y: 270})
            .wait(WAIT_BEFORE_SCREENSHOT)
            .matchImageSnapshot(`tooltip-bottom`);
    });
});
