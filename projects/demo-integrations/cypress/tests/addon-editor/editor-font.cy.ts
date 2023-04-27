import {
    tuiClearEditor,
    tuiGetContentEditable,
    tuiGetScreenshotArea,
    tuiOpenFontTool,
    tuiVisitEditorApiPage,
} from '@demo-integrations/support/editor/helpers';

describe(`Editor API fonts`, () => {
    it(`previous text style should not be inherited`, () => {
        tuiVisitEditorApiPage();
        tuiClearEditor();

        // step 1
        tuiOpenFontTool()
            .findByAutomationId(`tui_font__title`)
            .tuiWaitBeforeScreenshot()
            .click({force: true});

        tuiGetContentEditable().type(`Hello world`).tuiWaitBeforeScreenshot();
        tuiGetScreenshotArea().matchImageSnapshot(`01-editor-font`);

        // step 2
        tuiGetContentEditable().type(`{selectall}`).tuiWaitBeforeScreenshot();
        tuiOpenFontTool()
            .findByAutomationId(`tui_font__normal`)
            .tuiWaitBeforeScreenshot()
            .click({force: true});

        tuiGetScreenshotArea().matchImageSnapshot(`02-editor-font`);

        // step 3
        tuiGetContentEditable().type(`{selectall}`).tuiWaitBeforeScreenshot();
        tuiOpenFontTool()
            .findByAutomationId(`tui_font__title`)
            .tuiWaitBeforeScreenshot()
            .click({force: true});

        tuiGetScreenshotArea().matchImageSnapshot(`03-editor-font`);
    });
});
