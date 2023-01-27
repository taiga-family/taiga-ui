export function tuiWaitCodeHighlight(selector = `code`): void {
    cy.get(selector)
        .should(`has.class`, `hljs`)
        .find(`.hljs-ln-numbers`)
        .should(`exist`)
        .tuiWaitBeforeAction();
}
