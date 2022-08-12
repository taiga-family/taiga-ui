export const tuiHideNavigation = (): void => {
    cy.get(`body`).then($body => {
        if ($body.find(`.tui-doc-navigation`).length > 0) {
            cy.get(`.tui-doc-navigation`).invoke(`attr`, `style`, `visibility: hidden`);
        }
    });
};
