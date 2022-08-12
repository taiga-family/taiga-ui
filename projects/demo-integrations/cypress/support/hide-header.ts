export const tuiHideHeader = (): void => {
    cy.get(`body`).then($body => {
        if ($body.find(`[tuidocheader]`).length > 0) {
            cy.get(`[tuidocheader]`).invoke(
                `attr`,
                `style`,
                `position: absolute !important`,
            );
        }
    });
};
