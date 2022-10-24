import {
    DEFAULT_TIMEOUT_BEFORE_ACTION,
    EDITOR_PAGE_URL,
    PROSE_MIRROR_EDITOR_SELECTOR,
    WAIT_BEFORE_SCREENSHOT,
} from '../shared.entities';
import {HTML_EDITOR_BASIC_EXAMPLE} from './html';

export function tuiVisitEditorApiPage({
    content,
    maxHeight,
    enableNightMode,
    skipDecodingUrl,
}: Partial<{
    content: string;
    maxHeight: number;
    enableNightMode: boolean;
    skipDecodingUrl: boolean;
}> = {}): void {
    cy.viewport(1650, 900).tuiVisit(
        `${EDITOR_PAGE_URL}/API?ngModel=${
            content ?? HTML_EDITOR_BASIC_EXAMPLE
        }&style.max-height.px=${maxHeight ?? 300}`,
        {
            skipExpectUrl: true,
            enableNightMode: enableNightMode ?? false,
            skipDecodingUrl: skipDecodingUrl ?? false,
        },
    );

    cy.wait(DEFAULT_TIMEOUT_BEFORE_ACTION);
}

export function tuiGetDemoContent(): Cypress.Chainable<JQuery> {
    return cy.get(`#demoContent`).tuiScrollIntoView();
}

export function tuiClearEditor(): void {
    tuiGetContentEditable().type(`{selectall}{backspace}`);
}

export function tuiGetNgModelValue(): Cypress.Chainable<JQuery> {
    return cy.get(`.t-table`).find(`tr`).eq(2).find(`td`).eq(2).find(`input`);
}

export function tuiOpenAnchorDropdown({containHref}: {containHref: string}): void {
    tuiGetContentEditable()
        .find(`a[href="${containHref}"]`)
        .type(`{leftArrow}`)
        .wait(DEFAULT_TIMEOUT_BEFORE_ACTION);
}

export function tuiTrashValueByEditLink(): void {
    cy.get(`button[icon=tuiIconTrashLarge]`)
        .click({force: true})
        .wait(WAIT_BEFORE_SCREENSHOT);
}

export function tuiFocusToStartInEditor(): void {
    tuiGetContentEditable().type(`{moveToStart}`).click().wait(WAIT_BEFORE_SCREENSHOT);
}

export function tuiInsertLink(): void {
    tuiGetDemoContent()
        .find(`tui-toolbar button[icon=tuiIconLinkLarge]`)
        .click()
        .wait(WAIT_BEFORE_SCREENSHOT);

    cy.get(`body`).then($body => {
        if ($body.find(`tui-edit-link`).length === 0) {
            tuiInsertLink();
        }
    });
}

export function tuiGetEditLinkInput(): Cypress.Chainable<JQuery> {
    return cy.get(`tui-edit-link`).find(`input`);
}

export function tuiGetScreenshotArea(): Cypress.Chainable<JQuery> {
    return tuiGetDemoContent().find(`tui-editor`).wait(WAIT_BEFORE_SCREENSHOT);
}

export function tuiOpenFontTool(): Cypress.Chainable<JQuery> {
    tuiGetDemoContent().find(`button[icon="tuiIconFontLarge"]`).as(`iconFontLargeTool`);

    cy.get(`body`).then($body => {
        if ($body.find(`tui-data-list[role="listbox"]`).length === 0) {
            cy.get(`@iconFontLargeTool`).click();
        }
    });

    return cy.get(`tui-data-list[role="listbox"]`);
}

export function tuiGetContentEditable(): Cypress.Chainable<JQuery> {
    return tuiGetDemoContent().find(PROSE_MIRROR_EDITOR_SELECTOR);
}

export function tuiSelectTag(selector: Cypress.Chainable<JQuery>): void {
    selector
        .should(`be.visible`)
        .click({force: true})
        .trigger(`mousedown`, {force: true})
        .then($el => {
            const el = $el[0];
            const document = el.ownerDocument;
            const range = document?.createRange();

            range?.selectNodeContents(el);
            document?.getSelection()?.removeAllRanges();
            document?.getSelection()?.addRange(range);
        })
        .trigger(`mouseup`, {force: true});

    cy.document().trigger(`selectionchange`, {force: true});
}

export function tuiGetEditorScrollbarArea(): Cypress.Chainable<JQuery> {
    return tuiGetDemoContent().find(`tui-editor tui-scrollbar`).eq(0);
}
