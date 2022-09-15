export function tuiSetLanguage(language: string): void {
    cy.get(`tui-language-switcher`, {log: false}).click();
    cy.get(`tui-dropdown [tuiOption]`).contains(language, {matchCase: false}).click();
}
