export const tuiHideHeader = () => {
    cy.get('[tuidocheader]').invoke('attr', 'style', 'position: absolute !important');
};
