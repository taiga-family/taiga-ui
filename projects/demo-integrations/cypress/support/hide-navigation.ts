export const tuiHideNavigation = (): void => {
    cy.get(`.tui-doc-navigation`).invoke(`attr`, `style`, `visibility: hidden`);
};
