export const tuiHideLanguageSwitcher = (): void => {
    cy.get(`body`).then($body => {
        if ($body.find(`tui-language-switcher`).length > 0) {
            cy.get(`tui-language-switcher`).invoke(`attr`, `style`, `visibility: hidden`);
        }
    });
};
