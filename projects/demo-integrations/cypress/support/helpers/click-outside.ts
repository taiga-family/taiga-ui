export function tuiClickOutside(): void {
    cy.get(`body`).click(0, 0);
}
