import {
    focusToStartInEditor,
    getContentEditable,
    getEditLinkInput,
    getScreenshotArea,
    initBaseWrapper,
    insertLink,
    openAnchorDropdown,
    selectTag,
    trashValueByEditLink,
} from '../../support/editor/helpers';
import {EDITOR_PAGE_URL} from '../../support/shared.entities';

describe('Editing links in Editor', () => {
    beforeEach(() => {
        cy.viewport(1600, 900);
        cy.tuiVisit(EDITOR_PAGE_URL);
    });

    beforeEach(() => {
        initBaseWrapper();
        focusToStartInEditor();
    });

    it('check if at least one link exists', () => {
        getContentEditable()
            .find('a')
            .first()
            .contains('adipiscing elit')
            .should('have.attr', 'href')
            .and('include', 'http://taiga-ui.dev');

        getScreenshotArea().matchImageSnapshot('1-exist-link');
    });

    it('switch links between', () => {
        selectTag(getContentEditable().find('strong'));
        insertLink();
        getEditLinkInput().type('wysiwyg.com');
        getEditLinkInput().type('{enter}');
        getScreenshotArea().matchImageSnapshot('2-1-added-new-link');
        openAnchorDropdown({containHref: 'http://wysiwyg.com'});
        getScreenshotArea().matchImageSnapshot('2-2-focused-new-link');

        selectTag(getContentEditable().find('sup'));
        insertLink();
        getEditLinkInput().type('example.com');
        getEditLinkInput().type('{enter}');
        getScreenshotArea().matchImageSnapshot('2-3-added-new-link-2');
        openAnchorDropdown({containHref: 'http://example.com'});
        getScreenshotArea().matchImageSnapshot('2-4-focused-new-link-2');

        openAnchorDropdown({containHref: 'http://wysiwyg.com'});
        getScreenshotArea().matchImageSnapshot('2-5-correct-refresh-content-in-dropdown');
    });

    it('deleting links', () => {
        selectTag(getContentEditable().find('strong'));
        insertLink();
        getEditLinkInput().type('wysiwyg.com');
        getEditLinkInput().type('{enter}');

        openAnchorDropdown({containHref: 'http://wysiwyg.com'});
        getScreenshotArea().matchImageSnapshot('3-1-before-remove-link');

        trashValueByEditLink();
        getScreenshotArea().matchImageSnapshot('3-2-after-remove-link');
    });
});
