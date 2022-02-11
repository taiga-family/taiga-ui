export const hideNavigation = () => {
    cy.get('.tui-doc-navigation').invoke('attr', 'style', 'visibility: hidden');
};
