import {WAIT_BEFORE_SCREENSHOT} from '../../tests/addon-editor/utils';
import {DEFAULT_TIMEOUT_BEFORE_ACTION} from '../shared.entities';

export function initBaseWrapper(): void {
    cy.get('#basic').findByAutomationId('tui-doc-example').as('wrapper');
    cy.get('@wrapper').tuiScrollIntoView();
}

export function openAnchorDropdown({containHref}: {containHref: string}): void {
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

export function trashValueByEditLink(): void {
    cy.get('button[icon=tuiIconTrashLarge]').click({force: true});
}

export function focusToStartInEditor(): void {
    getContentEditable().type('{moveToStart}').click({force: true});
}

export function insertLink(): void {
    cy.get('@wrapper').find('button[icon=tuiIconLinkLarge]').click({force: true});
}

export function getEditLinkInput(): Cypress.Chainable<JQuery> {
    return cy.get('tui-edit-link').find('input');
}

export function getScreenshotArea(): Cypress.Chainable<JQuery> {
    return cy.get('@wrapper').wait(WAIT_BEFORE_SCREENSHOT);
}

export function getContentEditable(): Cypress.Chainable<JQuery> {
    return cy.get('@wrapper').find('[contenteditable]');
}

export function selectTag(selector: Cypress.Chainable<JQuery>): void {
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

export function getEditorScrollbarArea(): Cypress.Chainable<JQuery> {
    return cy.get('@wrapper').find('tui-editor tui-scrollbar').eq(0);
}
