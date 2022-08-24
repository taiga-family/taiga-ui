export const tuiHideVersionManager = (): void => {
    cy.get(`body`, {log: false}).then($body => {
        if ($body.find(`version-manager`).length > 0) {
            cy.get(`version-manager`, {log: false}).invoke(
                `attr`,
                `style`,
                `visibility: hidden`,
            );
        }
    });
};
