import {
    tuiGetDemoContent,
    tuiVisitEditorApiPage,
} from '@demo-integrations/support/editor/helpers';
import {HTML_BASE64_IMG} from '@demo-integrations/support/editor/html';
import {
    EDITOR_PAGE_URL,
    WAIT_BEFORE_SCREENSHOT,
} from '@demo-integrations/support/properties/shared.entities';

describe(`Examples images`, () => {
    it(`base64`, () => {
        tuiVisitEditorApiPage({content: HTML_BASE64_IMG, skipDecodingUrl: true});

        tuiGetDemoContent()
            .wait(WAIT_BEFORE_SCREENSHOT)
            .matchImageSnapshot(`2-1-support-base64-image`);
    });

    describe(`Preview`, () => {
        beforeEach(() => cy.viewport(1650, 900).tuiVisit(EDITOR_PAGE_URL));

        it(`preview display of images`, () => {
            cy.get(`#preview-image`).findByAutomationId(`tui-doc-example`).as(`wrapper`);

            cy.get(`@wrapper`).tuiScrollIntoView().click();

            cy.get(`@wrapper`)
                .find(`.tui-editor-socket`)
                .eq(1)
                .tuiScrollIntoView()
                .wait(WAIT_BEFORE_SCREENSHOT)
                .matchImageSnapshot(`3-1-two-visible-image`, {capture: `viewport`});

            cy.get(`@wrapper`)
                .find(`tui-editor-socket._preview-image`)
                .find(`img`)
                .filter(`[src="assets/images/big-wallpaper.jpg"]`)
                .filter(`:visible`)
                .click();

            cy.tuiHide(`tui-doc-page`);
            cy.wait(WAIT_BEFORE_SCREENSHOT).matchImageSnapshot(
                `3-2-preview-big-wallpaper`,
                {
                    capture: `viewport`,
                },
            );

            cy.tuiShow(`tui-doc-page`);
            closePreview();

            cy.get(`@wrapper`)
                .find(`tui-editor-socket._preview-image`)
                .find(`img`)
                .filter(`[src="assets/images/lumberjack.png"]`)
                .filter(`:visible`)
                .click();

            cy.tuiHide(`tui-doc-page`);
            cy.wait(WAIT_BEFORE_SCREENSHOT).matchImageSnapshot(`3-3-preview-lumberjack`, {
                capture: `viewport`,
            });

            cy.tuiShow(`tui-doc-page`);
            closePreview();
        });

        function closePreview(): void {
            cy.get(`tui-preview`).find(`button[icon=tuiIconCloseLarge]`).click();
        }
    });
});
