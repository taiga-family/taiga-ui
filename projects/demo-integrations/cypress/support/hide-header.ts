export const tuiHideHeader = (): void => {
    cy.get(`body`, {log: false}).then($body => {
        if ($body.find(`[tuidocheader]`).length > 0) {
            cy.get(`[tuidocheader]`, {log: false}).invoke(
                `attr`,
                `style`,
                `position: absolute !important`,
            );
        }
    });
};
