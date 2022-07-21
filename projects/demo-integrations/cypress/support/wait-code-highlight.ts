export function tuiWaitCodeHighlight(selector = 'code'): void {
    cy.get(selector).should('has.class', 'hljs');
}
