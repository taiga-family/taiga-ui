import {
    tuiFocusToStartInEditor,
    tuiGetContentEditable,
    tuiGetEditLinkInput,
    tuiGetEditorScrollbarArea,
    tuiGetScreenshotArea,
    tuiInitBaseWrapper,
    tuiInsertLink,
    tuiOpenAnchorDropdown,
    tuiSelectTag,
} from '../../support/editor/helpers';
import {EDITOR_PAGE_URL} from '../../support/shared.entities';

describe(`Editor and Dropdown`, () => {
    beforeEach(() => {
        cy.viewport(1600, 900);
        cy.tuiVisit(EDITOR_PAGE_URL);
    });

    beforeEach(() => {
        tuiInitBaseWrapper();
        tuiFocusToStartInEditor();
    });

    it(`should not overlap tools`, () => {
        tuiSelectTag(tuiGetContentEditable().find(`strong`));
        tuiInsertLink();
        tuiGetEditLinkInput().type(`wysiwyg.com`);
        tuiGetEditLinkInput().type(`{enter}`);
        tuiOpenAnchorDropdown({containHref: `http://wysiwyg.com`});
        tuiGetEditorScrollbarArea().scrollTo(0, 100);
        tuiGetScreenshotArea().matchImageSnapshot(`1-1-added-new-link`);
    });
});
