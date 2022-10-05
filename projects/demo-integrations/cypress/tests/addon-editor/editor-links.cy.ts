import {
    tuiClearEditor,
    tuiFocusToStartInEditor,
    tuiGetContentEditable,
    tuiGetEditLinkInput,
    tuiGetScreenshotArea,
    tuiInsertLink,
    tuiOpenAnchorDropdown,
    tuiSelectTag,
    tuiTrashValueByEditLink,
    tuiVisitEditorApiPage,
} from '../../support/editor/helpers';
import {WAIT_BEFORE_SCREENSHOT} from '../../support/shared.entities';

describe(`Editing links in Editor`, () => {
    beforeEach(() => {
        tuiVisitEditorApiPage();
        tuiFocusToStartInEditor();
    });

    it(`check if at least one link exists`, () => {
        tuiGetContentEditable()
            .find(`a`)
            .first()
            .contains(`adipiscing elit`)
            .should(`have.attr`, `href`)
            .and(`include`, `/taiga-ui.dev`);

        tuiFocusToStartInEditor(); // clear hints

        tuiGetScreenshotArea().matchImageSnapshot(`1-exist-link`);
    });

    it(`switch links between`, () => {
        tuiSelectTag(tuiGetContentEditable().find(`strong`));
        tuiInsertLink();
        tuiGetEditLinkInput().type(`wysiwyg.com`);
        tuiGetEditLinkInput().type(`{enter}`);

        tuiFocusToStartInEditor(); // clear hints

        tuiGetScreenshotArea().matchImageSnapshot(`2-1-added-new-link`);
        tuiOpenAnchorDropdown({containHref: `http://wysiwyg.com`});
        tuiGetScreenshotArea().matchImageSnapshot(`2-2-focused-new-link`);

        tuiSelectTag(tuiGetContentEditable().find(`sup`));
        tuiInsertLink();
        tuiGetEditLinkInput().type(`example.com`);
        tuiGetEditLinkInput().type(`{enter}`);

        tuiFocusToStartInEditor(); // clear hints

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

        tuiFocusToStartInEditor(); // clear hints

        tuiOpenAnchorDropdown({containHref: `http://wysiwyg.com`});
        tuiGetScreenshotArea().matchImageSnapshot(`3-1-before-remove-link`);

        tuiTrashValueByEditLink();
        tuiFocusToStartInEditor(); // clear hints

        tuiGetScreenshotArea().matchImageSnapshot(`3-2-after-remove-link`);
    });

    it(`single link`, () => {
        tuiClearEditor();
        tuiGetContentEditable().type(`link{selectAll}`);

        tuiInsertLink();
        tuiGetEditLinkInput().type(`link.com{enter}`);
        tuiFocusToStartInEditor(); // clear hints

        tuiGetContentEditable().type(`{moveToStart}`);
        tuiGetScreenshotArea().matchImageSnapshot(`startOffset-0`);

        tuiGetContentEditable().type(`{rightArrow}`).wait(WAIT_BEFORE_SCREENSHOT);
        tuiGetScreenshotArea().matchImageSnapshot(`startOffset-1`);

        tuiGetContentEditable().type(`{rightArrow}`).wait(WAIT_BEFORE_SCREENSHOT);
        tuiGetScreenshotArea().matchImageSnapshot(`startOffset-2`);

        tuiGetContentEditable().type(`{rightArrow}`).wait(WAIT_BEFORE_SCREENSHOT);
        tuiGetScreenshotArea().matchImageSnapshot(`startOffset-3`);

        tuiGetContentEditable().type(`{rightArrow}`).wait(WAIT_BEFORE_SCREENSHOT);
        tuiGetScreenshotArea().matchImageSnapshot(`startOffset-4`);

        tuiGetContentEditable().type(`{enter}{enter}`);
        tuiGetScreenshotArea().matchImageSnapshot(
            `break-line-should-not-overlap-by-link-modal`,
        );

        tuiGetContentEditable().type(`H`);
        tuiGetScreenshotArea().matchImageSnapshot(
            `word-should-not-overlap-by-link-modal`,
        );
    });
});
