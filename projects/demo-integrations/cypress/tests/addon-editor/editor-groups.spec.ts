import {EDITOR_PAGE_URL, WAIT_BEFORE_SCREENSHOT} from '../../support/shared.entities';

describe(`Examples with groups in editor`, () => {
    beforeEach(() => cy.tuiVisit(EDITOR_PAGE_URL));

    it(`Simple nested group`, () => {
        cy.get(`#nested-groups`)
            .findByAutomationId(`tui-doc-example`)
            .tuiScrollIntoView()
            .as(`wrapper`);

        cy.get(`@wrapper`)
            .wait(WAIT_BEFORE_SCREENSHOT)
            .matchImageSnapshot(`1-1-nested-groups`);
    });

    it(`Draggable groups`, () => {
        cy.get(`#draggable-groups`)
            .findByAutomationId(`tui-doc-example`)
            .tuiScrollIntoView()
            .as(`wrapper`);

        cy.get(`@wrapper`)
            .wait(WAIT_BEFORE_SCREENSHOT)
            .matchImageSnapshot(`2-1-draggable-groups`);

        cy.get(`@wrapper`).find(`button[icon=tuiIconPlusLarge]`).click({force: true});

        cy.get(`@wrapper`)
            .wait(WAIT_BEFORE_SCREENSHOT)
            .matchImageSnapshot(`2-2-draggable-groups`);

        cy.document().then(doc => cy.wrap(doc.activeElement).type(`123`));

        cy.get(`@wrapper`)
            .wait(WAIT_BEFORE_SCREENSHOT)
            .matchImageSnapshot(`2-3-draggable-groups`);
    });
});
