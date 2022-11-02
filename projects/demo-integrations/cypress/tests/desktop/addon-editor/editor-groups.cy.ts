import {
    EDITOR_PAGE_URL,
    PROSE_MIRROR_EDITOR_SELECTOR,
    WAIT_BEFORE_SCREENSHOT,
} from '@demo-integrations/support/shared.entities';

describe(`Examples with groups in editor`, () => {
    beforeEach(() => cy.tuiVisit(EDITOR_PAGE_URL));

    it(`Simple nested group`, () => {
        makeWrapper(`#nested-groups`);

        cy.get(`@wrapper`).should(`be.visible`).click(); // clear hints

        cy.get(`@editor`)
            .wait(WAIT_BEFORE_SCREENSHOT)
            .matchImageSnapshot(`1-1-nested-groups`);
    });

    it(`Draggable groups`, () => {
        makeWrapper(`#draggable-groups`);

        cy.get(`@editor`)
            .wait(WAIT_BEFORE_SCREENSHOT)
            .matchImageSnapshot(`2-1-draggable-groups`);

        cy.get(`@wrapper`).find(`button[icon=tuiIconPlusLarge]`).click();
        cy.get(`@wrapper`).should(`be.visible`).click(); // clear hints

        cy.get(`@editor`)
            .wait(WAIT_BEFORE_SCREENSHOT)
            .matchImageSnapshot(`2-2-draggable-groups`);

        cy.get(`@editor`).should(`be.visible`).type(`{selectall}{backspace}`);
        cy.get(`@wrapper`).find(`button[icon=tuiIconPlusLarge]`).click();
        cy.document().then(doc => cy.wrap(doc.activeElement).type(`123`));

        cy.get(`@wrapper`).find(`button[icon=tuiIconPlusLarge]`).click();
        cy.document().then(doc => cy.wrap(doc.activeElement).type(`456`));

        cy.get(`@wrapper`).should(`be.visible`).click(); // clear hints

        cy.get(`@editor`)
            .wait(WAIT_BEFORE_SCREENSHOT)
            .matchImageSnapshot(`2-3-draggable-groups`);
    });

    function makeWrapper(exampleId: string): void {
        cy.get(exampleId)
            .findByAutomationId(`tui-doc-example`)
            .tuiScrollIntoView()
            .as(`wrapper`);
        cy.get(`@wrapper`).find(PROSE_MIRROR_EDITOR_SELECTOR).as(`editor`);
    }
});
