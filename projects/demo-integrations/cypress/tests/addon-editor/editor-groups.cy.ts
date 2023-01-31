import {tuiGetTipTapContentSelector} from '@demo-integrations/support/editor/helpers';

describe(`Examples with groups in editor`, () => {
    it(`Simple nested group`, () => {
        cy.tuiVisit(`editor/groups`);
        makeWrapper(`#nested-groups`);

        cy.get(`@wrapper`).should(`be.visible`).click(); // clear hints

        cy.get(`@editor`)
            .tuiWaitBeforeScreenshot()
            .matchImageSnapshot(`1-1-nested-groups`);
    });

    it(`Draggable groups`, () => {
        cy.tuiVisit(`editor/groups`);
        makeWrapper(`#draggable-groups`);

        cy.get(`@editor`)
            .tuiWaitBeforeScreenshot()
            .matchImageSnapshot(`2-1-draggable-groups`);

        cy.get(`@wrapper`).find(`button[icon=tuiIconPlusLarge]`).click();
        cy.get(`@wrapper`).should(`be.visible`).click(); // clear hints

        cy.get(`@editor`)
            .tuiWaitBeforeScreenshot()
            .matchImageSnapshot(`2-2-draggable-groups`);

        cy.get(`@editor`).should(`be.visible`).type(`{selectall}{backspace}`);
        cy.get(`@wrapper`).find(`button[icon=tuiIconPlusLarge]`).click();
        cy.document().then(doc => cy.wrap(doc.activeElement, {log: false}).type(`123`));

        cy.get(`@wrapper`).find(`button[icon=tuiIconPlusLarge]`).click();
        cy.document().then(doc => cy.wrap(doc.activeElement, {log: false}).type(`456`));

        cy.get(`@wrapper`).should(`be.visible`).click(); // clear hints

        cy.get(`@editor`)
            .tuiWaitBeforeScreenshot()
            .matchImageSnapshot(`2-3-draggable-groups`);
    });

    function makeWrapper(exampleId: string): void {
        cy.get(exampleId)
            .findByAutomationId(`tui-doc-example`)
            .tuiScrollIntoView()
            .as(`wrapper`);
        cy.get(`@wrapper`).find(tuiGetTipTapContentSelector()).as(`editor`);
    }
});
