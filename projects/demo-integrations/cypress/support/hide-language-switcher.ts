export const tuiHideLanguageSwitcher = (): void => {
    cy.get(`body`, {log: false}).then($body => {
        if ($body.find(`tui-language-switcher`).length > 0) {
            cy.get(`tui-language-switcher`, {log: false}).invoke(
                `attr`,
                `style`,
                `visibility: hidden`,
            );
        }
    });
};
