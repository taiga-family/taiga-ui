export const tuiHideHeader = (): void => {
    cy.get(`[tuidocheader]`).invoke(`attr`, `style`, `position: absolute !important`);
};
