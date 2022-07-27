import {
    tuiFocusToStartInEditor,
    tuiGetContentEditable,
    tuiGetEditLinkInput,
    tuiGetScreenshotArea,
    tuiInitBaseWrapper,
    tuiInsertLink,
    tuiOpenAnchorDropdown,
    tuiSelectTag,
    tuiTrashValueByEditLink,
} from '../../support/editor/helpers';
import {EDITOR_PAGE_URL} from '../../support/shared.entities';

describe(`Editing links in Editor`, () => {
    beforeEach(() => {
        cy.viewport(1600, 900);
        cy.tuiVisit(EDITOR_PAGE_URL);
    });

    beforeEach(() => {
        tuiInitBaseWrapper();
        tuiFocusToStartInEditor();
    });

    it(`check if at least one link exists`, () => {
        tuiGetContentEditable()
            .find(`a`)
            .first()
            .contains(`adipiscing elit`)
            .should(`have.attr`, `href`)
            .and(`include`, `http://taiga-ui.dev`);

        tuiGetScreenshotArea().matchImageSnapshot(`1-exist-link`);
    });

    it(`switch links between`, () => {
        tuiSelectTag(tuiGetContentEditable().find(`strong`));
        tuiInsertLink();
        tuiGetEditLinkInput().type(`wysiwyg.com`);
        tuiGetEditLinkInput().type(`{enter}`);
        tuiGetScreenshotArea().matchImageSnapshot(`2-1-added-new-link`);
        tuiOpenAnchorDropdown({containHref: `http://wysiwyg.com`});
        tuiGetScreenshotArea().matchImageSnapshot(`2-2-focused-new-link`);

        tuiSelectTag(tuiGetContentEditable().find(`sup`));
        tuiInsertLink();
        tuiGetEditLinkInput().type(`example.com`);
        tuiGetEditLinkInput().type(`{enter}`);
        tuiGetScreenshotArea().matchImageSnapshot(`2-3-added-new-link-2`);
        tuiOpenAnchorDropdown({containHref: `http://example.com`});
        tuiGetScreenshotArea().matchImageSnapshot(`2-4-focused-new-link-2`);

        tuiOpenAnchorDropdown({containHref: `http://wysiwyg.com`});
        tuiGetScreenshotArea().matchImageSnapshot(
            `2-5-correct-refresh-content-in-dropdown`,
        );
    });

    it(`deleting links`, () => {
        tuiSelectTag(tuiGetContentEditable().find(`strong`));
        tuiInsertLink();
        tuiGetEditLinkInput().type(`wysiwyg.com`);
        tuiGetEditLinkInput().type(`{enter}`);

        tuiOpenAnchorDropdown({containHref: `http://wysiwyg.com`});
        tuiGetScreenshotArea().matchImageSnapshot(`3-1-before-remove-link`);

        tuiTrashValueByEditLink();
        tuiGetScreenshotArea().matchImageSnapshot(`3-2-after-remove-link`);
    });
});
