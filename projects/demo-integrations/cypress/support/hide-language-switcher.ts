export const tuiHideLanguageSwitcher = (): void => {
    cy.get(`tui-language-switcher`).invoke(`attr`, `style`, `visibility: hidden`);
};
