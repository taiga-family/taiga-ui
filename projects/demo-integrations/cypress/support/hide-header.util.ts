export const hideHeader = () => {
    cy.get('[tuidocheader]').invoke('attr', 'style', 'position: absolute !important');
};
