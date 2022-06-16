import {
    focusToStartInEditor,
    getContentEditable,
    getEditLinkInput,
    getEditorScrollbarArea,
    getScreenshotArea,
    initBaseWrapper,
    insertLink,
    openAnchorDropdown,
    selectTag,
} from '../../support/editor/helpers';
import {EDITOR_PAGE_URL} from '../../support/shared.entities';

describe('Editor and Dropdown', () => {
    beforeEach(() => {
        cy.viewport(1600, 900);
        cy.tuiVisit(EDITOR_PAGE_URL);
    });

    beforeEach(() => {
        initBaseWrapper();
        focusToStartInEditor();
    });

    it('should not overlap tools', () => {
        selectTag(getContentEditable().find('strong'));
        insertLink();
        getEditLinkInput().type('wysiwyg.com');
        getEditLinkInput().type('{enter}');
        openAnchorDropdown({containHref: 'http://wysiwyg.com'});
        getEditorScrollbarArea().scrollTo(0, 100);
        getScreenshotArea().matchImageSnapshot('1-1-added-new-link');
    });
});
