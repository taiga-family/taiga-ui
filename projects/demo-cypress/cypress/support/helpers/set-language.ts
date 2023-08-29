export function tuiSetLanguage(language: string): void {
    cy.get(`tui-language-switcher`, {log: false}).click({log: false});
    cy.get(`tui-dropdown [tuiOption]`, {log: false})
        .contains(language, {log: false, matchCase: false})
        .click({force: true, log: false});
}
