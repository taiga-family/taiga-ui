import {EDITOR_PAGE_URL, WAIT_BEFORE_SCREENSHOT} from '../../support/shared.entities';

describe(`Examples with preview images`, () => {
    beforeEach(() => cy.tuiVisit(EDITOR_PAGE_URL));

    it(`preview display of images`, () => {
        cy.get(`#preview-image`)
            .findByAutomationId(`tui-doc-example`)
            .tuiScrollIntoView()
            .as(`wrapper`);

        cy.get(`@wrapper`).click().wait(WAIT_BEFORE_SCREENSHOT);

        cy.matchImageSnapshot(`3-1-two-visible-image`, {capture: `viewport`});

        cy.get(`@wrapper`)
            .find(`tui-editor-socket`)
            .find(`img`)
            .filter(`[src="assets/images/big-wallpaper.jpg"]`)
            .filter(`:visible`)
            .click()
            .wait(WAIT_BEFORE_SCREENSHOT);

        cy.matchImageSnapshot(`3-1-preview-big-wallpaper`, {capture: `viewport`});

        closePreview();

        cy.get(`@wrapper`)
            .find(`tui-editor-socket`)
            .find(`img`)
            .filter(`[src="assets/images/lumberjack.png"]`)
            .filter(`:visible`)
            .click()
            .wait(WAIT_BEFORE_SCREENSHOT);

        cy.matchImageSnapshot(`3-1-preview-lumberjack`, {capture: `viewport`});

        closePreview();

        function closePreview(): void {
            cy.get(`tui-preview`).find(`button[icon=tuiIconCloseLarge]`).click();
        }
    });
});
