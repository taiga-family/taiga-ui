import {HTML_EDITOR_BASIC_EXAMPLE} from '@demo-integrations/support/editor/html';

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
    cy.viewport(1850, 1600).tuiVisit(
        `editor/setup/API?ngModel=${
            content ?? HTML_EDITOR_BASIC_EXAMPLE
        }&style.maxHeight.px=${maxHeight ?? 600}`,
        {
            skipExpectUrl: true,
            enableNightMode: enableNightMode ?? false,
            skipDecodingUrl: skipDecodingUrl ?? false,
        },
    );

    cy.tuiWaitBeforeAction();
}

export function tuiGetDemoContent(): Cypress.Chainable<JQuery> {
    return cy.get(`#demo-content`).tuiScrollIntoView();
}

export function tuiClearEditor(): void {
    tuiGetContentEditable().type(`{selectall}{backspace}`, {force: true});
}

export function tuiGetNgModelValue(): Cypress.Chainable<JQuery> {
    return cy.get(`.t-table`).find(`tr`).eq(2).find(`td`).eq(2).find(`input`);
}

export function tuiOpenAnchorDropdown({containHref}: {containHref: string}): void {
    tuiGetContentEditable().find(`a[href="${containHref}"]`).type(`{rightArrow}`);
}

export function tuiTrashValueByEditLink(): void {
    cy.get(`tui-edit-link button[icon=tuiIconUnlinkLarge]`)
        .tuiWaitBeforeScreenshot()
        .realHover()
        .realClick();
}

export function tuiFocusToStartInEditor(): void {
    cy.get(`.ProseMirror[contenteditable]`).type(`{moveToStart}`);

    tuiGetContentEditable()
        .focus()
        .then($el => {
            // native set cursor cater

            const el = $el.get(0);
            const range = window.document.createRange();

            range?.setStart(el, 0);
            range?.setEnd(el, 0);

            const selection = window.getSelection();

            selection?.removeAllRanges();
            selection?.addRange(range);
        })
        .tuiWaitBeforeScreenshot();
}

export function tuiClearHint(): void {
    cy.get(`body`).click();
}

export function tuiInsertLink(): void {
    tuiGetDemoContent()
        .find(`tui-toolbar button[icon=tuiIconLinkLarge]`)
        .click()
        .tuiWaitBeforeScreenshot();

    cy.get(`body`).then($body => {
        if ($body.find(`tui-edit-link`).length === 0) {
            tuiInsertLink();
        }
    });
}

export function tuiGetEditLinkInput(): Cypress.Chainable<JQuery> {
    return cy.get(`tui-edit-link`).find(`input[type=text]`);
}

export function tuiGetScreenshotArea(): Cypress.Chainable<unknown> {
    return tuiGetDemoContent().find(`tui-editor`).tuiWaitBeforeScreenshot();
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

export function tuiGetTipTapContentSelector(): string {
    return `.ProseMirror[contenteditable]`;
}

export function tuiGetContentEditable(): Cypress.Chainable<JQuery> {
    return tuiGetDemoContent().find(tuiGetTipTapContentSelector());
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
