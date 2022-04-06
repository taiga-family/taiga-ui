export const tuiHideNavigation = () => {
    cy.get('.tui-doc-navigation').invoke('attr', 'style', 'visibility: hidden');
};
