export const tuiHideDocPage = (): void => {
    cy.get(`tui-doc-page`).invoke(`attr`, `style`, `opacity: 0`);
};

export const tuiShowDocPage = (): void => {
    cy.get(`tui-doc-page`).invoke(`attr`, `style`, `opacity: 1`);
};
