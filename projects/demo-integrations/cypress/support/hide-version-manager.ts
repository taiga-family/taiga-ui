export const tuiHideVersionManager = (): void => {
    cy.get(`body`).then($body => {
        if ($body.find(`version-manager`).length > 0) {
            cy.get(`version-manager`).invoke(`attr`, `style`, `visibility: hidden`);
        }
    });
};
