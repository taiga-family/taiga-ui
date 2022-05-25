import {
    DEFAULT_TIMEOUT_BEFORE_ACTION,
    EDITOR_PAGE_URL,
} from '../../support/shared.entities';
import {WAIT_BEFORE_SCREENSHOT} from './utils';

describe('Editing links in Editor', () => {
    beforeEach(() => cy.tuiVisit(EDITOR_PAGE_URL));

    beforeEach(() => {
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

    function openAnchorDropdown({containHref}: {containHref: string}): void {
        /**
         * Clicking anywhere on a contenteditable box
         * always places the caret at the end of the word.
         * bug: https://github.com/cypress-io/cypress/issues/5721
         */
        getContentEditable()
            .find(`a[href="${containHref}"]`)
            .click()
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION);
    }

    function trashValueByEditLink(): void {
        cy.get('button[icon=tuiIconTrashLarge]').click({force: true});
    }

    function focusToStartInEditor(): void {
        getContentEditable().type('{moveToStart}').click({force: true});
    }

    function insertLink(): void {
        cy.get('@wrapper').find('button[icon=tuiIconLinkLarge]').click({force: true});
    }

    function getEditLinkInput(): Cypress.Chainable<JQuery> {
        return cy.get('tui-edit-link').find('input');
    }

    function getScreenshotArea(): Cypress.Chainable<JQuery> {
        return cy.get('@wrapper').wait(WAIT_BEFORE_SCREENSHOT);
    }

    function getContentEditable(): Cypress.Chainable<JQuery> {
        return cy.get('@wrapper').find('[contenteditable]').should('not.be.empty');
    }

    function selectTag(selector: Cypress.Chainable<JQuery>): void {
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
