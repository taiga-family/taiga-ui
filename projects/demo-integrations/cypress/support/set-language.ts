export function tuiSetLanguage(language: string): void {
    cy.get(`tui-language-switcher`, {log: false}).click({log: false});
    cy.get(`tui-dropdown-box [tuiOption]`, {log: false})
        .contains(language, {matchCase: false, log: false})
        .click({force: true, log: false});
}
