import {
    DEFAULT_TIMEOUT_AFTER_PAGE_REDIRECTION,
    EDITOR_PAGE_URL,
} from '../../support/shared.entities';
import {WAIT_BEFORE_SCREENSHOT} from './utils';
import Chainable = Cypress.Chainable;

describe('Editing links in Editor', () => {
    beforeEach(() => {
        cy.goToDemoPage(EDITOR_PAGE_URL, {hideCursor: false});
        cy.hideHeader();
    });

    beforeEach(() => {
        cy.wait(DEFAULT_TIMEOUT_AFTER_PAGE_REDIRECTION);
        cy.get('#basic').findByAutomationId('tui-doc-example').as('wrapper');
        cy.get('@wrapper').scrollIntoView().should('be.visible');

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

    it('dropdown should open correctly', () => {
        openAnchorDropdown({containHref: 'http://taiga-ui.dev'});
        getScreenshotArea().matchImageSnapshot('2-opened-dropdown');

        focusToStartInEditor();
        getScreenshotArea().matchImageSnapshot('3-loose-focus');
    });

    it('deleting a link', () => {
        openAnchorDropdown({containHref: 'http://taiga-ui.dev'});
        trashValueByEditLink();
        getScreenshotArea().matchImageSnapshot('4-remove-link');
    });

    it('edit a link', () => {
        openAnchorDropdown({containHref: 'http://taiga-ui.dev'});
        getScreenshotArea().matchImageSnapshot('5-0-edit-link');

        startEditValueInEditLink();
        getScreenshotArea().matchImageSnapshot('5-1-edit-link');

        clearValueInEditLink();
        getScreenshotArea().matchImageSnapshot('5-2-edit-link');

        getEditLinkInput().type('example.com');
        getScreenshotArea().matchImageSnapshot('5-3-edit-link');

        saveValueInEditLink();
        focusToStartInEditor();
        getScreenshotArea().matchImageSnapshot('5-4-edit-link');

        openAnchorDropdown({containHref: 'http://example.com'});
        getScreenshotArea().matchImageSnapshot('5-5-edit-link');
    });

    it('switch links between', () => {
        selectTag(getContentEditable().find('strong'));
        getScreenshotArea().matchImageSnapshot('6-1-select-before-insert-anchor');

        insertLink();
        getEditLinkInput().type('wysiwyg.com');
        getScreenshotArea().matchImageSnapshot('6-2-opened-link-area');

        getEditLinkInput().type('{enter}');
        getScreenshotArea().matchImageSnapshot('6-3-new-link');

        openAnchorDropdown({containHref: 'http://wysiwyg.com'});
        getScreenshotArea().matchImageSnapshot('6-4-wysiwyg-edit-link');

        openAnchorDropdown({containHref: 'http://taiga-ui.dev'});
        getScreenshotArea().matchImageSnapshot('6-5-taiga-ui-edit-link');
    });

    function openAnchorDropdown({containHref}: {containHref: string}) {
        getContentEditable().find(`a[href="${containHref}"]`).as('link');

        cy.get('@link').click();
        /**
         * Clicking anywhere on a contenteditable box
         * always places the caret at the end of the word.
         * bug: https://github.com/cypress-io/cypress/issues/5721
         */
        cy.get('@link').type('{leftArrow}');
    }

    function focusToStartInEditor() {
        getContentEditable().type('{moveToStart}').click();
    }

    function startEditValueInEditLink() {
        cy.get('button[icon=tuiIconEditLarge]').click().wait(200);
    }

    function trashValueByEditLink() {
        cy.get('button[icon=tuiIconTrashLarge]').click().wait(200);
    }

    function clearValueInEditLink() {
        cy.get('.t-cleaner').click();
    }

    function saveValueInEditLink() {
        cy.get('button[icon=tuiIconCheckCircleLarge]').click();
    }

    function insertLink() {
        cy.get('@wrapper').find('button[icon=tuiIconLinkLarge]').click();
    }

    function getEditLinkInput() {
        return cy.get('tui-edit-link').find('input');
    }

    function getScreenshotArea() {
        return cy.get('@wrapper').wait(WAIT_BEFORE_SCREENSHOT);
    }

    function getContentEditable() {
        return cy.get('@wrapper').find('[contenteditable]');
    }

    function selectTag(selector: Chainable<JQuery>) {
        selector
            .should('be.visible')
            .click({force: true})
            .trigger('mousedown', {force: true})
            .then($el => {
                const el = $el[0];
                const document = el.ownerDocument;
                const range = document?.createRange();

                range?.selectNodeContents(el);
                document?.getSelection()?.removeAllRanges();
                document?.getSelection()?.addRange(range!);
            })
            .trigger('mouseup', {force: true});

        cy.document().trigger('selectionchange', {force: true});
    }
});
