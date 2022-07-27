export const tuiHideVersionManager = (): void => {
    cy.get(`version-manager`).invoke(`attr`, `style`, `visibility: hidden`);
};
