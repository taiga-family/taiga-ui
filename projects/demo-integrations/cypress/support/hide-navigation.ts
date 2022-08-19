export const tuiHideNavigation = (): void => {
    cy.get(`body`, {log: false}).then($body => {
        if ($body.find(`.tui-doc-navigation`).length > 0) {
            cy.get(`.tui-doc-navigation`, {log: false}).invoke(
                `attr`,
                `style`,
                `visibility: hidden`,
            );
        }
    });
};
